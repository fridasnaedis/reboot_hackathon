import React, { Component } from 'react';
import './sponsor-detail.css';
class SponsorDetail extends Component {
  render() {
    const { header, main } = this.props;
    return (
      <div className="sponsor-detail">
        <div className="container">
          <div className="why">
            <h1 dangerouslySetInnerHTML={{ __html: header }} />
            <div dangerouslySetInnerHTML={{ __html: main }} />
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorDetail;
