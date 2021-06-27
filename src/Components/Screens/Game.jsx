import React from "react";

import { Canvas, InnerCanvas } from "../Canvas/Canvas.style";
import useCanvas from "../Hooks/useCanvas";
import useSnake from "../Hooks/useSnake";
import useFood from "../Hooks/useFood";
import useRules from "../Hooks/useRules";
import { NeonButton } from "../styledComponents";
import styled from "styled-components";

const defineColor = (ctx) => {
  ctx.fillStyle = "hsl(320, 22%, 11%)";
  ctx.strokeStyle = "hsl(317 100% 54%)";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 8;
  ctx.shadowColor = "hsl(317 100% 54%)";
  return ctx;
};
const defineFoodColor = (ctx) => {
  ctx.fillStyle = "hsl(320, 22%, 11%)";
  ctx.strokeStyle = "hsl(317 100% 54%)";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "hsl(317 100% 54%)";
  return ctx;
};

const drawSnakePart = (ctx, snakePart, index) => {
  if (index === 0) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx = defineColor(ctx);
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
  ctx = defineFoodColor(ctx);
  ctx.fillRect(foodPosition.x, foodPosition.y, 10, 10);
  ctx.strokeRect(foodPosition.x, foodPosition.y, 10, 10);
};
function Game() {
  let [snake, eat, stop, startSnake] = useSnake(150);
  const [foodPosition, setFoodPosition] = useFood(0, 500);
  const startGame = useRules(
    snake,
    150,
    eat,
    stop,
    foodPosition,
    setFoodPosition,
    500,
    500
  );
  const foodCanvas = useCanvas(drawFood, foodPosition, { anime: false });
  const snakeCanvas = useCanvas(drawSnake, snake, { anime: true });

  return (
    <>
      <NeonButton onClick={() => setFoodPosition()}>food</NeonButton>
      <NeonButton
        className="neon-button"
        onClick={() => {
          startGame();
          startSnake();
        }}
      >
        START
      </NeonButton>
      <Container>
        <InnerCanvas />
        <Canvas
          style={{ position: "absolute", top: 50, left: 50 }}
          ref={snakeCanvas}
        />
        <Canvas
          style={{ position: "absolute", top: 50, left: 50 }}
          ref={foodCanvas}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  left: calc(50% - 300px);
  position: relative;
  box-sizing: border-box;
`;

export default Game;
