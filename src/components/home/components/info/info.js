import React, { Component } from 'react';
import Card from './../../../card';
import './info.css';
import Translate from '../../../translate';

class Info extends Component {
  render() {
    const { people } = this.props.translations.home;
    return (
      <div className="info">
        <h1>{people.title}</h1>
        <div className="container">
          <Card text={people.first} imageData={'/images/frida.jpg'} />
          <Card text={people.second} imageData={'/images/kristjana.jpg'} />
          <Card text={people.third} imageData={'/images/sara.jpg'} />
        </div>
      </div>
    );
  }
}

export default Translate(Info);
