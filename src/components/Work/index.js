import React from 'react';
import Project from '../Project/';

import './Work.css'

class Work extends React.Component {
  render() {

    return (
      <div className="section">

      <div className="wrapper">
        <div className="work" id="work">

          <h2>
          Projects
          </h2>

          <div className="work-container">
            <Project
              imgUrl="https://i.imgur.com/uW4xyD0.png"
              githubUrl="https://www.github.com/gsvendsen/FastSecurity"
              name="Fast Security"
              logoUrl="https://github.com/gsvendsen/FastSecurity/raw/master/resources/svg/logo_black.svg?sanitize=true"
            />
            <Project
              className="middle-item"
              imgUrl="https://i.imgur.com/jaMT9Zc.png"
              githubUrl="https://www.github.com/gsvendsen/fuzzy-memory"
              name="Fuzzy Memory"
              logoUrl="https://i.imgur.com/P0Q7KVr.png"
            />
            <Project
              imgUrl="https://i.imgur.com/FMbhrOJ.png"
              githubUrl="https://www.github.com/gsvendsen/photoify"
              name="Photoify"
              logoUrl="https://i.imgur.com/Esx65xO.png"
            />
            <Project
              imgUrl="https://i.imgur.com/35aUC0f.jpg"
              githubUrl="https://github.com/adrianjung/sgn-project"
              name="SGN"
              logoUrl="https://i.imgur.com/vAKx1pf.png"
            />
          </div>

        </div>

        </div>
      </div>
    )
  }
}

export default Work
