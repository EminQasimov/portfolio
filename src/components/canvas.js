// const isNotMobile = () => {
//   if (window.innerWidth >= 1000 && window.innerHeight >= 600 ) {
//     return true;
//   } else {
//     return false;
//   }
// }
import React, { useRef, useEffect } from 'react';
import '../utils/requestAnimationFrame.js';
import { getMousePos, debounce } from '../utils/functions';
import Emoji from './Emoji';

export default function Canvas(props) {
  let inter;
  const canvasRef = useRef();
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    return [canvas.width, canvas.height];
  };
  useEffect(() => {
    resizeCanvas();
    // if (window.innerWidth >= 800 && window.innerHeight >= 600) {
    Emoji.generate(canvasRef.current);
    // }

    const myEfficientFn = debounce(function() {
      let [w, h] = resizeCanvas();
      Emoji.handleResize(w, h);
    }, 250);

    window.addEventListener('resize', myEfficientFn);
    return () => {
      window.removeEventListener('resize', myEfficientFn);
    };
  }, []);

  const handleMouseDown = e => {
    const canvas = canvasRef.current;

    let { x, y } = getMousePos(canvas, e.nativeEvent);
    inter = setInterval(() => {
      if (Emoji.exist) {
        Emoji.add(x, y);
        // Emoji.emojiList.forEach((emoji)=>{
        //   emoji.go(x, y)
        // })
      }
    }, 100);
  };

  const handleMouseUp = e => {
    clearInterval(inter);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      Please use Chrome for the best experience
    </canvas>
  );
}
