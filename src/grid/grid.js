import React, { Component } from 'react';
import * as d3 from 'd3';
import './grid.css';

class Grid extends Component {
  componentDidMount() {
    // let data = {
    //   x: [5, 2],
    //   y: [7, 1, 4],
    //   xPartial: [4],
    //   yPartial: [1],
    //   direction: [1],
    //   partialTransectLength: 50,
    // };

    let data = this.props.data;

    // data.x = parseInt(data.x);
    // data.y = parseInt(data.y);
    // data.xPartial = parseInt(data.xPartial);
    // data.yPartial = parseInt(data.yPartial);
    // data.direction = parseInt(data.direction);
    // data.partialTransectLength = parseInt(data.partialTransectLength);

    let test = this.props.info;

    // test.x.value = parseInt(test.x.value);
    // test.y.value = parseInt(test.y.value);
    // test.transectCount.value = parseInt(test.transectCount.value);
    // test.partialTransectCount.value = parseInt(test.partialTransectCount.value);
    // test.partialTransectLength.value = parseInt(
    //   test.partialTransectLength.value
    // );
    // test.minimum.value = parseInt(test.minimum.value);
    console.log(this.props);
    console.log(test);

    let bigV;
    if (test.x.value > test.y.value) {
      bigV = test.x.value;
    } else {
      bigV = test.y.value;
    }

    let multFactor = 300 / bigV;
    //scales any grid up to 300px
    test.x.value = test.x.value * multFactor;
    test.y.value = test.y.value * multFactor;

    for (let i = 0; i < data.x.length; i++) {
      data.x[i] = data.x[i] * multFactor;
    }
    for (let i = 0; i < data.y.length; i++) {
      data.y[i] = data.y[i] * multFactor;
    }
    for (let i = 0; i < data.xPartial.length; i++) {
      data.xPartial[i] = data.xPartial[i] * multFactor;
    }
    for (let i = 0; i < data.yPartial.length; i++) {
      data.yPartial[i] = data.yPartial[i] * multFactor;
    }
    data.partialTransectLength = data.partialTransectLength * multFactor;

    let svg = d3
      .select('svg')
      .attr('height', test.y.value)
      .attr('width', test.x.value);

    svg
      .selectAll('svg')
      .data(data.y)
      .enter()
      .append('rect')
      .attr('width', test.x.value)
      .attr('height', 4)
      .attr('y', (d, i) => d)
      .attr('fill', 'rgb(1,82,112)');

    svg
      .selectAll('svg')
      .data(data.x)
      .enter()
      .append('rect')
      .attr('height', test.y.value)
      .attr('width', 4)
      .attr('x', (d, i) => d)
      .attr('fill', 'rgb(197,84,40)');

    svg
      .selectAll('svg')
      .data(data.xPartial)
      .enter()
      .append('rect')
      .attr('height', (d, i) => {
        if (data.direction[i] <= 1) {
          if (data.direction[i] === 0) {
            return data.partialTransectLength;
          } else {
            data.yPartial[i] = data.yPartial[i] - data.partialTransectLength;
            return data.partialTransectLength;
          }
        } else {
          return 4;
        }
      })
      .attr('width', (d, i) => {
        if (data.direction[i] > 1) {
          if (data.direction[i] === 2) {
            return data.partialTransectLength;
          } else {
            data.xPartial[i] = data.xPartial[i] - data.partialTransectLength;
            return data.partialTransectLength;
          }
        } else return 4;
      })
      .attr('x', (d, i) => data.xPartial[i])
      .attr('y', (d, i) => data.yPartial[i])
      .attr('fill', 'rgb(109,88,59)');

    svg
      .selectAll('svg')
      .data(data.y)
      .enter()
      .append('text')
      .attr('y', (d, i) => d - 4)
      .text((d) => d / multFactor);

    svg
      .selectAll('svg')
      .data(data.x)
      .enter()
      .append('text')
      .attr('x', (d) => d + 5)
      .attr('y', test.y.value - 4)
      .text((d) => d / multFactor);

    svg
      .selectAll('svg')
      .data(data.xPartial)
      .enter()
      .append('text')
      .attr('x', (d) => d + 4)
      .attr('y', (d, i) => data.yPartial[i] - 4)
      .text((d, i) => d / multFactor + ', ' + data.yPartial[i] / multFactor);
  }

  render() {
    return <svg></svg>;
  }
}

export default Grid;
