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
              <li>Developing web applications since 2015</li>
              <li>Studying my first year of Web Development at Yrgo</li>
              <li>Lives on bad jokes and lots of coffee</li>
              <li>Love travel and learning new languages</li>
            </ul>


          </div>

        </div>
      </div>
    )
  }
}

export default About
