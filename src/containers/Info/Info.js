import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="Info container-fluid">
        <Header />

        <div className="content row">
          <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-4">
            <p>NEJD is het ontwerpatelier met Niels Evenepoel en Jonathan Dequeker, ontstaan na een gezamenlijke opdracht tijdens de studies Interieurarchitectuur aan het Sint-Lucas in Gent.</p>
            <p>Het atelier heeft ervaring met het inrichten van leefruimtes, buitenruimtes, maatmeubelen, en horeca-inrichting met projecten in de renovatie- en nieuwbouw sector.</p>
            <p>NEJD ontwerpt sterk doordachte omgevingen door het formuleren van een logica vanuit uitdagende contexten. Er wordt daarbij gewerkt met formele architecturale kwaliteiten als vorm, textuur, kleur en massa. De ontwerpen zetten zich vaak voort in een grondig en kritisch uitvoeringsproces.</p>
            <p>Aarzel niet om jouw uitdaging <a href="mailto:info@nejd.be">met NEJD te delen</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
