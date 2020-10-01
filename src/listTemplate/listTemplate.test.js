import React from 'react';
import ReactDOM from 'react-dom';
import ListTemplate from './ListTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
