import React, { Component } from 'react';
import './sponsorImage.css';

class sponsorImage extends Component {
  state = {
    src: 'empty',
  };

  componentDidMount() {
    const { src } = this.props;
    const image = new Image();

    image.onload = () => {
      if (image.height >= image.width) {
        this.setState({
          src: 'tall',
        });
      } else {
        this.setState({
          src: 'wide',
        });
      }
    };

    image.src = src;
  }

  render() {
    const { src, alt } = this.props;
    console.log(this.state);

    return <img src={src} alt={alt} className={this.state.src} />;
  }
}

export default sponsorImage;
