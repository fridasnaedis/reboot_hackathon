import React, { Component } from 'react';
import './sponsorRow.css';

class SponsorRow extends Component {
  render() {
    const { values } = this.props;
    return (
      <tr>
        <td>{this.props.text}</td>
        <td>{values[0] ? 'X' : ''}</td>
        <td>{values[1] ? 'X' : ''}</td>
        <td>{values[2] ? 'X' : ''}</td>
      </tr>
    );
  }
}

export default SponsorRow;
