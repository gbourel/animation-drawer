import { draw_gear, draw_driver } from './base/gears.mjs';

const stroke0 = "#555";

const color0 = "#ff8db7"
const color1 = "#ff0000"
const color2 = "#ffdd00"

const state = {
    speed: 0.5, // Current rotation speed
    angle: 0, // Current angle
};

export function initState() {
    return state;
}

export const sliders = [{
    'update': (x) => {
        state.speed = x;
    }
}];

/**
 * Demonstration de roues dentées : exemple pour 3 roues.
 */
export function draw(ctx, width, height, t) {
  // move to center
  ctx.translate(width * 0.5, height * 0.48);

  let size = width * 0.3;
  ctx.translate(-size * 0.91, 0);

  // inclinaison
  // ctx.rotate(-Math.PI * 0.13);

  t = t * state.speed * 2;

  // nombre de dents
  let n1 = 12;
  let n2 = 18;
  let n3 = 24;

  // rayons (module 0.22)
  let r1 = size * 0.22;
  let r2 = (r1 * n2) / n1;
  let r3 = (r1 * n3) / n1;

  let a = state.angle;
  state.angle -= state.speed / 10;

  // si roues aligner ou angle entre les roues
  let ang = Math.PI * 0;

  // distance entre les centres
  let d1 = (r1 + r2) * Math.cos(ang);
  let d2 = r2 + r3;
  let d = r2+r3;



  ctx.save();

  ctx.rotate(a + Math.PI / 2);

  draw_gear(ctx, r1, n1, color0);
  draw_driver(ctx);

  ctx.restore();

  ctx.save();

  ctx.rotate(-ang);
  ctx.translate(r1 + r2, 0);
  ctx.rotate((-a * n1) / n2 + Math.PI);

  draw_gear(ctx, r2, n2, color1);

  ctx.restore();

  ctx.translate((r1 + r2) * Math.cos(ang) + d, 0);

  ctx.save();

  ctx.rotate((a * n1) / n3 + Math.PI / 2);

  draw_gear(ctx, r3, n3, color2);

  ctx.restore();
}
