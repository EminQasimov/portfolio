import React, { useRef, useEffect } from 'react';
import '../utils/requestAnimationFrame.js';
import { getMousePos, debounce } from '../utils/functions';
import Emoji from './Emoji';

const isNotMobile = () => {
  if (window.innerWidth >= 800 && window.innerHeight >= 600) {
    return true;
  } else {
    return false;
  }
};

export default function Canvas(props) {
  const canvasRef = useRef();
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    if (isNotMobile()) Emoji.generate(canvas);
  };
  useEffect(() => {
    resizeCanvas();
    const myEfficientFn = debounce(function() {
      resizeCanvas();
    }, 250);
    window.addEventListener('resize', myEfficientFn);
    return () => {
      window.removeEventListener('resize', myEfficientFn);
    };
  }, []);

  const handleClick = e => {
    let { x, y } = getMousePos(canvasRef.current, e.nativeEvent);
    if (window.innerWidth >= 800 && window.innerHeight >= 600) {
      Emoji.emojiList.forEach(emoji => {
        emoji.go(x, y);
      });
    }
  };

  return (
    <canvas ref={canvasRef} onClick={handleClick}>
      Please use Chrome for the best experience
    </canvas>
  );
}