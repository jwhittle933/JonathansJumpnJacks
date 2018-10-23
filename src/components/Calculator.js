import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Calulator = ({ userAge,
                    userWeight,
                    userHeight,
                    userActivityLevel,
                    clear,
                    age, weight, height, activity }) => {
    return (
        <div class="table" id="tracker">
            <table class="table-fill">
                <thead>
                    <tr>
                        <th class="text-left">*Enter your information</th>
                        <th class="text-left"><Button bsStyle="danger" onClick={clear}>Clear</Button></th>
                    </tr>
                </thead>
                <tbody class="table-hover">
                    <tr>
                        <td class="text-left">Age</td>
                        <td class="text-left"><input type="text" value={age} onChange={ e => userAge(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td class="text-left">Weight</td>
                        <td class="text-left"><input type="text" value={weight} onChange={ e => userWeight(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td class="text-left">Height</td>
                        <td class="text-left"><input type="text" value={height} onChange={ e => userHeight(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td class="text-left">Activity Level</td>
                        <td class="text-left"><input type="text" value={activity} onChange={ e => userActivityLevel(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
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