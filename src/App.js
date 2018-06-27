import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Helmet defaultTitle="Reboot Hack" />

        <header className="App-header">
          <h1 className="App-title">This is the nav bar</h1>
        </header>

        <section>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </section>
      </main>
    );
  }
}

export default App;
