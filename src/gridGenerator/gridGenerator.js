import React from 'react';
import './gridGenerator.css';
import Chart from 'chart.js';
import transect from '../transect';

function gridGenerator() {
  let test = {
    x: 30,
    y: 30,
    transectCount: 4,
    minimum: 3,
    partialTransectCount: 1,
    partialTransectLength: 5,
  };
  console.log(transect(test));
  return (
    <div className='gridGenerator'>
      <form className='Transect Grid Generator'>
        <div id='myBarChart'></div>
        <section>
          <div>
            <label htmlFor='Name of grid'>Name of Grid</label>
            <input
              placeholder='Washington Square Park'
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div>
            <label htmlFor='X length'>X length</label>
            <input
              placeholder='30'
              type='number'
              name='x-length'
              id='x-length'
            />
          </div>
          <div>
            <label htmlFor='Y length'>Y length</label>
            <input
              type='number'
              name='Y length'
              id='y-length'
              placeholder='30'
            />
          </div>
        </section>
        <div>
          <label htmlFor='Transect'>Full Transect count</label>
          <input type='number' name='transect' id='transect' placeholder='4' />
        </div>
        <div>
          <label htmlFor='partial-transect'>Partial Transect Count</label>
          <input
            type='number'
            name='partial-transect'
            id='partial-transect'
            placeholder='1'
          />
        </div>
        <div>
          <label htmlFor='partial-transect-length'>
            Partial Transect Length
          </label>
          <input
            type='number'
            name='partial-transect-length'
            id='partial-transect-length'
            placeholder='5'
          />
        </div>
        <div>
          <label htmlFor='minimum'>Minimum distance between transects</label>
          <input type='number' name='minimum' id='minimum' placeholder='3' />
        </div>
        <button type='submit'>Generate Custom Transect</button>
      </form>
    </div>
  );
}

export default gridGenerator;
