import React from 'react';

import ScrollTrigger from 'react-scroll-trigger';
import ReactSVG from 'react-svg';

class About extends React.Component {
  render() {

    return (
      <div className="section">

        <div className="wrapper">
          <div className="projects" id="projects">

            <h2 className="about-header">
            About Me
            </h2>

            <ul>
              <li>Developing web applications since 2014</li>
              <li>Play all kind of games on my free time</li>
              <li>Studying my first year of Web Development at Yrgo</li>
              <li>Love travel and learning new languages</li>
            </ul>

            <img className="about-image" src="https://i.imgur.com/fdkScIx.png" />

          </div>

        </div>
      </div>
    )
  }
}

export default About
