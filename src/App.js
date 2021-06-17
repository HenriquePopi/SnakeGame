import React, { useEffect } from "react";
import "./App.css";
import { Canvas } from "./Components/Canvas/Canvas.style";
import useCanvas from "./Components/Hooks/useCanvas";
import useSnake from "./Components/Hooks/useSnake";
const drawSnakePart = (ctx, snakePart) => {
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
};
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const snake = useSnake(80);

  const drawFood = React.useCallback((ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(randomInt(0, 200), randomInt(0, 200), 10, 10);
  }, []);
  const foodCanvas = useCanvas(drawFood, { anime: false });

  const drawSnake = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    snake.forEach((part) => drawSnakePart(ctx, part));
  };

  const snakeCanvas = useCanvas(drawSnake);

  return (
    <>
      <Canvas
        style={{ position: "absolute", top: 50, left: 50 }}
        ref={snakeCanvas}
      />
      <Canvas
        style={{ position: "absolute", top: 50, left: 50 }}
        ref={foodCanvas}
      />
    </>
  );
}

export default App;
