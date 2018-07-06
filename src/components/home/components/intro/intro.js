import React, { Component } from "react";
import "./intro.css";
import Translate from "../../../translate";

class Intro extends Component {
  render() {
    const { intro } = this.props.translations.home;
    return (
      <div className="intro">
        <div className="inner">
          <img src="/images/logoLarge.png" />
        </div>
      </div>
    );
  }
}

export default Translate(Intro);
