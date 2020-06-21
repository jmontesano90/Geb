import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TemplateListItem.css';
import GridContext from '../GridContext';
import Collapsible from 'react-collapsible';

export default class TemplateListItem extends Component {
  static contextType = GridContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    this.context.handleDeleteTemplate(this.props.id);
  };
  render() {
    const { template } = this.props;
    console.log(template);
    console.log(template.minimum.value);
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
            <h2 className='TemplateListItem__heading'>{template.name.value}</h2>
          </Link>
          <Collapsible trigger='View template details' className='collapsible'>
            <div className='valueContainer'>
              <span>X value: </span>
              <span className='values'>{template.x.value}</span>
            </div>
            <div className='valueContainer'>
              <span>Y value: </span>
              <span className='values'>{template.y.value}</span>
            </div>
            <div className='valueContainer'>
              <span>Transect count: </span>
              <span className='values'>{template.transectCount.value}</span>
            </div>
            <div className='valueContainer'>
              <span>
                Minimum distance between transects:{' '}
                <span className='values'>{template.minimum.value}</span>
              </span>
            </div>
            <div className='valueContainer'>
              <span>
                Partial transect count:{' '}
                <span className='values'>
                  {template.partialTransectCount.value}
                </span>
              </span>
            </div>
            <div className='valueContainer'>
              <span>
                Partial transect length:{' '}
                <span className='values'>
                  {template.partialTransectLength.value}
                </span>
              </span>
            </div>
          </Collapsible>
        </header>
      </div>
    );
  }
}
