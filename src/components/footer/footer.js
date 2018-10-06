import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--sponsors">
          <div className="footer--sponsors-img">
            <div>
              <img src="/images/ImgOne.jpg" alt="Microsoft logo" />
            </div>
          </div>
          <div className="footer--sponsors-img">
            <div>
              <img src ="/images/ImgTwo.jpg" alt="University of Iceland logo" />
            </div>
          </div>
        </div>
        <div className="footer--info">
          <p>reboothackiceland@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
