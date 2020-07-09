import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TemplateListItem.css';
import GridContext from '../GridContext';
import Collapsible from 'react-collapsible';
import TemplateApiService from '../services/template-api-service';

export default class TemplateListItem extends Component {
  static contextType = GridContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    TemplateApiService.deleteTemplateGrids(this.props.template.id)
      .then(() => {
        TemplateApiService.deleteTemplate(this.props.template.id);
      })
      .then(() => {
        this.context.handleDeleteTemplate(this.props.id);
      });
  };
  render() {
    const { template } = this.props;
    console.log(template);
    return (
      <div className='templateListItem'>
        <header className='TemplateListItem__header'>
          <input
            type='image'
            src='https://imgur.com/FyZgoKZ.png'
            alt='initialzie button'
            className='deleteButton'
            width='35'
            height='35'
            onClick={this.handleClickDelete}
          />
          <Link
            to={{
              pathname: `/template/${this.props.id}`,
              state: {
                template: template,
              },
            }}
          >
            <h2 className='TemplateListItem__heading'>{template.name}</h2>
          </Link>
          <Collapsible trigger='View template details' className='collapsible'>
            <div className='valueContainer'>
              <span>X value: </span>
              <span className='values'>{template.x}</span>
            </div>
            <div className='valueContainer'>
              <span>Y value: </span>
              <span className='values'>{template.y}</span>
            </div>
            <div className='valueContainer'>
              <span>Transect count: </span>
              <span className='values'>{template.transect_count}</span>
            </div>
            <div className='valueContainer'>
              <span>
                Minimum distance between transects:{' '}
                <span className='values'>{template.minimum}</span>
              </span>
            </div>
            <div className='valueContainer'>
              <span>
                Partial transect count:{' '}
                <span className='values'>
                  {template.partial_transect_count}
                </span>
              </span>
            </div>
            <div className='valueContainer'>
              <span>
                Partial transect length:{' '}
                <span className='values'>
                  {template.partial_transect_length}
                </span>
              </span>
            </div>
          </Collapsible>
        </header>
      </div>
    );
  }
}
