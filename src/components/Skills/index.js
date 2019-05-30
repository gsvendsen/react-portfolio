import React from 'react';
import './Skills.css'

class Skills extends React.Component {
  render() {

    return (
      <div className="section">
          <div className="wrapper">
            <div className="skills-container">
              <h3 className="skills-header">
                Skills
              </h3>
              <ul className="align-left">

                <li>CSS/Sass</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>React</li>
                <li>Node</li>

              </ul>
              <h3 className="skills-header align-right">Learning</h3>
              <ul className="mobile-no-border">
                <li>Redux</li>
                <li>Docker</li>

              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default Skills
