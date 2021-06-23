import React from "react";
import "./App.css";
import { Canvas } from "./Components/Canvas/Canvas.style";
import useCanvas from "./Components/Hooks/useCanvas";
import useSnake from "./Components/Hooks/useSnake";
import useFood from "./Components/Hooks/useFood";
const drawSnakePart = (ctx, snakePart, index) => {
  if (index === 0) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "red";
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
};
const drawSnake = (ctx, snake) => {
  snake.forEach((snakePart, index) => {
    drawSnakePart(ctx, snakePart, index);
  });
};

const drawFood = (ctx, foodPosition) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "#bbf";
  ctx.fillRect(foodPosition.x, foodPosition.y, 10, 10);
  ctx.strokeRect(foodPosition.x, foodPosition.y, 10, 10);
};

function App() {
  let [snake, eat, stop, start] = useSnake(150);
  const [foodPosition, setFoodPosition] = useFood(0, 500);
  const foodCanvas = useCanvas(drawFood, foodPosition, { anime: false });
  const snakeCanvas = useCanvas(drawSnake, snake, { anime: true });

  console.log("render");

  React.useEffect(() => {
    const rules = setInterval(() => {
      console.log(snake[0]);
      if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
        eat();
        setFoodPosition();
      }
      if (
        snake[0].x >= 500 ||
        snake[0].x <= -1 ||
        snake[0].y >= 500 ||
        snake[0].y <= -1
      )
        stop();

      for (let i = 1; i < snake.length; i++) {
        const peace = snake[0];
        if (peace.x === snake[i].x && peace.y === snake[i].y) stop();
      }
    }, 150);

    return () => clearInterval(rules);
  }, [foodPosition, snake, stop, eat, setFoodPosition]);

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
      <button onClick={() => setFoodPosition()}>food</button>
      <button onClick={() => start()}>Stop/Go</button>
    </>
  );
}

export default App;
