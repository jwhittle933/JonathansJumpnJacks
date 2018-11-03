import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import BmrInfo from './BmrInfo'
import GenderError from './GenderError'

class Calulator extends Component {
    constructor(props){
        super(props)
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
        const { userInput, gender,age, weight, height, activity, clear } =  this.props

        return (
        <div className="calulator-table" id="tracker">
            <table className="table-fill calc">
                <thead>
                    <tr>
                        <th>*Enter your information</th>
                        <th><Button bsStyle="info" bsSize="xsmall" onClick={this.toggleBmr}>BMR?</Button>
                        <Button bsStyle="danger" bsSize="xsmall" onClick={clear}>Clear</Button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <label>Male</label><input id="male" defaultValue="male" type="checkbox" onClick={ e => {gender(e.target)}}/>
                            <label>Female</label><input id="female" defaultValue="female" type="checkbox" onClick={ e => {gender(e.target)}}/>
                        </td>
                    </tr>
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
                        <td></td>
                        <td><h4>{ Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity) }</h4></td>
                    </tr>
                </tbody>
            </table>
            { this.state.bmrShow ? <BmrInfo toggleBmr={this.toggleBmr}/> : null }
            { this.props.error ? <GenderError /> : null }
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