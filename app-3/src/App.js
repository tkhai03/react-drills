import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: '',
      foods: ['milk', 'cream', 'butter', 'ice cream', 'coconut']
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foodstoDisplay = this.state.foods
      .filter((element, i) => {
        return element.includes(this.state.filterString)
      })
      .map((element, i) => {
        return <h2 key={i}>{element}</h2>
      })


    return (
      < div className='App' >
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {foodstoDisplay}
      </div >
    )
  }
}


