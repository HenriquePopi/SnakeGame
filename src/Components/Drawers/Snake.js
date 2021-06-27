import colorPicker from "./ColorPicker";
const drawSnakePart = (ctx, snakePart, index) => {
  if (index === 0) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx = colorPicker(ctx);
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
};

const drawSnake = (ctx, snake) => {
  snake.forEach((snakePart, index) => {
    drawSnakePart(ctx, snakePart, index);
  });
};

export default drawSnake;
