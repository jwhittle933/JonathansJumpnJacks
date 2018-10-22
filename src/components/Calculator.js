import React from 'react';
import PropTypes from 'prop-types'

const Calulator = ({ userAge, userWeight, userHeight, userActivityLevel}) => {
    return (
        <div className="App" id="tracker">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th scope="col"><p>*Please enter your information</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><label>Age</label></th>
                            <td><input type="text" onChange={ e => userAge(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label>Weight</label></th>
                            <td><input type="text" onChange={ e => userWeight(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <th scope="row"><label>Height(inches)</label></th>
                            <td><input type="text"  onChange={ e => userHeight(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <th scope="row"><label>Activity Level (1.0 - 2.0)</label></th>
                            <td><input type="text"  onChange={ e => userActivityLevel(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
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