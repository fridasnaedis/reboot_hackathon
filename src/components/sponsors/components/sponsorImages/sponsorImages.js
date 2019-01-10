import React, { Component } from 'react';
import Translate from '../../../translate';
import SponsorImage from '../sponsorImage';
import './sponsorImages.css';

const baseurl = process.env.REACT_APP_SUB_URL;

const reboot = [
  'hi-logo_vertical_transparent2-black-is.png',
  'sky.png',
  'Snjallborgin-RVK-Logo.png',
  'utmessan.png',
];
const reload = ['creditinfo.png', 'dominos.png', 'github.png', 'miracle.png'];
const restart = ['islandsbanki.png', 'menandmice.jpg', 'microsoft.png'];

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

    function helper(current, length) {
      if (!current) return 0;
      if (!imageContainer.current) return 0;

      const lineCount = Math.floor(
        imageContainer.current.offsetWidth / (current.offsetWidth + margin)
      );

      const extra = lineCount - (length % lineCount);

      const linesToAdd = extra === lineCount ? 0 : extra;

      return linesToAdd;
    }

    this.setState({
      reboot: helper(rebootImage.current, reboot.length),
      restart: helper(restartImage.current, restart.length),
      reload: helper(reloadImage.current, reload.length),
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
          {reboot.map(image => {
            return (
              <div ref={this.rebootImage} key={`${image}`}>
                <SponsorImage
                  src={`${baseurl}/images/reboot/${image}`}
                  alt="Reboot"
                />
              </div>
            );
          })}
          {[...Array(this.state.reboot)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">Re:start</h2>
        <div className="sponsor__restart">
          {restart.map(image => {
            return (
              <div ref={this.restartImage} key={`${image}`}>
                <SponsorImage
                  src={`${baseurl}/images/restart/${image}`}
                  alt="Restart"
                />
              </div>
            );
          })}
          {[...Array(this.state.restart)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">Re:load</h2>
        <div className="sponsor__reload">
          {reload.map(image => {
            return (
              <div ref={this.reloadImage} key={`${image}`}>
                <SponsorImage
                  src={`${baseurl}/images/reload/${image}`}
                  alt="Reload"
                />
              </div>
            );
          })}
          {[...Array(this.state.reload)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Translate(sponsorImages);
