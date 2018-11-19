import './style.scss';
import React, { Component } from 'react';
import Button from '../button/button.jsx';

class SignInForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sign_in">
        <form action="" className="sign_in_form">
          <label className="field_wrap">
            <input type="password" className="password" id="password" placeholder="Enter Password" />
          </label>
          <Button text="Client Sign-In" type="submit" />
        </form>
      </div>
    );
  }
}

export default SignInForm;
