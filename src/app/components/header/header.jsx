import './header.scss';
import React, { Component } from 'react';
import AuthComponent from './auth/auth.component';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="content">
            <a href="/" className="logo_link">
              _1981_
            </a>

            <nav className="nav_menu">
              <ul className="menu_list">
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <AuthComponent/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
