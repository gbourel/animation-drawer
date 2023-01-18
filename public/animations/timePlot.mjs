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

const grey = "#bbb";
const red = "#e63946";
const green = "#6188A9";
const blue = "#301F71";
const cyan = "#89BAD2";
const orange = "#E9A923";
const darkBlue = "#0C506B";

const font_size = 19;

function f(x) {
  x -= 5
  return Math.max(-3*(x*x)+100, 0);
}

export function draw(ctx, width, height, t, state) {
  const durationMin = 0.25; // 0.25 min => 15 s
  const curTime = state.time * durationMin * 60; // current time (seconds)
  const marginLeft = 30;
  const curWidth = Math.max(marginLeft, marginLeft + ((width-20) * state.time));
  const samples = 128;
  const timeStep = durationMin * 60 / 128;
  const xStep = (width-marginLeft) / 128;
  let s = width / 650;

  ctx.save();
  ctx.translate(0, height * 0.6);

  // axe des abscisses
  ctx.strokeStyle = grey;
  ctx.lineWidth = 2.0;
  ctx.arrowLine(marginLeft, 0, curWidth, 0);

  // axe des ordonnées
  ctx.arrowLine(marginLeft, 8, marginLeft, -height/3);

  // graduations abscisse
  let delta = (width-marginLeft)/(durationMin*60);
  ctx.font = font_size * 0.9/s + "px Arial";
  ctx.fillStyle = grey;
  for (let i = 0; i < curTime; i++) {
    let x = marginLeft + i*delta;
    let h = i % 5 === 0 ? 8 : 5;
    ctx.strokeLine(x, -h, x, h);
    ctx.fillText(`${i}s`, marginLeft + i*delta, (font_size * 0.9/s)+10);
  }

  // graduations ordonnée
  for (let i = 0; i*20  + 20 < height/3; i++) {
    let y = -i*20;
    let w = i % 5 === 0 ? 8 : 5;
    ctx.strokeLine(marginLeft-w, y, marginLeft+w, y);
    ctx.fillText(`${i}m`, 10, y + (font_size * 0.9/s)/4);
  }

  ctx.strokeStyle = red;
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(marginLeft, -f(0));

  for(let i = 0; i*timeStep < curTime; i++) {
    ctx.lineTo(marginLeft + i*xStep, -f(i*timeStep));
  }
  ctx.stroke();

  // Legende centrale
  ctx.font = font_size * 0.9/s + "px IBM Plex Sans";
  ctx.fillStyle = orange;
  ctx.fillText(`t = ${Math.round(curTime*100) / 100} s`, width/2, 60);
  ctx.restore();


  ctx.translate(Math.round(width * 0.5), Math.round(height * 0.2));
  ctx.scale(1.2, 1.2);
  drawClock(ctx, state.time * durationMin);
}

