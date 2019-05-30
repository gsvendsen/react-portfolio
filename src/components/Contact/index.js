import React from 'react';
import './Contact.css'

class Contact extends React.Component {
  render() {

    return (
      <div className="section">
        <div className="contact-container">
            <h2>
              Ask me anything 🤷‍♂️
            </h2>
            <p>
              Have any questions or want to get in touch with me? Drop me a line at <a href="mailto:gsvendsen99@gmail.com">gsvendsen99@gmail.com</a> and {"let's"} talk. You can also check out my projects on my <a target="blank" href="https://www.github.com/gsvendsen">Github</a> or add me on <a href="https://www.linkedin.com/in/gustav-svendsen-011110159/">LinkedIn</a>
            </p>
          </div>
      </div>
    )
  }
}

export default Contact
