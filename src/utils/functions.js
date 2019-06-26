export function round(num, to = 2) {
  return Number.parseFloat(num.toFixed(to));
}

export function rndm(min, max) {
  let num = round(Math.random() * (max - min) + min);
  if (1 > num && num >= 0) num = 1;
  return num;
}

export function isNotMobile() {
  if (window.innerWidth >= 1025 && window.innerHeight >= 600) {
    return true;
  } else {
    return false;
  }
}

export function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
  };
}

export function requestInterval(fn, delay) {
  let requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        function(callback, element) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })(),
    start = new Date().getTime(),
    handle = {};
  function loop() {
    handle.value = requestAnimFrame(loop);
    let current = new Date().getTime(),
      delta = current - start;
    if (delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
  }
  handle.value = requestAnimFrame(loop);
  return handle;
}
