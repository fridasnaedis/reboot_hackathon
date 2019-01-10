import React, { Component } from 'react';
import Translate from '../../../translate';
import './sponsorImages.css';

const baseurl = process.env.REACT_APP_SUB_URL;

const reboot = [
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'reboothack_small.png',
];
const restart = [
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
];
const reload = [
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
  'Test.png',
];

class sponsorImages extends Component {
  constructor(props) {
    super(props);
    this.imageContainer = React.createRef();
    this.rebootImage = React.createRef();
    this.restartImage = React.createRef();
    this.reloadImage = React.createRef();

    this.state = {
      reboot: 0,
      restart: 0,
      reload: 0,
    };
  }

  updateContainerCount() {
    const { imageContainer, rebootImage, restartImage, reloadImage } = this;
    const margin = 30;

    const rebootLC = Math.floor(
      imageContainer.current.offsetWidth /
        (rebootImage.current.offsetWidth + margin)
    );

    const restartLC = Math.floor(
      imageContainer.current.offsetWidth /
        (restartImage.current.offsetWidth + margin)
    );

    const reloadLC = Math.floor(
      imageContainer.current.offsetWidth /
        (reloadImage.current.offsetWidth + margin)
    );

    const rebootExtra = rebootLC - (reboot.length % rebootLC);
    const restartExtra = restartLC - (reboot.length % restartLC);
    const reloadExtra = reloadLC - (reboot.length % reloadLC);

    this.setState({
      reboot: rebootExtra === rebootLC ? 0 : rebootExtra,
      restart: restartExtra === restartLC ? 0 : restartExtra,
      reload: reloadExtra === reloadLC ? 0 : reloadExtra,
    });
  }

  componentDidMount() {
    this.updateContainerCount();
    window.addEventListener('resize', this.resize);
  }

  resize = () => this.updateContainerCount();

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { sponsors } = this.props.translations;

    return (
      <div className="sponsor_current">
        <h2 className="sponsor__current--header">
          Re:bo
          <span>o</span>t
        </h2>
        <div className="sponsor__reboot" ref={this.imageContainer}>
          {reboot.map((image, i) => (
            <div key={i}>
              <img
                src={`${baseurl}/images/reboot/${image}`}
                alt="Reboot"
                ref={this.rebootImage}
              />
            </div>
          ))}
          {[...Array(this.state.reboot)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">Re:start</h2>
        <div className="sponsor__restart">
          {restart.map((image, i) => (
            <div key={i}>
              <img
                src={`${baseurl}/images/restart/${image}`}
                alt="Restart"
                ref={this.restartImage}
              />
            </div>
          ))}
          {[...Array(this.state.restart)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">Re:load</h2>
        <div className="sponsor__reload">
          {reload.map((image, i) => (
            <div key={i}>
              <img
                src={`${baseurl}/images/reload/${image}`}
                alt="Reload"
                ref={this.reloadImage}
              />
            </div>
          ))}
          {[...Array(this.state.reload)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Translate(sponsorImages);
