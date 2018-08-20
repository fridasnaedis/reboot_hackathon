import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './languageButton.css';
import { setLanguage } from '../../actions/localization';

class LanguageButton extends Component {
  static propTypes = {
    languages: PropTypes.shape(),
    currentLanguage: PropTypes.string,
    translations: PropTypes.shape(),
  };

  updateLanguage = () => {
    const { dispatch, currentLanguage, languages } = this.props;

    var newLanguage = languages[currentLanguage].nextLanguage.code;

    dispatch(setLanguage(newLanguage));
  };

  render() {
    const { currentLanguage, languages } = this.props;
    return (
      <div className="language-button" onClick={this.updateLanguage}>
        {languages[currentLanguage].nextLanguage.code.toUpperCase()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLanguage: state.localization.currentLanguage,
    languages: state.localization.languages,
  };
};

export default connect(mapStateToProps)(LanguageButton);
