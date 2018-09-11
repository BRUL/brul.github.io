import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import './Project.css';

import ProjectRepository from '../../repositories/project-repository';
import ProjectCarouselImage from "../../components/ProjectCarouselImage/ProjectCarouselImage";
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
            <div className="offset-3 col-6">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-summary">
                Kolom is de ruggengraat die de boeken een vertikale positie in de ruimte laat aannemen.
                Kolom is een nog in proces zijnde zoektocht naar de interactie tussen het boek, de verzameling en de ruimte.
                Je kan Kolom op de voet volgen via Facebook of Instagram.
              </p>
            </div>
          </div>

          <div className="row project-highlighted-image">
            <div className="offset-2 col-8">
              <p className="project-image">
                <ProjectCarouselImage projectName={project.name}
                                      imageName={project.pictures[0].src}
                                      alt={project.name}
                                      title={project.pictures[0].description}
                />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="offset-3 col-6">
              <p className="project-text">
                Kolom is de ruggengraat die de boeken een vertikale positie in de ruimte laat aannemen.
                Kolom is een nog in proces zijnde zoektocht naar de interactie tussen het boek, de verzameling en de ruimte.
                Je kan Kolom op de voet volgen via Facebook of Instagram.
              </p>

              {
                project.pictures.slice(1).map((picture, index) => {
                  return !Array.isArray(picture.src) ?

                    <div>
                      <p className="project-image" key={index}>
                        <ProjectCarouselImage projectName={project.name}
                                              imageName={picture.src}
                                              alt={project.name}
                                              title={picture.description}
                        />
                      </p>
                    </div>

                    :
                    <div>
                      <div className="project-image-multiple">
                        {
                          picture.src.map(src => {
                            return (
                              <p className="project-image" key={index}>
                                <ProjectCarouselImage projectName={project.name}
                                                      imageName={src}
                                                      alt={project.name}
                                                      title="title"
                                />
                              </p>
                            )
                          })
                        }
                      </div>

                      <p className="project-text">
                        Kolom is de ruggengraat die de boeken een vertikale positie in de ruimte laat aannemen.
                        Kolom is een nog in proces zijnde zoektocht naar de interactie tussen het boek, de verzameling en de ruimte.
                        Je kan Kolom op de voet volgen via Facebook of Instagram.
                      </p>
                    </div>
                })
              }
            </div>
          </div>
        </div>
      ) : null;
  }
}

export default Project;
