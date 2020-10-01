import React from 'react';
import ReactDOM from 'react-dom';
import GridUi from './GridUi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridUi />, div);
  ReactDOM.unmountComponentAtNode(div);
});
