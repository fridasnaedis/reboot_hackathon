import React, { Component } from 'react';
import Intro from './components/intro';
import Info from './components/info';
import Detail from './components/detail';
import Register from './components/register';
import FillerImage from './components/fillerImage';
import Translate from '../translate';

const baseurl = process.env.REACT_APP_SUB_URL;

class Home extends Component {
  render() {
    const { home } = this.props.translations;
    return (
      <div>
        <Intro />
        <Detail
          header={home.detail.first.header}
          main={home.detail.first.main}
        />
        <FillerImage imageUrl={`${baseurl}/images/uniice.jpg`} />
        <Detail
          header={home.detail.second.header}
          main={home.detail.second.main}
        />
        <FillerImage imageUrl={`${baseurl}/images/ht.jpg`} />
        <Detail
          header={home.detail.third.header}
          main={home.detail.third.main}
        />
        <Register />
      </div>
    );
  }
}

export default Translate(Home);
