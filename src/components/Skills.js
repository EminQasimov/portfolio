import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const data = [
  {
    lang: 'html5',
    percentage: '90%',
    color: 'rgb(255, 51, 0)'
  },
  {
    lang: 'css3',
    percentage: '90%',
    color: 'rgb(0, 119, 255)'
  },
  {
    lang: 'javascript',
    percentage: '75%',
    color: '#f7df1e'
  },
  {
    lang: 'React.js',
    percentage: '70%',
    color: '#00d8ff'
  },
  {
    lang: 'Redux',
    percentage: '70%',
    color: 'blueviolet'
  }
];

const Skill = ({ lang, percentage, color }) => {
  return (
    <li className="skill">
      <div className="skill-title">
        <span className="lang">{lang}</span>
        <span className="percentage">{percentage}</span>
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: percentage }}>
          <div className="real-bar" style={{ color }}></div>
        </div>
      </div>
    </li>
  );
};

export default function Skills() {
  const [active, setActive] = useState(true);
  return (
    <section className="skills" id="skills">
      <VisibilitySensor
        active={active}
        onChange={isVisible => {
          if (isVisible) setActive(false);
        }}
      >
        {({ isVisible }) => (
          <div className="container">
            <p>My</p>
            <h1>Skills</h1>
            {/* <div className="emin"></div> */}

            <div
              className={
                isVisible ? 'wrapper-two animate-width' : 'wrapper-two'
              }
            >
              <ul className="skill-items">
                {data.map(e => (
                  <Skill {...e} key={e.lang} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  );
}
