import React from 'react'

const Project = (props) => {

  const bgStyles = {
    backgroundImage: `url(${props.imgUrl})`
  }

  return (
      <div className="project-container">

        <div style={bgStyles} className="project-background">
        </div>

        <div className="project-label">
            <img className="project-logo" src={props.logoUrl} />

            <p className="project-name">
            {props.name}
            </p>
          <a
          className="project-link"
          href={props.githubUrl}
          target="blank"
          >
            Github
          </a>
        </div>
      </div>
  )

}

export default Project
