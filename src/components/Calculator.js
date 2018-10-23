import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


const Calulator = ({ userAge,
                    userWeight,
                    userHeight,
                    userActivityLevel,
                    clear, next,
                    age, weight, height, activity }) => {
    return (
        <div className="calulator-table" id="tracker">
            <table className="table-fill">
                <thead>
                    <tr>
                        <th>*Enter your information</th>
                        <th>
                            <Button bsStyle="danger" onClick={clear}>Clear</Button>
                            <Button bsStyle="success" onClick={next}>Next</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Age</td>
                        <td><input type="text" value={age} onChange={ e => userAge(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td><input type="text" value={weight} onChange={ e => userWeight(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Height (in.)</td>
                        <td><input type="text" value={height} onChange={ e => userHeight(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Activity Level (1.0-2.0)</td>
                        <td><input type="text" value={activity} onChange={ e => userActivityLevel(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><Button bsStyle="info" bsSize= "xsmall">BMR</Button></td>
                        <td><h4>{ Math.round((66+(6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity) }</h4></td>
                    </tr>
                </tbody>
            </table>
            {/* Create Component for */}
        </div>
    )
}

//PropTypes for use in dev mode only
Calulator.propTypes = {
    userAge: PropTypes.func,
    userWeight: PropTypes.func,
    userHeight: PropTypes.func,
    userActivityLevel: PropTypes.func
}

export default Calulator;