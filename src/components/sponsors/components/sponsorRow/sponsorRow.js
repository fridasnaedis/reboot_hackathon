import React, { Component } from 'react';
import './sponsorRow.css';

class SponsorRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  renderInfo() {
    if (this.state.open) {
      return (
        <tr className={`sponsor--row-info__${this.state.open}`}>
          <td colSpan="4">{this.props.text.info}</td>
        </tr>
      );
    } else {
      return null;
    }
  }

  render() {
    const { values } = this.props;
    const infoRow = this.renderInfo();

    return (
      <React.Fragment>
        <tr className="sponsor--row" onClick={this.handleClick}>
          <td>{this.props.text.title}</td>
          <td>{values[0]}</td>
          <td>{values[1]}</td>
          <td>{values[2]}</td>
        </tr>
        {infoRow}
      </React.Fragment>
    );
  }
}

export default SponsorRow;
