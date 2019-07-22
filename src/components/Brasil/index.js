import React, { Component } from 'react';
import './index.css';

import News from '../News';

export default class Brasil extends Component {
  render() {
    const { name, data } = this.props.brasil;
    return (
      <div className="wrap box-brasil">
        <h2>{name}</h2>
        <div className="wrap box-news">
          {data &&
          data.map((item, index) => {
          return (
              <News key={index} url={item.url} label={item.label} title={item.title} description={item.description} image={item.image} type={item.type} />
          )
          })
        }
        </div>
      </div>
    )
  }
}