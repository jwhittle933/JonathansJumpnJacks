import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ age, weight, height, activityLevel }) => {
    return (
        <div class="userInput">
            <h3>User Input</h3>
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            <p>Activity Level: {activityLevel}</p>
            <h3><strong>BMR</strong> { Math.round((66+(6.3 * weight) + (12.9 * height) - (6.8 * age)) * activityLevel) }</h3>
        </div>
    )
}
//PropTypes for use in dev mode only
Info.propTypes = {
    age: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    activityLevel: PropTypes.number.isRequired
}

export default Info