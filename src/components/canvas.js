import React, { useRef, useEffect } from 'react';
import '../utils/requestAnimationFrame.js';
import { getMousePos, isNotMobile } from '../utils/functions';
import Emoji from './Emoji';

export default function Canvas() {
  let inter,
    down,
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

      isNotMobile() && !Emoji.exist && Emoji.generate(canvas);
      Emoji.exist && Emoji.handleResize(w, h);
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleMouseDown = e => {
    if (Emoji.exist) {
      down = true;
      let { x, y } = getMousePos(canvasRef.current, e.nativeEvent);
      X = x;
      Y = y;
      inter = setInterval(() => {
        Emoji.add(X, Y);
      }, 100);
    }
  };

  const handleMouseMove = e => {
    if (down) {
      let { x, y } = getMousePos(canvasRef.current, e.nativeEvent);
      X = x;
      Y = y;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => {
        down = false;
        clearInterval(inter);
      }}
    >
      Please use Chrome for the best experience
    </canvas>
  );
}
