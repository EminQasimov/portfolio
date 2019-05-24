import React from "react"
import sceneSrc from "../assets/scene.jpg"
import "../scss/scene.scss"
import Imac from "./Imac"

const Scene = () => {
  return (
    <div className="scene-container">
      <img src={sceneSrc} alt="scene"/>
      <div className="imac">
        <Imac />
      </div>
    </div>
  )
}

export default Scene
