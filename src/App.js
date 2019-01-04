import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import LoadingShowcase from './components/loadingShowcase';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import Faq from './components/faq';
import Oauth from './components/oauth';
import SignedUp from './components/signedUp';

const baseurl = process.env.REACT_APP_SUB_URL;

class App extends Component {
  render() {
    return (
      <main className="App">
        <Helmet defaultTitle="Reboot Hack" />

        <Navbar />

        <section className="content">
          <Switch>
            <Route exact path={`${baseurl}/sponsors`} component={Sponsors} />
            <Route exact path={`${baseurl}/faq`} component={Faq} />
            <Route
              exact
              path={`${baseurl}/loading-test`}
              component={LoadingShowcase}
            />
            <Route exact path={`${baseurl}/oauth/callback`} component={Oauth} />
            <Route exact path={`${baseurl}/signedUp`} component={SignedUp} />
            <Route exact path={`${baseurl}/`} component={Home} />
          </Switch>
        </section>

        <Footer />
      </main>
    );
  }
}

export default App;
