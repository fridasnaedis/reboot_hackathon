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
  {
    image: 'stafraentisl.png',
    url: 'https://www.linkedin.com/company/digitaliceland/',
  },
];

const other = [
  { image: 'dominos.png', url: 'https://www.dominos.is/' },
  { image: 'CBK_logo.png', url: 'https://www.cbk.is/' },
  { image: 'rubin_logo.jpg', url: 'https://ojk.is/' },
  { image: 'redbull.png', url: 'https://olgerdin.is/' },
  { image: 'culiacan.png', url: 'https://www.culiacan.is/' },
  { image: 'hostelling.png', url: 'https://www.hihostels.com/' },
  { image: 'seglagerdin.png', url: 'https://www.seglagerdin.is/' },
];

class sponsorImages extends Component {
  constructor(props) {
    super(props);
    this.imageContainer = React.createRef();
    this.rebootImage = React.createRef();
    this.restartImage = React.createRef();
    this.reloadImage = React.createRef();
    this.otherImage = React.createRef();

    this.state = {
      reboot: 0,
      restart: 0,
      reload: 0,
    };
  }

  updateContainerCount() {
    const {
      imageContainer,
      rebootImage,
      restartImage,
      reloadImage,
      otherImage,
    } = this;
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
      other: helper(otherImage.current, other.length),
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
        <h2 className="sponsor__current--header">
          <span> {sponsors.otherText} </span>
        </h2>
        <div className="sponsor__other" ref={this.imageContainer}>
          {other.map(item => {
            return (
              <div ref={this.otherImage} key={`${item.image}`}>
                <SponsorImage
                  src={`${baseurl}/images/other/${item.image}`}
                  alt="Other"
                  url={item.url}
                />
              </div>
            );
          })}
          {[...Array(this.state.other)].map((x, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Translate(sponsorImages);
