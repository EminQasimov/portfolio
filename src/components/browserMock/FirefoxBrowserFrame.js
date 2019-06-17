import React from 'react';
import { Refresh } from 'styled-icons/material/Refresh';
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft';
import { ArrowRight } from 'styled-icons/feather/ArrowRight';
import { Menu } from 'styled-icons/feather/Menu';
import { Star } from 'styled-icons/fa-regular/Star';
import { Close } from 'styled-icons/material/Close';

const FirefoxBrowserFrame = props => {
  let {
    tabbar,
    url,
    leftClickHandler = () => {},
    rightClickHandler = () => {},
    buttonEnter = () => {},
    buttonLeave = () => {},
    focusHandler = () => {}
  } = props;

  return (
    <div className="FirefoxBrowserFrame" style={{ ...props.style }}>
      {tabbar ? (
        <div className="tabbar">
          <div className="tab-buttons">
            <span />
            <span />
            <span />
          </div>
          <div className="tab" />
          <span className="close">
            <Close />
          </span>
          <div className="plus" />
        </div>
      ) : null}
      <div className="searchbar">
        <div
          className="buttons"
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
        >
          <span onClick={leftClickHandler} className="left-button">
            <ArrowLeft />
          </span>
          <span onClick={rightClickHandler} className="right-button">
            <ArrowRight />
          </span>
          <span style={{ display: tabbar ? 'none' : 'inline-block' }}>
            <Refresh />
          </span>
        </div>
        <div className="searchinput">
          <input
            spellCheck="false"
            type="text"
            value={url}
            onClick={e => {
              focusHandler(e.target.value);
            }}
            onChange={() => {}}
          />
          <span>
            <Star />
          </span>
        </div>
        <div className="menuicon">
          <Menu />
        </div>
      </div>

      <div className="content" style={{ height: tabbar ? null : '100%' }}>
        {props.children}
      </div>
    </div>
  );
};

export default FirefoxBrowserFrame;
