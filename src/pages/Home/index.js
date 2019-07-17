import React, { Component } from 'react';
import main from '../../css/main';
import Api from '../../services/Api';
import Header from '../../components/Header';
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
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App;