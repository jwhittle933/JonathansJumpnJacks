import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Header = ({title}) => {
    return (
        <header>
          <h1>{title}</h1>
          <p>
            <Button bsStyle="secondary"
                    className="App-link"
                    href="#tracker"
                    rel="noopener noreferrer" >Start the Tracker</Button>
          </p>
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