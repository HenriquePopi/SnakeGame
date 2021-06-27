import React from "react";

import { Canvas, NeonCanvas } from "../Canvas/Canvas.style";
import useCanvas from "../Hooks/useCanvas";
import useSnake from "../Hooks/useSnake";
import useFood from "../Hooks/useFood";
import useRules from "../Hooks/useRules";
import drawSnake from "../Drawers/Snake"
import drawFood from "../Drawers/Food"

function Game({SNAKE}) {
  let [snake, eat, stop] = useSnake(150, SNAKE);
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
    
        <NeonCanvas width ={"808px"} height ={"608px"} />
        <Canvas width ={"800px"} height ={"600px"}
          style={{ position: "absolute", top: 50, left: 50 }}
          ref={snakeCanvas}
        />
        <Canvas  width ={"800px"} height ={"600px"}
          style={{ position: "absolute", top: 50, left: 50 }}
          ref={foodCanvas}
        />
     
    </>
  );
}



export default Game;
