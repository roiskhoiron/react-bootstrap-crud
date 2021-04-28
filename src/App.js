import React, { Component } from 'react'
import FormComponent from './FormComponent'
import NavbarComponent from './NavbarComponent'
import TabelComponent from './TabelComponent'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      makanans: [],
      nama: "",
      deksirpsi: "",
      harga: 0,
      id: ""
    }
  }
  
  onChangeHandle = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmitHandle = (event) => {
    event.preventDefault() // handle prevent default (refresh page) not approve on SPA
    console.info("Submited without Refresh Page!")
    console.log("Data : ", this.state)
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="container mt-4">
          <TabelComponent />
          <br/>
          <FormComponent {...this.state} onChangeHandle={this.onChangeHandle} onSubmitHandle={ this.onSubmitHandle}/>
        </div>
      </div>
    )
  }
}

