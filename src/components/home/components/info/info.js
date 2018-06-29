import React, { Component } from "react";
import Card from "./../../../card";
import "./info.css";
import Translate from "../../../translate";

class Info extends Component {
  render() {
    const { info } = this.props.translations.home;
    return (
      <div className="info">
        <div className="container">
          <Card text={info.first} />
          <Card text={info.second} />
          <Card text={info.third} />
        </div>
      </div>
    );
  }
}

export default Translate(Info);
