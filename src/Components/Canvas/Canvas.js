import React from "react";
import useCanvas from "../Hooks/useCanvas";

import { Canvas } from "./Canvas.style";
const CanvasScreen = ({ draw, ...props }) => {
  const canvasRef = useCanvas(draw);

  return <Canvas ref={canvasRef} {...props} />;
};

export default CanvasScreen;
