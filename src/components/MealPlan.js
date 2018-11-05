import React, { Component } from 'react';

class MealPlan extends Component {

    render () {

        return (
        <div className="meal-plan-table" id="tracker">
            <table className="table-fill meal-plan">
                <thead>
                    <tr>
                        <th className="center">Meals</th>
                        <th className="center">Protein</th>
                        <th className="center">Carbohydrates</th>
                        <th className="center">Fat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="center" >Meal 1</td>
                        <td className="center">
                            grams / day</td>
                        <td className="center">
                            grams / day</td>
                        <td className="center">
                            grams /  day</td>
                    </tr>
                    <tr>
                        <td className="center">Meal 2</td>
                        <td className="center"><b>12 oz</b> Chicken</td>
                        <td className="center"><b>1 cup</b> Brown Rice</td>
                        <td className="center"><b>1 handful</b> Cashews</td>
                    </tr>
                    <tr>
                        <td className="center">Meal 3</td>
                        <td className="center"><b>3 large</b> Eggs</td>
                        <td className="center"><b>2 slices</b> Ezekiel Bread</td>
                        <td className="center"><b>2 tbsp</b> Olive Oil</td>
                    </tr>
                    <tr>
                        <td className="center">Meal 4</td>
                        <td className="center"><b>50 g</b> Protein Shake</td>
                        <td className="center"><b>1 large</b> Fruit</td>
                        <td className="center"><b>2 tbsp</b> Peanut Butter</td>
                    </tr>
                    <tr>
                        <td className="center">Meal 5</td>
                        <td className="center"><b>50 g</b> Protein Shake</td>
                        <td className="center"><b>1 large</b> Fruit</td>
                        <td className="center"><b>2 tbsp</b> Peanut Butter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default MealPlan