import React from 'react';
import ReactDOM from 'react-dom';
import MyTemplates from './MyTemplates';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyTemplates />, div);
  ReactDOM.unmountComponentAtNode(div);
});
