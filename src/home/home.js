import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Grid from '../grid/grid';
import d3 from 'd3';

class Home extends Component {
  render() {
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Transect Generator</h2>
            <Link
              to='/myGrids'
              style={{ textDecoration: 'none' }}
              className='buttons'
            >
              My Grids
            </Link>
            <Link
              to='/newGrid'
              style={{ textDecoration: 'none' }}
              className='buttons'
            >
              New Grid
            </Link>
          </header>
          <section>
            <h3>Number of Grids</h3>
            <p>1</p>
            <h3>Number of sites sampled</h3>
            <p>43</p>
            <h3>Last sampling event</h3>
            {/* <Grid></Grid> */}
            <p> load last sampling grid with date and comment</p>
          </section>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default Home;
