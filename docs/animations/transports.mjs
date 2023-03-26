import { draw_gear, draw_driver } from './base/gears.mjs';

const color0 = "#FCD561";
const color1 = "#78AD6C";
const color2 = "#5EAAD4";
const color3 = "#D45E5E";
const stroke0 = "#555";

function draw_loop(
  ctx,
  radius,
  color,
  stops,
  t,
) {
  ctx.save();

  ctx.lineJoin = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;

  // Boucle principale
  ctx.beginPath();
  ctx.ellipse(0, 0, radius, radius, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Zones d'arret
  for(let stopAngle of stops) {
    ctx.save();

    ctx.rotate(stopAngle);

    ctx.beginPath();
    ctx.arc(0, 0, 100, Math.PI * 3/2 - 0.09, Math.PI * 3/2 + 0.09);
    ctx.stroke();

    let a1 = Math.PI * 3/2 - 0.4;
    let a2 = Math.PI * 3/2 + 0.4;
    let r1 = 80;
    let r2 = 110;
    ctx.beginPath();
    ctx.ellipse(r2*Math.cos(a1), r2*Math.sin(a1), r2-r1, r2-r1, 0, 0.2, 1.2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(r2*Math.cos(a2), r2*Math.sin(a2), r2-r1, r2-r1, 0, 0.4 + Math.PI/2, 1.4 + Math.PI/2);
    ctx.stroke();

    let a3 = Math.PI * 3/2 - 0.05;
    let r3 = 90;
    ctx.beginPath();
    ctx.ellipse(r3*Math.cos(a3), r3*Math.sin(a3), 10, 10, 0, Math.PI, 3*Math.PI/2);
    ctx.stroke();
    let a4 = Math.PI * 3/2 + 0.05;
    ctx.beginPath();
    ctx.ellipse(r3*Math.cos(a4), r3*Math.sin(a4), 10, 10, 0, 3*Math.PI/2, 2*Math.PI);
    ctx.stroke();

    ctx.restore();
  }

  ctx.restore();
}


/**
 * Demonstration de roues dentées.
 */
export function draw(ctx, width, height, t) {
  ctx.translate(width * 0.5, height * 0.48);

  let size = width * 0.54;

  ctx.save();
  ctx.translate(-80, 0)
  draw_loop(ctx, 80, color2, [-Math.PI/4, -3*Math.PI/4], t);
  ctx.restore();

  ctx.save();
  ctx.translate(80, 0)
  draw_loop(ctx, 80, color3, [0], -t+0.9);
  ctx.restore();

  ctx.save();
  ctx.translate(240, 0)
  draw_loop(ctx, 80, color0, [Math.PI/2], -t+0.9);
  ctx.restore();

  // Definition des trajectoires
  const pods = [{
    start: 0,
    traj: [{
        stop: 2 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }, {
        stop: 3 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 7 * Math.PI,
        delta: 0,
        radius: 80,
        center: [240, 0]
      }, {
        stop: 12 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 20 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }]
  }, {
    start: 4,
    traj: [{
        stop: 2 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }, {
        stop: 3 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 7 * Math.PI,
        delta: 0,
        radius: 80,
        center: [240, 0]
      }, {
        stop: 12 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 20 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }]
  }, {
    start: 9*Math.PI,
    traj: [{
        stop: 2 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }, {
        stop: 3 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 7 * Math.PI,
        delta: 0,
        radius: 80,
        center: [240, 0]
      }, {
        stop: 12 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 20 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }]
  }, {
    start: 14.5*Math.PI,
    traj: [{
        stop: 2 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }, {
        stop: 3 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 7 * Math.PI,
        delta: 0,
        radius: 80,
        center: [240, 0]
      }, {
        stop: 12 * Math.PI,
        delta: Math.PI,
        reverse: true,
        radius: 80,
        center: [80, 0]
      }, {
        stop: 20 * Math.PI,
        delta: 0,
        radius: 80,
        center: [-80, 0]
      }]
  }];

  // pods
  const rpod = 8;
  let cur = 0;
  for (let p of pods){
    let angle = (t*2 + p.start) % (Math.PI*20);
    while(angle > p.traj[cur].stop && cur < p.traj.length - 1) { cur++; }
    let ct = p.traj[cur];

    angle -= ct.delta;
    if(ct.reverse) { angle = -angle; }

    ctx.save();
    ctx.translate(ct.center[0], ct.center[1])

    ctx.fillStyle = color1;
    ctx.beginPath();
    ctx.ellipse(ct.radius*Math.cos(angle), ct.radius*Math.sin(angle), rpod, rpod, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

}
