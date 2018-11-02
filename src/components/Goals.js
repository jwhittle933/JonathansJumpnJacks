import React, { Component } from 'react'

class Goals extends Component {
    constructor(props){
        super(props)
        this.state = {
            fitnessChoice: {
                build: false,
                maintain: false,
                burn: false
            },
            mealsChoice: {
                three:false,
                five:false,
                seven:false
            }
        }
    }
    render () {
        const { fitnessGoal, meals } = this.props
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
                            <input id="build" defaultValue="build" type="checkbox" onClick={(e) => fitnessGoal(e.target)} defaultChecked={this.state.fitnessChoice.build} /></td>
                            <td className="center">
                            <label>3</label>
                            <input id="three" defaultValue="3" type="checkbox" onClick={(e) => meals(e.target)} defaultChecked={this.state.mealsChoice.three} /></td>
                        </tr>
                        <tr>
                            <td className="center">
                            <label>Maintain</label>
                            <input id="maintain" value="maintain" type="checkbox" onClick={(e) => fitnessGoal(e.target)} defaultChecked={this.state.fitnessChoice.maintain} /></td>
                            <td className="center">
                            <label>5</label>
                            <input id="five" defaultValue="5" type="checkbox" onClick={(e) => meals(e.target)} defaultChecked={this.state.mealsChoice.five} /></td>
                        </tr>
                        <tr>
                            <td className="center">
                            <label>Burn Fat</label>
                            <input id="burn" value="burn" type="checkbox" onClick={(e) => fitnessGoal(e.target)} defaultChecked={this.state.fitnessChoice.burn} /></td>
                            <td className="center">
                            <label>7</label>
                            <input id="seven" defaultValue="7" type="checkbox" onClick={(e) => meals(e.target)} defaultChecked={this.state.mealsChoice.seven} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goals