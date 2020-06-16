import React, { Component } from 'react';
import './gridGenerator.css';
// import Chart from 'chart.js';
// import transect from '../transect';
// import { render } from '@testing-library/react';
// import Grid from '../grid/grid';
// import transectGeneration from '../transect';
import GridContext from '../GridContext';
import ValidationError from './ValidationError';
import { parse } from 'date-fns';

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
          value: 4,
          touched: false,
        },
        partialTransectCount: {
          value: 1,
          touched: false,
        },
        partialTransectLength: {
          value: 1,
          touched: false,
        },
        minimum: {
          value: 3,
          touched: false,
        },
        ready: {
          value: 0,
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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static contextType = GridContext;

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

  transectLengthValidation() {
    let validation = true;
    if (
      parseInt(this.state.gridInformation.x.value) <
      parseInt(this.state.gridInformation.partialTransectLength.value)
    ) {
      validation = false;
    } else if (
      parseInt(this.state.gridInformation.y.value) <
      parseInt(this.state.gridInformation.partialTransectLength.value)
    ) {
      validation = false;
    } else {
      validation = true;
    }
    if (validation === false) {
      return 'Partial transect cannot be longer than x or y';
    }
  }

  minimumValidation() {
    let minTran =
      parseInt(this.state.gridInformation.minimum.value) *
      parseInt(this.state.gridInformation.transectCount.value);
    let xyTotal =
      parseInt(this.state.gridInformation.x.value) +
      parseInt(this.state.gridInformation.y.value);
    if (minTran > xyTotal / 1.5) {
      return 'That minimum distance is too long given your other parameters';
    }
  }

  xyValidation() {
    let validation;
    if (parseInt(this.state.gridInformation.x.value) > 300) {
      validation = false;
    }
    if (parseInt(this.state.gridInformation.y.value) > 300) {
      validation = false;
    }
    if (validation === false) {
      return 'Neither x nor y may be larger than 300';
    }
  }

  fullTransectValidation() {
    if (parseInt(this.state.gridInformation.transectCount.value) > 10) {
      return 'Cannot have more than 10 transects';
    }
  }

  partialTransectValidation() {
    if (parseInt(this.state.gridInformation.partialTransectCount.value) > 10) {
      return 'Cannot have more than 10 partial transects';
    }
  }

  validateNumberInputs() {
    let onlyNumbers = true;
    if (isNaN(this.state.gridInformation.x.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.gridInformation.y.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.gridInformation.transectCount.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.gridInformation.partialTransectCount.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.gridInformation.partialTransectLength.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.gridInformation.minimum.value)) {
      onlyNumbers = false;
    }
    if (onlyNumbers === false) {
      return 'All inputs must be numbers';
    }
  }

  validatePositiveInputs() {
    let positiveNumbers = true;
    if (parseInt(this.state.gridInformation.x.value) < 0) {
      positiveNumbers = false;
    }
    if (parseInt(this.state.gridInformation.y.value) < 0) {
      positiveNumbers = false;
    }
    if (parseInt(this.state.gridInformation.transectCount.value) < 0) {
      positiveNumbers = false;
    }
    if (parseInt(this.state.gridInformation.partialTransectCount.value) < 0) {
      positiveNumbers = false;
    }
    if (parseInt(this.state.gridInformation.partialTransectLength.value) < 0) {
      positiveNumbers = false;
    }
    if (parseInt(this.state.gridInformation.minimum.value) < 0) {
      positiveNumbers = false;
    }
    if (positiveNumbers === false) {
      return 'All inputs must be positive';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.gridInformation);
    let information = this.state.gridInformation;

    console.log('Information being passed to transectGeneration:');
    console.log(information);
    this.props.handleUpdateGrid(this.state.gridInformation, this.state.data);
  }
  rend;

  forceUpdateHandler = () => {
    this.forceUpdate();
  };

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
            <ValidationError message={this.xyValidation()} />
            <div>
              <label htmlFor='Transect'>Full Transect count</label>
              <ValidationError message={this.fullTransectValidation()} />
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
              <ValidationError message={this.partialTransectValidation()} />
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
              <ValidationError message={this.transectLengthValidation()} />
              <input
                type='number'
                name='partialTransectLength'
                id='partialTransectLength'
                placeholder='5'
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor='minimum'>
                Minimum distance between transects
              </label>
              <ValidationError message={this.minimumValidation()} />
              <input
                type='number'
                name='minimum'
                id='minimum'
                placeholder='3'
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <ValidationError message={this.validateNumberInputs()} />
            <ValidationError message={this.validatePositiveInputs()} />
            <button
              type='submit'
              onClick={this.forceUpdateHandler}
              disabled={
                this.validatePositiveInputs() ||
                this.validateNumberInputs() ||
                this.minimumValidation() ||
                this.transectLengthValidation() ||
                this.partialTransectValidation() ||
                this.fullTransectValidation() ||
                this.xyValidation()
              }
            >
              Generate Custom Transect
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default gridGenerator;
