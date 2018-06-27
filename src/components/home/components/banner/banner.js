import React, { Component } from "react";
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
    const { duration } = this.state;
    const time = moment.duration(duration, "seconds");

    return (
      <div className="banner">
        <p>
          Banner. Hack in:
          {` ${time.days()}d : ${time.hours()}h : ${time.minutes()}m : ${time.seconds()}s`}
        </p>
      </div>
    );
  }
}

export default Banner;
