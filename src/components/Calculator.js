import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import BmrInfo from './BmrInfo'

class Calulator extends Component {
    constructor(){
        super()
        this.state = {
            bmrShow: false
        }
    }
    toggleBmr = () => {
        let show = !this.state.bmrShow
        this.setState(() => {
            return {
                bmrShow: show
            }
        })
    }
    render () {
        const { userInput, age, weight, height, activity, clear } =  this.props
        const display = {
            display: this.state.bmrShow === false ? 'none' : 'block'
        }
        return (
        <div className="calulator-table" id="tracker">
            <table className="table-fill calc">
                <thead>
                    <tr>
                        <th>*Enter your information</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Age</td>
                        <td><input type="text" value={age} onChange={ e => userInput('age', e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td><input type="text" value={weight} onChange={ e => userInput('weight', e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Height (in.)</td>
                        <td><input type="text" value={height} onChange={ e => userInput('height', e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Activity Level (1.0-2.0)</td>
                        <td><input type="text" value={activity} onChange={ e => userInput('activityLevel', e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Button bsStyle="info" bsSize="xsmall" onClick={this.toggleBmr}>BMR</Button>
                        <Button bsStyle="danger" bsSize="xsmall" onClick={clear}>Clear</Button></td>
                        <td><h4>{ Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity) }</h4></td>
                    </tr>
                </tbody>
            </table>
            <BmrInfo display={display} />
        </div>
    )}
}

//PropTypes for use in dev mode only
Calulator.propTypes = {
    userAge: PropTypes.func,
    userWeight: PropTypes.func,
    userHeight: PropTypes.func,
    userActivityLevel: PropTypes.func
}

export default Calulator;