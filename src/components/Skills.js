import React from 'react';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p>My</p>
        <h1>Skills</h1>
        {/* <div className="emin"></div> */}
        <ul>
          <li>
            <h1>Frontend</h1>
            <p style={{ width: '80%' }} data-value="80">
              HTML5
            </p>
            <progress max="100" value="80" className="html5"></progress>
            <p style={{ width: '60%' }} data-value="60">
              CSS3
            </p>
            <progress max="100" value="60" className="css3"></progress>
            <p style={{ width: '50%' }} data-value="50">
              jQuery
            </p>
            <progress max="100" value="50" className="jquery"></progress>
          </li>
          <li>
            <h1>Backend</h1>
            <p style={{ width: '75%' }} data-value="75">
              Python
            </p>
            <progress max="100" value="75" className="python"></progress>
            <p style={{ width: '65%' }} data-value="65">
              PHP
            </p>
            <progress max="100" value="65" className="php"></progress>
            <p style={{ width: '35%' }} data-value="35">
              Node.js
            </p>
            <progress max="100" value="35" className="node-js"></progress>
          </li>
        </ul>
      </div>
    </section>
  );
}
