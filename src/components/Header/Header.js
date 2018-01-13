import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="col-sm-4 logo">
          <Link to="/projects"><Logo /></Link>
        </div>

        <p className="col-sm-8 menu">
          <NavLink to="/projects">Projecten</NavLink>
          <NavLink to="/info">Informatie</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </p>
      </div>
    );
  }
}

export default Header;
