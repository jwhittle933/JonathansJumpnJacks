import React, { Component} from 'react';

class BmrInfo extends Component {
    render () {
        return (
            <div className="bmr" style={this.props.display}>
                <h2>BMR Info</h2>
                <p>BMR (Basal Metabolic Rate) is the calculation of your body's caloric expenditure for a single day. </p>
            </div>
        )
    }
}


export default BmrInfo;