import React from 'react';
import ReactDOM from 'react-dom';
import TemplateListItem from './TemplateListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TemplateListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
