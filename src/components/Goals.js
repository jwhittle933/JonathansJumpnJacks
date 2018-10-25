import React, { Component } from 'react'

class Goals extends Component {
    render () {
        // const { fitnessGoal, meals} = this.props
        return (
            <div className="goals-table">
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th className="center">Fitness Goal</th>
                            <th className="center">Meals / day</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="center"><label>Build Muscle</label><input type="checkbox" /></td>
                            <td className="center"><label>3</label><input type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td className="center"><label>Maintain</label><input type="checkbox" /></td>
                            <td className="center"><label>5</label><input type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td className="center"><label>Burn Fat</label><input type="checkbox" /></td>
                            <td className="center"><label>7</label><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goals