import React, { Component } from 'react';
import './footer.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--sponsors">
          <div className="footer--sponsors-img">
            <div>
              <img src={`${baseurl}/images/ImgOne.jpg`} alt="Microsoft logo" />
            </div>
          </div>
          <div className="footer--sponsors-img">
            <div>
              <img
                src={`${baseurl}/images/ImgTwo.png`}
                alt="University of Iceland logo"
              />
            </div>
          </div>
        </div>
        <div className="footer--info">
          <p>reboothackiceland@gmail.com</p>
          <a
            href="https://github.com/KetillG/simple_hackathon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={`${baseurl}/images/GitHub-Mark-32px.png`} alt="github" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
