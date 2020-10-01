import React from 'react';
import ReactDOM from 'react-dom';
import GridList from './GridList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
