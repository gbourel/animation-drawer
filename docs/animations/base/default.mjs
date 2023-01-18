function genericTouchHandler(f) {
  return function (e) {
    if (e.touches.length >= 1) {
      e.touches[0].timeStamp = e.timeStamp;
      if (f(e.touches[0])) {
        e.preventDefault();
        return false;
      }
    }
  };
}

export function loadImage(url) {
  let obj = {
    loaded: false,
    img: new Image(),
  };
  obj.img.onload = () => {
    obj.loaded = true;
  };
  obj.img.src = url;
  return obj;
}


function download_file(file_path, handler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", file_path);
  xhr.responseType = "arraybuffer";

  xhr.onload = function (oEvent) {
    let buffer = xhr.response;
    if (buffer) {
      handler(buffer);
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.bc_touch_down_state === undefined) {
    window.bc_touch_down_state = false;
    document.addEventListener(
      "touchstart",
      function (e) {
        window.bc_touch_down_state = true;
      },
      false,
    );
    document.addEventListener(
      "touchend",
      function (e) {
        window.bc_touch_down_state = false;
      },
      false,
    );

    document.addEventListener(
      "touchcancel",
      function (e) {
        window.bc_touch_down_state = false;
      },
      false,
    );
  }
});

window.TouchHandler = function (target, begin, move, end) {
  target.addEventListener("mousedown", mouse_down, false);

  function mouse_down(e) {
    window.addEventListener("mousemove", mouse_move, false);
    window.addEventListener("mouseup", mouse_up, false);

    let res = begin ? begin(e) : true;

    if (res && e.preventDefault) e.preventDefault();
    return res;
  }

  function mouse_move(e) {
    return move ? move(e) : true;
  }

  function mouse_up(e) {
    window.removeEventListener("mousemove", mouse_move, false);
    window.removeEventListener("mouseup", mouse_up, false);

    return end ? end(e) : true;
  }

  target.addEventListener("touchstart", touch_down, false);

  let identifier;

  function touch_down(e) {
    if (!identifier) {
      window.addEventListener("touchmove", touch_move, false);
      window.addEventListener("touchend", touch_end, false);
      window.addEventListener("touchcancel", touch_end, false);
      let touch = e.changedTouches[0];

      identifier = touch.identifier;
      touch.timeStamp = e.timeStamp;

      let res = begin ? begin(touch) : true;

      if (res && e.preventDefault) e.preventDefault();
      return res;
    }
    return false;
  }

  function touch_move(e) {
    if (!move) return true;

    for (let i = 0; i < e.changedTouches.length; i++) {
      let touch = e.changedTouches[i];

      if (touch.identifier == identifier) {
        touch.timeStamp = e.timeStamp;

        return move(touch);
      }
    }
  }

  function touch_end(e) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      let touch = e.changedTouches[i];

      if (touch.identifier == identifier) {
        touch.timeStamp = e.timeStamp;

        identifier = undefined;

        window.removeEventListener("touchmove", touch_move, false);
        window.removeEventListener("touchend", touch_end, false);
        window.removeEventListener("touchcancel", touch_end, false);
        return end ? end(touch) : true;
      }
    }

    return true;
  }
};

window.Dragger = function (target, callback) {
  target.onmousedown = mouse_down;
  target.addEventListener("touchstart", genericTouchHandler(mouse_down), false);

  let move_handler = genericTouchHandler(mouse_move);

  let prev_mouse_x, prev_mouse_y;

  function mouse_down(e) {
    prev_mouse_x = e.clientX;
    prev_mouse_y = e.clientY;

    window.addEventListener("mousemove", mouse_move, false);
    window.addEventListener("mouseup", mouse_up, false);

    window.addEventListener("touchmove", move_handler, false);
    window.addEventListener("touchend", mouse_up, false);
    window.addEventListener("touchcancel", mouse_up, false);

    if (e.preventDefault) e.preventDefault();

    return true;
  }

  function mouse_move(e) {
    callback(e.clientX - prev_mouse_x, e.clientY - prev_mouse_y);

    prev_mouse_x = e.clientX;
    prev_mouse_y = e.clientY;

    return true;
  }

  function mouse_up(e) {
    window.removeEventListener("mousemove", mouse_move, false);
    window.removeEventListener("mouseup", mouse_up, false);

    window.removeEventListener("touchmove", move_handler, false);
    window.removeEventListener("touchend", mouse_up, false);
    window.removeEventListener("touchcancel", mouse_up, false);
  }
};

