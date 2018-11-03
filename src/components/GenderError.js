import React, { Component} from 'react';

class GenderError extends Component {
    render () {
        return (
            <div className="genderError">
                <p>Please select only one gender</p>
            </div>
        )
    }
}


export default GenderError;