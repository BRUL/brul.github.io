import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import './Project.css';

import ProjectRepository from '../../repositories/project-repository';
const projectRepository = new ProjectRepository();

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: projectRepository.byId(props.match.params.id)
    };
  }

  render() {
    return (
      <div className="Project container-fluid">
        <Header>
          <span>{this.state.project.description}</span>
        </Header>

        <div className="row">
          <ProjectCarousel project={this.state.project} />
        </div>
      </div>
    );
  }
}

export default Project;