window.SegmentedControl = function (container_div, callback, values) {
  let container = document.createElement("div");
  container.style.position = "relative";
  container.classList.add("segmented_control_container");
  container.classList.add("non_selectable");

  container.onclick = mouse_click;

  container_div.appendChild(container);

  let segments = [];
  let option = 0;
  let pad = 2.0;

  for (let i = 0; i < values.length; i++) {
    let el = document.createElement("div");
    el.style.top = pad + "px";
    el.classList.add("segmented_control_off");
    el.innerHTML = values[i];
    container.appendChild(el);
    segments.push(el);
  }

  segments[option].classList.remove("segmented_control_off");
  segments[option].classList.add("segmented_control_on");

  window.addEventListener("resize", layout, true);
  window.addEventListener("load", layout, true);

  layout();
  callback(option);

  this.set_selection = function (o) {
    if (option != o) {
      segments[option].classList.remove("segmented_control_on");
      segments[option].classList.add("segmented_control_off");
      option = o;

      segments[option].classList.remove("segmented_control_off");
      segments[option].classList.add("segmented_control_on");

      callback(option);
    }
  };

  function layout() {
    let width = container_div.getBoundingClientRect().width;
    let w = Math.floor((width - (values.length + 1) * pad) / values.length);

    container.style.width = (w + pad) * values.length + pad + "px";

    for (let i = 0; i < values.length; i++) {
      let el = segments[i];
      el.style.left = pad + (w + pad) * i + "px";
      el.style.width = w + "px";
    }
  }

  function mouse_click(e) {
    let rect = container.getBoundingClientRect();
    let o = e.clientX - rect.left;
    o = Math.min(
      Math.max(0, Math.floor((o * values.length) / rect.width)),
      values.length - 1,
    );

    if (o != option) {
      segments[option].classList.remove("segmented_control_on");
      segments[option].classList.add("segmented_control_off");
      option = o;

      segments[option].classList.remove("segmented_control_off");
      segments[option].classList.add("segmented_control_on");

      callback(option);
    }

    if (e.preventDefault) e.preventDefault();
    return true;
  }
};

window.Shader = function (
  gl,
  vert_src,
  frag_src,
  attributes_names,
  uniforms_names,
) {
  let vert = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vert, vert_src);
  gl.compileShader(vert);

  let frag = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(frag, frag_src);
  gl.compileShader(frag);

  let shader = gl.createProgram();
  gl.attachShader(shader, vert);
  gl.attachShader(shader, frag);
  gl.linkProgram(shader);

  this.shader = shader;

  this.attributes = {};
  this.uniforms = {};

  if (attributes_names) {
    for (let i = 0; i < attributes_names.length; i++)
      this.attributes[attributes_names[i]] = gl.getAttribLocation(
        shader,
        attributes_names[i],
      );
  }

  if (uniforms_names) {
    for (let i = 0; i < uniforms_names.length; i++)
      this.uniforms[uniforms_names[i]] = gl.getUniformLocation(
        shader,
        uniforms_names[i],
      );
  }
};

function ArcBall(matrix, callback) {
  this.x_offset = 0;
  this.y_offset = 0;
  this.matrix = matrix ? matrix.slice() : [1, 0, 0, 0, 1, 0, 0, 0, 1];
  this.callback = callback;
  this.last_timestamp = 0;
  this.last_velocity = 0;
}

ArcBall.prototype.set_viewport_size = function (width, height) {
  this.width = width;
  this.height = height;
};

ArcBall.prototype.set_viewport = function (x, y, width, height) {
  this.x_offset = x;
  this.y_offset = y;
  this.width = width;
  this.height = height;
};

ArcBall.prototype.start = function (x, y) {
  this.last_x = x;
  this.last_y = y;
  this.last_velocity = 0;

  if (this.last_request) {
    window.cancelAnimationFrame(this.last_request);
    this.last_request = 0;
  }
};

ArcBall.prototype.set_matrix = function (m) {
  this.matrix = m.slice();
  this.last_velocity = 0;

  if (this.last_request) {
    window.cancelAnimationFrame(this.last_request);
    this.last_request = 0;
  }
};

ArcBall.prototype.end = function (event_timestamp) {
  if (!this.callback) return;

  if (event_timestamp - this.last_timestamp > 40) return;

  if (this.last_velocity < 0.0001) return;

  let last_timestamp = 0;

  let self = this;
  let mat = this.matrix;
  let a = 0;

  function tick(timestamp) {
    if (self.last_velocity < 0.0001) return;

    if (last_timestamp) {
      let dt = timestamp - last_timestamp;

      while (dt-- > 0) {
        a += self.last_velocity;
        self.last_velocity *= 0.995;
      }
    }

    last_timestamp = timestamp;

    let rot = rot_aa_mat3(self.last_rotation_axis, a);

    self.matrix = mat3_mul(rot, mat);

    self.callback();

    self.last_request = window.requestAnimationFrame(tick);
  }

  this.last_request = window.requestAnimationFrame(tick);
};

