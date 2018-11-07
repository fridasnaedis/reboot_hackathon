import React, { Component } from 'react';
import { css } from 'glamor';
import './headerImage.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class HeaderImage extends Component {
  state = {
    bImage: `url(${baseurl}/images/${this.props.image})`, // Make this get image from parent
  };

  render() {
    const headerImageCss = css({
      height: 300,
      backgroundImage: this.state.bImage,
    });

    return (
      <div {...headerImageCss} className="header-image">
        <div className="text-container">
          <h1 className="sponsor__header">{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default HeaderImage;
