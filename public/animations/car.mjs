
import { draw_car_top, draw_car_side, draw_car_back, draw_cone_top, draw_cone_back } from './base/car.mjs';

let font_size = 19;
let prev_car_pos = 0;

const state = {
    pos: 0, // Current car position
};

export function initState() {
    return state;
}

export const sliders = [{
    'update': (x) => {
        state.pos = x;
    }
}];

export function draw(ctx, width, height, t, state) {
  ctx.translate(Math.round(width * 0.5), Math.round(height * 0.25));

  state = state ?? { pos: 0 };

  let currentPos = state.pos;

  let s = width / 650;
  let d = currentPos * 340 - 5;

  ctx.strokeStyle = "#444";

  ctx.save();
  ctx.scale(s, s);
  ctx.strokeEllipse(-260, 0, 50);

  let a = Math.atan2(31 + currentPos * 1.5, 75 + d);
  let ca = Math.cos(a);
  let sa = Math.sin(a);

  let dd = d + 130;

  ctx.lineWidth = 1.0/s;

  ctx.save();
  ctx.setLineDash([2, 2]);

  ctx.beginPath();
  ctx.moveTo(-260, 0);
  ctx.lineTo(-260 + dd * ca, dd * sa);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-260, 0);
  ctx.lineTo(-260 + dd * ca, -dd * sa);
  ctx.stroke();
  ctx.restore();

  ctx.lineWidth = 2.5/s;
  ctx.strokeStyle = "#E9A923";
  ctx.beginPath();
  ctx.arc(-260, 0, 50, -a, a);
  ctx.stroke();

  ctx.font = font_size * 0.9/s + "px IBM Plex Sans";

  ctx.fillStyle = "#E9A923";
  ctx.fillText(Math.round(2 * a * 180 / Math.PI) + "°", -210, 60);

  ctx.fillStyle = "#B42626";
  ctx.fillEllipse(-260, 0, 6);


  {
      ctx.save();
      ctx.translate(-110 + d, 0);
      ctx.rotate(Math.PI * 0.5);
      draw_car_top(ctx);
      ctx.restore();

      ctx.translate(-240, 70);

      for (let i = 0; i < 5; i++) {
          ctx.translate(100, -140);
          draw_cone_top(ctx);
          ctx.translate(0, +140);
          draw_cone_top(ctx);
      }
  }

  ctx.restore();

  ctx.translate(0, Math.round(height * 0.25));

  ctx.strokeStyle = "#222";
  ctx.beginPath();
  ctx.moveTo(-width, 0);
  ctx.lineTo(width, 0);
  ctx.stroke();


  ctx.translate(0, Math.round(height * 0.25));

  {
      ctx.save();
      ctx.scale(s, s);

      let frac = 7;

      for (let i = 0; i < 5; i++) {
          let x = 230 + 174 * i;
          let y = 70;
          let cone_a = Math.atan2(y, x);
          let cone_s = cone_a * frac;

          ctx.save();
          ctx.scale(cone_s, cone_s);

          ctx.translate(-y, 0);
          draw_cone_back(ctx);
          ctx.translate(2 * y, 0);
          draw_cone_back(ctx);
          ctx.restore();
      }

      s = a * frac;
      ctx.scale(s, s);
      draw_car_back(ctx, currentPos < prev_car_pos && currentPos > 0);
      ctx.restore();
  }

  prev_car_pos = currentPos;
}
