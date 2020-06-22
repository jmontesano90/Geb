import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import GridContext from '../GridContext';
import Footer from '../footer/footer';

class Home extends Component {
  static contextType = GridContext;
  render() {
    return (
      <section id='outerSection'>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Home</h2>
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
        </main>
        <Footer />
      </section>
    );
  }
}

export default Home;
