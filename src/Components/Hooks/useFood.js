import React from "react";

const getRandomPosition = (min, max) => {
  min = min / 10;
  max = max / 10;
  const randomInt = () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min) * 10;
  };
  const position = { x: randomInt(), y: randomInt() };
  return position;
};

const useFood = (min, max) => {
  const [position, setPosition] = React.useState({ x: -10, y: -10 });
  console.log("food");
  return [position, () => setPosition(getRandomPosition(min, max))];
};

export default useFood;
