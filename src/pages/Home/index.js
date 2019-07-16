import React, { Component } from 'react';
import Api from '../../services/Api';
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      main: {},
      brasil: {},
      mundo: {},
    }
  }
  getData = async () => {
    this.setState({main: Api.section[0], brasil: Api.section[1], mundo: Api.section[2]})
  }

  componentDidMount(){
    this.getData();
  }
  render() {
    console.log(this.state.main)
    console.log(this.state.brasil)
    console.log(this.state.mundo)
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default App;