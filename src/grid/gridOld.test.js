import React from 'react';
import ReactDOM from 'react-dom';
import GridOld from './GridOld';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridOld />, div);
  ReactDOM.unmountComponentAtNode(div);
});
