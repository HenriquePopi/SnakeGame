import React from "react";

import { Canvas } from "./Canvas.style";
const CanvasScreen = (props) => {
  const canvasRef = React.useRef(null);
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  return <Canvas ref={canvasRef} {...props} />;
};

export default CanvasScreen;
