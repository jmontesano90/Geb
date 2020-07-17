import React, { Component } from 'react';
import GridContext from '../../GridContext';
import GridApiService from '../../services/grid-api-service';
import './button.css';

class gridConfigurationButton extends Component {
  static contextType = GridContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.props.data;
    GridApiService.postGrid(
      data.id,
      this.context.id,
      data.x.toString(),
      data.y.toString(),
      Math.round(data.partialTransectLength),
      data.xPartial.toString(),
      data.yPartial.toString(),
      data.direction.toString()
    ).then(() => {
      this.context.handleUpdateGrids();
    });
  };
  render() {
    gridConfigurationButton.contextType = GridContext;
    return (
      <form onSubmit={this.handleSubmit} className='saveButton'>
        <button type='submit'>Save this sampling event?</button>
      </form>
    );
  }
}

export default gridConfigurationButton;
