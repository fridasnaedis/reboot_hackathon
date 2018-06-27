import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class Card extends Component {
  static propTypes = {
    text: PropTypes.string,
  };
  render() {
    return (
      <div className="card">
        <div className="card__image">Image here</div>
        <div className="card__text">{this.props.text}</div>
      </div>
    );
  }
}

export default Card;
