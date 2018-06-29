import React, { Component } from "react";
import { connect } from "react-redux";
import "./navbar.css";
import LanguageButton from "../languageButton";

class Navbar extends Component {
  render() {
    const { translations } = this.props;
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar--item navbar__left">
            <p>{translations.navbar.left}</p>
          </div>
          <div className="navbar--item navbar__right">
            <LanguageButton />
            <p>{translations.navbar.right}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Navbar);
