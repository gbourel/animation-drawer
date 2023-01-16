
export function drawClock(ctx, t) {
  ctx.save();
  ctx.globalAlpha = 1.0;

  let clock_r = 15;

  ctx.scale(1.25, 1.25);
  ctx.strokeStyle = "#333";
  ctx.fillStyle = "#333";

  ctx.strokeEllipse(0, 0, clock_r);

  ctx.save();
  ctx.strokeStyle = "#666";
  for (let i = 0; i < 24; i++) {
      ctx.rotate(Math.PI / 12);
      ctx.beginPath();
      ctx.lineTo(0, -clock_r + 3);
      ctx.lineTo(0, -clock_r + 4);
      ctx.stroke();
  }
  ctx.restore();

  ctx.fillEllipse(0, 0, 1.5);



  ctx.save();
  ctx.strokeStyle = "#333";

  ctx.rotate((t - Math.floor(t)) * Math.PI * 2);
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.lineTo(0, -clock_r + 4);
  ctx.stroke();
  ctx.restore();



  ctx.lineCap = "butt";
  ctx.lineWidth = 2.;
  ctx.save();
  ctx.beginPath();
  ctx.lineTo(0, -clock_r);
  ctx.lineTo(0, -clock_r - 3);
  ctx.stroke();

  ctx.lineWidth = 3.;

  ctx.rotate(0.8);
  ctx.beginPath();
  ctx.lineTo(0, -clock_r);
  ctx.lineTo(0, -clock_r - 4);
  ctx.stroke();
  ctx.restore();

  ctx.lineWidth = 1.;

  ctx.strokeEllipse(0, -clock_r - 5, 2);

  ctx.restore();
}