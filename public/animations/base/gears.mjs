import {
  vec_norm,
  vec_scale,
  vec_add,
  vec_len,
  involute_points,
} from "./matrix.mjs";

const action_angle = 20;
const fill0 = "#FCD561";
const fill1 = "#78AD6C";
const fill2 = "#5EAAD4";
const fill3 = "#D45E5E";
const stroke0 = "#555";

/**
 * Dessine une roue dentée.
 * @param {Object} ctx - Context canvas 2D
 * @param {float} r - Rayon
 * @param {float} n - Nombre de dents
 * @param {color} fill - Couleur de remplissage
 */
export function draw_gear(
  ctx,
  r,
  n,
  fill,
  n_stop,
  invp,
  flip_notch,
  skip_notch,
  high,
) {
  ctx.save();

  ctx.lineJoin = "round";
  ctx.strokeStyle = stroke0;
  ctx.fillStyle = fill;

  if (n_stop === undefined) n_stop = n;

  if (invp === undefined) invp = 6;

  let angle = (action_angle * Math.PI) / 180;
  let d = 2 * r;
  let P = n / d;
  let a = 1 / P;
  let b = 1.25 / P;
  let p = Math.PI / P;
  let rb = r * Math.cos(angle);

  let r_add = r + a;
  let r_ded = r - b;

  let inv_limit = Math.sqrt(r_add * r_add - rb * rb) / rb;

  let pitch_point_to_base = Math.sin(angle) * r;
  let base_angle = pitch_point_to_base / rb + (Math.PI * 0.5) / n - angle;
  // let base_angle = Math.PI*0.5/n;

  let inv_limit_angle = base_angle - (inv_limit - Math.acos(rb / r_add));

  let ded_limit_angle = r_ded < rb ? Math.PI / n - base_angle : 0;

  ctx.beginPath();
  ctx.ellipse(0, 0, r_ded, r_ded, 0, 0, Math.PI * 2);
  ctx.fill();

  if (r < 650 && !high) {
    ctx.stroke();
  } else {
    if (r >= 650) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 6;
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.arc(0, 0, r_ded + 3, -Math.PI * 1.5, Math.PI * 2.5);
      ctx.stroke();
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(0, 0, r_ded, -Math.PI * 1.5, Math.PI * 2.5);
    ctx.stroke();
  }

  let pr = involute_points(rb, inv_limit, invp, false, r_ded);
  let pl = involute_points(rb, inv_limit, invp, true, r_ded);

  ctx.save();

  let ang = 0;

  for (let i = 0; i < n_stop; i++) {
    ctx.beginPath();

    let a0 = -ang + -Math.PI / n + ded_limit_angle + Math.PI / 2;

    ctx.moveTo((r_ded - 2) * Math.cos(a0), (r_ded - 2) * Math.sin(a0));

    let cba = Math.cos(ang + base_angle);
    let sba = Math.sin(ang + base_angle);

    for (let j = 0; j < pr.length; j++) {
      ctx.lineTo(
        cba * pr[j][0] + sba * pr[j][1],
        -sba * pr[j][0] + cba * pr[j][1],
      );
    }

    ctx.arc(
      0,
      0,
      r_add,
      -ang - inv_limit_angle + Math.PI / 2,
      -ang + inv_limit_angle + Math.PI / 2,
    );

    cba = Math.cos(ang - base_angle);
    sba = Math.sin(ang - base_angle);

    for (let j = 0; j < pl.length; j++) {
      ctx.lineTo(
        cba * pl[pl.length - j - 1][0] + sba * pl[pl.length - j - 1][1],
        -sba * pl[pl.length - j - 1][0] + cba * pl[pl.length - j - 1][1],
      );
    }

    a0 = Math.PI / n - ded_limit_angle + Math.PI / 2 - ang;

    ctx.lineTo((r_ded - 2) * Math.cos(a0), (r_ded - 2) * Math.sin(a0));

    ctx.fill();

    ang += (2 * Math.PI) / n;
  }

  ctx.restore();

  ctx.save();
  ang = 0;
  ctx.lineCap = "round";

  for (let i = 0; i < n_stop; i++) {
    ctx.beginPath();

    let a0 = -ang + -Math.PI / n + ded_limit_angle + Math.PI / 2;

    ctx.moveTo(r_ded * Math.cos(a0), r_ded * Math.sin(a0));

    let cba = Math.cos(ang + base_angle);
    let sba = Math.sin(ang + base_angle);

    for (let j = 0; j < pr.length; j++) {
      ctx.lineTo(
        cba * pr[j][0] + sba * pr[j][1],
        -sba * pr[j][0] + cba * pr[j][1],
      );
    }

    // ctx.stroke();

    // ctx.beginPath();
    ctx.arc(
      0,
      0,
      r_add,
      -ang - inv_limit_angle + Math.PI / 2,
      -ang + inv_limit_angle + Math.PI / 2,
    );
    // ctx.stroke();

    // ctx.beginPath();
    cba = Math.cos(ang - base_angle);
    sba = Math.sin(ang - base_angle);

    for (let j = 0; j < pl.length; j++) {
      ctx.lineTo(
        cba * pl[pl.length - j - 1][0] + sba * pl[pl.length - j - 1][1],
        -sba * pl[pl.length - j - 1][0] + cba * pl[pl.length - j - 1][1],
      );
    }

    a0 = Math.PI / n - ded_limit_angle + Math.PI / 2 - ang;

    ctx.lineTo(r_ded * Math.cos(a0), r_ded * Math.sin(a0));

    ctx.stroke();

    ang += (2 * Math.PI) / n;
  }

  ctx.restore();

  draw_shaft(ctx);

  if (fill == fill1) ctx.rotate(-Math.PI / n);

  if (flip_notch) ctx.rotate(Math.PI);

  if (!skip_notch) draw_notch(ctx, r_ded - 5);

  ctx.restore();
}

