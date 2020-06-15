import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NiceDate, Hyph } from '../utils/Utils';
import './OutlineListItem.css';

export default class OutlineListItem extends Component {
  render() {
    const { outline } = this.props;
    return (
      <Link to={`/outline/${outline.id}`} className='OutlineListItem'>
        <header className='OutlineListItem__header'>
          <h2 className='OutlineListItem__heading'>{outline.name}</h2>
          <div>Transect count: `{outline.transect_count}`</div>
          <div>Minimum distance between transects: `{outline.minimum}`</div>
          <div>Partial transect count: `{outline.partial_transect_count}`</div>
          <div>
            Partial transect length: `{outline.partial_transect_length}`
          </div>
        </header>
        <footer className='OutlineListItem__footer'>
          <div>Date Created: `{outline.date_created}`</div>
        </footer>
      </Link>
    );
  }
}
