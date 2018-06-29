import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";
import Translate from "../translate";

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

export default Translate(Card);
