import React, { Component} from 'react';

class BmrInfo extends Component {
    render () {
        return (
            <div className="bmr" style={this.props.display}>
                <h2>What is BMR?</h2>
                <p>BMR (Basal Metabolic Rate) is the calculation of your body's caloric expenditure for basic functions for a single day. These functions include breathing, circulation, and biological functions like cell production. Usually, your BMR represents 60-75% of total calories burned. The calculation provided here includes your daily activity level. So, technically, the measurement here is not a <i>true</i> BMR. But for your convenience and planning it is inlcuded here.</p>
                <p id="closeButton" onClick={this.props.toggleBmr}>[close]</p>
            </div>
        )
    }
}


export default BmrInfo;