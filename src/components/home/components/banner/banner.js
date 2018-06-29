import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";
import "./banner.css";

class Banner extends Component {
  state = {
    duration: moment.duration(1, "months"),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        duration: moment.duration(
          this.state.duration.asSeconds() - 1,
          "seconds"
        ),
      });
    }, 1000);
  }

  render() {
    const { translations } = this.props;
    const { duration } = this.state;
    const time = moment.duration(duration, "seconds");

    return (
      <div className="banner">
        <p>
          {translations.home.banner}
          {` ${time.days()}d : ${time.hours()}h : ${time.minutes()}m : ${time.seconds()}s`}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    translations: state.localization.translations,
  };
};

export default connect(mapStateToProps)(Banner);
