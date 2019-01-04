import React, { Component } from 'react';
import './signedUp.css';
import FillerImage from '../fillerImage';
import Translate from '../translate';
import { introLoaded } from '../../actions/imageLoaded';
import { connect } from 'react-redux';

const baseurl = process.env.REACT_APP_SUB_URL;

class SignedUp extends Component {
  readHash() {
    const { hash } = this.props.location;
    const result = hash
      .substring(1)
      .split('&')
      .reduce((result, item) => {
        const parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
      }, {});
  }

  render() {
    this.readHash();
    this.props.dispatch(introLoaded());

    return (
      <div className="signedUp">
        <FillerImage imageUrl={`${baseurl}/images/hi-kold.jpg`} />
        <p>Takk fyrir að skrá þig</p>
      </div>
    );
  }
}

export default connect()(Translate(SignedUp));
