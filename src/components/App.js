import React, { Component } from 'react'

import Header from './Header'
import LandingPage from './LandingPage'
import Calulator from './Calculator'
// import Info from './Info'
import Goals from './Goals'
import Macros from './Macros'
import ErrorBoundary from './ErrorBoundary'


class App extends Component {
  constructor() {
    super()
    this.state = {
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    bmr: "",
    fitnessGoal: "",
    meals: ""
  }}

  fitnessCaluclator = (weight, height, age, activity) => {
    let bmr = Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity)
    this.setState( () => {
      return {
        bmr: bmr
      }
    })
  }

  userInput = (alpha, beta) => {
    this.setState( () => {
      return {
        [alpha]: beta
      }
    })
  }

  fitnessGoalSelection = element => {
    let selection = element.id
    console.log(selection)
    this.setState(() => {
      return {
        fitnessGoal: selection
      }
    })
  }
  mealsSelection = element => {
    let selection = element.id
    this.setState(() => {
      return {
        meals: selection
      }
    })
  }
  // clearUserInput = () => {
  //   this.setState( () => {
  //     return {
  //       age: "",
  //       weight: "",
  //       height: "",
  //       activityLevel: ""
  //     }
  //   })
  // }
  next = () => {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth'})
  }
  render() {
    return (
      <div>
        <ErrorBoundary />
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
