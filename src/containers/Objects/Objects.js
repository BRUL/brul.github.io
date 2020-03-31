import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './Objects.scss';

class Objects extends Component {
  render() {
    return (
      <div className="Objects container-fluid">
        <Header />

        <div className="content row">

          <div className="col-sm-8 offset-sm-2">
            <h2>Collectie interieurobjecten</h2>
            <p>Van tijd tot tijd komen er objecten voort uit het ontwerpen van ruimtes, die op zichzelf staan.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Objects;
