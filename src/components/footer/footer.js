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
              <img src ="/images/ImgTwo.png" alt="University of Iceland logo" />
            </div>
          </div>
        </div>
        <div className="footer--info">
          <p>reboothackiceland@gmail.com</p>
          <a href="https://github.com/KetillG/simple_hackathon" rel="noopener noreferrer" target="_blank">
            <img src="/images/GitHub-Mark-32px.png" alt="github"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
