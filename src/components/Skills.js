import React from 'react';

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
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>mySQL / SQLite</li>
              </ul>
              <h3 className="skills-header align-right">Learning</h3>
              <ul className="mobile-no-border">
                <li>React.js</li>
                <li>Node</li>
                <li>Laravel</li>
                <li>Wordpress</li>
              </ul>
              </div>
          </div>
      </div>
    )
  }
}

export default Skills
