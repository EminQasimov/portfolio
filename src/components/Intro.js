import React from 'react';

//--------icons
import { Document } from 'styled-icons/typicons/Document';
import { Download } from 'styled-icons/boxicons-regular/Download';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Github } from 'styled-icons/feather/Github';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Codepen } from 'styled-icons/feather/Codepen';
import { MediumOld } from 'styled-icons/boxicons-logos/MediumOld';

import cv from '../assets/EminQasimovCV.pdf';

export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <aside className="left">
          <div>
            <ul className="menu-list">
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
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Emin Qasımov</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div>
            <div className="cv-buttons">
              <button className="view-cv">
                <a
                  href="#viewcv"
                  onClick={e => {
                    e.preventDefault();
                    window.open(cv, 'Emin Qasimov CV');
                  }}
                >
                  <Document /> view my cv
                </a>
              </button>
              <span> or </span>
              <button className="download-cv">
                <a href={cv} download>
                  <Download /> download
                </a>
              </button>
            </div>
          </div>
          <div>
            <ul className="social-buttons">
              <a href="https://facebook.com/emin.qasimovdia">
                <li>
                  <Facebook />
                </li>
              </a>

              <a href="https://twitter.com/webkoder">
                <li>
                  <Twitter />
                </li>
              </a>

              <a href="https://github.com/eminqasimov">
                <li>
                  <Github />
                </li>
              </a>
              <a href="https://codepen.io/eminqasimov">
                <li>
                  <Codepen />
                </li>
              </a>
              <a href="https://medium.com/@eminqasimov">
                <li>
                  <MediumOld />
                </li>
              </a>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
