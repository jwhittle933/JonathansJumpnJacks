import React, { Component } from 'react'

import Header from './Header'
import LandingPage from './LandingPage'
import Calulator from './Calculator'
import Goals from './Goals'
import Macros from './Macros'
import MealPlan from './MealPlan'
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
  genderSelector = element => {
    let selection = element.value
    let maleSelected = document.querySelector('#male').checked
    let femaleSelected = document.querySelector('#female').checked
    let maleChecked = selection === 'male' ? true : false
    let femaleChecked = selection === 'female' ? true : false
    if (!maleSelected && !femaleSelected){
      this.setState(() => { return { gender: "" } })
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
      this.setState(() => { return { fitnessGoal: "" } })
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
      this.setState(() => { return { meals: "" } })
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
    document.querySelector('#male').checked = false
    document.querySelector('#female').checked = false
    this.setState( () => {
      return {
        genderError: false,
        age: "",
        weight: "",
        height: "",
        activityLevel: ""
      }
    })
  }
  clearGoalsInput = () => {
    document.querySelector('#build').checked = false
    document.querySelector('#maintain').checked = false
    document.querySelector('#burn').checked = false
    document.querySelector('#three').checked = false
    document.querySelector('#five').checked = false
    document.querySelector('#seven').checked = false
    this.setState(() => {
      return {
        fitnessGoal: "",
        meals: ""
      }
    })
  }
  next = param => {
    document.querySelector(param).scrollIntoView({ behavior: 'smooth'})
  }


  render() {
    return (
      <div>
        <ErrorBoundary />
        <Header />
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
          genderSelection={this.state.gender}
          gender={this.genderSelector}
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activity={this.state.activityLevel}
          error={this.state.genderError}
        />
        <Goals
          next={this.next}
          clear={this.clearGoalsInput}
          fitnessGoal={this.fitnessGoalSelection}
          meals={this.mealsSelection}
          fitnessError={this.state.fitnessGoalsError}
          mealsError={this.state.mealsGoalsError}
        />
        <Macros
          next={this.next}
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activity={this.state.activityLevel}
          fitnessSelection={this.state.fitnessGoal}
          mealsSelection={this.state.meals}
          genderSelection={this.state.gender}
        />
        <MealPlan />
      </div>
    )
  }
}

export default App;
