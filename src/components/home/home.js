import React, { Component } from "react";
import Intro from "./components/intro";
import Info from "./components/info";
import Detail from "./components/detail";
import Register from "./components/register";

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Info />
        <Detail />
        <Register />
      </div>
    );
  }
}

export default Home;
