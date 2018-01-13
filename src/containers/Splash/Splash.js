import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <Link to="/projects">
          <Logo />
        </Link>
      </div>
    );
  }
}

export default Splash;
