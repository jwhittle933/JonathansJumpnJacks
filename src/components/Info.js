import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ age, weight, height, activityLevel, userBmr }) => {
    return (
        <div className="userInput">
            {/* <h3>User Input</h3>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Activity Level: </strong>{activityLevel}</p> */}
            <h3><strong>BMR</strong> { Math.round((66+(6.3 * weight) + (12.9 * height) - (6.8 * age)) * activityLevel) }</h3>
        </div>
    )
}
//PropTypes for use in dev mode only
Info.propTypes = {
    age: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    activityLevel: PropTypes.string.isRequired
}

export default Info