import React, { Component } from 'react';
import './gridGenerator.css';
import Chart from 'chart.js';
import transect from '../transect';
import { render } from '@testing-library/react';
import Grid from '../grid/grid';
import transectGeneration from '../transect';

class gridGenerator extends Component {
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
          value: 5,
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
        x: [4, 27],
        y: [25, 17, 7],
        xPartial: [16],
        yPartial: [12],
        direction: [2],
        partialTransectLength: 5,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let gridInformation = { ...this.state.gridInformation };
    gridInformation[event.target.name.toString()] = {
      value: event.target.value,
      touched: true,
    };
    this.setState(
      {
        gridInformation,
      },
      () => {}
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.gridInformation);
    let info = this.state.gridInformation;
    info.x.value = parseInt(info.x.value);
    info.y.value = parseInt(info.y.value);
    info.transectCount.value = parseInt(info.transectCount.value);
    info.partialTransectCount.value = parseInt(info.partialTransectCount.value);
    info.partialTransectLength.value = parseInt(
      info.partialTransectLength.value
    );
    info.minimum.value = parseInt(info.minimum.value);
    console.log(transectGeneration(info));
    console.log(this.state.data);
    // document.getElementById('name').value = '';
    // document.getElementById('x-length').value = 0;
    // document.getElementById('y-length').value = 0;
    // document.getElementById('transect').value = 0;
    // document.getElementById('partial-transect').value = 0;
    // document.getElementById('partial-transect-length').value = 0;
    // document.getElementById('minimum').value = 0;
  }
  rend;

  render() {
    return (
      <div className='gridGenerator'>
        <form
          className='Transect Grid Generator'
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div id='myBarChart'></div>
          <section>
            <div>
              <label htmlFor='Name of grid'>Name of Grid</label>
              <input
                placeholder='Washington Square Park'
                type='text'
                name='name'
                id='name'
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor='X length'>X length</label>
              <input
                placeholder='30'
                type='number'
                name='x'
                id='x'
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor='Y length'>Y length</label>
              <input
                type='number'
                name='y'
                id='y'
                placeholder='30'
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </section>
          <div>
            <label htmlFor='Transect'>Full Transect count</label>
            <input
              type='number'
              name='transectCount'
              id='transectCount'
              placeholder='4'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='partial-transect'>Partial Transect Count</label>
            <input
              type='number'
              name='partialTransectCount'
              id='partialTransectCount'
              placeholder='1'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='partial-transect-length'>
              Partial Transect Length
            </label>
            <input
              type='number'
              name='partialTransectLength'
              id='partialTransectLength'
              placeholder='5'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='minimum'>Minimum distance between transects</label>
            <input
              type='number'
              name='minimum'
              id='minimum'
              placeholder='3'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type='submit'>Generate Custom Transect</button>
        </form>
        <Grid data={this.state.data} info={this.state.gridInformation}></Grid>
      </div>
    );
  }
}

export default gridGenerator;
