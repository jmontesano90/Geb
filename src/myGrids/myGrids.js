import React, { Component } from 'react';
import './myGrids.css';
import OutlineApiService from '../services/outline-api-service';
import OutlineListContext from '../contexts/OutlineListContext';
import OutlineListItem from '../OutLineListItem/OutlineListItem';
import { Section } from '../utils/Utils';
import { Link } from 'react-router-dom';

class myGrids extends Component {
  static contextType = OutlineListContext;

  componentDidMount() {
    this.context.clearError();
    OutlineApiService.getOutlines()
      .then(this.context.setOutlineList)
      .catch(this.context.setError);
  }

  renderOutlines() {
    const { outlineList = [] } = this.context;
    return outlineList.map((outline) => (
      <OutlineListItem key={outline.id} outline={outline} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Transect Generator</h2>
          </header>
          <Section list className='OutlineListPage'>
            {error ? (
              <p className='red'>There was an error, try again</p>
            ) : (
              this.renderOutlines()
            )}
          </Section>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default myGrids;
