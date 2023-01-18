/* Mat 4 */

export function mat4_transpose(a) {
  let res = [
    a[0],
    a[4],
    a[8],
    a[12],
    a[1],
    a[5],
    a[9],
    a[13],
    a[2],
    a[6],
    a[10],
    a[14],
    a[3],
    a[7],
    a[11],
    a[15],
  ];
  return res;
}

export function mat4_mul(a, b) {
  /* 0  1  2  3
       4  5  6  7
       8  9 10 11
      12 13 14 15 */

  let res = [];
  res[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
  res[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
  res[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
  res[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];

  res[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
  res[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
  res[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
  res[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];

  res[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
  res[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
  res[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
  res[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];

  res[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
  res[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
  res[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
  res[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];

  return res;
}

export function mat4_mul_vec3(a, b) {
  let res = [];
  res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3];
  res[1] = a[4] * b[0] + a[5] * b[1] + a[6] * b[2] + a[7];
  res[2] = a[8] * b[0] + a[9] * b[1] + a[10] * b[2] + a[11];
  res[3] = a[12] * b[0] + a[13] * b[1] + a[14] * b[2] + a[15];

  return res;
}

export function mat4_mul_vec4(a, b) {
  let res = [];
  res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  res[1] = a[4] * b[0] + a[5] * b[1] + a[6] * b[2] + a[7] * b[3];
  res[2] = a[8] * b[0] + a[9] * b[1] + a[10] * b[2] + a[11] * b[3];
  res[3] = a[12] * b[0] + a[13] * b[1] + a[14] * b[2] + a[15] * b[3];

  return res;
}

export function mat4_invert(a) {
  let out = Array(16);

  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;
  let det =
    b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return undefined;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

let ident_mat4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

export function scale_mat4(a) {
  if (a.constructor === Array) {
    return [a[0], 0, 0, 0, 0, a[1], 0, 0, 0, 0, a[2], 0, 0, 0, 0, 1];
  }
  return [a, 0, 0, 0, 0, a, 0, 0, 0, 0, a, 0, 0, 0, 0, 1];
}

export function rot_x_mat4(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1];
}

export function rot_y_mat4(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1];
}

export function rot_z_mat4(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

export function translation_mat4(t) {
  return [1, 0, 0, t[0], 0, 1, 0, t[1], 0, 0, 1, t[2], 0, 0, 0, 1];
}

let x_flip_mat4 = [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

let y_flip_mat4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

let z_flip_mat4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1];

let x_flip_mat3 = [-1, 0, 0, 0, 1, 0, 0, 0, 1];
let y_flip_mat3 = [1, 0, 0, 0, -1, 0, 0, 0, 1];
let z_flip_mat3 = [1, 0, 0, 0, 1, 0, 0, 0, -1];

export function mat3_to_mat4(mat) {
  return [
    mat[0],
    mat[1],
    mat[2],
    0,
    mat[3],
    mat[4],
    mat[5],
    0,
    mat[6],
    mat[7],
    mat[8],
    0,
    0,
    0,
    0,
    1,
  ];
}

export function mat4_to_mat3(mat) {
  return [
    mat[0],
    mat[1],
    mat[2],
    mat[4],
    mat[5],
    mat[6],
    mat[8],
    mat[9],
    mat[10],
  ];
}

/* Mat 3 */

export function mat3_invert(a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  let out = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

export function mat3_mul(a, b) {
  /* 0 1 2
       3 4 5
       6 7 8 */

  let res = [];
  res[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
  res[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
  res[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];

  res[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
  res[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
  res[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];

  res[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6];
  res[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7];
  res[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8];

  return res;
}

export function mat3_mul_vec(a, b) {
  let res = [];
  res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  res[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
  res[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];

  return res;
}

export function mat3_transpose(a) {
  let res = [a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]];
  return res;
}

export function scale_mat3(a) {
  return [a, 0, 0, 0, a, 0, 0, 0, a];
}

export function rot_x_mat3(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [1, 0, 0, 0, c, -s, 0, s, c];
}

export function rot_y_mat3(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [c, 0, s, 0, 1, 0, -s, 0, c];
}

export function rot_z_mat3(a) {
  let c = Math.cos(a);
  let s = Math.sin(a);

  return [c, -s, 0, s, c, 0, 0, 0, 1];
}

export function rot_aa_mat3(axis, angle) {
  let c = Math.cos(angle);
  let s = Math.sin(angle);

  let x = axis[0];
  let y = axis[1];
  let z = axis[2];

  return [
    x * x * (1 - c) + c,
    x * y * (1 - c) - z * s,
    x * z * (1 - c) + y * s,

    y * x * (1 - c) + z * s,
    y * y * (1 - c) + c,
    y * z * (1 - c) - x * s,

    z * x * (1 - c) - y * s,
    z * y * (1 - c) + x * s,
    z * z * (1 - c) + c,
  ];
}

let ident_matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
let ident_mat3 = ident_matrix;

export function vec_add(a, b) {
  let r = [];
  for (let i = 0; i < a.length; i++) r.push(a[i] + b[i]);
  return r;
}

export function vec_sub(a, b) {
  let r = [];
  for (let i = 0; i < a.length; i++) r.push(a[i] - b[i]);
  return r;
}

export function vec_scale(a, x) {
  let r = [];
  for (let i = 0; i < a.length; i++) r.push(a[i] * x);
  return r;
}

export function vec_mul(a, b) {
  let r = [];
  for (let i = 0; i < a.length; i++) r.push(a[i] * b[i]);
  return r;
}

export function vec_dot(a, b) {
  let r = 0;
  for (let i = 0; i < a.length; i++) r += a[i] * b[i];
  return r;
}

export function vec_cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    -a[0] * b[2] + a[2] * b[0],
    a[0] * b[1] - a[1] * b[0],
  ];
}

export function vec_len_sq(a) {
  return vec_dot(a, a);
}

export function vec_len(a) {
  let d = 0;
  for (let i = 0; i < a.length; i++) d += a[i] * a[i];

  return Math.sqrt(d);
}

export function vec_eq(a, b) {
  for (let i = 0; i < a.length; i++) if (a[i] != b[i]) return false;

  return true;
}

export function vec_norm(a) {
  let d = 0;
  for (let i = 0; i < a.length; i++) d += a[i] * a[i];

  d = 1.0 / Math.sqrt(d);
  let r = [];
  if (d < 0.00000001) {
    for (let i = 0; i < a.length; i++) r.push(0);
    return r;
  }

  for (let i = 0; i < a.length; i++) r.push(a[i] * d);
  return r;
}

export function vec_lerp(a, b, f) {
  let r = [];
  for (let i = 0; i < a.length; i++) r[i] = lerp(a[i], b[i], f);
  return r;
}

export function lerp(a, b, f) {
  if (f == 0) return a;
  else if (f == 1) return b;

  return a * (1 - f) + b * f;
}

export function smooth_lerp(a, b, f) {
  if (f == 0) return a;
  else if (f == 1) return b;

  f = f * f * (3.0 - 2.0 * f);

  return a * (1 - f) + b * f;
}

export function saturate(x) {
  return Math.max(0.0, Math.min(x, 1.0));
}

export function clamp(x, a, b) {
  return Math.max(a, Math.min(x, b));
}

export function step(edge0, x) {
  return x > edge0 ? 1 : 0;
}

export function sharp_step(edge0, edge1, x) {
  return saturate((x - edge0) / (edge1 - edge0));
}

export function smooth_step(edge0, edge1, x) {
  x = sharp_step(edge0, edge1, x);
  return x * x * (3.0 - 2.0 * x);
}

export function rgba255_sq_color(r, g, b, a) {
  return [
    (r / 255.0) * (r / 255.0) * a,
    (g / 255.0) * (g / 255.0) * a,
    (b / 255.0) * (b / 255.0) * a,
    a,
  ];
}

export function rgba255_color(r, g, b, a) {
  return [(r / 255.0) * a, (g / 255.0) * a, (b / 255.0) * a, a];
}

export function rgba_color_string(rgba) {
  return (
    "rgba(" +
    Math.round(saturate(rgba[0]) * 255) +
    "," +
    Math.round(saturate(rgba[1]) * 255) +
    "," +
    Math.round(saturate(rgba[2]) * 255) +
    "," +
    saturate(rgba[3]) +
    ")"
  );
}

export function flatten(a) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    let aa = a[i];
    if (aa.constructor !== Array) {
      r.push(aa);
      continue;
    }
    for (let k = 0; k < aa.length; k++) {
      r.push(aa[k]);
    }
  }

  return r;
}

export function involute_points(r, angle, n, left, r_ded) {
  if (r_ded === undefined) r_ded = 0;

  var points = [];
  var prev = undefined;
  for (var i = 0; i <= n; i++) {
    var a = (angle * i) / n;

    var l = Math.abs(a * r);

    var p0 = [-r * Math.sin(a), r * Math.cos(a)];
    var p1 = vec_norm(p0);
    p1 = [p1[1], -p1[0]];
    p1 = vec_scale(p1, l);

    p1 = vec_add(p0, p1);

    if (left) p1[0] *= -1;

    if (vec_len(p1) > r_ded) {
      if (i != 0 && points.length == 0) {
        var prevdir = vec_norm(prev);
        var p1_d = vec_scale(prevdir, vec_dot(prevdir, p1));

        var r0 = vec_len(prev);
        var r1 = vec_len(p1_d);
        var t = (r_ded - r0) / (r1 - r0);

        points.push(
          vec_add(prev, vec_scale(vec_norm(vec_sub(p1, prev)), t * (r1 - r0))),
        );
      }
      points.push(p1);
    }

    prev = p1;
  }

  return points;
}

