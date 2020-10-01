import React from 'react';
import ReactDOM from 'react-dom';
import GridGenerator from './GridGenerator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
