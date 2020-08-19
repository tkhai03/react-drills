import React, { Component } from 'react'
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ["bread", "milk", "gnocchi", "cheese"]
    }
  }

  render() {
    let foodsDisplay = this.state.foods.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })

    return <div className="App">{foodsDisplay}</div>
  }




}


export default App

