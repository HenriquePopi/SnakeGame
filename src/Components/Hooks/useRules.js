import React from "react";

const useRules = (
  snake,
  speed,
  eat,
  die,
  foodPosition,
  setFoodPosition,
  canvasWidth,
  canvasHeigth
) => {
  const [isDead, setIsDead] = React.useState(false);
  React.useEffect(() => {
    if (isDead) return;
    const rulesInterval = setInterval(() => {
      console.log("rules");
      if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
        eat();
        setFoodPosition();
      }
      if (
        snake[0].x >= canvasWidth ||
        snake[0].x <= -10 ||
        snake[0].y >= canvasHeigth ||
        snake[0].y <= -10
      ) {
        die();
        setIsDead(true);
      }
      for (let i = 1; i < snake.length; i++) {
        const peace = snake[0];
        if (peace.x === snake[i].x && peace.y === snake[i].y) {
          die();
          setIsDead(true);
        }
      }
    }, speed - 50);

    return () => clearInterval(rulesInterval);
  }, [
    snake,
    speed,
    eat,
    die,
    foodPosition,
    setFoodPosition,
    canvasWidth,
    canvasHeigth,
    isDead,
    setIsDead,
  ]);
};

export default useRules;
