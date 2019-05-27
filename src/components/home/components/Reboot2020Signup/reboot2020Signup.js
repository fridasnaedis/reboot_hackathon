import React, { Component } from 'react';
import Translate from '../../../translate';
import './reboot2020Signup.css';

class Reboot2020Signup extends Component {
  render() {
    const { reboot2020Signup } = this.props.translations.home;

    return (
      <div className="reboot2020Signup">
        <a
          href={'https://forms.gle/eqjvb3AjN3eCaThGA'}
          rel="noopener noreferrer"
          target="_blank"
        >
          {reboot2020Signup.signupText}
        </a>
      </div>
    );
  }
}

export default Translate(Reboot2020Signup);
