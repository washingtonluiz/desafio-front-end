import React, { Component } from 'react';
import Logo from '../../assets/logo-infoglobo-header.png';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="wrap header--box">
          <div className="menu-mobile">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__box--logo">
            <img src={Logo} title="Infoglobo" alt="Infoglobo" className="header__box--logo--logo" />
          </div>
        </div>
      </header>
    )
  }
}
