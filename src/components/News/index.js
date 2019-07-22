import React, { Component } from 'react';
import './index.css';

export default class News extends Component {
  render() {
    const { url, label, title, description, type, image } = this.props;
    const img = require(`../../assets/media/${image}`);
    const IconShareWhite = require('../../assets/icon-share-white.png');
    const IconShareBlack = require('../../assets/icon-share-black.png');
    return (
      <div className={`news ${type}`}>
        {type === 'destac' &&
          <div className="news-destac">
            <img src={img} className="news-destac--media" title="" alt="" />
            <a href={url}><img src={IconShareWhite} className="news-destac--icon-share" title="" alt="" /></a>
            <div className="news--data news-destac__data">
              <h2>{label}</h2>
              <span>{title}</span>
              <p>{description}</p>
            </div>
          </div>
        }

        {type === 'row' &&
          <div className="news-row">
            <img src={img} title="" alt="" />
            <div className="news--data news-row__data">
              <h2>{label}</h2>
              <span>{title}</span>
              <p>{description}</p>
              <a href={url}><img src={IconShareBlack} className="news-destac--icon-share" title="" alt="" /></a>
            </div>
          </div>
        }

        {type === 'collumn' &&
          <div className="news-collumn">
            <img src={img} title="" alt="" />
            <div className="news--data news-collumn__data">
              <h2>{label}</h2>
              <span>{title}</span>
              <p>{description}</p>
              <a href={url}><img src={IconShareBlack} className="news-destac--icon-share" title="" alt="" /></a>
            </div>
          </div>
        }
      </div>
    )
  }
}
