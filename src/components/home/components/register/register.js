import React, { Component } from 'react';
import './register.css';
import Translate from '../../../translate';

class Register extends Component {
  render() {
    const { register } = this.props.translations.home;
    const { REACT_APP_MLH_CLIENT_ID, REACT_APP_MLH_REDIRECT_URL } = process.env;

    // Handles the register button
    return (
      <div className="register">
        <div className="container">
          <h1>{register.text}</h1>
          <a
            className="button button__register"
            href={`https://my.mlh.io/oauth/authorize?client_id=${REACT_APP_MLH_CLIENT_ID}&redirect_uri=${REACT_APP_MLH_REDIRECT_URL}&response_type=token`}
          >
            {register.register}
          </a>
        </div>
      </div>
    );
  }
}

export default Translate(Register);
