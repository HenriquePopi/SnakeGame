import React from "react";

const useCanvas = (draw, toPaint, options) => {
  const canvasRef = React.useRef(null);

  const paint = draw;

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas !== null) {
      resizeCanvas(canvas);
      const context = canvas.getContext("2d");

      let animationFrameId;

      // draw came here
      const render = () => {
        paint(context, toPaint);
        if (options?.anime === true) {
          animationFrameId = window.requestAnimationFrame(render);
        }
      };
      render();
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [paint, options, toPaint]);

  return canvasRef;
};

export default useCanvas;

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
