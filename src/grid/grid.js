import React, { Component } from 'react';
import * as d3 from 'd3';
import './grid.css';
import { sv } from 'date-fns/locale';

class Grid extends Component {
  render() {
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

    // console.log(data);
    // console.log(test);

    let bigV;
    if (test.x.value > test.y.value) {
      bigV = test.x.value;
    } else {
      bigV = test.y.value;
    }
    let multFactor = 300 / bigV;
    let alteredX;
    let alteredY;
    // console.log('multFactor outside loop: ' + multFactor);

    if (!test.x.value || !test.y.value) {
      console.log('Must wait for both numbers');
    } else {
      // console.log('multFactor inside loop: ' + multFactor);
      // //scales any grid up to 300px
      // console.log('Test x value before transformation: ' + test.x.value);
      // console.log('Test y value before transformation: ' + test.y.value);
      alteredX = test.x.value * multFactor;
      alteredY = test.y.value * multFactor;
      // console.log('Test x value after transformation: ' + test.x.value);
      // console.log('Test y value after transformation: ' + test.y.value);
      // console.log('Altered x value after transformation: ' + alteredX);
      // console.log('Altered y value after transformation: ' + alteredY);

      // console.log(data.x);

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
      // console.log('X data after transformation: ' + data.x);
      // console.log('Y data after transformation: ' + data.y);

      let svg = d3
        .select('svg')
        .attr('height', alteredY)
        .attr('width', alteredX);

      svg.selectAll('*').remove();

      svg
        .selectAll('svg')
        .data(data.y)
        .enter()
        .append('rect')
        .attr('width', alteredX)
        .attr('height', 4)
        .attr('y', (d, i) => d)
        .attr('fill', 'rgb(1,82,112)');

      svg
        .selectAll('svg')
        .data(data.x)
        .enter()
        .append('rect')
        .attr('height', alteredY)
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
        .attr('x', (d) => d + 4)
        .attr('y', alteredY - 10)
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

    return (
      <div id='svgAppender'>
        <svg></svg>
      </div>
    );
  }
}

export default Grid;
