import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Grid from '../grid/grid';
import d3 from 'd3';
import GridContext from '../GridContext';

class Home extends Component {
  static contextType = GridContext;
  render() {
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Transect Generator</h2>
            <Link
              to='/myTemplates'
              style={{ textDecoration: 'none' }}
              className='buttons'
            >
              My Templates
            </Link>
            <Link
              to='/newGrid'
              style={{ textDecoration: 'none' }}
              className='buttons'
            >
              New Template
            </Link>
          </header>
          <section>
            <h3>Number of Templates</h3>
            <p>{this.context.templates.length}</p>
            <h3>Number of sites sampled</h3>
            <p>{this.context.data.length}</p>
          </section>
          <section>
            <h3>Last Sampled Site</h3>
          </section>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default Home;
