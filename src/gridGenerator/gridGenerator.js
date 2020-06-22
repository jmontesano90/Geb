import React, { Component } from 'react';
import './gridGenerator.css';
import GridContext from '../GridContext';
import ValidationError from './ValidationError';
import Collapsible from 'react-collapsible';

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
        id: '60',
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

  nameValidation() {
    if (this.state.gridInformation.name.value === 'no name') {
      return 'All Templates must be named';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
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
                required
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <ValidationError message={this.nameValidation()} />
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
            <Collapsible trigger='+' className='collapsible'>
              <div>
                The x and y values are for determining the height and width of
                the grid template. They do not match any specific units, and are
                meant to be used relatively.
              </div>
            </Collapsible>
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
            <Collapsible trigger='+' className='collapsible'>
              <div>
                The x and y values are for determining the height and width of
                the grid template. They do not match any specific units, and are
                meant to be used relatively.
              </div>
            </Collapsible>
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
            <Collapsible trigger='+' className='collapsible'>
              <div>
                Full transcects cover the full distance of either the height or
                distance, wherever they are randomly selected to be.
              </div>
            </Collapsible>
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
            <Collapsible trigger='+' className='collapsible'>
              <div>
                Partial transects are small transects that do not cover the full
                distance as full transects do. They only cover the distance you
                specify. They will be placed randomly inside your grid, with
                their cardinal direction also randomized.
              </div>
            </Collapsible>
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
            <Collapsible trigger='+' className='collapsible'>
              <div>The length of the partial transects.</div>
            </Collapsible>
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
            <Collapsible trigger='+' className='collapsible'>
              <div>
                Minimum distance between transects only applies to full
                transects. This will insure that full transects won't be on top
                of each other. It is important to note excessively high minimum
                distance can lead to very homogenized transects.
              </div>
            </Collapsible>
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
                this.xyValidation() ||
                this.nameValidation()
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
