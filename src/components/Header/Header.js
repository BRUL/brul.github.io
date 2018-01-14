import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-sm-4 logo">
          <Link to="/projects"><Logo /></Link>
        </div>

        <div className="col-sm-8 text-right">
          {
            this.props.children ?
              this.props.children :
              <Menu />
          }
        </div>
      </div>
    );
  }
}

export default Header;
