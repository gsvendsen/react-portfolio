import React from 'react'
import './Header.css'

import ReactSVG from 'react-svg'

const Header = props => {
  return (
    <div className="section">
      <header className="fade-down">

        <h5>
          {"Hi I'm"}
        </h5>

        <h1>
          {props.name}
        </h1>

        <h3>
          Web Developer 👨‍💻
        </h3>

        <h4>
          Studying at Yrgo, Gothenburg
        </h4>

      </header>
    </div>
  )
}

export default Header
