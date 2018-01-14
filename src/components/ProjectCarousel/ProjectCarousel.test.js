import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ProjectCarousel from './ProjectCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ProjectCarousel project={({ pictures: [] })} />
    </MemoryRouter>, div);
});
