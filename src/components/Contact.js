import React from 'react';

import { Facebook } from 'styled-icons/feather/Facebook';
import { Github } from 'styled-icons/feather/Github';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Codepen } from 'styled-icons/feather/Codepen';
import { MediumOld } from 'styled-icons/boxicons-logos/MediumOld';
import { Mail } from 'styled-icons/octicons/Mail';
import { LocationOutline } from 'styled-icons/typicons/LocationOutline';
import { LocalPhone } from 'styled-icons/material/LocalPhone';

function Contact() {
  return (
    <section className="contact bg" id="about">
      <div className="container">
        <div className="contact-about">
          <p>Who</p>
          <h1>I am</h1>
          <div className="about">
            I wrote my first "Hello World" in 2013 and started off as a
            self-taught coder. Nearly 2 years later, I am now a full- fledged
            Frontend developer. I improve my knowledge and skills continually
            and learn new, modern technologies - like GraphQL, SSR, Testing,
            NoSQL, Typescript, SVG, React Spring etc. for creating amazing,
            performant web applications. When I don't write code or read books,
            I play the accordion and write technical articles on Medium. If you
            want to contact and get faster response then use Messenger below.
          </div>
        </div>

        <div className="contact-info">
          <p>My</p>
          <h1>Contacts</h1>
          <div className="contact-info-list">
            <div className="contact-left">
              <ul className="contact-text">
                <li>
                  <Mail size={28} />
                  <a href="mailto:eminqasimov@outlook.com">
                    {' '}
                    eminqasimov@outlook.com
                  </a>
                </li>
                <li>
                  <LocationOutline size={28} /> Baku, Azerbaijan
                </li>
                <li>
                  <LocalPhone size={28} />
                  <a href="tel:+994517873301"> (+99451) 787 33 01</a>
                </li>
              </ul>

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
