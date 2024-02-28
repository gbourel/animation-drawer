import { draw_fan } from './base/gears.mjs';

const color0 = "#FCD561";
const color1 = "#78AD6C";
const color2 = "#5EAAD4";
const color3 = "#D45E5E";
const stroke0 = "#555";

const discWidth = 40;
const discHeight = 42;
const discRadius = 12;

class Disc {
  constructor(size) {
    this.size = size;
    this.width = discWidth + discWidth * size;
    this.highlighted = false;
    this.error = false;
    this.x = 0;
    this.y = 0;
  }

  draw(ctx, x, y) {
    const base = 320;
    this.x = x;
    this.y = y;

    ctx.save();
    ctx.translate(x - this.width/2, y);
    ctx.fillStyle = this.highlighted ? "#f93588" : "#d45e5e";
    if (this.error) {
      ctx.fillStyle = "red";
    }
    ctx.roundRect(0, 0, this.width, discHeight, discRadius);
    ctx.fill();

    const gradient = ctx.createLinearGradient(0, 0, 0, discHeight);
    gradient.addColorStop(0, "#00000010");
    gradient.addColorStop(0.5, "#00000012");
    gradient.addColorStop(1, "#00000032");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(discRadius, discHeight-(discRadius *1.1));
    ctx.lineTo(this.width-discRadius, discHeight-(discRadius *1.1));
    ctx.arcTo(this.width, discHeight-(discRadius *1.1), this.width, discHeight-discRadius, discRadius);
    ctx.arcTo(this.width, discHeight, this.width-discRadius, discHeight, discRadius);
    ctx.lineTo(discRadius, discHeight);
    ctx.arcTo(0, discHeight, 0, discHeight-discRadius, discRadius);
    ctx.arcTo(0, discHeight-(discRadius *1.1), discRadius, discHeight-(discRadius *1.1), discRadius);
    ctx.fill();
    ctx.restore();
  }
}

class Tower {
  constructor(cnt) {
    this.discs = [];
    for (let i = cnt; i > 0; i--) {
      this.addDisc(new Disc(i));
    }
  }

  addDisc(d) {
    if (this.discs.length && this.discs[this.discs.length-1].size < d.size) {
      d.error = true;
      gameover();
    }
    this.discs.push(d);
  }

  draw(ctx, width, height, x) {
    const base = height-56;

    let idx = 1;
    for (let d of this.discs) {
      d.draw(ctx, x, base - discHeight * idx);
      idx++;
    }
  }

  pop() {
    return this.discs.pop();
  }

  top(height) {
    return height - 56 - (discHeight * (this.discs.length+1));
  }
}

const state = {
  towers: [new Tower(4), new Tower(0), new Tower(0)], // Current location of each disc
  moving: [],
  over: false
};

function moveTower(idx, src, dest, spare) {
  if (idx == 1) {
    state.moving.push({ src, dest });
  } else {
    moveTower(idx-1, src, spare, dest);
    state.moving.push({ src, dest });
    moveTower(idx-1, spare, dest, src);
  }
}

setTimeout(() => {
  moveTower(4, 0, 2, 1);
}, 500);

function gameover() {
  state.over = true;
}

export function initState() {
  return state;
}

let last = 0;
export function draw(ctx, width, height, t, state) {
  const dt = t-last;
  const base = height-56;
  const dh = 16; // disc height
  const x = [width/4 - 32, width/2, 3*width/4 + 32];

  // bottom
  ctx.fillStyle = "#fcd561";
  ctx.beginPath();
  ctx.roundRect(0, base, width, dh, 5);
  ctx.fill();

  // vertical poles
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.roundRect(x[i]-dh/2, height*0.5, dh, height*0.4, 5);
    ctx.fill();
  }

  if (!state.over) {
    // moving obj
    if (state.moving.length) {
      const mvt = state.moving[0];
      if (mvt) {
        if (!mvt.disc) {
          mvt.disc = state.towers[mvt.src].pop();
          mvt.disc.highlighted = true;
          mvt.pts = [ [x[mvt.src], height*0.35],
                      [x[mvt.dest], height*0.35],
                      [x[mvt.dest], state.towers[mvt.dest].top(height)] ];
        }
        let step = 320.0 * dt;
        let dx = mvt.disc.x-mvt.pts[0][0];
        let dy = mvt.disc.y-mvt.pts[0][1]
        if (Math.abs(dx) > step) {
          if (dx > 0) {
            mvt.disc.x -= step;
          } else {
            mvt.disc.x += step;
          }
        } else if (Math.abs(dy) > step) {
          if (dy > 0) {
            mvt.disc.y -= step;
          } else {
            mvt.disc.y += step;
          }
        } else {
          if (mvt.pts.length) {
            mvt.pts.shift();
            if (mvt.pts.length == 0) {
              mvt.disc.highlighted = false;
              state.towers[mvt.dest].addDisc(mvt.disc);
              state.moving.shift();
            }
          }
        }
        mvt.disc.draw(ctx, mvt.disc.x, mvt.disc.y)
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    state.towers[i].draw(ctx, width, height, x[i]);
  }
  last = t;
}

