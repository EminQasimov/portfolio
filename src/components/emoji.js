import { round, rndm } from "../utils/functions"

export default class Emoji {
  constructor(size, x, y, cropX, cropY) {
    this.x = x
    this.y = y
    this.dx = rndm(-11, 11)
    this.dy = rndm(-11, 11)
    this.g = 0.2
    this.f = 1 //friction 0.5
    this.size = size
    this.cropX = cropX
    this.cropY = cropY
    Emoji.getEmojis.push(this)
  }

  move(x, y) {
    // this.x = x
    this.y = y
    this.draw()
  }
  draw() {
    let video = Emoji.video
    let canvas = Emoji.canvas
    let { size, cropX, cropY, f } = this,
      H = video.videoHeight,
      W = video.videoWidth,
      w3 = W / 3, //aspect ratio 3:2
      h2 = H / 2,
      width = round(w3 / size),
      height = round(h2 / size),
      r = round(width / 2),
      ctx = canvas.getContext("2d")

    //------ bouncing---

    if (this.y + this.dy + r >= canvas.height) {
      this.dy = -this.dy * f
    } else {
      this.dy += this.g
    }

    if (this.x + this.dx + r >= canvas.width) {
      this.dx = -this.dx * f
    } else {
      this.dx += this.g
    }

    this.y += this.dy
    // this.x += this.dx
    this.dx = round(this.dx)
    this.dy = round(this.dy)
    this.x = round(this.x)
    this.y = round(this.y)

    // circular clipping path
   
    
    ctx.beginPath()
    ctx.arc(this.x, this.y, r - 2, 0, 2 * Math.PI, true)
    ctx.save()
    ctx.clip()
    ctx.drawImage(
      video,
      cropX * w3,
      cropY * h2,
      w3,
      h2,
      this.x - r,
      this.y - r,
      width,
      height
    )

    ctx.restore()
  }
} //emoji class

Emoji.render = () => {
  let c = Emoji.canvas
  c.getContext("2d").clearRect(0, 0, c.width, c.height)
  Emoji.getEmojis.forEach(emoji => {
    emoji.draw()
  })
}

Emoji.createEmojis = canvas => {
  let w = canvas.width
  let h = canvas.height
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      new Emoji(rndm(2, 4.5), rndm(0, w), rndm(100, h - 150), i, k) //size, x,y, cropX, cropY
    }
  }
}

Emoji.generate = canvas => {
  Emoji.getEmojis = []
  Emoji.canvas = canvas
  let count = Emoji.count

  if (!count && canvas.width < 600) {
    count = 3
  } else if (!count) {
    count = 6
  }
  for (let i = 1; i <= count; i++) {
    Emoji.createEmojis(canvas)
  }
}
