import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--sponsors">
          <img src="/images/ImgOne.jpg" alt="Microsoft logo" />
          <img src="/images/ImgTwo.jpg" alt="University of Iceland logo" />
        </div>
        <div className="footer--info">
          <p>hackathon@hackthon.gov.edu</p>
        </div>
      </div>
    );
  }
}

export default Footer;
