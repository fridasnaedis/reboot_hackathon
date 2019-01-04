import React, { Component } from 'react';
import './signedUp.css';
import FillerImage from '../fillerImage';
import Translate from '../translate';
import { introLoaded } from '../../actions/imageLoaded';
import { connect } from 'react-redux';

const baseurl = process.env.REACT_APP_SUB_URL;

class SignedUp extends Component {
  render() {
    this.props.dispatch(introLoaded());

    return (
      <div className="signedUp">
        <div className="container">
          <h1>{this.props.translations.signedUp}</h1>
        </div>
        <FillerImage imageUrl={`${baseurl}/images/hi-kold.jpg`} />
      </div>
    );
  }
}

export default connect()(Translate(SignedUp));
