import React, { Component } from 'react'

import Header from './Header'
import LandingPage from './LandingPage'
import Calulator from './Calculator'
// import Info from './Info'
import Macros from './Macros'


class App extends Component {
  state = {
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    bmr: ""
  }
  userAge = (alpha) => {
    this.setState( () => {
      return {
        age: alpha
      }
    })
  }
  userWeight = (alpha) => {
    this.setState( () => {
      return {
        weight: alpha
      }
    })
  }
  userHeight = (alpha) => {
    this.setState( () => {
      return {
        height: alpha
      }
    })
  }
  userActivityLevel = (alpha) => {
    this.setState( () => {
      return {
        activityLevel: alpha
      }
    })
  }
  userBmr = () => {
    this.setState( (alpha) => {
      return {
        activityLevel: alpha
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
      top: 1200,
      behavior: "smooth"
    })
  }
  render() {
    return (
      <div>
        <Header />
        <LandingPage
          title="Jonathan's Jump'n Jacks"
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activityLevel={this.state.activityLevel}
          next={this.next}
        />
        {/* <Info
              age={this.state.age}
              weight={this.state.weight}
              height={this.state.height}
              activityLevel={this.state.activityLevel}
              userBmr={this.userBmr}
        /> */}
        <Calulator
          userAge={this.userAge}
          userWeight={this.userWeight}
          userHeight={this.userHeight}
          userActivityLevel={this.userActivityLevel}
          clear={this.clearUserInput}
          next={this.next}
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activity={this.state.activityLevel}
        />
        <Macros />
      </div>
    )
  }
}

export default App;
