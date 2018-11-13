import React, { Component } from 'react';
import './detail.css';
class Detail extends Component {
  render() {
    const { header, main } = this.props;
    return (
      <div className="detail">
        <div className="container">
          <div className="why">
            <h1>{header}</h1>
            <p dangerouslySetInnerHTML={{ __html: main }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
