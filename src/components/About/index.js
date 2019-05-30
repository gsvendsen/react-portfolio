import React from 'react';
import ReactSVG from 'react-svg';

import './About.css'

class About extends React.Component {
  render() {

    return (
      <div className="section">

        <div className="wrapper">
          <div className="about">

            <div className="about-container">
              <h2 className="about-header">
                About Me
              </h2>
              <img className="about-image" src="https://i.imgur.com/fdkScIx.png" />
            </div>

            <ul className="about-list">
              <li>Studying my second year of Web Development in the coming fall</li>
              <li>Working at Ericsson as a summer intern</li>
              <li>Front end enthusiast</li>
              <li>Always looking for new challenges to take on</li>
            </ul>


          </div>

        </div>
      </div>
    )
  }
}

export default About
