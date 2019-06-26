import React, { useRef, useEffect } from 'react';
import '../utils/requestAnimationFrame.js';
import { getMousePos, isNotMobile } from '../utils/functions';
import Emoji from './Emoji';

export default function Canvas() {
  let inter,
    X,
    Y,
    canvasRef = useRef();

  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current,
        w = canvas.offsetWidth,
        h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      if (isNotMobile() && Emoji.isFirst) {
        Emoji.generate(canvas);
      }
      Emoji.exist && Emoji.handleResize(w, h);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleMouseMove = e => {
    if (isNotMobile() && Emoji.exist) {
      let { x, y } = getMousePos(canvasRef.current, e);
      X = x;
      Y = y;

      Emoji.add(X, Y);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={e => handleMouseMove(e.nativeEvent)}
      onMouseLeave={() => {
        clearInterval(inter);
      }}
    >
      Please use Chrome for the best experience
    </canvas>
  );
}
