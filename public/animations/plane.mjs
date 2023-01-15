import { loadImage } from "./base/default.mjs";

const planeSvg = loadImage(new URL("./img/plane.svg", import.meta.url));
const cloudSvg = loadImage(new URL("./img/cloud.svg", import.meta.url));

/**
 * Un avion vue de coté avec un fond bleu.
 * @param {object} ctx - Context canvas 2D
 */
export function draw(ctx, width, height, t, state) {
  ctx.fillStyle = "#A1DAF7";
  ctx.fillRect(0, 0, width, height);

  if (planeSvg.loaded) {
    ctx.drawImage(
      planeSvg.img,
      width / 2 - planeSvg.img.width / 2,
      height / 2 - planeSvg.img.height / 2 + 10,
    );
  }
}
