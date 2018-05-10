import React, { Component } from 'react';
import classnames from 'classnames';

import './ProjectCarouselImage.css';

import base64Thumbs from '../../base64-images/result';

class ProjectCarouselImage extends Component {
  constructor(props) {
    super(props);

    this.onImageLoaded = this.onImageLoaded.bind(this);

    this.state = {
      loaded: false
    };
  }

  onImageLoaded() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { projectName, imageName, alt, title } = this.props;
    const { loaded } = this.state;

    const classNames = classnames('ProjectCarouselImage', { 'loaded': loaded });

    return (
      <img className={classNames}
           src={`${base64Thumbs[`${projectName}/${imageName}`]}`}
           srcSet={`
               /responsive-images/dist/${projectName}/${imageName}-large_@2x.jpg 3000w,
               /responsive-images/dist/${projectName}/${imageName}-large_@1x.jpg 1500w,
               /responsive-images/dist/${projectName}/${imageName}-medium_@2x.jpg 1440w,
               /responsive-images/dist/${projectName}/${imageName}-medium_@1x.jpg 720w,
               /responsive-images/dist/${projectName}/${imageName}-small_@2x.jpg 600w,
               /responsive-images/dist/${projectName}/${imageName}-small_@1x.jpg 300w,
               /responsive-images/dist/${projectName}/${imageName}-tiny_@2x.jpg 290w,
               /responsive-images/dist/${projectName}/${imageName}-tiny_@1x.jpg 145w
             `}
           sizes="
              (min-width: 768px) 70vw,
              100vw
             "
           alt={alt} title={title}
           onLoad={this.onImageLoaded} />
    );
  }
}

export default ProjectCarouselImage;
