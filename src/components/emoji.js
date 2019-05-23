import { rndm } from "../utils/functions"
import videoSrc from "../assets/emojis.mp4"

let VIDEO = null
let CANVAS = null
let emojiList = []
let videoWidth = VIDEO ? VIDEO.videoWidth : 600

export default class Emoji {
  constructor(size, x = 0, y = 0, cropX, cropY) {
    this.r = videoWidth / 3 / size / 2

    // prevent over flow
    if (x + this.r > CANVAS.width) {
      this.x = x - this.r
    } else if (x - this.r < 0) {
      this.x = x + this.r
    } else {
      this.x = x
    }
    if (y + this.r > CANVAS.height) {
      this.y = y - this.r
    } else if (y - this.r < 0) {
      this.y = y + this.r
    } else {
      this.y = y
    }

    this.dx = rndm(-2, 2)
    this.dy = rndm(-2, 2)
    this.alfa = 0
    this.alfaInc = 1
    this.size = size
    this.originalSize = size
    this.opacity = 1
    this.cropX = cropX
    this.cropY = cropY
    emojiList.push(this)
  }

  draw() {
    let { size, x, y, cropX, cropY, r, alfa } = this,
      h2 = VIDEO.videoHeight / 2,
      w3 = VIDEO.videoWidth / 3,
      ctx = CANVAS.getContext("2d")

    this.r = w3 / size / 2

    // circular clipping path
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, Math.abs(r - 2), 0, 2 * Math.PI)
    ctx.clip()
    ctx.translate(x, y)

    ctx.save()
    ctx.rotate((alfa * Math.PI) / 180)

    ctx.globalAlpha = this.opacity
    ctx.drawImage(VIDEO, cropX * w3, cropY * h2, w3, h2, -r, -r, 2 * r, 2 * r)
    ctx.restore()
    ctx.restore()

    this.physics()
  }
  go(x, y) {
    this.x = x
    this.y = y
  }
  physics() {
    let nextY = this.y + this.dy
    let nextX = this.x + this.dx
    let r = this.r
    let a = this.alfaInc

    this.x += this.dx
    this.y += this.dy
    this.alfa += this.alfaInc

    if (nextY - r < 100) {
      this.size += 1
      if (this.opacity <= 0) {
        this.opacity = 0
      } else {
        this.opacity -= 0.1
      }
    }
    if (this.dy > 0 && this.size > this.originalSize) {
      this.size -= 1
      if (this.opacity >= 1) {
        this.opacity = 1
      } else {
        this.opacity += 0.1
      }
    }

    if (this.dy > 0 && nextY - r >= 100) {
      this.size = this.originalSize
      this.opacity = 1
    }

    if (nextY + r >= CANVAS.height  || nextY - r < -150) {
      this.dy = -1 * this.dy

      //rotating  https://www.youtube.com/watch?v=lfaRs70fk30
      if (this.dx < 0 && this.dy > 0 && a < 0) {
        this.alfaInc = -a
      } else if (this.dx < 0 && this.dy > 0 && a > 0) {
        this.alfaInc = -a
      } else if (this.dx > 0 && this.dy > 0 && a > 0) {
        this.alfaInc = -a
      } else if (this.dx > 0 && this.dy < 0 && a < 0) {
        this.alfaInc = -a
      }
    }

    if (nextX + r >= CANVAS.width || nextX < r) {
      this.dx = -1 * this.dx
    }
  }
} //class Emoji

const createVideo = () => {
  if (!VIDEO) {
    VIDEO = true
    console.log("VIDEO MUST load ONCE")

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
    video.preload = "none"

    video.addEventListener("loadedmetadata", function() {
      this.play()
    })

    video.addEventListener("play", function() {
      VIDEO = this
      requestAnimationFrame(start)
    })
    video.addEventListener("ended", function() {
      this.currentTime = 0
      this.play()
    })

    video.src = videoSrc
  }
}

const render = () => {
  CANVAS.getContext("2d").clearRect(0, 0, CANVAS.width, CANVAS.height)
  emojiList.forEach(emoji => {
    emoji.draw()
  })
}

const start = () => {
  if (!VIDEO.paused || !VIDEO.ended) {
    render()
    requestAnimationFrame(start)
  } else {
    VIDEO.currentTime = 0
    VIDEO.play()
  }
}

const createEmojis = (w, h) => {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      new Emoji(rndm(1.5, 4), rndm(0, w), rndm(0, h), i, k) //size, x,y, cropX, cropY
    }
  }
}

Emoji.generate = (canvas, count = 1) => {
  emojiList = [] // reset  list
  Emoji.emojiList = emojiList
  CANVAS = canvas // make canvas global
  createVideo()
  let w = canvas.width
  let h = canvas.height

  if (!count && canvas.width < 600) {
    count = 3
  } else if (!count) {
    count = 6
  }

  for (let i = 1; i <= count; i++) {
    createEmojis(w, h)
  }
  console.log("list created", emojiList)
}

window.emoji = () => Emoji.emojiList
