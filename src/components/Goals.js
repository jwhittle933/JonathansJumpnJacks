import React, { Component } from 'react'

class Goals extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render () {
        const { fitnessGoal, meals} = this.props
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
                            <td className="center">
                            <label>Build Muscle</label>
                            <input id="build" type="checkbox" onClick={fitnessGoal(this)}/></td>
                            <td className="center">
                            <label>3</label>
                            <input id="3" type="checkbox" onClick={meals}/></td>
                        </tr>
                        <tr>
                            <td className="center">
                            <label>Maintain</label>
                            <input id="maintain" type="checkbox" /></td>
                            <td className="center">
                            <label>5</label>
                            <input id="5" type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td className="center">
                            <label>Burn Fat</label>
                            <input id="burn" type="checkbox" /></td>
                            <td className="center">
                            <label>7</label>
                            <input id="7" type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goals