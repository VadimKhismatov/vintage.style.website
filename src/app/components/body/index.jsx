import React, { Component } from 'react';
import './style.scss';

// components
import FeaturedInfo from './featured.info/index';
import MultiComponent from './multiple.component/index';

class BodyComponent extends Component {
  state = {};
  render() {
    return (
      <div className="body_component container">
        <FeaturedInfo />

        <MultiComponent />
      </div>
    );
  }
}

export default BodyComponent;
