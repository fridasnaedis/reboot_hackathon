import React, { Component } from 'react';
import SponsorRow from './components/sponsorRow';
import './sponsors.css';
import Translate from '../translate';

class Sponsors extends Component {
  render() {
    const { sponsors } = this.props.translations;
    const { table } = sponsors;
    return (
      <div className="sponsor__content">
        <h1 className="sponsor__header">{sponsors.header}</h1>
        <table className="sponsor__table">
          <tr className="sponsor__header--category">
            <th> </th>
            <th>reload</th>
            <th>restart</th>
            <th>reboot</th>
          </tr>
          <tr className="sponsor__header--price">
            <th> </th>
            <th>100k</th>
            <th>17-l</th>
            <th>300k</th>
          </tr>
          <SponsorRow text={table.r1} values={[true, true, true]} />
          <SponsorRow text={table.r2} values={[false, true, true]} />
          <SponsorRow text={table.r3} values={[false, false, true]} />
          <SponsorRow text={table.r1} values={[true, true, true]} />
          <SponsorRow text={table.r2} values={[false, true, true]} />
          <SponsorRow text={table.r3} values={[false, false, true]} />
          <SponsorRow text={table.r1} values={[true, true, true]} />
          <SponsorRow text={table.r2} values={[false, true, true]} />
          <SponsorRow text={table.r3} values={[false, false, true]} />
          <SponsorRow text={table.r1} values={[true, true, true]} />
          <SponsorRow text={table.r2} values={[false, true, true]} />
          <SponsorRow text={table.r3} values={[false, false, true]} />
        </table>
      </div>
    );
  }
}

export default Translate(Sponsors);
