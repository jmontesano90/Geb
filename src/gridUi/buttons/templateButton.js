import React, { Component } from 'react';
import GridContext from '../../GridContext';
import TemplateApiService from '../../services/template-api-service';
import config from '../../config';

class templateButton extends Component {
  static contextType = GridContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const { template } = this.props;
    const fixedTemplate = {
      minimum: template.minimum,
      name: template.name,
      partial_transect_count: template.partialTransectCount,
      partial_transect_length: template.partialTransectLength,
      transect_count: template.transectCount,
      user_id: config.USER_ID,
      x: template.x,
      y: template.y,
    };
    TemplateApiService.postTemplate(
      template.minimum.value,
      template.name.value,
      template.partialTransectCount.value,
      template.partialTransectLength.value,
      template.transectCount.value,
      config.USER_ID,
      template.x.value,
      template.y.value
    )
      //.then(this.context.handleAddTemplate(fixedTemplate))
      .then(this.context.handleUpdateTemplates())
      .then(console.log(this.context.templates))
      .then(this.context.handleUpdateTemplates())
      .then(console.log(this.context.templates))
      .then(this.props.history.push('/myTemplates'));
  };
  render() {
    templateButton.contextType = GridContext;
    return (
      <form onSubmit={this.handleSubmit} id='templateButton'>
        <button type='submit'>Save this template?</button>
      </form>
    );
  }
}

export default templateButton;
