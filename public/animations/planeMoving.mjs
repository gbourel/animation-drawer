import { loadImage } from "./base/default.mjs";
import { drawClock } from './base/time.mjs';

const planeSvg = loadImage(new URL("./img/plane.svg", import.meta.url));
const cloudSvg = loadImage(new URL("./img/cloud.svg", import.meta.url));

const clouds = [
  [800, 150, 0.15],
  [130, 30, 0.2],
  [600, 350, 0.25],
  [550, 90, 0.3],
  [30, 300, 0.32],
  [250, 250, 0.4],
  [330, 10, 0.5] ];

const cloudSpeed = 300;

/**
 * Un avion vue de coté avec un fond bleu et des nuages qui défilent.
 * @param {object} ctx - Context canvas 2D
 */
export function draw(ctx, width, height, t, state) {
  ctx.fillStyle = "#A1DAF7";
  ctx.fillRect(0, 0, width, height);

  if (cloudSvg.loaded) {
    clouds.forEach(c => {
      ctx.save();
      let cloudWidth = cloudSvg.img.width*c[2];
      let cloudHeight = cloudSvg.img.height*c[2];
      let tx = (c[0]-width-t*cloudSpeed*c[2]) % (width + cloudWidth*2) + (width);
      ctx.translate(tx, 0);
      ctx.drawImage(cloudSvg.img, 0, c[1], cloudWidth, cloudHeight);
      ctx.restore();
    });
  }

  if (planeSvg.loaded) {
    ctx.drawImage(
      planeSvg.img,
      width / 2 - planeSvg.img.width / 2,
      height / 2 - planeSvg.img.height / 2 + 5 * Math.sin(t * 4),
    );
  }
}

