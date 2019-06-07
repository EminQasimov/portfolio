import { rndm } from "../utils/functions"
import videoSrc from "../assets/emojis.mp4"

let VIDEO,
  CANVAS,
  CTX,
  H,
  W,
  H2, //videoHeight/2
  W3, // videoWidth/3
  canMakeEmojis,
  frame,
  { floor } = Math

const checkOverBound = (x, y, r) => {
  let X, Y
  if (x + r >= W) {
    X = x - r
  } else if (x < r) {
    X = x + r
  } else {
    X = x
  }
  if (y + r >= H) {
    Y = y - r
  } else if (y < r) {
    Y = y + r
  } else {
    Y = y
  }
  return [floor(X), floor(Y)]
}

class Emoji {
  constructor(size, x = 0, y = 0, cropX, cropY) {
    let r = floor(W3 / size / 2)
    let [X, Y] = checkOverBound(x, y, r)
    this.r = r
    this.x = X
    this.y = Y
    this.dx = rndm(-2, 2)
    this.dy = rndm(-2, 2)
    this.alfa = 0
    this.size = floor(size)
    this.cropX = cropX
    this.cropY = cropY
  }

  draw() {
    let { x, y, cropX, cropY, r, alfa } = this
    // circular clipping path
    CTX.save()
    CTX.beginPath()
    CTX.arc(x, y, Math.abs(r - 2), 0, 2 * Math.PI)
    CTX.clip()
    CTX.translate(x, y)
    CTX.save()

    CTX.rotate((alfa * Math.PI) / 180)
    CTX.drawImage(VIDEO, cropX * W3, cropY * H2, W3, H2, -r, -r, 2 * r, 2 * r)
    // if (window.devicePixelRatio >= 1) { 
    //   CTX.scale(2, 2);
    // } 
    CTX.restore()
    CTX.restore()

    this.physics()
  }

  physics() {
    let nextY = this.y + this.dy,
      nextX = this.x + this.dx,
      r = this.r

    // overflow
    if (nextY + r >= H || nextY < r) {
      this.dy = -this.dy
    }
    if (nextX + r >= W || nextX < r) {
      this.dx = -this.dx
    }
  
    this.dx = floor(this.dx)
    this.dy = floor(this.dy)
    this.x += this.dx
    this.y += this.dy
    

  }
  go(x, y) {
    let [X, Y] = checkOverBound(x, y, this.r)
    this.x = X
    this.y = Y
    this.dx = rndm(-3, 3)
    this.dy = rndm(-3, 3)
  }
} //class Emoji

const createVideo = cb => {
  if (!VIDEO) {
    VIDEO = true
    let video = document.createElement("video")
    let type
    if (video.canPlayType("video/mp4")) {
      type = "movie.mp4"
    } else {
      type = "movie.ogg"
    }
    video.type = type
    video.loop = true
    video.autoplay = true
    video.defaultMuted = true
    video.muted = true
    video.controls = false
    video.poster = ""
    video.preload = "auto"

    video.addEventListener("loadedmetadata", function() {
      this.play()
    })

    video.addEventListener(
      "play",
      function() {
        VIDEO = this
        requestAnimationFrame(() => start(cb))
      },
      false
    )
    video.removeEventListener('error', function(){
        cancelAnimationFrame(frame)
    }, true);
    
    video.src = videoSrc
  } else {
    cb()
  }
}

const render = () => {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
  Emoji.emojiList.forEach(emoji => {
    emoji.draw()
  })
}

const start = cb => {
  if (!canMakeEmojis) {
    canMakeEmojis = true
    H2 = VIDEO.videoHeight / 2
    W3 = VIDEO.videoWidth / 3
    cb()
  }

  if (!VIDEO.paused || !VIDEO.ended) {
    render()
    if (VIDEO.currentTime >= VIDEO.duration - 0.03) {
      setTimeout(() => {
        frame = requestAnimationFrame(start)
      }, 60) // chrome cant handle seemless video loop,
    } else {
      frame = requestAnimationFrame(start)
    }
  }
} // start

const createEmojis = () => {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      Emoji.emojiList.push(
        new Emoji(rndm(1.4, 4), rndm(0, W), rndm(0, H), i, k)
      ) //size, x,y, cropX, cropY
    }
  }
}

Emoji.generate = (canvas, count = 4) => {
  Emoji.emojiList = [] //reset list
  CANVAS = canvas // make canvas global
  CTX = canvas.getContext("2d")
  W = canvas.width
  H = canvas.height

  createVideo(() => {
    for (let i = 1; i <= count; i++) {
      createEmojis()
    }
  })
}

export default Emoji
