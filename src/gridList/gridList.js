import React, { Component } from 'react';
import GridContext from '../GridContext';
import { NiceDate } from '../utils/Utils';
import './gridList.css';
import { Link } from 'react-router-dom';

class gridList extends Component {
  static contextType = GridContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    this.context.handleDeleteData(this.props.id);
  };

  render() {
    let selectedData = [];
    let i;
    let grids;
    let gridList;
    if (this.context.data) {
      for (i = 0; i < this.context.data.length; i++) {
        if (
          this.context.data[i].template_id ===
          this.props.location.state.template.id
        ) {
          selectedData.push(this.context.data[i]);
        }
      }
      if (selectedData.length === 0) {
        this.props.history.push('/myTemplates');
      }
      grids = selectedData.map((data, index) => (
        <div className='gridDividers' key={index}>
          <Link
            to={{
              pathname: `/template/${data.template_id}/grids/${data.id}`,
              state: {
                template: this.props.location.state.template,
                data: data,
              },
              key: {
                key: index,
              },
            }}
          >
            Sampled on <NiceDate date={data.date_created} />
          </Link>
        </div>
      ));

      gridList = (
        <section>
          <main role='main' className='list'>
            <header role='banner'>
              <h1>Geb</h1>
              <h2>{this.props.location.state.template.name.value}</h2>
            </header>
            {grids}
          </main>
        </section>
      );
    }
    return <div>{gridList}</div>;
  }
}

export default gridList;
