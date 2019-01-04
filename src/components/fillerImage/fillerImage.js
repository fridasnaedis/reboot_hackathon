import React, { Component } from 'react';
import { css } from 'glamor';
import { connect } from 'react-redux';
import './fillerImage.css';

class FillerImage extends Component {
  render() {
    const height = window.innerHeight / 2;

    if (!this.props.mainImageLoaded) {
      return <div />;
    }

    const fillerImageCss = css({
      height,
      backgroundImage: `url(${this.props.imageUrl})`,
    });

    return <div {...fillerImageCss} className="fillerImage" />;
  }
}

const mapStateToProps = state => {
  return {
    mainImageLoaded: state.imageLoaded.done,
  };
};

export default connect(mapStateToProps)(FillerImage);
