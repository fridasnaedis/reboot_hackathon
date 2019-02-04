import React, { Component } from 'react';
import { css } from 'glamor';

const dynamicCSS = {
  boundary: {
    width: 0,
    height: 0,
  },
  border: {
    borderWidth: 0,
  },
};

class LoadingShowcase extends Component {
  render() {
    let { dimensions } = this.props;
    dimensions = dimensions ? dimensions : 500;

    const { boundary, border } = dynamicCSS;

    boundary.width = `${dimensions}px;`;
    boundary.height = `${dimensions}px;`;
    const boundaryCss = css(boundary);

    border.borderWidth = `${dimensions / 10}px; !important`;
    const borderCss = css(border);

    return (
      <div>
        <div {...boundaryCss} className="loading__dimension-boundary">
          <div className="loading">
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--static"
            />
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--spin loading--spin-right"
            />
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--spin loading--spin-left"
            />
            <div className="loading__element--absolute loading--bounce" />
          </div>
        </div>
        <div {...boundaryCss} className="loading__dimension-boundary">
          <div className="loading">
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--static"
            />
          </div>
        </div>
        <div {...boundaryCss} className="loading__dimension-boundary">
          <div className="loading">
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--spin loading--spin-right"
            />
          </div>
        </div>
        <div {...boundaryCss} className="loading__dimension-boundary">
          <div className="loading">
            <div
              {...borderCss}
              className="loading__element--absolute loading--circle loading--spin loading--spin-left"
            />
          </div>
        </div>
        <div {...boundaryCss} className="loading__dimension-boundary">
          <div className="loading">
            <div className="loading__element--absolute loading--bounce" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingShowcase;
