import React from "react"
import videoSrc from "../assets/emojis.mp4"
import "../utils/requestAnimationFrame.js"
import { getMousePos } from "../utils/functions"
import Emoji from "./emoji"
import "./canvas.scss"

export default class Canvas extends React.Component {
  constructor(...props) {
    super(...props)
    this.canvas = React.createRef()
    this.video = React.createRef()
  }
  componentDidMount() {
    const video = this.video.current
    const canvas = this.canvas.current
    resizeCanvas()
    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    video.addEventListener("loadedmetadata", function() {
      Emoji.generate(canvas)
      video.play()
    })
    window.addEventListener("resize", function() {
      resizeCanvas()
      Emoji.generate(canvas)
    })

    video.addEventListener("play", function() {
      var $this = this //cache
      function loop() {
        if (!$this.paused) {
          Emoji.video = $this
          Emoji.render()
          requestAnimationFrame(loop)
        }
      } //loop
      requestAnimationFrame(loop)
    })
  } //componentd did mount

  handleClick = (e)=>{
    let { x, y } = getMousePos(this.canvas.current, e.nativeEvent)
    console.log(e.nativeEvent)

    Emoji.getEmojis.forEach(emoji => {
      emoji.move(x, y)
    })

    Emoji.createEmojis(this.canvas.current)
  } //handle click

  render() {
    return (
      <canvas ref={this.canvas} onClick={this.handleClick}>
        Please use Chrome for the best experience
        <video ref={this.video} loop muted autoPlay poster="">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </canvas>
    )
  }
}
