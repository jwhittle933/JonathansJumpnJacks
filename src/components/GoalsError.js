import React, { Component} from 'react';

class GoalsError extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: this.props.error
        }
    }
    render () {
        return (
            <div className="genderError">
                <p>Please select only one {this.props.errorName}</p>
            </div>
        )
    }
}

export default GoalsError;