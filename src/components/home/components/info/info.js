import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./../../../card";
import "./info.css";

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

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Info);
