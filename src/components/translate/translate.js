import React, { Component } from "react";
import { connect } from "react-redux";

const Translate = Comp => {
  class TranslateInner extends Component {
    render() {
      const { translations } = this.props;
      return <Comp translations={translations} {...this.props} />;
    }
  }
  return connect(mapStateToProps)(TranslateInner);
};

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default Translate;
