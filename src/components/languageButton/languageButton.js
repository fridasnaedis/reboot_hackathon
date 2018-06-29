import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./languageButton.css";
import { setLanguage } from "../../actions/localization";

class LanguageButton extends Component {
  static propTypes = {
    languages: PropTypes.shape(),
    currentLanguage: PropTypes.string,
    translations: PropTypes.shape(),
  };

  updateLanguage = () => {
    const { dispatch, currentLanguage, languages } = this.props;

    var newLanguage = Object.keys(languages).filter(
      x => languages[x] !== currentLanguage
    );

    dispatch(setLanguage(languages[newLanguage]));
  };

  render() {
    const { flag } = this.props;
    return (
      <div className="language-button" onClick={this.updateLanguage}>
        <img
          className="language-button__image"
          src={flag}
          alt="Language selector"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLanguage: state.localization.currentLanguage,
    languages: state.localization.languages,
    flag: state.localization.flag,
  };
};

export default connect(mapStateToProps)(LanguageButton);
