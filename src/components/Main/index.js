import React, { Component } from 'react';
import './index.css';
import News from '../News';
class Main extends Component {

  
  

  render() {
    const { data } = this.props.main;
    return (
      <div className="wrap box-news">
        {data &&
        data.map((item, index) => {
         return (
            <News key={index} url={item.url} label={item.label} title={item.title} description={item.description} image={item.image} type={item.type} />
         )
        })
      }
      </div>
    )
  }
}

export default Main;