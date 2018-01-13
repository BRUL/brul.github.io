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
            <p><abbr title="Niels Evenepoel Jonathan Dequeker">NEJD</abbr> is het ontwerpatelier met Niels Evenepoel en Jonathan Dequeker, ontstaan na een gezamelijke opdracht tijdens de studies Interieurarchitectuur aan het Sint-Lucas in Gent.</p>
            <p>We hebben ervaring met het inrichten van buitenruimtes, leefruimtes, maatmeubelen, een koffiehuis, van Poperinge tot in Haarlem.</p>
            <p>NEJD ontwerpt sterk doordachte omgevingen door het formuleren van een logica vanuit uitdagende contexten. Er wordt daarbij gewerkt met formele architeturale kwaliteiten als vorm, textuur, kleur en massa. De ontwerpen zetten zich vaak voort in een grondig en kritisch uitvoeringsproces.</p>
            <p>Aarzel niet om jouw uitdagingen <Link to="/contact">met ons te delen.</Link></p>
            <p className="credit">Huisstijl ontworpen door <a href="http://baukevanderlaan.eu" target="_blank" title="Bauke van der Laan" rel="noopener noreferrer">Bauke van der Laan</a> & <a href="http://theovanbeurden.eu" target="_blank" title="Theo van Beurden" rel="noopener noreferrer">Theo van Beurden</a>. Website is tot stand gekomen door de expertise van <a href="http://newfront.eu" target="_blank" title="Niels Dequeker" rel="noopener noreferrer">Niels Dequeker</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
