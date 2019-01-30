import React, { Component } from 'react';
import './oauth.css';
import Translate from '../translate';

class Oauth extends Component {
  // readHash() {
  //   const { hash } = this.props.location;
  //   const result = hash
  //     .substring(1)
  //     .split('&')
  //     .reduce((result, item) => {
  //       const parts = item.split('=');
  //       result[parts[0]] = parts[1];
  //       return result;
  //     }, {});
  // }

  componentWillMount() {
    this.props.history.replace('/signedUp');
  }

  render() {
    // const hash = this.readHash();

    return (
      <div className="oauth">
        <p>{this.props.translations.defaultText.loading}</p>
      </div>
    );
  }
}

export default Translate(Oauth);
