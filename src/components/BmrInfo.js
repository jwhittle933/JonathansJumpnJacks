import React, { Component} from 'react'
import { Button } from 'react-bootstrap'

class BmrInfo extends Component {
    render () {
        return (
            <div className="bmr">
                <div className="bmr-content">
                    <h2>What is BMR?</h2>
                    <p>BMR (Basal Metabolic Rate) is the calculation of your body's caloric expenditure for basic functions for a single day. These functions include breathing, circulation, and biological functions like cell production. Usually, your BMR represents 60-75% of total calories burned. The calculation provided here includes your daily activity level. So, technically, the measurement here is not a <i>true</i> BMR. But for your convenience and planning it is inlcuded here.</p>
                    <Button bsStyle="success" bsSize="small" onClick={this.props.toggleBmr}>Got it</Button>
                </div>
            </div>
        )
    }
}


export default BmrInfo;