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
  emojiCrops = [],
  newEmojiInc = 0,
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
  constructor(cropX, cropY, x, y, dx, dy) {
    let size = rndm(2, 3.8);
    this.originalSize = size;

    let r = floor(W3 / 20 / 2);
    let [X, Y] = checkOverBound(rndm(0, W), rndm(0, H), r);

    this.r = r;
    this.size = 20;
    this.x = x || X;
    this.y = y || Y;
    this.dx = dx || rndm(-3, 3);
    this.dy = dy || rndm(-3, 3);
    this.cropX = cropX;
    this.cropY = cropY;
    this.alfa = 0;
    this.alfaInc = 1;
  }

  draw() {
    let { x, y, cropX, cropY, alfa, r } = this;
    // circular clipping path
    CTX.save();
    CTX.beginPath();
    CTX.arc(x, y, Math.abs(r - 2), 0, 2 * Math.PI);
    CTX.clip();
    CTX.translate(x, y);
    CTX.save();
    CTX.rotate((alfa * Math.PI) / 180);
    CTX.drawImage(FRAME, cropX * W3, cropY * H2, W3, H2, -r, -r, 2 * r, 2 * r);
    CTX.restore();
    CTX.restore();

    this.move();
  }

  move() {
    let dx = this.dx,
      dy = this.dy,
      nextY = this.y + dy,
      nextX = this.x + dx,
      r = this.r,
      a = this.alfaInc;

    // check overflow
    if (nextY + r >= H || nextY < r) {
      this.dy = -this.dy;
      //____rotating____ https://youtu.be/lfaRs70fk30
      if (dx < 0 && dy > 0 && a < 0) {
        this.alfaInc = -a;
      } else if (dx < 0 && dy > 0 && a > 0) {
        this.alfaInc = -a;
      } else if (dx > 0 && dy > 0 && a < 0) {
        this.alfaInc = -a;
      } else if (dx > 0 && dy > 0 && a < 0) {
        this.alfaInc = -a;
      }
    }
    if (nextX + r >= W || nextX < r) {
      this.dx = -this.dx;
    }

    this.dx = Math.abs(this.dx) > 4 ? this.dx / 1.1 : this.dx;
    this.dy = Math.abs(this.dy) > 4 ? this.dy / 1.1 : this.dy;
    this.x += this.dx / 2;
    this.y += this.dy / 2;
    this.alfa += this.alfaInc;
    if (this.size <= this.originalSize) {
      this.size = this.originalSize;
      this.r = floor(W3 / this.size / 2);
    } else {
      this.size -= 0.3;
      this.r = floor(W3 / this.size / 2);
    }
  }
} //class Emoji

const createEmojis = count => {
  //these all of for loops is for make just one by one emojis not 6 by 6
  for (var i = 0; i < 3; i++) {
    for (var k = 0; k < 2; k++) {
      emojiCrops.push({ i, k }); // cropX, cropY
    }
  }
  if (count > 6) {
    for (let c = 0; c < Math.floor(count / 6); c++) {
      for (let a = 0; a < 6; a++) {
        Emoji.emojiList.push(new Emoji(emojiCrops[a].i, emojiCrops[a].k));
      }
    }
    for (let rest = 0; rest < count % 6; rest++) {
      Emoji.emojiList.push(new Emoji(emojiCrops[rest].i, emojiCrops[rest].k));
    }
  } else {
    for (let b = 0; b < count; b++) {
      Emoji.emojiList.push(new Emoji(emojiCrops[b].i, emojiCrops[b].k));
    }
  }
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
  Emoji.emojiList.push(
    new Emoji(
      emojiCrops[newEmojiInc % 6].i,
      emojiCrops[newEmojiInc % 6].k,
      x,
      y,
      rndm(-3, 3),
      rndm(0, -20)
    )
  ); // cropX, cropY, x, y

  Emoji.emojiList.push(
    new Emoji(
      emojiCrops[(newEmojiInc + 1) % 6].i,
      emojiCrops[(newEmojiInc + 1) % 6].k,
      x,
      y,
      rndm(-3, 3),
      rndm(0, -10)
    )
  );
  setTimeout(() => {
    Emoji.emojiList.shift();
    Emoji.emojiList.shift();
  }, 1000);

  newEmojiInc++;
};
Emoji.exist = false;

Emoji.generate = (canvas, count = 13) => {
  Emoji.emojiList = []; //reset list

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
    Emoji.exist = true;
    console.log(frames, w, h);
  }
  createVideoFrames();
};
