import colorPicker from "./ColorPicker";

const drawFood = (ctx, foodPosition) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx = colorPicker(ctx);
  ctx.fillRect(foodPosition.x, foodPosition.y, 10, 10);
  ctx.strokeRect(foodPosition.x, foodPosition.y, 10, 10);
};

export default drawFood;
