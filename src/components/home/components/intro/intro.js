import React, { Component } from "react";
import { css } from "glamor";
import "./intro.css";
import Translate from "../../../translate";
import Banner from "../banner";

class Intro extends Component {
  render() {
    const { intro } = this.props.translations.home;

    const height = window.innerHeight - 70;

    const introCss = css({ height });

    return (
      <div {...introCss} className="intro">
        <div className="image-container">
          <img src="/images/logoLarge.png" />
        </div>
      </div>
    );
  }
}

export default Translate(Intro);
