import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Loading from "./components/loading";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Helmet defaultTitle="Reboot Hack" />

        <Navbar />

        <section className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/loading-test" component={Loading} />
          </Switch>
        </section>
      </main>
    );
  }
}

export default App;
