import React from 'react';
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
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p>My</p>
        <h1>Skills</h1>
        {/* <div className="emin"></div> */}

        <VisibilitySensor>
          {({ isVisible }) => (
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
              <div className="radial-progress-wrapper">
                <div className="radial-progress">
                  <div className="real-radial">
                    <div className="hand"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
}
