import React from "react"
import "./FirefoxBrowserFrame.scss"
import { Refresh } from "styled-icons/material/Refresh"
import { ArrowLeft } from "styled-icons/feather/ArrowLeft"
import { ArrowRight } from "styled-icons/feather/ArrowRight"
import { Menu } from "styled-icons/feather/Menu"
import { Star } from "styled-icons/fa-regular/Star"
import { Close } from "styled-icons/material/Close"


const FirefoxBrowserFrame = props => {
  return (
    <div id="FirefoxBrowserFrame">
      <div className="tabbar">
        <div className="tab-buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="tab">   
        </div>
        <span className="close">
            <Close/>
        </span>
        <div className="plus">
        </div>
      </div>    
      <div className="searchbar">
        <div className="buttons">
          <span>
            <ArrowLeft />
          </span>
          <span>
            <ArrowRight />
          </span>
          <span>
            <Refresh />
          </span>
        </div>
        <div className="searchinput">
          <input type="text" placeholder="facebook.com" />
           <span>
           <Star/>
             </span>
        </div>
        <div className="menuicon">
          <Menu/>
        </div>
      </div>
      <div className="content">
        {props.children ? props.children: null}
      </div>
    </div>
  )
}

export default FirefoxBrowserFrame
