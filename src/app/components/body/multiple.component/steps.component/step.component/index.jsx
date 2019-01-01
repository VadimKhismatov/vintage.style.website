import React, { Component } from 'react';

import './style.scss';

class Step extends Component {
  _props = this.props;
  render() {
    return (
      <div className="step">
        <div className="circle">
          <div className="inner">
            <img src={this._props.icon} alt=" icon" />
          </div>
        </div>

        <div className="body">
          <h4 className="title">{this._props.title}</h4>
          <div className="text">{this._props.text}</div>
        </div>

        <a href={this._props.link} className="more">
          learn more
        </a>
      </div>
    );
  }
}

export default Step;
