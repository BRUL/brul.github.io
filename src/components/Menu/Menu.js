import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <p className="Menu">
        <NavLink to="/projects">Projecten</NavLink>
        <NavLink to="/info">Informatie</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </p>
    );
  }
}

export default Menu;
