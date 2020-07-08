import React, { Component } from 'react';
import GridContext from '../../GridContext';
import TemplateApiService from '../../services/template-api-service';
import config from '../../config';

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
      config.USER_ID,
      template.x.value,
      template.y.value
    )
      .then(this.context.handleAddTemplate(this.props.template))
      .then(this.props.history.push('/home'));
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
