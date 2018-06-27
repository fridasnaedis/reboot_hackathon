import React, { Component } from "react";
import Card from "./../../../card";
import "./info.css";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="container">
          <Card text="Hvernig hugmyndin kom upp" />
          <Card text="Hvað er" />
          <Card text="um reboot hack: afhverju nafnið og þá hugmyndin á bak við Reboot" />
        </div>
      </div>
    );
  }
}

export default Info;
