import React, { Component } from 'react'

import Header from './Header'
import LandingPage from './LandingPage'
import Calulator from './Calculator'
// import Info from './Info'
import Goals from './Goals'
import Macros from './Macros'


class App extends Component {
  state = {
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    fitnessGoal: "",
    meals: ""

  }
  userInput = (alpha, beta) => {
    this.setState( () => {
      return {
        [alpha]: beta
      }
    })
  }
  fitnessGoalSelection = (alpha) => {
    this.setState( () => {
      return {
        fitnessGoal: alpha
      }
    })
  }
  mealsSelection = (alpha) => {
    this.setState( () => {
      return {
        meals: alpha
      }
    })
  }
  clearUserInput = () => {
    this.setState( () => {
      return {
        age: "",
        weight: "",
        height: "",
        activityLevel: ""
      }
    })
  }
  next = () => {
    window.scroll({
      top: 1100,
      behavior: "smooth"
    })
  }
  render() {
    return (
      <div>
        <Header
          next={this.next}
          clear={this.clearUserInput}
        />
        <LandingPage
          title="Jonathan's Jump'n Jacks"
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activityLevel={this.state.activityLevel}
          next={this.next}
        />
        <Calulator
          userAge={this.userAge}
          userInput={this.userInput}
          userHeight={this.userHeight}
          userActivityLevel={this.userActivityLevel}
          clear={this.clearUserInput}
          next={this.next}
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activity={this.state.activityLevel}
        />
        <Goals
          fitnessGoal={this.fitnessGoalSelection}
          meals={this.mealsSelection}
        />
        <Macros
          age = {this.state.age}
          height = {this.state.height}
          weight = {this.state.weight}
          activity = {this.state.activityLevel}
          next = {this.next}
          clear={this.clearUserInput}
        />
      </div>
    )
  }
}

export default App;
