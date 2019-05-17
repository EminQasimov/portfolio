import React from "react"
import videoSrc from "../assets/emojis.mp4"
import "../utils/requestAnimationFrame.js"
import "./canvas.scss"

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
  }
}

class Emoji {
  constructor(canvas, video, size, x = 50, y = 50) {
    this.x = x
    this.y = y
    this.canvas = canvas
    this.video = video
    this.size = size
  }
  move(x, y) {
    this.x = x
    this.y = y
    this.draw(this.video)
  }
  draw(video) {
    let { x, y, canvas, size } = this,
      W = video.videoWidth,
      H = video.videoHeight,
      videoWidth = W / (3 * size),
      videoHeight = H / (2 * size),
      r = videoWidth / 2,
      ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalCompositeOperation = "source-over" //default
    ctx.drawImage(video, 0, 0, W / 3, H / 2, x - r, y - r, videoWidth, videoHeight)
    ctx.fillStyle = "#fff" //color doesn't matter, but we want full opacity
    ctx.globalCompositeOperation = "destination-in"
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI, true)
    ctx.fill()
  }
}

export default class Canvas extends React.Component {
  constructor(...args) {
    super(...args)
    this.canvas = React.createRef()
    this.video = React.createRef()
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const video = this.video.current
    const canvas = this.canvas.current
    this.like = new Emoji(canvas, video, 2)
    const that = this
    video.addEventListener("loadedmetadata", function() {
      canvas.width = 500
      canvas.height = 400
      video.play()
    })

    video.addEventListener("play", function() {
      var $this = this //cache
      function loop() {
        if (!$this.paused) {
          that.like.draw($this)
          requestAnimationFrame(loop)
        }
      }
      requestAnimationFrame(loop)
    })
  } //componentd did mount

  handleMouseMove(e) {
    let { x, y } = getMousePos(this.canvas.current, e)
    this.like.move(x, y)
  }
  handleClick(e) {
    let { x, y } = getMousePos(this.canvas.current, e)
    this.like.move(x, y)
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        onClick={e => {
          let nativeEvent = e.nativeEvent
          this.handleClick(nativeEvent)
        }}
        onMouseMove={e => {
          let nativeEvent = e.nativeEvent
          this.handleMouseMove(nativeEvent)
        }}
      >
        Please use Chrome for the best experience
        <video ref={this.video} loop muted autoPlay preload="auto">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </canvas>
    )
  }
}
