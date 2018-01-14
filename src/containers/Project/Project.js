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
      project: props.match ? projectRepository.byId(props.match.params.id) : null
    };
  }

  render() {
    const { project } = this.state;

    return project ? (
        <div className="Project container-fluid">
          <Header>
            <span>{this.state.project.description}</span>
          </Header>

          <div className="row">
            <ProjectCarousel project={this.state.project} />
          </div>
        </div>
      ) : null;
  }
}

export default Project;
