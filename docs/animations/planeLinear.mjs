import { loadImage } from "./base/default.mjs";
import { drawClock } from './base/time.mjs';

const planeSvg = loadImage(new URL("./img/plane.svg", import.meta.url));
const cloudSvg = loadImage(new URL("./img/cloud.svg", import.meta.url));
const trees = [
  loadImage(new URL("./img/tree01.svg", import.meta.url)),
  loadImage(new URL("./img/tree02.svg", import.meta.url)),
  loadImage(new URL("./img/tree03.svg", import.meta.url)) ];

const clouds = [
  [800, 150, 0.15],
  [130, 30, 0.2],
  [600, 350, 0.25],
  [550, 90, 0.3],
  [30, 300, 0.32],
  [250, 250, 0.4],
  [330, 10, 0.5] ];

const cloudSpeed = 300;


const state = {
    pos: 0, // Current position
};

export function initState() {
    return state;
}

export const sliders = [{
    'update': (x) => {
        state.pos = x;
    }
}];


const grey = "#bbb";
const red = "#e63946";
const green = "#6188A9";
const blue = "#301F71";
const cyan = "#89BAD2";
const orange = "#E9A923";
const darkBlue = "#0C506B";


/**
 * Un avion vue de coté avec un fond bleu et des nuages qui défilent.
 * @param {object} ctx - Context canvas 2D
 */
export function draw(ctx, width, height, now, state) {
  ctx.fillStyle = "#A1DAF7";
  ctx.fillRect(0, 0, width, height-50);

  now = state.pos * 10;

  // nuages
  if (cloudSvg.loaded) {
    clouds.forEach(c => {
      ctx.save();
      let cloudWidth = cloudSvg.img.width*c[2];
      let cloudHeight = cloudSvg.img.height*c[2];
      let tx = (c[0]-width-now*cloudSpeed*c[2]) % (width + cloudWidth*2) + (width);
      ctx.translate(tx, 0);
      ctx.save();
      ctx.scale(0.4, 0.8);
      ctx.drawImage(cloudSvg.img, 0, c[1], cloudWidth, cloudHeight);
      ctx.restore();
      ctx.restore();
    });
  }

  // trees
  ctx.save();
  ctx.translate(0, 0);
  ctx.drawImage(trees[0].img, 40, height-150, 100, 100);
  ctx.drawImage(trees[1].img, 240, height-170, 100, 120);
  ctx.drawImage(trees[2].img, 500, height-130, 100, 80);
  ctx.restore();

  // avion
  if (planeSvg.loaded) {
    let h = height;
    ctx.save();
    ctx.translate((width-150)*state.pos, 100);
    ctx.scale(0.4, 0.4);
    ctx.drawImage(planeSvg.img, 0, 0);
    ctx.restore();
  }


  // Distance parcourue horizontalement
  let font_size = 16;
  let grey = '#747474';
  let marginLeft = 94;
  let curPos = state.pos;       // [0-1]
  let totalWidth = (width-150); // total width in px
  let totalValue = 3000;        // total width in meters
  let curWidth = Math.max(marginLeft, marginLeft + (totalWidth*curPos)); // px
  let curValue = totalValue * curPos;

  ctx.save();
  ctx.translate(0, 200);

  // axe des abscisses
  ctx.strokeStyle = grey;
  ctx.lineWidth = 2.0;
  if(curPos > 0) {
    ctx.arrowLine(marginLeft, 0, curWidth, 0);
  }

  // graduations abscisse
  let delta = 500;
  ctx.font = font_size + "px Arial";
  ctx.fillStyle = grey;
  for (let i = 0; i <= curValue/delta; i++) {
    let x = marginLeft + (i*delta*totalWidth)/totalValue;
    let h = i % 5 === 0 ? 8 : 5;
    ctx.strokeLine(x, -h, x, h);
    ctx.fillText(`${i*delta}m`, x, font_size+10);
  }
  ctx.restore();


  // Horloge
  let totalDuration = 50; // total duration seconds
  let curSeconds = totalDuration*curPos;
  ctx.save();
  ctx.translate(94, 60);
  ctx.scale(1.1, 1.1);
  drawClock(ctx, (curSeconds/60));

  ctx.font = "19px Arial";
  ctx.fillStyle = "#484848";
  ctx.textAlign = 'left';
  ctx.fillText(`t = ${Math.round(curSeconds*100)/100} s`, 32, 5);
  ctx.restore();

}

