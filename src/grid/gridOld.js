import React, { Component } from 'react';
import * as d3 from 'd3';
import './grid.css';

class GridOld extends Component {
  componentDidMount() {
    let data = this.props.data;
    console.log(data.y);
    let test = this.props.info;
    console.log(test.x.value);

    let svg = d3
      .select('svg')
      .attr('height', test.y.value)
      .attr('width', test.x.value)
      .style('fill', 'red');

    //svg.selectAll('*').remove();

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
      .text((d) => d);

    svg
      .selectAll('svg')
      .data(data.x)
      .enter()
      .append('text')
      .attr('x', (d) => d + 4)
      .attr('y', test.y.value - 10)
      .text((d) => d);

    svg
      .selectAll('svg')
      .data(data.xPartial)
      .enter()
      .append('text')
      .attr('x', (d) => d + 4)
      .attr('y', (d, i) => data.yPartial[i] - 4)
      .text((d, i) => d + ', ' + data.yPartial[i]);
  }
  render() {
    return (
      <div id='svgAppender'>
        <svg></svg>
      </div>
    );
  }
}

export default GridOld;
