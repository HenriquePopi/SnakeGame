import React from "react";

const useRules = (eat, stop, snake, setFoodPosition, foodPosition) => {
  React.useEffect(() => {
    const rules = setInterval(() => {
      if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
        eat();
        setFoodPosition();
      }
      if (
        snake[0].x >= 500 ||
        snake[0].x <= -10 ||
        snake[0].y >= 500 ||
        snake[0].y <= -10
      )
        stop();

      for (let i = 1; i < snake.length; i++) {
        const peace = snake[0];
        if (peace.x === snake[i].x && peace.y === snake[i].y) stop();
      }
    }, 150);

    return () => clearInterval(rules);
  }, [foodPosition, snake, stop, eat, setFoodPosition]);

  return;
};
