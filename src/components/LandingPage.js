import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class LandingPage extends Component {

  render (){
    const { title, next } = this.props
    return (
        <div className="landing-page">
          <h1>{title}</h1>
          <p>
            <Button bsStyle="default"
                    className="App-link"
                    rel="noopener noreferrer"
                    onClick={() => next('#tracker')} >Start Calculating</Button>
          </p>
        </div>
    )}
  }

//PropTypes for use in dev mode only
LandingPage.propTypes = {
    title: PropTypes.string
}
LandingPage.defaultProps = {
  title: "Jonathan's Jump'n Jacks"
}

export default LandingPage