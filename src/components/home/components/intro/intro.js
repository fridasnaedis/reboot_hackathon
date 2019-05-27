import React, { Component } from 'react';
import { css } from 'glamor';
import './intro.css';
import Translate from '../../../translate';
import { introLoaded } from '../../../../actions/imageLoaded';
import { connect } from 'react-redux';

const baseurl = process.env.REACT_APP_SUB_URL;

class Intro extends Component {
  state = {
    bImage: `url(${baseurl}/images/reykjavik-tabea-damm-unsplash_small_4.jpg)`,
  };

  componentDidMount() {
    // Create medium image item
    const imgMedium = new Image();

    imgMedium.onload = () => {
      // Update to medium image
      this.setState({
        bImage: `url(${baseurl}/images/reykjavik-tabea-damm-unsplash_small_3.jpg)`,
      });

      // Notify that image is done loading

      this.props.dispatch(introLoaded());

      // Create and load large image when medium is done
      const imgLarge = new Image();
      imgLarge.onload = () => {
        this.setState({
          bImage: `url(${baseurl}/images/reykjavik-tabea-damm-unsplash_small.jpg)`,
        });
      };

      // Load large image
      imgLarge.src = `${baseurl}/images/reykjavik-tabea-damm-unsplash_small.jpg`;
    };

    // Load medium image
    imgMedium.src = `${baseurl}/images/reykjavik-tabea-damm-unsplash_small_3.jpg`;
  }

  render() {
    const height = window.innerHeight - 50;

    const introCss = css({
      height,
      backgroundImage: this.state.bImage,
    });

    return (
      <div {...introCss} className="intro">
        <div className="image-container">
          <img
            src={`${baseurl}/images/reboothack_default_transparent_cropped.png`}
            alt="The logo for the website"
          />
        </div>
      </div>
    );
  }
}

export default connect()(Translate(Intro));
