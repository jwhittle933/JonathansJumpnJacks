import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


class Calulator extends Component {
    render () {
        const { userInput, age, weight, height, activity } =  this.props
        return (
        <div className="calulator-table" id="tracker">
            <table className="table-fill">
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
                        <td><Button bsStyle="info" bsSize= "xsmall">BMR</Button></td>
                        <td><h4>{ Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity) }</h4></td>
                    </tr>
                </tbody>
            </table>
            {/* Create Component for */}
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