import React from 'react';

const data = [
  {
    L: 'html5, Pug',
    P: '90%',
    C: 'rgb(255, 51, 0)'
  },
  {
    L: 'React.js',
    P: '80%',
    C: '#00d8ff'
  },
  {
    L: 'javascript, ES6 - ES9',
    P: '80%',
    C: '#f7df1e'
  },

  {
    L: 'Redux, Styled-Components',
    P: '75%',
    C: 'blueviolet'
  },
  {
    L: 'css3, Flexbox, RWD, BEM',
    P: '90%',
    C: 'rgb(0, 119, 255)'
  },
  {
    L: 'Node.js',
    P: '60%',
    C: 'green'
  },
  {
    L: 'Sass, Less',
    P: '70%',
    C: '#cd6799'
  },
  {
    L: 'Express.js',
    P: '70%',
    C: 'gray'
  }
];

const Skill = ({ L, P, C }) => {
  return (
    <li className="skill">
      <div className="skill-title">
        <span className="lang">{L}</span>
        <span className="percentage">{P}</span>
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: P }}>
          <div className="real-bar" style={{ color: C }}></div>
        </div>
      </div>
    </li>
  );
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p>My</p>
        <h1>Skills</h1>
        <div className="wrapper-two">
          <ul className="skill-items">
            {data.map(e => (
              <Skill {...e} key={e.L} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
