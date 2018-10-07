import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
import LanguageButton from '../languageButton';
import Translate from '../translate';

class Navbar extends Component {
  render() {
    const { translations } = this.props;
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar--item navbar__left">
            {/* <Link className="anchor__home" to={'/'}>{p.name}</Link> */}
            <Link className="anchor__home" to="/">
              <img
                src="/images/reboothack_small.png"
                alt="The logo for the website"
              />
              <img
                src="/images/reboothack_default_navbar.png"
                alt="The logo for the hackathon"
              />
            </Link>
          </div>
          <div className="navbar--item navbar__right">
            <Link className="button" to="/faq">
              {translations.faq.content}
            </Link>
            <Link className="button" to="/sponsors">
              {translations.sponsors.content}
            </Link>
            <LanguageButton />
            <Link className="button button__register" to="/#registerForm">
              {translations.home.register.submit}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate(Navbar);
