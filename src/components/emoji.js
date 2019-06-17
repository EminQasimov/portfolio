import { rndm, requestInterval } from '../utils/functions';
import videoSrc from '../assets/emojis.mp4';
import extractFramesFromVideo from '../utils/extractFramesFromVideo';

let CTX,
  H, //CANVAS.height
  W, //CANVAS.width
  H2, //videoHeight/2
  W3, // videoWidth/3
  currentFrame = 0,
  FRAME,
  FRAMES,
  { floor } = Math;

const checkOverBound = (x, y, r) => {
  let X, Y;
  if (x + r >= W) {
    X = x - r;
  } else if (x < r) {
    X = x + r;
  } else {
    X = x;
  }
  if (y + r >= H) {
    Y = y - r;
  } else if (y < r) {
    Y = y + r;
  } else {
    Y = y;
  }
  return [floor(X), floor(Y)];
};

export default class Emoji {
  constructor(cropX, cropY, x, y) {
    let size = rndm(1.5, 3);
    let r = floor(W3 / size / 2);
    let [X, Y] = checkOverBound(rndm(0, W), rndm(0, H), r);

    this.r = r;
    this.size = size;
    this.x = x || X;
    this.y = y || Y;
    this.dx = rndm(-3, 3);
    this.dy = rndm(-3, 3);
    this.cropX = cropX;
    this.cropY = cropY;
  }

  draw() {
    let { x, y, cropX, cropY, r } = this;
    // circular clipping path
    CTX.save();
    CTX.beginPath();
    CTX.arc(x, y, Math.abs(r - 2), 0, 2 * Math.PI);
    CTX.clip();
    CTX.translate(x, y);
    CTX.save();
    // CTX.rotate((alfa * Math.PI) / 140)
    CTX.drawImage(FRAME, cropX * W3, cropY * H2, W3, H2, -r, -r, 2 * r, 2 * r);
    CTX.restore();
    CTX.restore();

    this.physics();
  }

  physics() {
    let nextY = this.y + this.dy,
      nextX = this.x + this.dx,
      r = this.r;

    // overflow
    if (nextY + r >= H || nextY < r) {
      this.dy = -this.dy;
    }
    if (nextX + r >= W || nextX < r) {
      this.dx = -this.dx;
    }

    this.dx = floor(this.dx);
    this.dy = floor(this.dy);
    this.x += this.dx / 2;
    this.y += this.dy / 2;
  }
  go(x, y) {
    let [X, Y] = checkOverBound(x, y, this.r);
    this.x = X;
    this.y = Y;
    this.dx = rndm(-3, 3);
    this.dy = rndm(-3, 3);
  }
} //class Emoji

const createEmojis = count => {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      Emoji.emojiNames.push(new Emoji(i, k)); // cropX, cropY
    }
  }

  for (let c = 0; c < count; c++) {}
};

const drawEmojis = img => {
  CTX.clearRect(0, 0, W, H);
  Emoji.emojiList.forEach(emoji => {
    emoji.draw(img);
  });
  requestAnimationFrame(drawEmojis);
};

Emoji.handleResize = (w, h) => {
  W = w;
  H = h;
};

Emoji.add = (x, y) => {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      Emoji.emojiList.push(new Emoji(i, k, x, y)); // cropX, cropY
    }
  }
};
Emoji.exist = false;

Emoji.generate = (canvas, count = 2) => {
  Emoji.emojiList = []; //reset list
  Emoji.emojiNames = []; //emojis Names WoW Like Love ...
  Emoji.exist = true;
  CTX = canvas.getContext('2d');
  W = canvas.width;
  H = canvas.height;

  async function createVideoFrames() {
    let [frames, w, h] = await extractFramesFromVideo(videoSrc, 8); // offscreen canvas

    H2 = h / 2; // Emoji aspect ratio 3x2
    W3 = w / 3;
    FRAMES = frames;
    FRAME = FRAMES[0];
    createEmojis(count); // 2 count x 6 = 12 emojis
    drawEmojis();

    requestInterval(function(e) {
      if (currentFrame >= FRAMES.length - 1) {
        currentFrame = 1;
      }
      FRAME = FRAMES[currentFrame++];
    }, 70);

    console.log(frames, w, h);
  }
  createVideoFrames();
};
