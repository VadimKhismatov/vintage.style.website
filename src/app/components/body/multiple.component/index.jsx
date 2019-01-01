import React, { Component } from 'react';

import './style.scss';

import Steps from './steps.component/index';

class MultiComponent extends Component {
  render() {
    return (
      <div className="multi_component">
        <div className="img-bg" />
        <div className="content">
          <Steps />
        </div>
      </div>
    );
  }
}

export default MultiComponent;
