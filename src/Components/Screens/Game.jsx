import React from "react";

import { Canvas, NeonCanvas } from "../Canvas/Canvas.style";
import useCanvas from "../Hooks/useCanvas";
import useSnake from "../Hooks/useSnake";
import useFood from "../Hooks/useFood";
import useRules from "../Hooks/useRules";
import drawSnake from "../Drawers/Snake"
import drawFood from "../Drawers/Food"
import GameOver from './GameOver';
 import {AnimatedContainer} from '../Styles/styledComponents';
function Game({ SNAKE }) {
  let [snake, eat, stop] = useSnake(150, SNAKE);
  const [foodPosition, setFoodPosition] = useFood(0, 500);
  const isDead = useRules(
    snake,
    150,
    eat,
    stop,
    foodPosition,
    setFoodPosition,
    800,
    600
  );
  const foodCanvas = useCanvas(drawFood, foodPosition, { anime: false });
  const snakeCanvas = useCanvas(drawSnake, snake, { anime: true });

  if (isDead) return <GameOver/>

  return (
    <>
      <AnimatedContainer animate = "blinkBorderLeft">
        <NeonCanvas width={"808px"} height={"608px"} />
      </AnimatedContainer>
      <Canvas width={"800px"} height={"600px"}
        style={{ position: "absolute", top: 50, left: 50 }}
        ref={snakeCanvas}
      />
      <Canvas width={"800px"} height={"600px"}
        style={{ position: "absolute", top: 50, left: 50 }}
        ref={foodCanvas}
      />
    </>
  );
}



export default Game;
