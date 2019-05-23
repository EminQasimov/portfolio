import React from "react"
import "../utils/requestAnimationFrame.js"
import { getMousePos, debounce } from "../utils/functions"
import Emoji from "./emoji"
import "../scss/canvas.scss"

export default class Canvas extends React.Component {
  constructor(...props) {
    super(...props)
    this.canvas = React.createRef()
    this.video = React.createRef()
  }
  componentDidMount() {
    const canvas = this.canvas.current

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight/1.6
      Emoji.generate(canvas,7)
    }
    resizeCanvas()
    var myEfficientFn = debounce(function() {
      resizeCanvas()
    }, 250)

    window.addEventListener("resize", myEfficientFn)
  } //componentd did mount

  handleMouseDown = e => {
    let { x, y } = getMousePos(this.canvas.current, e.nativeEvent)
    Emoji.generate(this.canvas.current,7)

    Emoji.emojiList.forEach(emoji => {
      emoji.go(x, y)
    })
  } //handle click

  render() {
    return (
      <canvas
        ref={this.canvas}
        onMouseDown={this.handleMouseDown}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        Please use Chrome for the best experience
      </canvas>
    )
  }
}
