import './header.scss';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="content">
            <a href="#" className="logo_link">
              _1981_
            </a>

            <nav className="nav_menu">
              <ul className="menu_list">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="auth_block">
              <div className="sign_in">
                <form action="" className="sign_in_form">
                  <input type="password" className="sign_input sign_in_pass" id="sign_in_pass" placeholder="Enter Password" />
                  <button type="submit" className="sign_submit">
                    Client Sign-In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
