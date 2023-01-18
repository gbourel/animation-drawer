import { draw_gear, draw_driver } from './base/gears.mjs';

const fill0 = "#FCD561";
const fill1 = "#78AD6C";
const fill2 = "#5EAAD4";
const fill3 = "#D45E5E";
const stroke0 = "#555";


/**
 * Demonstration de roues dentées.
 */
export function draw(ctx, width, height, t) {
  ctx.translate(width * 0.5, height * 0.48);

  let size = width * 0.54;
  ctx.translate(-size * 0.61, size * 0.11);

  ctx.rotate(-Math.PI * 0.13);

  // nombre de dents

  let n1 = 20;
  let n2 = 12;
  let n3 = 20;
  let n4 = 28;

  // rayons (module 0.26)

  let r1 = size * 0.26;
  let r2 = (r1 * n2) / n1;
  let r3 = (r1 * n3) / n1;
  let r4 = (r1 * n4) / n1;

  let a = -t;

  let ang = Math.PI * 0.25;

  let d1 = (r1 + r2) * Math.cos(ang);
  let d2 = r2 + r3;
  let d = Math.sqrt(d2 * d2 - d1 * d1);

  ctx.save();

  ctx.rotate(ang);
  ctx.translate(r1 + r2, 0);
  ctx.rotate((-a * n1) / n2 + Math.PI * 0.5);

  draw_gear(ctx, r2, n2, fill2);

  ctx.restore();

  ctx.save();

  ctx.rotate(-ang);
  ctx.translate(r1 + r2, 0);
  ctx.rotate((-a * n1) / n2 + Math.PI);

  draw_gear(ctx, r2, n2, fill2);

  ctx.restore();

  ctx.save();

  ctx.rotate(a + Math.PI / 2);

  draw_gear(ctx, r1, n1, fill0);
  draw_driver(ctx);

  ctx.restore();

  ctx.translate((r1 + r2) * Math.cos(ang) + d, 0);

  ctx.save();

  ctx.rotate((a * n1) / n3 + Math.PI / 2);

  draw_gear(ctx, r3, n3, fill3);

  ctx.restore();

  ctx.save();

  ctx.rotate(Math.PI / 4);

  ctx.translate(r3 + r4, 0);
  ctx.rotate((-a * n1) / n4 + Math.PI / 2);

  draw_gear(ctx, r4, n4, fill1);

  ctx.restore();
}
