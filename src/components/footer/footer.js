import React, { Component } from 'react';
import './footer.css';

const baseurl = process.env.REACT_APP_SUB_URL;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'reboothackiceland@gmail.com',
      copied: 'Copy',
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="footer--sponsors">
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
          <div className="footer--email">
            {/* Clipboard handler*/ 'clipboard' in navigator && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(this.state.email);
                  this.setState(state => ({
                    copied: 'Copied!',
                  }));
                  setTimeout(
                    function() {
                      this.setState(state => ({
                        copied: 'Copy',
                      }));
                    }.bind(this),
                    3000
                  );
                }}
              >
                <p>reboothackiceland@gmail.com</p>
              </button>
            )}
            <div className="footer-copy-text">{this.state.copied}</div>
          </div>

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
