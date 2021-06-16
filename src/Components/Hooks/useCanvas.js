import React from "react";

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
  }
}

const useCanvas = (draw) => {
  const canvasRef = React.useRef(null);

  const paint = draw;

  React.useEffect(() => {
    const canvas = canvasRef.current;

    resizeCanvas(canvas);

    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    // draw came here
    const render = () => {
      //   frameCount++;
      paint(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [paint]);

  return canvasRef;
};

export default useCanvas;
