import React, { Component } from 'react';
import GridContext from '../../GridContext';

class templateButton extends Component {
  static contextType = GridContext;

  handleSubmit(event) {
    event.preventDefault();
    this.context.handleAddTemplate(this.props.template);
    console.log('Added new template to context');
    console.log(this.props);
  }
  render() {
    console.log(this.props.template);
    return (
      <form onSubmit={this.handleSubmit}>
        <button type='submit'>Save this template?</button>
      </form>
    );
  }
}

export default templateButton;
