import React, { Component } from 'react';
import Logo from '../../assets/logo-infoglobo-footer.png';
import './index.css';

let now = new Date();

export default class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrap footer--box">
          <div className="footer--box-logo">
            <img src={Logo} alt="Infoglobo" title="Infoglobo" className="footer--logo" />
          </div>
          <div className="footer--copyright">
            <span>copyright©{now.getFullYear()}</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    )
  }
}
