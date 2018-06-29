import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./card.css";

class Card extends Component {
  static propTypes = {
    text: PropTypes.string,
  };
  render() {
    const { card } = this.props.translations;
    return (
      <div className="card">
        <div className="card__image">{card}</div>
        <div className="card__text">{this.props.text}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Card);
