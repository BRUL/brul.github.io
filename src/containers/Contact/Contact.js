import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact container-fluid">
        <Header />

        <div className="content row">
          <div className="col-xs-12">
            <address>
              <p>
                <strong>NEJD Interieurarchitecten</strong><br />
                <a href="https://goo.gl/maps/izLSKqtSRY92" className="ninja">
                  Ketelvest 4,
                  9000 Gent
                </a>
              </p>
              <p><a href="mailto:info@nejd.be">info@nejd.be</a><br />
                <a href="tel:+32495647823" className="ninja">+32 495 647823</a></p>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
