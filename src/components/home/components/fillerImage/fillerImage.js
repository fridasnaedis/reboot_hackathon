import React, { Component } from 'react';
import { css } from 'glamor';
import './fillerImage.css';

class FillerImage extends Component {
  render() {
    const height = window.innerHeight / 2;

    const fillerImageCss = css({ height });

    return <div {...fillerImageCss} className="fillerImage" />;
  }
}

export default FillerImage;
