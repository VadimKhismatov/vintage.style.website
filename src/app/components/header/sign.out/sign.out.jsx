import './style.scss';

import React, { Component } from 'react';
import Button from '../button/button';
class SignOut extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sign_out">
        <div className="field_wrap">
          <p className="text">
            Welcome Back,<span>&nbsp;JohnDoe81</span>
          </p>
        </div>
        <Button text="Client Sign-Out" type="button" />
      </div>
    );
  }
}

export default SignOut;
