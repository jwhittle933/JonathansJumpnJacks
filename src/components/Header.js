import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
          <header className="App-header">
            <h1>
             {title}
            </h1>
            <a
              className="App-link"
              href="#tracker"
              rel="noopener noreferrer"
            >
              Start the Tracker
            </a>
          </header>
    )
  }

//PropTypes for use in dev mode only
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
  title: "Jonathan's Jump'n Jacks"
}

  export default Header;