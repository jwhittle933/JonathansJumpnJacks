import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class LandingPage extends Component {
  scrollTo = () => {
    window.scroll({
      top: 575,
      behavior: "smooth"
    })
  }
  render (){
    const { title } = this.props
    return (
        <div className="landing-page">
          <h1>{title}</h1>
          <p>
            <Button bsStyle="default"
                    className="App-link"
                    rel="noopener noreferrer"
                    onClick={this.scrollTo} >Start Calculating</Button>
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