import React, { Component } from 'react';

class Macros extends Component {
    render () {
        const { age, height, weight, activity } = this.props
        let bmr = Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity)
        return (
        <div className="macros-table" id="tracker">
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
                        <td className="center">{ Math.round((bmr * 0.4) / 4) } grams / day</td>
                        <td className="center">{ Math.round((bmr * 0.4) / 4) } grams / day</td>
                        <td className="center">{ Math.round((bmr * 0.2) / 9) } grams /  day</td>
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