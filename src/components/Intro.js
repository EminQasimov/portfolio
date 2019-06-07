import React from "react"

//--------icons
import { Document } from "styled-icons/typicons/Document"
import { Download } from "styled-icons/boxicons-regular/Download"
import { Facebook } from "styled-icons/feather/Facebook"
import { Github } from "styled-icons/feather/Github"
import { Twitter } from "styled-icons/feather/Twitter"
import { Codepen } from "styled-icons/feather/Codepen"

export default function Intro() {
  return (
      <section className="intro">
        <div className="container">
          <aside className="left">
            <div>
              <ul className="menu-list">
                <li>
                  <a href="#two">About</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Emin Qasımov</h1>
              <h3>Front-end Developer</h3>
            </div>
            <div>
              <div className="cv-buttons">
                <button className="view-cv">
                  <Document /> view my cv
                </button>
                <span>or</span>
                <button className="download-cv">
                  <Download />
                  download
                </button>
              </div>
            </div>
            <div>
              <ul className="social-buttons">
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Github />
                </li>
                <li>
                  <Codepen />
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <aside className="right">
          <div className="circle one" />
          <div className="circle two" />
          <div className="circle three" />
          <div className="circle four" />
          <div className="me" />
        </aside>
      </section>
  )
}
