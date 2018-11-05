import React, { Component } from 'react';

class Macros extends Component {
    render () {
        const { age, weight, height, activity, fitnessSelection, mealsSelection, genderSelection } = this.props

        const maleBmr = Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity)

        const femaleBmr = Math.round((655 + (4.3 * weight) + (4.7 * height) - (4.7 * age)) * activity)

        let bmr = (genderSelection.male === true) ? maleBmr :                              (genderSelection.female === true) ? femaleBmr : ""

        let gender = (genderSelection.male === true) ? 'Male' :                             (genderSelection.female === true) ? 'Female' : ""



        return (
        <div className="macros-table" id="tracker">
            <table className="table-fill user-macros">
                <thead>
                    <tr>
                        <th className="center">User Inputs</th>
                        <th className="center"></th>
                        <th className="center"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="center">Gender</td>
                        <td className="center" >{gender}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Age</td>
                        <td className="center">{age}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Weight</td>
                        <td className="center">{weight}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Height</td>
                        <td className="center">{height}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Activity Level</td>
                        <td className="center">{activity}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">BMR</td>
                        <td className="center" >{bmr}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Fitness Goal</td>
                        <td className="center">
                            {(fitnessSelection.selection) ?
                            fitnessSelection.selection : ''}</td>
                        <td className="center"></td>
                    </tr>
                    <tr>
                        <td className="center">Meals</td>
                        <td className="center">
                            {(mealsSelection.selection ? mealsSelection.selection : '')}</td>
                        <td className="center"></td>
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
                        <td className="center">{
                            Math.round((bmr * 0.4) / 4) }
                            grams / day</td>
                        <td className="center">{
                            Math.round((bmr * 0.4) / 4) }
                            grams / day</td>
                        <td className="center">{
                            Math.round((bmr * 0.2) / 9) }
                            grams /  day</td>
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