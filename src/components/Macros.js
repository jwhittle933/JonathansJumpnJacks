import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Macros extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render () {
        const { age, weight, height, activity, fitnessSelection, mealsSelection, genderSelection, next } = this.props

        const maleBmr = Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity)

        const femaleBmr = Math.round((655 + (4.3 * weight) + (4.7 * height) - (4.7 * age)) * activity)

        let gender = (genderSelection.male === true) ? 'Male' :                             (genderSelection.female === true) ? 'Female' : ""

        let bmr = (genderSelection.male === true) ? maleBmr :                              (genderSelection.female === true) ? femaleBmr : ""

        const buildBmr =  bmr + 500
        const burnBmr = bmr - 500

        return (
        <div className="macros-table" id="tracker">
            <table className="table-fill user-macros">
                <thead>
                    <tr>
                        <th className="center">User Selections</th>
                        <th className="center"><Button bsStyle="success" bsSize="small" onClick={() => next('.meal-plan-table')}>Go to Meal Plan</Button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="center">Gender</td>
                        <td className="center" >{gender}</td>
                    </tr>
                    <tr>
                        <td className="center">Age</td>
                        <td className="center">{age}</td>
                    </tr>
                    <tr>
                        <td className="center">Weight</td>
                        <td className="center">{weight}</td>
                    </tr>
                    <tr>
                        <td className="center">Height</td>
                        <td className="center">{height}</td>
                    </tr>
                    <tr>
                        <td className="center">Activity Level</td>
                        <td className="center">{activity}</td>
                    </tr>
                    <tr>
                        <td className="center">BMR</td>
                        <td className="center" >{bmr}</td>
                    </tr>
                    <tr>
                        <td className="center">Fitness Goal</td>
                        <td className="center">
                            {fitnessSelection.selection ?
                            fitnessSelection.selection : ''}</td>
                    </tr>
                    <tr>
                        <td className="center">Meals/Day</td>
                        <td className="center">
                            {mealsSelection.selection ?
                             mealsSelection.selection : ''}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table-fill macros">
                <thead>
                    <tr>
                        <th className="center">Protein</th>
                        <th className="center">Carbohydrates</th>
                        <th className="center">Fat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="center">
                        {
                            Math.round((!fitnessSelection.selection) ? 0 :
                            (fitnessSelection.selection === 'build') ?
                            ((buildBmr * 0.4) / 4) :
                            (fitnessSelection.selection === 'maintain') ?
                            ((bmr * 0.4) / 4) :
                            (fitnessSelection.selection === 'burn') ?
                            ((burnBmr * 0.4) / 4) : 0)
                        } grams / day</td>
                        <td className="center">
                        {
                            Math.round((!fitnessSelection.selection) ? 0 :
                            (fitnessSelection.selection === 'build') ?
                            ((buildBmr * 0.4) / 4) :
                            (fitnessSelection.selection === 'maintain') ?
                            ((bmr * 0.4) / 4) :
                            (fitnessSelection.selection === 'burn') ?
                            ((burnBmr * 0.4) / 4) : 0)
                        } grams / day</td>
                        <td className="center">
                        {
                            Math.round((!fitnessSelection.selection) ? 0 :
                            (fitnessSelection.selection === 'build') ?
                            ((buildBmr * 0.2) / 9) :
                            (fitnessSelection.selection === 'maintain') ?
                            ((bmr * 0.2) / 9) :
                            (fitnessSelection.selection === 'burn') ?
                            ((burnBmr * 0.2) / 9) : 0)
                        } grams / day</td>
                    </tr>
                    <tr>
                        <td className="center"><b>12 oz</b> Chicken</td>
                        <td className="center"><b>1 cup</b> Brown Rice</td>
                        <td className="center"><b>1 handful</b> Cashews</td>
                    </tr>
                    <tr>
                        <td className="center"><b>3 large</b> Eggs</td>
                        <td className="center"><b>2 slices</b> Ezekiel Bread</td>
                        <td className="center"><b>2 tbsp</b> Olive Oil</td>
                    </tr>
                    <tr>
                        <td className="center"><b>50 g</b> Protein Shake</td>
                        <td className="center"><b>1 large</b> Fruit</td>
                        <td className="center"><b>2 tbsp</b> Peanut Butter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default Macros