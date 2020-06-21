import React, { Component } from 'react';
import GridContext from '../GridContext';
import GridOld from '../grid/gridOld';
import { NiceDate } from '../utils/Utils';
import './gridList.css';

class gridList extends Component {
  static contextType = GridContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    this.context.handleDeleteData(this.props.id);
  };

  render() {
    let selectedData = [];
    let i;

    for (i = 0; i < this.context.data.length; i++) {
      if (this.context.data[i].id === this.props.location.state.template.id) {
        selectedData.push(this.context.data[i]);
      }
    }
    let grids = selectedData.map((data, index) => (
      <div className='gridDividers'>
        <input
          type='image'
          src='https://imgur.com/FyZgoKZ.png'
          alt='initialzie button'
          className='deleteButton'
          width='35'
          height='35'
        />
        <span>
          Sampled on <NiceDate date={data.date} />
        </span>

        <GridOld
          data={data}
          info={this.props.location.state.template}
          key={index}
        />
      </div>
    ));
    return (
      <section>
        <main role='main'>
          <header role='banner'>
            <h1>Geb</h1>
            <h2>Transect Generator</h2>
          </header>
          {grids}
        </main>
      </section>
    );
  }
}

export default gridList;
