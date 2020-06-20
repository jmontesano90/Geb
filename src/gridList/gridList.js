import React, { Component } from 'react';
import GridContext from '../GridContext';
import GridOld from '../grid/gridOld';

class gridList extends Component {
  static contextType = GridContext;

  render() {
    let selectedData = [];
    let i;

    for (i = 0; i < this.context.data.length; i++) {
      if (this.context.data[i].id === this.props.location.state.template.id) {
        selectedData.push(this.context.data[i]);
      }
    }
    let grids = selectedData.map((data, index) => (
      <GridOld
        data={data}
        info={this.props.location.state.template}
        key={index}
      />
    ));
    return (
      <div>
        {' '}
        <h1>HELLLO AM I NOT RENDERING?</h1>
        {grids}
      </div>
    );
  }
}

export default gridList;
