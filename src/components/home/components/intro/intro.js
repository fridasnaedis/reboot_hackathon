import React, { Component } from "react";
import { connect } from "react-redux";
import "./intro.css";

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

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Intro);
