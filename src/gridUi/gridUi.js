import React, { Component } from 'react';
import GridGenerator from '../gridGenerator/gridGenerator';
import Grid from '../grid/grid';
import GridContext from '../GridContext';
import transectGeneration from '../transect';
import TemplateButton from './buttons/templateButton';
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
  static contextType = GridContext;

  render() {
    console.log(this.state.ready);
    const value = {
      handleUpdateGrid: this.handleUpdateGrid,
    };
    let buttons;
    if (this.state.ready === true) {
      buttons = (
        <section id='saveOptions'>
          <TemplateButton template={this.state.gridInformation} />{' '}
          {/* <button>Save this transect configuration and template?</button> */}
          <div>
            <label htmlFor='Comments about site'>Comments</label>
            <input placeholder='Cloudy day' type='text' name='name' id='name' />
          </div>
        </section>
      );
    }
    return (
      <div>
        <GridGenerator handleUpdateGrid={this.handleUpdateGrid}></GridGenerator>
        {<Grid data={this.state.data} info={this.state.gridInformation}></Grid>}
        {buttons}
      </div>
    );
  }
}

export default GridUi;
