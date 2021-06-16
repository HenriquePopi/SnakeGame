import React from "react";
import "./App.css";
import Canvas from "./Components/Canvas/Canvas";
import Painter from "./Components/Painter/Painter";

function App() {
  const [xPosition, setXPosition] = React.useState(0);
  const [yPosition, setYPosition] = React.useState(0);
  const [direction, setDirection] = React.useState("right");

  React.useEffect(() => {
    document.onkeydown = checkKey;

    function checkKey(e) {
      e = e || window.event;
      // console.log(e);
      const keyCode = e.keyCode;

      switch (keyCode) {
        case 37:
          // Left pressed
          if (direction !== "right") {
            setDirection("left");
            console.log("in if :", direction);
            console.log(direction === "up" || direction === "down");
          }
          break;
        case 39:
          // Right pressed
          console.log("R");
          if (direction !== "left") setDirection("right");

          break;
        case 38:
          // Up pressed
          if (direction !== "down") setDirection("up");

          break;
        case 40:
          console.log("d");
          // Down pressed
          if (direction !== "up") setDirection("down");
          break;
      }
    }
  }, [setDirection, direction]);

  React.useEffect(() => {
    const moviment = setInterval(() => {
      switch (direction) {
        case "left":
          setXPosition((x) => x - 1);
          break;
        case "right":
          setXPosition((x) => x + 1);
          break;
        case "up":
          setYPosition((y) => y - 1);
          break;
        case "down":
          setYPosition((y) => y + 1);
          break;
      }
    }, 100);
    return () => clearInterval(moviment);
  }, [direction, setXPosition, setYPosition]);

  const draw = (ctx, x) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.fillRect(xPosition, yPosition, 20, 10);

    ctx.fill();
  };

  return <Canvas draw={draw}></Canvas>;
}

export default App;
