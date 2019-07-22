import React, { Component } from 'react';
import './index.css';

import News from '../News';

export default class Brasil extends Component {
  constructor(){
    super();
    this.state = {
      count: 4
    }
  }

  openNews = () => {
    if(this.state.count === 4){
      this.setState({count: this.state.count + 4})
    }else{
      this.setState({count: this.state.count - 4})
    }
  }

  render() {
    const { count } = this.state;
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
        <div className="box-brasil__more-news">
          <span onClick={this.openNews} className="box-brasil__more-news--button">Brasil {count === 4 ? '+' : '-'}</span>
        </div>
      </div>
    )
  }
}