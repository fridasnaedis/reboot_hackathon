import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
import LanguageButton from '../languageButton';
import Translate from '../translate';

const baseurl = process.env.REACT_APP_SUB_URL;

class Navbar extends Component {
  render() {
    // const { REACT_APP_MLH_CLIENT_ID, REACT_APP_MLH_REDIRECT_URL } = process.env;
    const { translations } = this.props;
    // const { navbar } = translations;
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar--item navbar__left">
            {/* <Link className="anchor__home" to={'/'}>{p.name}</Link> */}
            <Link className="anchor__home" to={`${baseurl}/`}>
              <img
                src={`${baseurl}/images/reboothack_small.png`}
                alt="The logo for the website"
              />
              <img
                src={`${baseurl}/images/reboothack_default_navbar.png`}
                alt="The logo for the hackathon"
              />
            </Link>
          </div>
          <div className="navbar--item navbar__right">
            {/* <a
              className="button"
              href={navbar.schedule.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {navbar.schedule.text}
            </a> */}
            <Link className="button" to={`${baseurl}/faq`}>
              {translations.faq.content}
            </Link>
            <Link className="button" to={`${baseurl}/sponsors`}>
              {translations.sponsors.content}
            </Link>
            <LanguageButton />
            {/* <a
              className="button button__register"
              href={`https://my.mlh.io/oauth/authorize?client_id=${REACT_APP_MLH_CLIENT_ID}&redirect_uri=${REACT_APP_MLH_REDIRECT_URL}&response_type=token`}
            >
              {translations.home.register.register}
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Translate(Navbar);