export function draw_shaft(ctx) {
  ctx.save();

  ctx.fillStyle = "#888";
  ctx.lineWidth = 1.5;

  let r = 10;
  let d = 5;

  if (window.innerWidth < 500) {
    r = 7;
    d = 3;
  }

  ctx.beginPath();
  ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#555";

  ctx.fillRect(-1, -r, 2, d);
  ctx.fillRect(-1, r - d, 2, d);

  ctx.beginPath();
  ctx.ellipse(0, 0, 2, 2, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

export function draw_notch(ctx, r) {
  ctx.save();

  let d = 3;
  ctx.lineWidth = 4;

  if (window.innerWidth < 500) {
    d = 2;
    ctx.lineWidth = 3;
  }
  ctx.strokeStyle = stroke0;
  ctx.fillStyle = stroke0;
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(-d, -r + 2 * d);
  ctx.lineTo(+d, -r + 2 * d);
  ctx.closePath();
  ctx.stroke();
  // ctx.fill();

  ctx.restore();
}

export function draw_disc(ctx, r, fill) {
  ctx.save();

  ctx.lineJoin = "round";
  ctx.strokeStyle = stroke0;
  ctx.fillStyle = fill;

  ctx.beginPath();
  ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();

  draw_notch(r - 5);
  draw_shaft();
}

/**
 * Affiche une fleche circulaire pour indiquer la roue menante, à la position courante.
 * @param ctx - Context 2D
 */
export function draw_driver(ctx) {
  let r = 18;
  let w = 4;

  if (window.innerWidth < 500) {
    r = 14;
    w = 3;
  }

  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.arc(0, 0, r + w / 2, Math.PI * 2, Math.PI * 0.5, true);
  ctx.lineTo(0, r + 6);
  ctx.lineTo(8, r);
  ctx.lineTo(0, r - 6);
  ctx.arc(0, 0, r - w / 2, Math.PI * 0.5, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * Affiche un dessin de ventilateur.
 */
export function draw_fan(ctx, a, state) {
  ctx.save();

  ctx.fillStyle = "#EB6260";
  ctx.strokeStyle = stroke0;

  ctx.beginPath();
  ctx.moveTo(-8, 0);
  ctx.lineTo(-19, 153);
  ctx.lineTo(19, 153);
  ctx.lineTo(8, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-70, 180);
  ctx.lineTo(70, 180);
  ctx.arcTo(70, 150, 50, 150, 15);
  ctx.arcTo(-70, 150, -70, 180, 15);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#eee";
  ctx.beginPath();
  ctx.ellipse(0, 165, 8, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(0,0,0,0.4)";

  ctx.beginPath();
  ctx.arc(0, 165, 11, Math.PI, 0);
  ctx.stroke();

  ctx.save();
  ctx.translate(0, 165);
  ctx.rotate(state.speed * Math.PI);
  ctx.fillStyle = "#444";

  ctx.fillEllipse(-5, 0, 1.5, 1.5);

  ctx.restore();

  ctx.beginPath();

  state.angle += state.speed / 10;
  ctx.rotate(state.angle);

  ctx.fillStyle = "#ddd";
  ctx.rotate(0.15);

  for (var i = 0; i < 4; i++) {
    ctx.translate(0, -100);
    ctx.beginPath();
    ctx.moveTo(14.4826665, 92.2955468);
    ctx.bezierCurveTo(
      25.8666009,
      90.2616161,
      36.891852,
      83.6544378,
      55.3383375,
      69.597992,
    );
    ctx.bezierCurveTo(
      56.4841302,
      68.7248841,
      57.1243454,
      68.2391854,
      59.5912106,
      66.3697856,
    );
    ctx.bezierCurveTo(
      59.9113394,
      66.1271844,
      59.9113394,
      66.1271844,
      60.2313917,
      65.884592,
    );
    ctx.bezierCurveTo(
      76.6490934,
      53.4394051,
      83.3558789,
      47.6352838,
      86.452182,
      42.1448381,
    );
    ctx.bezierCurveTo(
      90.5717199,
      34.8399652,
      92.7133787,
      26.0033411,
      92.5323982,
      17.6800334,
    );
    ctx.bezierCurveTo(
      92.3490076,
      9.24588488,
      86.6375243,
      -1.65048642,
      80.2707242,
      -4.83558592,
    );
    ctx.bezierCurveTo(
      73.4836291,
      -8.23094508,
      68.887207,
      -5.05231024,
      51.6905797,
      15.9770102,
    );
    ctx.bezierCurveTo(
      37.373362,
      33.4851735,
      28.5386277,
      46.9625947,
      15.4381837,
      69.0767946,
    );
    ctx.bezierCurveTo(
      11.3951683,
      75.9016052,
      8.66688112,
      81.6764628,
      7.81945261,
      85.9497025,
    );
    ctx.bezierCurveTo(
      6.78324839,
      91.1748619,
      8.62829991,
      93.3415275,
      14.4826665,
      92.2955468,
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.translate(0, +100);

    ctx.rotate(Math.PI / 2);
  }
  ctx.fillStyle = "#333";

  ctx.rotate(-0.15 + Math.PI / 4);
  // if (dot) ctx.fillEllipse(134, 0, 4, 4);
  ctx.rotate(-Math.PI / 4);

  ctx.fillStyle = "#EB6260";

  ctx.beginPath();
  ctx.ellipse(0, 0, 20, 20, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#555";

  ctx.beginPath();
  ctx.ellipse(0, 0, 2, 2, 0, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

