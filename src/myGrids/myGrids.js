import React, { Component } from 'react';
import './myGrids.css';
import { Link } from 'react-router-dom';

class myGrids extends Component {
  render() {
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Transect Generator</h2>
          </header>
          <Link to='/transectPage'>Connetquot</Link>
          <p>Load connetquot grid outline</p>
          <p> Dimesions for it here</p>
          <p>Go through every custom grid</p>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default myGrids;
