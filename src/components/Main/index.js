import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    const { main } = this.props;
    console.log(main);
    return (
      <div className="main">
        {main.name}
      </div>
    )
  }
}