ArcBall.prototype.vec = function (x, y) {
  let size = Math.min(this.width, this.height) * 0.5 * 1.3;
  let p = [
    (x - this.x_offset - this.width / 2) / size,
    (y - this.y_offset - this.height / 2) / size,
    0,
  ];
  p[0] = -p[0];
  p[1] = -p[1];

  let d = p[0] * p[0] + p[1] * p[1];
  if (d <= 0.5) {
    p[2] = Math.sqrt(1 - d);
  } else {
    p[2] = 1 / (2 * Math.sqrt(d));
  }

  return p;
};

ArcBall.prototype.update = function (x, y, timestamp) {
  if (x == this.last_x && y == this.last_y) return;

  let va = this.vec(this.last_x, this.last_y);
  let vb = this.vec(x, y);

  let angle = Math.acos(Math.min(1.0, vec_dot(vec_norm(va), vec_norm(vb))));

  angle = Math.max(angle, vec_len(vec_sub(vb, va)));

  let axis = vec_norm(vec_cross(va, vb));
  let axis_len = vec_len_sq(axis);
  let dt = timestamp - this.last_timestamp;

  if (
    !isNaN(angle) &&
    isFinite(angle) &&
    !isNaN(axis_len) &&
    isFinite(axis_len) &&
    dt != 0
  ) {
    this.matrix = mat3_mul(rot_aa_mat3(axis, angle), this.matrix);

    this.last_rotation_axis = vec_norm(vec_cross(va, vb));
    this.last_velocity = (0.8 * angle) / dt;
  }

  this.last_timestamp = timestamp;
  this.last_x = x;
  this.last_y = y;
};

function TwoAxis() {
  this.angles = [0, 0];
  this.last_timestamp = 0;
  this.last_velocity = 0;
}

TwoAxis.prototype.set_size = function (size) {
  this.scale = [-2 / size[0], 2 / size[1]];
};

TwoAxis.prototype.set_callback = function (callback) {
  this.callback = callback;
};

TwoAxis.prototype.set_horizontal_limits = function (limits) {
  this.horizontal_limits = limits;
};

TwoAxis.prototype.set_vertical_limits = function (limits) {
  this.vertical_limits = limits;
};

TwoAxis.prototype.start = function (x, y) {
  this.last_position = [x, y];
  this.last_velocity = 0;

  if (this.last_request) {
    window.cancelAnimationFrame(this.last_request);
    this.last_request = 0;
  }
};

TwoAxis.prototype.set_angles = function (angles, continue_velocity) {
  this.angles = angles.slice();
  if (this.vertical_limits)
    this.angles[1] = Math.max(
      this.vertical_limits[0],
      Math.min(this.angles[1], this.vertical_limits[1]),
    );

  if (this.horizontal_limits)
    this.angles[0] = Math.max(
      this.horizontal_limits[0],
      Math.min(this.angles[0], this.horizontal_limits[1]),
    );

  this.matrix = mat3_mul(
    rot_x_mat3(this.angles[1]),
    rot_z_mat3(this.angles[0]),
  );

  if (!continue_velocity) {
    this.last_velocity = 0;

    if (this.last_request) {
      window.cancelAnimationFrame(this.last_request);
      this.last_request = 0;
    }
  }
};

TwoAxis.prototype.end = function (event_timestamp) {
  if (!this.callback) return;

  if (event_timestamp - this.last_timestamp > 40) return;

  if (vec_len_sq(this.last_velocity) < 0.00000001) return;

  let last_timestamp = 0;

  let self = this;

  function tick(timestamp) {
    if (vec_len_sq(self.last_velocity) < 0.00000001) return;

    if (last_timestamp) {
      let dt = timestamp - last_timestamp;

      while (dt-- > 0) {
        self.set_angles(vec_add(self.angles, self.last_velocity), true);
        self.last_velocity = vec_scale(self.last_velocity, 0.995);
      }
    }

    last_timestamp = timestamp;

    self.callback();

    self.last_request = window.requestAnimationFrame(tick);
  }

  this.last_request = window.requestAnimationFrame(tick);
};

TwoAxis.prototype.update = function (x, y, timestamp) {
  if (x == this.last_position[0] && y == this.last_position[1]) return;

  let position = [x, y];

  let delta = vec_mul(vec_sub(position, this.last_position), this.scale);

  this.set_angles(vec_add(this.angles, delta));

  let dt = timestamp - this.last_timestamp;

  if (dt != 0) {
    this.last_velocity = vec_scale(delta, 1 / dt);
  }

  this.last_timestamp = timestamp;
  this.last_position = position;
};

export function draw_camera_axes(ctx, l, rot) {
  ctx.save();

  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  let points = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  points = points.map((p) => mat3_mul_vec(rot, p));
  points = points.map((p) => vec_scale(p, l));

  points[0].push("#EC5151");
  points[1].push("#55C432");
  points[2].push("#418DE2");

  points.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.strokeStyle = points[i][3];
    ctx.lineTo(0, 0);
    ctx.lineTo(points[i][0], -points[i][1]);
    ctx.stroke();
  }

  ctx.restore();
}

