import React from 'react';
import ReactDOM from 'react-dom';
import TransectPage from './TransectPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TransectPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
