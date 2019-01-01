import React, { Component } from 'react';

import './style.scss';
import image from '../../../images/badges.png';

class FeaturedImages extends Component {
  render() {
    return (
      <div className="fi_component">
        <div className="container">
          <div className="content">
            <img src={image} alt="badges" />
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedImages;
