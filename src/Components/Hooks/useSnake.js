import React from "react";

function reducer(state, action) {
  const [LEFT, RIGHT, UP, DOWN] = [37, 39, 38, 40];
  switch (action.type) {
    case LEFT:
      if (
        state.snake[0].x - 10 !== state.snake[1].x &&
        state.snake[0].y - 0 !== state.snake[1].y
      ) {
        state.step = { x: -10, y: 0 };
        state.direction = LEFT;
        return state;
      }
      return state;
    case RIGHT:
      if (
        state.snake[0].x + 10 !== state.snake[1].x &&
        state.snake[0].y - 0 !== state.snake[1].y
      ) {
        state.step = { x: 10, y: 0 };
        state.direction = RIGHT;
        return state;
      }
      return state;
    case UP:
      if (
        state.snake[0].x - 0 !== state.snake[1].x &&
        state.snake[0].y - 10 !== state.snake[1].y
      ) {
        state.step = { x: 0, y: -10 };
        state.direction = UP;
      }
      return state;
    case DOWN:
      if (
        state.snake[0].x - 0 !== state.snake[1].x &&
        state.snake[0].y + 10 !== state.snake[1].y
      ) {
        state.step = { x: 0, y: 10 };
        state.direction = DOWN;
        return state;
      }

      return state;
    case "go":
      if (state.stop === false && state.crash === false) {
        state.snake.unshift({
          x: state.snake[0].x + state.step.x,
          y: state.snake[0].y + state.step.y,
        });
        state.snake.pop();
      }
      return state;
    case "food":
      state.snake = [
        ...state.snake,
        state.snake[1],
        state.snake[1],
        state.snake[1],
        state.snake[1],
      ];
      return state;
    case "stop":
      return { ...state, stop: true };
    case "start":
      return { ...state, stop: false };
    default:
      return state;
  }
}

const useSnake = (speed) => {
  const [state, dispatch] = React.useReducer(reducer, {
    snake: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 20, y: 0 },
    ],
    step: { x: 0, y: 10 },
    direction: 0,
    stop: true,
    crash: false,
  });

  React.useEffect(() => {
    document.onkeydown = checkKey;

    function checkKey(e) {
      e = e || window.event;
      const keyPressed = e.keyCode;
      dispatch({ type: keyPressed });
    }
  }, [dispatch]);

  React.useEffect(() => {
    const moviment = setInterval(() => {
      dispatch({ type: "go" });
    }, speed);
    return () => clearInterval(moviment);
  }, [dispatch, speed]);

  return [
    state.snake,
    () => dispatch({ type: "food" }),
    () => dispatch({ type: "stop" }),
    () => dispatch({ type: "start" }),
  ];
};

export default useSnake;
