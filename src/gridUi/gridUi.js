import React, { Component } from 'react';
import GridGenerator from '../gridGenerator/gridGenerator';
import Grid from '../grid/grid';
import GridContext from '../GridContext';
import transectGeneration from '../transect';
import './gridUi.css';

class GridUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridInformation: {
        name: {
          value: 'no name',
          touched: false,
        },
        x: {
          value: 30,
          touched: false,
        },
        y: {
          value: 30,
          touched: false,
        },
        transectCount: {
          value: 4,
          touched: false,
        },
        partialTransectCount: {
          value: 1,
          touched: false,
        },
        partialTransectLength: {
          value: 5,
          touched: false,
        },
        minimum: {
          value: 3,
          touched: false,
        },
      },
      data: {
        x: [14, 21, 2],
        y: [25, 1],
        xPartial: [18],
        yPartial: [9],
        direction: [0],
        partialTransectLength: 5,
      },
      ready: false,
    };
  }

  handleUpdateGrid = (gridInformation) => {
    let data = transectGeneration(gridInformation);
    this.setState({
      gridInformation: gridInformation,
      data: data,
      ready: true,
    });
  };
  render() {
    console.log(this.state.ready);
    const value = {
      handleUpdateGrid: this.handleUpdateGrid,
    };
    let buttons;
    if (this.state.ready === true) {
      buttons = (
        <section id='saveOptions'>
          <button>Save this outline?</button>{' '}
          <button>Save this transect configuration and sample?</button>
          <div>
            <label htmlFor='Comments about site'>Comments</label>
            <input placeholder='Cloudy day' type='text' name='name' id='name' />
          </div>
        </section>
      );
    }
    return (
      <GridContext.Provider value={value}>
        <GridGenerator></GridGenerator>
        {<Grid data={this.state.data} info={this.state.gridInformation}></Grid>}
        {buttons}
      </GridContext.Provider>
    );
  }
}

export default GridUi;
