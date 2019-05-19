import React, { Component } from "react"
import "./canvas.scss"
import "../utils/requestAnimationFrame"
import { Stage, Layer } from "react-konva"
import Emojis from "./emojis"
import { round, rndm } from "../utils/functions"

let W = window.innerWidth
let H = window.innerHeight / 1.5

export default class Canvas extends Component {
  layer = React.createRef()
  emojis = React.createRef()
  state = {
    count: round(rndm(11, 33), 0)
  }

  componentDidMount() {
    this.animate()
  }
  animate() {
    let gravity = 1,
      animation,
      fraction = 1,
      cancel = false,
      layer = this.layer.current
    console.log(" i am animate")

    var draw = () => {
      layer.find("Circle").forEach(emoji => {
        if (emoji) {
          let scale = emoji.attrs.scaleY
          let dy = emoji.attrs.dy
          let sum = emoji.y() + (emoji.radius() * scale + 4) + dy

          //  falling ball physics
          if (sum >= H) {
            emoji.attrs.dy = round(-dy * fraction)
          } else {
            emoji.attrs.dy += gravity
          }
          emoji.move({
            x: 0,
            y: round(emoji.attrs.dy)
          })
        }
      })

      // stop animation if energy loosed
      fraction = round(fraction - 0.005)
      if (fraction <= 0) {
        cancel = true
      }
      layer.batchDraw()
      cancel
        ? cancelAnimationFrame(animation)
        : (animation = requestAnimationFrame(draw))
    }
    draw()
  }

  handleClick = () => {
    
    this.setState({
      count: round(rndm(11, 33), 0)
    })
  }
  render() {
    return (
      <Stage width={W} height={H} onClick={this.handleClick}>
        <Layer ref={this.layer}>
          <Emojis ref={this.emojis} count={this.state.count} />
        </Layer>
      </Stage>
    )
  }
}
