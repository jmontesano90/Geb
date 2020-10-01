import React, { Component } from 'react';
import * as d3 from 'd3';
import './grid.css';

class GridOld extends Component {
  componentDidMount() {
    if (this.props.data && this.props.info) {
      let data = this.props.data;
      let test = this.props.info;

      let bigV;
      if (test.x.value > test.y.value) {
        bigV = test.x.value;
      } else {
        bigV = test.y.value;
      }
      let multFactor = 300 / bigV;
      let alteredX = test.x.value * multFactor;
      let alteredY = test.y.value * multFactor;
      let svg = d3
        .select('svg')
        .attr('height', alteredY)
        .attr('width', alteredX)
        .style('fill', 'red');

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
        .data(data.x_partial)
        .enter()
        .append('rect')
        .attr('height', (d, i) => {
          if (data.direction[i] <= 1) {
            if (data.direction[i] === 0) {
              return data.partial_transect_length;
            } else {
              data.y_partial[i] =
                data.y_partial[i] - data.partial_transect_length;
              return data.partial_transect_length;
            }
          } else {
            return 4;
          }
        })
        .attr('width', (d, i) => {
          if (data.direction[i] > 1) {
            if (data.direction[i] === 2) {
              return data.partial_transect_length;
            } else {
              data.x_partial[i] =
                data.x_partial[i] - data.partial_transect_length;
              return data.partial_transect_length;
            }
          } else return 4;
        })
        .attr('x', (d, i) => data.x_partial[i])
        .attr('y', (d, i) => data.y_partial[i])
        .attr('fill', 'rgb(109,88,59)');

      svg
        .selectAll('svg')
        .data(data.y)
        .enter()
        .append('text')
        .attr('y', (d, i) => d - 4)
        .text((d) => Math.round(d));

      svg
        .selectAll('svg')
        .data(data.x)
        .enter()
        .append('text')
        .attr('x', (d) => d + 4)
        .attr('y', alteredY - 10)
        .text((d) => Math.round(d));

      svg
        .selectAll('svg')
        .data(data.x_partial)
        .enter()
        .append('text')
        .attr('x', (d) => d + 4)
        .attr('y', (d, i) => data.y_partial[i] - 4)
        .text((d, i) => Math.round(d) + ', ' + Math.round(data.y_partial[i]));
    }
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
