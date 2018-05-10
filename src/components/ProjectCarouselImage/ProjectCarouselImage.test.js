import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ProjectCarouselImage from './ProjectCarouselImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ProjectCarouselImage />
    </MemoryRouter>, div);
});
