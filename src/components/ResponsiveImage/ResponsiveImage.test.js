import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveImage from './ResponsiveImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponsiveImage />, div);
});
