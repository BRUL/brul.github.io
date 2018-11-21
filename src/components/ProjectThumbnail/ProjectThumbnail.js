import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
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
    const { title, name, thumb } = this.props;
    const { loaded } = this.state;

    const classNames = classnames('col-sm-3 project ProjectThumbnail', { 'loaded': loaded });

    return (
      <div className={classNames}>
        <Link to={`/projects/${name}`}>
          <img src={`${thumb}`}
               srcSet={`
               responsive-images/${name}/${name}0-large_@2x.jpg 3000w,
               responsive-images/${name}/${name}0-large_@1x.jpg 1500w,
               responsive-images/${name}/${name}0-medium_@2x.jpg 1440w,
               responsive-images/${name}/${name}0-medium_@1x.jpg 720w,
               responsive-images/${name}/${name}0-small_@2x.jpg 600w,
               responsive-images/${name}/${name}0-small_@1x.jpg 300w,
               responsive-images/${name}/${name}0-tiny_@2x.jpg 290w,
               responsive-images/${name}/${name}0-tiny_@1x.jpg 145w
             `}
               sizes="
              (min-width: 576px) calc(25vw - 8em),
              calc(100vw - 2em)
             "
               alt={title} title={title}
               onLoad={this.onImageLoaded} />
        </Link>
        <p>{ title }</p>
      </div>
    );
  }
}

export default ProjectThumbnail;
