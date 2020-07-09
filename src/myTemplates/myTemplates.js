import React, { Component } from 'react';
import './myTemplates.css';
import GridContext from '../GridContext';
import TemplateListItem from '../TemplateListItem/TemplateListItem';
import { Section } from '../utils/Utils';
import Footer from '../footer/footer';

class myTemplates extends Component {
  static contextType = GridContext;

  renderOutlines() {
    const { outlineList = [] } = this.context.templates;
    return outlineList.map((outline) => (
      <TemplateListItem key={outline.id} template={outline} />
    ));
  }

  render() {
    //const { error } = this.context;
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>My Templates</h2>
          </header>
          <Section list className='OutlineListPage'>
            {/* {error ? (
              <p className='red'>There was an error, try again</p>
            ) : (
              this.renderOutlines()
            )} */}
            {this.context.templates.map((template, index) => (
              <TemplateListItem template={template} key={index} id={index} />
            ))}
          </Section>
        </main>
        <Footer />
      </section>
    );
  }
}

export default myTemplates;
