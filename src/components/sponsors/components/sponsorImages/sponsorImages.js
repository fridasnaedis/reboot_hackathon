import React, { Component } from 'react';
import Translate from '../../../translate';
import SponsorImage from '../sponsorImage';
import './sponsorImages.css';

const baseurl = process.env.REACT_APP_SUB_URL;

const reboot = [
  {
    image: 'hi-logo_vertical_transparent2-black-is.png',
    url: 'https://www.hi.is/',
  },
  { image: 'Snjallborgin-RVK-Logo.png', url: 'http://www.snjallborgin.is/' },
  { image: 'utmessan.png', url: 'https://utmessan.is/' },
  { image: 'mlh-logo-color.png', url: 'https://mlh.io/' },
];
const reload = [
  { image: 'creditinfo.png', url: 'https://www.creditinfo.is/' },
  { image: 'dominos.png', url: 'https://www.dominos.is/' },
  { image: 'miracle.png', url: 'https://www.miracle.is/' },
  { image: 'ueno_logo.png', url: 'https://www.ueno.co/' },
  { image: 'gangverk.png', url: 'http://www.gangverk.is/' },
  { image: 'valitor.png', url: 'https://www.valitor.is/' },
  { image: 'crankwheel.png', url: 'https://www.crankwheel.com/' },
  { image: 'tern.png', url: 'https://www.tern.is' },
];
const restart = [
  { image: 'islandsbanki.png', url: 'https://www.islandsbanki.is/' },
  { image: 'menandmice.jpg', url: 'https://www.menandmice.com/' },
  { image: 'microsoft.png', url: 'https://www.microsoft.com/is-is' },
  { image: 'github.png', url: 'https://github.com/' },
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
          <span>o</span>t <span> - {sponsors.rebootText} </span>
        </h2>
        <div className="sponsor__reboot" ref={this.imageContainer}>
          {reboot.map(item => {
            return (
              <div ref={this.rebootImage} key={`${item.image}`}>
                <SponsorImage
                  src={`${baseurl}/images/reboot/${item.image}`}
                  alt="Reboot"
                  url={item.url}
                />
              </div>
            );
          })}
          {[...Array(this.state.reboot)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">
          Re:start <span> - {sponsors.restartText} </span>
        </h2>
        <div className="sponsor__restart">
          {restart.map(item => {
            return (
              <div ref={this.restartImage} key={`${item.image}`}>
                <SponsorImage
                  src={`${baseurl}/images/restart/${item.image}`}
                  alt="Restart"
                  url={item.url}
                />
              </div>
            );
          })}
          {[...Array(this.state.restart)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
        <h2 className="sponsor__current--header">
          Re:load <span> - {sponsors.reloadText} </span>{' '}
        </h2>
        <div className="sponsor__reload">
          {reload.map(item => {
            return (
              <div ref={this.reloadImage} key={`${item.image}`}>
                <SponsorImage
                  src={`${baseurl}/images/reload/${item.image}`}
                  alt="Reload"
                  url={item.url}
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
