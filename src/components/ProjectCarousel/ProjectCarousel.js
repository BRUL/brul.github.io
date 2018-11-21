import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import ProjectCarouselImage from '../ProjectCarouselImage/ProjectCarouselImage';
import './ProjectCarousel.css';

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const { project } = this.props;
    const nextIndex = this.state.activeIndex === project.pictures.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const { project } = this.props;
    const nextIndex = this.state.activeIndex === 0 ? project.pictures.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { project } = this.props;
    const { activeIndex } = this.state;

    const slides = project.pictures
      .map((picture, i) =>
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
          cssModule={{}}
        >
          {
            picture.src ?
              <ProjectCarouselImage projectName={project.name}
                                    imageName={picture.src}
                                    alt={project.name}
                                    title={picture.description}
              /> : null
          }

          {
            picture.description ? 
              <div className="description">
                <p>{picture.description}</p>
              </div> : null
          }
        </CarouselItem>
      );

    return (
      <Carousel
        className="ProjectCarousel col-xs-12"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={0}
        ride="carousel"
        keyboard={true}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

ProjectCarousel.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCarousel;
