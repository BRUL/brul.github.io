import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-2 col-sm-4 logo">
          <Link to="/projects"><Logo /></Link>
        </div>

        <div className="col-10 col-sm-8 text-right">
          {
            this.props.children ?
              <p className="Menu"> { this.props.children } </p> :
              <Menu />
          }
        </div>
      </div>
    );
  }
}

export default Header;
