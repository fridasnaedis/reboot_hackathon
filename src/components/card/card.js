import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import './card.css';
import Translate from '../translate';

class Card extends Component {
  static propTypes = {
    text: PropTypes.object,
  };

  createImage() {
    const { imageData } = this.props;

    if (imageData) {
      return (
        <div className="card__image">
          <img src={imageData} alt="Supporting data for the card" />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { imageData, text } = this.props;
    let componentHeight = 300;

    const image = this.createImage();

    if (imageData) componentHeight /= 2;

    const cardCss = css({ height: `${componentHeight}px` });

    return (
      <div className="card">
        {image}
        <div {...cardCss} className="card__text">
          <a href={text.link} rel="noopener noreferrer" target="_blank">
            <h3 className="card__name">{text.name}</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Translate(Card);
