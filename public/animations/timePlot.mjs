import { drawClock } from './base/time.mjs';

const state = {
    time: 0, // Current time position
};

export function initState() {
    return state;
}

export const sliders = [{
    'update': (x) => {
        state.time = x;
    }
}];

const font_size = 19;

export function draw(ctx, width, height, t, state) {
  const durationMin = 0.25; // 2.5 min => 150 s
  const curTime = state.time * durationMin * 60; // current time (seconds)
  const curWidth = 20 + ((width-20) * state.time);
  let s = width / 650;

  ctx.save();
  ctx.translate(0, height * 0.5);

  // axe des abscisses
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = 2.0;
  ctx.arrowLine(0, 0, curWidth, 0);

  // axe des ordonnées
  ctx.arrowLine(20, 8, 20, -height/3 + 20);

  for (let i = 1; i*20 < curWidth-20; i++) {
    let x = 20 + i*20;
    let h = i % 5 === 0 ? 8 : 5;
    ctx.strokeLine(x, -h, x, h);
  }

  ctx.font = font_size * 0.9/s + "px IBM Plex Sans";
  ctx.fillStyle = "#E9A923";
  ctx.fillText(`T = ${Math.round(curTime*100) / 100} s`, width/2, 60);
  ctx.restore();

  ctx.fillStyle = "#B42626";
  ctx.fillEllipse(-260, 0, 6);


  ctx.translate(Math.round(width * 0.5), Math.round(height * 0.2));
  drawClock(ctx, state.time * durationMin);
}

