import { draw_fan } from './base/gears.mjs';

const state = {
    speed: 0.5, // Current rotation speed
    angle: 0, // Current fan angle
};

export function initState() {
    return state;
}

export const sliders = [{
    'update': (x) => {
        state.speed = x;
    }
}];

export function draw(ctx, width, height, t, state) {
    ctx.translate(width * 0.5, height * 0.42);

    const size = (width / 100) * 0.2;
    ctx.scale(size, size);
    ctx.lineWidth = 1.5 / size;

    draw_fan(ctx, -t, state);
}

