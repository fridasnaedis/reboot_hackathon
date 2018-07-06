import React, { Component } from "react";
import Translate from "../../../translate";

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
        <h1>
          {translations.home.banner}
          {` ${time.days()}d : ${time.hours()}h : ${time.minutes()}m : ${time.seconds()}s`}
        </h1>
      </div>
    );
  }
}

export default Translate(Banner);
