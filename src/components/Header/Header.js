import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-2 col-lg-4 logo">
          <Link to="/projects"><Logo /></Link>
        </div>

        <div className="col-10 col-lg-8 text-right">
          {
            this.props.children ?
              <h1 className="Title"> { this.props.children } </h1> :
              <Menu />
          }
        </div>
      </div>
    );
  }
}

export default Header;
