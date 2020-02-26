import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import './Projects.scss';

import ProjectRepository from '../../repositories/project-repository';
const projectRepository = new ProjectRepository();

class Projects extends Component {
  render() {
    return (
      <div className="Projects container-fluid">
        <Header/>

        <div className="content row">
          {
            projectRepository
              .getAll()
              .filter(function (project) { // filter first for friends
                    return project.display === true // returns a new array
                  })
              .map((project, index) =>
                <ProjectThumbnail name={project.name} title={project.title} thumb={project.thumb} key={index} />
              )
          }
        </div>
      </div>
    );
  }
}

export default Projects;
