import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ age, weight, height, activityLevel }) => {
    return (
        <div className="stats-box">
            <ul>
                <li>Age: {age}</li>
                <li>Weight: {weight}</li>
                <li>Height: {height}</li>
                <li>Activity Level: {activityLevel}</li>
                <li> BMR { Math.round((66+(6.3 * weight) + (12.9 * height) - (6.8 * age)) * activityLevel) }</li>
            </ul>
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