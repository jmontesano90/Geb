import React, { Component } from 'react';
import GridContext from '../../GridContext';
import TemplateApiService from '../../services/template-api-service';

class templateButton extends Component {
  static contextType = GridContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const { template } = this.props;
    TemplateApiService.postTemplate(
      template.minimum.value,
      template.name.value,
      template.partialTransectCount.value,
      template.partialTransectLength.value,
      template.transectCount.value,
      this.context.id,
      template.x.value,
      template.y.value
    )
      .then(() => {
        this.context.handleUpdateTemplates();
      })
      .then(() => {
        this.props.history.push('/myTemplates');
      });
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
