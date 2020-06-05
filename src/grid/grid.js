// import React, { Component } from 'react';
// import * as d3 from 'd3';
// import './grid.css';

// class Grid extends Component {
//   data = {
//     x: [25, 21],
//     y: [4, 25, 11],
//     xPartial: [16],
//     yPartial: [20],
//     direction: [2],
//     partialTransectLength: 7,
//   };

//   test = {
//     x: 300,
//     y: 300,
//     transectCount: 4,
//     minimum: 1,
//     partialTransectCount: 1,
//     partialTransectLength: 5,
//   };

//   svg = d3
//     .select(this.refs.myDiv)
//     .append('svg')
//     .attr('height', test.y)
//     .attr('width', test.x);

//   yTransects = svg
//     .selectAll('svg')
//     .data(data.y)
//     .enter()
//     .append('rect')
//     .attr('width', test.x)
//     .attr('height', 3)
//     .attr('y', (d, i) => d * 10)
//     .attr('fill', 'blue');

//   xTransects = svg
//     .selectAll('svg')
//     .data(data.x)
//     .enter()
//     .append('rect')
//     .attr('height', test.y)
//     .attr('width', 3)
//     .attr('x', (d, i) => d * 10)
//     .attr('fill', 'red');

//   partialTransects = svg
//     .selectAll('svg')
//     .data(data.xPartial)
//     .enter()
//     .append('rect')
//     .attr('height', (d, i) => {
//       if (data.direction[i] <= 1) {
//         if (data.direction[i] == 0) {
//           return data.partialTransectLength * 10;
//         } else {
//           data.yPartial[i] = data.yPartial[i] - data.partialTransectLength;
//           return data.partialTransectLength * 10;
//         }
//       } else {
//         return 4;
//       }
//     })
//     .attr('width', (d, i) => {
//       if (data.direction[i] > 1) {
//         if (data.direction[i] == 2) {
//           return data.partialTransectLength * 10;
//         } else {
//           data.xPartial[i] = data.xPartial[i] - data.partialTransectLength;
//           return data.partialTransectLength * 10;
//         }
//         return data.partialTransectLength * 10;
//       } else return 4;
//     })
//     .attr('x', (d, i) => data.xPartial[i] * 10)
//     .attr('y', (d, i) => data.yPartial[i] * 10)
//     .attr('fill', 'green');

//   yLabels = svg
//     .selectAll('svg')
//     .data(data.y)
//     .enter()
//     .append('text')
//     .attr('y', (d, i) => d * 10 - 4)
//     .text((d) => d);

//   xLabels = svg
//     .selectAll('svg')
//     .data(data.x)
//     .enter()
//     .append('text')
//     .attr('x', (d) => d * 10 + 5)
//     .attr('y', test.y - 4)
//     .text((d) => d);

//   partialLabels = svg
//     .selectAll('svg')
//     .data(data.xPartial)
//     .enter()
//     .append('text')
//     .attr('x', (d) => d * 10 + 4)
//     .attr('y', (d, i) => data.yPartial[i] * 10 - 4)
//     .text((d, i) => d + ', ' + data.yPartial[i]);
//   render() {
//     return <div ref='myDiv'></div>;
//   }
// }

// export default Grid;
