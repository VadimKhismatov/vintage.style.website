import './style.scss';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className="btn" onClick={this.props._onclick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
