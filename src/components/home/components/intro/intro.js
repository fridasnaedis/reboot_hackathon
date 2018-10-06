import React, { Component } from 'react';
import { css } from 'glamor';
import './intro.css';
import Translate from '../../../translate';

class Intro extends Component {
  render() {
    const height = window.innerHeight - 50;

    const introCss = css({ height });

    return (
      <div {...introCss} className="intro">
        <div className="image-container">
          <img
            src="/images/reboothack_default_transparent.png"
            alt="The logo for the website"
          />
        </div>
      </div>
    );
  }
}

export default Translate(Intro);
