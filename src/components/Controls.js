import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Controls extends Component {
    render () {
    const { clear, next } =  this.props

        return (
        <div className="controls">
            <Button bsStyle="danger" onClick={clear}>Clear</Button>
            <Button bsStyle="success" onClick={next}>Next</Button>
        </div>

    )}
}


export default Controls