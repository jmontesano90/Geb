import React, { Component } from 'react';
import * as d3 from 'd3';
import './grid.css';

class Grid extends Component {
  render() {
    let data = this.props.data;
    let test;
    test = this.props.info;
    let bigV;
    if (test.x.value > test.y.value) {
      bigV = test.x.value;
    } else {
      bigV = test.y.value;
    }
    let multFactor = 280 / bigV;
    let alteredX;
    let alteredY;

    if (!test.x.value || !test.y.value) {
      console.log('Must wait for both numbers');
    } else {
      alteredX = test.x.value * multFactor;
      alteredY = test.y.value * multFactor;

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

      setTimeout(function () {
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
                data.yPartial[i] =
                  data.yPartial[i] - data.partialTransectLength;
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
                data.xPartial[i] =
                  data.xPartial[i] - data.partialTransectLength;
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
          .text((d) => Math.round(d / multFactor));

        svg
          .selectAll('svg')
          .data(data.x)
          .enter()
          .append('text')
          .attr('x', (d) => d + 4)
          .attr('y', alteredY - 10)
          .text((d) => Math.round(d / multFactor));

        svg
          .selectAll('svg')
          .data(data.xPartial)
          .enter()
          .append('text')
          .attr('x', (d) => d + 4)
          .attr('y', (d, i) => data.yPartial[i] - 4)
          .text(
            (d, i) =>
              Math.round(d / multFactor) +
              ', ' +
              Math.round(data.yPartial[i] / multFactor)
          );
      }, 1);
    }

    return (
      <div id='svgAppender'>
        <svg></svg>
      </div>
    );
  }
}

export default Grid;
