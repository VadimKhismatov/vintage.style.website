import './style.scss';
import React, { Component } from 'react';
import SignInForm from '../sign.in.form/sign.in.form';
import SignOut from '../sign.out/sign.out';

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  checkIfUserLogged = e => {
    if (e) {
      this.setState({ auth: true });
    }
  };
  logOut = e => {
    this.setState({ auth: false });
  };

  render() {
    let element;

    if (!this.state.auth) {
      element = <SignInForm isLogged={this.checkIfUserLogged} />;
    } else {
      element = <SignOut logOut={this.logOut} />;
    }

    return <div className="auth_component">{element}</div>;
  }
}

export default AuthComponent;
