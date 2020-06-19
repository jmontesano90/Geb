import React, { Component } from 'react';
import './myTemplates.css';
import OutlineApiService from '../services/outline-api-service';
import OutlineListContext from '../contexts/OutlineListContext';
import GridContext from '../GridContext';
import TemplateListItem from '../TemplateListItem/TemplateListItem';
import { Section } from '../utils/Utils';
import { Link } from 'react-router-dom';

class myTemplates extends Component {
  static contextType = GridContext;

  renderOutlines() {
    console.log(this.context.templates);
    const { outlineList = [] } = this.context.templates;
    return outlineList.map((outline) => (
      <TemplateListItem key={outline.id} template={outline} />
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
            {/* {error ? (
              <p className='red'>There was an error, try again</p>
            ) : (
              this.renderOutlines()
            )} */}
            {this.context.templates.map((template, index) => (
              <TemplateListItem template={template} key={index} id={index}/>
            ))}
          </Section>
        </main>
        <footer role='content-info'>Footer</footer>
      </section>
    );
  }
}

export default myTemplates;
