import React, { Component, Fragment } from "react";
import Card from "./../../../card";
import "./info.css";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Card text="Hvernig hugmyndin kom upp" />
        <Card text="Hvað er" />
        <Card text="um reboot hack: afhverju nafnið og þá hugmyndin á bak við Reboot" />
      </div>
    );
  }
}

export default Info;
