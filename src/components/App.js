import React, { Component } from 'react'


import Header from './Header'
import Calulator from './Calculator'
import Info from './Info'

class App extends Component {
  state = {
    age: 0,
    weight: 0,
    height: 0,
    activityLevel: 0
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

  render() {
    return (
      <div>
        <Header
          title="Jonathan's Jump'n Jacks"
          age={this.state.age}
          weight={this.state.weight}
          height={this.state.height}
          activityLevel={this.state.activityLevel}
        />
        <Info
              age={this.state.age}
              weight={this.state.weight}
              height={this.state.height}
              activityLevel={this.state.activityLevel}
        />
        <Calulator
          userAge={this.userAge}
          userWeight={this.userWeight}
          userHeight={this.userHeight}
          userActivityLevel={this.userActivityLevel}
        />
      </div>
    );
  }
}

export default App;
