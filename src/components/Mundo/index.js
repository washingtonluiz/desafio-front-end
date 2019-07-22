import React, { Component } from 'react';
import './index.css';

import News from '../News';

export default class Mundo extends Component {
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
    const { name, data } = this.props.mundo;
    return (
      <div className="wrap box-mundo">
        <h2>{name}</h2>
        <div className="wrap box-news">
          {data &&
          data.map((item, index) => {
            if(index < count){
              return (
                <News key={index} url={item.url} label={item.label} title={item.title} description={item.description} image={item.image} type={item.type} />
              )
            }
          })
        }
        </div>
        <div className="box-mundo__more-news">
          <span onClick={this.openNews} className="box-mundo__more-news--button">Mundo {count === 4 ? '+' : '-'}</span>
        </div>
      </div>
    )
  }
}