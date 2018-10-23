import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class Header extends Component {
  scrollTo = () => {
    window.scroll({
      top: 500,
      behavior: "smooth"
    })
  }

  render (){
    const { title } = this.props
    return (
        <header>
          <h1>{title}</h1>
          <p>
            <Button bsStyle="secondary"
                    className="App-link"
                    rel="noopener noreferrer"
                    onClick={this.scrollTo} >Start the Tracker</Button>
          </p>
        </header>
    )}
  }

//PropTypes for use in dev mode only
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
  title: "Jonathan's Jump'n Jacks"
}

export default Header