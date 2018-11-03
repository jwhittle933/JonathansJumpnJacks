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
      gender: {},
      genderError: false,
      age: "",
      weight: "",
      height: "",
      activityLevel: "",
      bmr: "",
      fitnessGoal: {},
      fitnessGoalsError: false,
      meals: {},
      mealsGoalsError: false,
    }
  }

  fitnessCaluclator = (weight, height, age, activity) => {
    let bmr = Math.round((66 + (6.3 * weight) + (12.9 * height) - (6.8 * age)) * activity)
    this.setState( () => {
      return {
        bmr: bmr
      }
    })
  }
  genderSelector = element => {
    let selection = element.value
    let maleSelected = document.querySelector('#male').checked
    let femaleSelected = document.querySelector('#female').checked
    let maleChecked = selection === 'male' ? true : false
    let femaleChecked = selection === 'female' ? true : false
    if (!maleSelected && !femaleSelected){
      this.setState(() => { return { gender: {} } })
    } else if (maleSelected && femaleSelected){
      this.setState(() => {return { genderError: true }})
    } else {
      this.setState(() => {
        return {
          genderError: false,
          gender: {
            male: maleChecked,
            female: femaleChecked
          }
        }
      })
    }
  }
  userInput = (alpha, beta) => {
    this.setState( () => {
      return {
        [alpha]: beta
      }
    })
  }
  fitnessGoalSelection = element => {
    let selection = element.value
    let buildSelected = document.querySelector('#build').checked
    let maintainSelected = document.querySelector('#maintain').checked
    let burnSelected = document.querySelector('#burn').checked
    let buildChecked = selection === "build" ? true : false
    let maintainChecked = selection === "maintain" ? true : false
    let burnChecked = selection === "burn" ? true : false
    if (!buildSelected && !maintainSelected && !burnSelected){
      this.setState(() => { return { fitnessGoal: {} } })
    } else if ( (buildSelected && maintainSelected) ||
                (buildSelected && burnSelected) ||
                ( maintainSelected && burnSelected) ) {
        this.setState(() => { return { fitnessGoalsError: true } })
    } else {
      this.setState(() => {
        return {
          fitnessGoalsError: false,
          fitnessGoal: {
            selection: selection,
            build: buildChecked,
            maintain: maintainChecked,
            burn: burnChecked
          }
        }
      })
    }
  }
  mealsSelection = element => {
    let selection = element.value
    let threeSelected = document.querySelector('#three').checked
    let fiveSelected = document.querySelector('#five').checked
    let sevenSelected = document.querySelector('#seven').checked
    if (!threeSelected && !fiveSelected && !sevenSelected){
      this.setState(() => { return { meals: {} } })
    } else if ((threeSelected && fiveSelected) ||
                (threeSelected && sevenSelected) ||
                (fiveSelected && sevenSelected)) {
        this.setState(() => { return { mealsGoalsError: true } })
    } else {
        this.setState(() => {
        return {
          mealsGoalsError: false,
          meals: {
            selection: selection,
            three: threeSelected,
            five: fiveSelected,
            seven: sevenSelected
          }
        }
      })
    }
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
          userInput={this.userInput}
          clear={this.clearUserInput}
          next={this.next}
          gender={this.genderSelector}
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activity={this.state.activityLevel}
          error={this.state.genderError}
        />
        <Goals
          fitnessGoal={this.fitnessGoalSelection}
          meals={this.mealsSelection}
          fitnessChoice={this.state.fitnessGoal}
          mealsChoice={this.state.meals}
          fitnessError={this.state.fitnessGoalsError}
          mealsError={this.state.mealsGoalsError}
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
