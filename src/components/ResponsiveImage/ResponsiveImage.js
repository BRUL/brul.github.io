import React, { Component } from 'react';

class ResponsiveImage extends Component {
  state = { currentSrc: '' };

  onLoad(event) {
    this.setState({
      currentSrc: event.target.currentSrc
    });
  }

  render() {
    const { small, medium, large, xlarge } = this.props;
    return (
      <picture>
        <source
          media="(min-width: 900px)"
          srcset="image-lg_1x.webp 1x, image-lg_2x.webp 2x"
          type="image/webp" />
        <source
          media="(min-width: 601px)"
          srcset="image-md_1x.webp 1x, image-md_2x.webp 2x"
          type="image/webp" />
        <source
          srcSet="image-sm_1x.webp 1x, image-sm_2x.webp 2x"
          type="image/webp" />
        <img
          srcSet="image-sm_1x.jpg 600w, image-md_1x.jpg 900w, image-lg_1x.jpg 1440w"
          src="image_lg_1x.jpg"
          type="image/jpeg"
          alt=" image description" />
      </picture>
    );
  }
}

export default ResponsiveImage;
