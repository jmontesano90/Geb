import React, { Component } from 'react';
import GridGenerator from '../gridGenerator/gridGenerator';
import Grid from '../grid/grid';
import GridContext from '../GridContext';
import transectGeneration from '../transect';
import TemplateButton from './buttons/templateButton';
import './gridUi.css';
import idGeneration from '../idGeneration';

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
        id: '60',
      },
      data: {
        x: [14, 21, 2],
        y: [25, 1],
        xPartial: [18],
        yPartial: [9],
        direction: [0],
        partialTransectLength: 5,
        id: '60',
      },
      ready: false,
    };
  }

  handleUpdateGrid = (gridInformation) => {
    let newId = idGeneration();
    let data = transectGeneration(gridInformation, newId);
    gridInformation.id = newId;
    this.setState({
      gridInformation: gridInformation,
      data: data,
      ready: true,
    });
  };
  static contextType = GridContext;

  render() {
    // const value = {
    //   handleUpdateGrid: this.handleUpdateGrid,
    // };
    let buttons;
    if (this.state.ready === true) {
      buttons = (
        <section id='saveOptions'>
          <TemplateButton
            history={this.props.history}
            template={this.state.gridInformation}
          />{' '}
        </section>
      );
    }
    let grid;
    if (this.state.ready === true) {
      grid = (
        <Grid
          data={this.state.data}
          info={this.state.gridInformation}
          id='gridTest'
        ></Grid>
      );
    }
    return (
      <section>
        {' '}
        <header role='banner'>
          <h1>Geb</h1>
          <h2>Template Generator</h2>
        </header>
        <GridGenerator handleUpdateGrid={this.handleUpdateGrid}></GridGenerator>
        {grid}
        {buttons}
      </section>
    );
  }
}

export default GridUi;
