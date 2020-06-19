import React, { Component } from 'react';
import GridContext from '../../GridContext';

class gridConfigurationButton extends Component {
  static contextType = GridContext;

  handleSubmit = (event) => {
    event.preventDefault();
    this.context.handleAddData(this.props.data);
    console.log('Added new template to context');
    console.log(this.props);
  };
  render() {
    console.log(this.props.data);
    gridConfigurationButton.contextType = GridContext;
    return (
      <form onSubmit={this.handleSubmit}>
        <button type='submit'>Save this sampling event?</button>
      </form>
    );
  }
}

export default gridConfigurationButton;
