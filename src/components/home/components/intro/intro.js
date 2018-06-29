import React, { Component } from "react";
import "./intro.css";
import Translate from "../../../translate";

class Intro extends Component {
  render() {
    const { intro } = this.props.translations.home;
    return (
      <div className="intro">
        <div className="inner">
          <div className="content">
            <h1>{intro}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate(Intro);
