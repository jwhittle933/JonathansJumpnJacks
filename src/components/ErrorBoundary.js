import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, info) {
        this.setState(() => {
          return {
            error: error,
            errorInfo: info
          }
        })
      }
    render() {
        if (this.state.hasError) {
            return <div className="error"><h1>Whoops! Something went wrong...</h1></div>
        } else {
            return null
        }
    }
}

export default ErrorBoundary