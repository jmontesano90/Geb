import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './SplashPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SplashPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
