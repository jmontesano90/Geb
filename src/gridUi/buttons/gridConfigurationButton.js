import React, { Component } from 'react';
import GridContext from '../../GridContext';
import GridApiService from '../../services/grid-api-service';
import config from '../../config';

class gridConfigurationButton extends Component {
  static contextType = GridContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.props.data;
    GridApiService.postGrid(
      data.id,
      config.USER_ID,
      data.x.toString(),
      data.y.toString(),
      Math.round(data.partialTransectLength),
      data.xPartial.toString(),
      data.yPartial.toString(),
      data.direction.toString()
    ).then(() => {
      this.context.handleUpdateGrids();
    });
    // .then(() => {
    //   this.props.history.push(`/template/${data.id}`);
    // });
    //.then(this.context.handleAddData(this.props.data));
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
