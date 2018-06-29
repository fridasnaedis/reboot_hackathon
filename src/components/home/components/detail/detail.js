import React, { Component } from "react";
import { connect } from "react-redux";
import "./detail.css";

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

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Detail);
