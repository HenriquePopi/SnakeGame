const defineColor = (
  ctx,
  colorStroke = "hsl(317 100% 54%)",
  colorFill = "hsl(320, 22%, 11%)"
) => {
  ctx.fillStyle = colorFill;
  ctx.strokeStyle = colorStroke;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 8;
  ctx.shadowColor = colorStroke;
  return ctx;
};

export default defineColor;
