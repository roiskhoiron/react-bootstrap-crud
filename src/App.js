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
    this.setState({
      makanans: [
        ...this.state.makanans,
        {
          id: this.state.makanans.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        },
      ],
    });

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: ""
    })
  }

  onClickEdit = (id) => {
    const dataTarget = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((makananChoosed) => {
        return makananChoosed
      })
    
    this.setState({
      nama: dataTarget[0].nama,
      deskripsi: dataTarget[0].deskripsi,
      harga: dataTarget[0].harga,
      id: dataTarget[0].id,
    })
  }

  render() {
    console.info(this.state.makanans)
    return (
      <div className="App">
        <NavbarComponent />
        <div className="container mt-4">
          <TabelComponent
            makanans={this.state.makanans}
            onClickEdit={this.onClickEdit}
          />
          <br />
          <FormComponent
            {...this.state}
            onChangeHandle={this.onChangeHandle}
            onSubmitHandle={this.onSubmitHandle}
          />
        </div>
      </div>
    );
  }
}

