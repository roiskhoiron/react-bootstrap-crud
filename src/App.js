import React, { Component } from 'react'
import FormComponent from './FormComponent'
import NavbarComponent from './NavbarComponent'
import TabelComponent from './TabelComponent'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="container mt-4">
          <TabelComponent />
          <br/>
          <FormComponent />
        </div>
      </div>
    )
  }
}

