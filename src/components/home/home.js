import React, { Component, Fragment } from "react";
import Banner from "./components/banner";
import Intro from "./components/intro";
import Info from "./components/info";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Intro />
        <Info />
      </Fragment>
    );
  }
}

export default Home;
