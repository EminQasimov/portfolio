import React, { Component } from "react"
import { Group, Circle } from "react-konva"
import url from "../assets/reactions-min.png" // 1800x300
import {rndm, round, times} from "../utils/functions"


let imageWidth = 1800,
  r = imageWidth / 6 / 2,
  W = window.innerWidth,
  H = window.innerHeight / 1.5

export default class Emojis extends Component {
  constructor(...args) {
    super(...args)
    const img = new window.Image()
    img.onload = () => {
      this.setState({
        fillPatternImage: img
      })
    }
    img.src = url
    this.state = {
      fillPatternImage: null
    }
  }

  generate() {
    let emojiList = []

    times(this.props.count, i => {
      let scale = rndm(0.1, 0.35)
      let x = round(rndm(r * scale - 4, W - r * scale - 4))
      let y = round(rndm(r * scale - 4, H - r * scale - 4))

      emojiList.push(
        <Circle
          x={x}
          y={y}
          dy={0}
          scale={{
            x: scale,
            y: scale
          }}
          fillPatternOffset={{
            x: r + ((i % 6) * imageWidth) / 6,
            y: r
          }}
          key={i}
          radius={r - 4}
          draggable
          fillPatternImage={this.state.fillPatternImage}
        />
      )
    })
    console.log("i am generate new list")
    return emojiList
  }

  render() {
    return <Group>{this.state.fillPatternImage ? this.generate() : null}</Group>
  }
}
