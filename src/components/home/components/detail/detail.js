import React, { Component } from "react";
import "./detail.css";
import Translate from "../../../translate";

class Detail extends Component {
  render() {
    const { detail } = this.props.translations.home;
    return (
      <div className="detail">
        <div className="container">
          <div className="why">
            <h1>{detail.first.header}</h1>
            <p>{detail.first.main}</p>
          </div>
          <div className="who">
            <h1>{detail.second.header}r</h1>
            <p>{detail.second.main}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate(Detail);
