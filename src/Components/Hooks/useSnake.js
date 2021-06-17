import React from "react";

function reducer(state, action) {
  const [LEFT, RIGHT, UP, DOWN] = [37, 39, 38, 40];
  const step = 5;
  switch (action.type) {
    case LEFT:
      state.snake.pop();
      state.snake.unshift({ x: state.snake[0].x - step, y: state.snake[0].y });
      return { snake: state.snake };

    case RIGHT:
      state.snake.pop();
      state.snake.unshift({ x: state.snake[0].x + step, y: state.snake[0].y });
      return { snake: state.snake };

    case UP:
      state.snake.pop();
      state.snake.unshift({ x: state.snake[0].x, y: state.snake[0].y - step });
      return { snake: state.snake };

    case DOWN:
      state.snake.pop();
      state.snake.unshift({ x: state.snake[0].x, y: state.snake[0].y + step });
      return { snake: state.snake };
    default:
      return state;
  }
}

const useSnake = (speed, Snake) => {
  const [direction, setDirection] = React.useState(0);

  const [state, dispatch] = React.useReducer(reducer, {
    snake: Snake || [
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
    ],
  });

  React.useEffect(() => {
    const [LEFT, RIGHT, UP, DOWN] = [37, 39, 38, 40];

    document.onkeydown = checkKey;
    function checkKey(e) {
      e = e || window.event;
      const keyPressed = e.keyCode;
      if (direction !== keyPressed) {
        switch (keyPressed) {
          case LEFT:
            if (direction !== RIGHT) setDirection(LEFT);
            break;
          case RIGHT:
            if (direction !== LEFT) setDirection(RIGHT);
            break;
          case UP:
            if (direction !== DOWN) setDirection(UP);
            break;
          case DOWN:
            if (direction !== UP) setDirection(DOWN);
            break;
        }
      }
    }
  }, [setDirection, direction]);

  React.useEffect(() => {
    const [LEFT, RIGHT, UP, DOWN] = [37, 39, 38, 40];

    const moviment = setInterval(() => {
      dispatch({ type: direction });
    }, speed);
    return () => clearInterval(moviment);
  }, [direction, dispatch, speed]);
  return state.snake;
};

export default useSnake;
