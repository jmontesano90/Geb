import React from 'react';
import './transectPage.css';
import Footer from '../footer/footer';

function Nav() {
  return (
    <section>
      <main role='main'>
        <header role='banner'>
          <h1>Geb</h1>
          <h2>Transect Generator</h2>
        </header>
        <h3>Connetquot</h3>
        <p>
          Load most recent generated transect [Itemize every time this site was
          sampled]
        </p>
        <p> Date it was done on here</p>
        <p>Comments for it here</p>
        <p>Option to delete it here</p>
      </main>
      <Footer />
    </section>
  );
}

export default Nav;
