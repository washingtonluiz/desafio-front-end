import React, { Component } from 'react';
import Api from '../../services/Api';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Advertising from '../../components/Advertising';
import Footer from '../../components/Footer';
import '../../css/variables.css';
import '../../css/config.css';
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
    const { main } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Main main={main} />
        </div>
        <Advertising />
        <Footer />
      </div>
    )
  }
}

export default App;