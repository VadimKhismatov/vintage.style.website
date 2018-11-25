import './style.scss';
import React, { Component } from 'react';
import Button from '../button/button.jsx';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
    };
  }

  _submit = e => {
    e.preventDefault();
    this.props.isLogged(this.state.password);
  };

  saveInputValue = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="sign_in">
        <form action="" className="sign_in_form">
          <label className="field_wrap">
            <input type="password" className="password" id="password" placeholder="Enter Password" onChange={this.saveInputValue} />
          </label>
          <Button text="Client Sign-In" type="submit" _onclick={this._submit} />
        </form>
      </div>
    );
  }
}

export default SignInForm;
