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
          <thead className="sponsor__table-header">
            <tr className="sponsor__table-header--category">
              <th> </th>
              <th>Re:load</th>
              <th>Re:start</th>
              <th>Re:bo<span>o</span>t</th>
            </tr>
            <tr className="sponsor__table-header--price">
              <th> </th>
              <th>75.000 kr</th>
              <th>175.000 kr</th>
              <th>300.000 kr</th>
            </tr>
          </thead>
          <tbody>
            <SponsorRow text={table.r1} values={[true, true, true]} />
            <SponsorRow text={table.r2} values={[true, true, true]} />
            <SponsorRow text={table.r3} values={[true, true, true]} />
            <SponsorRow text={table.r4} values={[true, true, true]} />
            <SponsorRow text={table.r5} values={[false, true, true]} />
            <SponsorRow text={table.r6} values={[false, true, true]} />
            <SponsorRow text={table.r7} values={[false, true, true]} />
            <SponsorRow text={table.r8} values={[false, true, true]} />
            <SponsorRow text={table.r9} values={[false, true, true]} />
            <SponsorRow text={table.r10} values={[false, false, true]} />
            <SponsorRow text={table.r11} values={[false, false, true]} />
            <SponsorRow text={table.r12} values={[false, false, true]} />
            <SponsorRow text={table.r13} values={[false, false, true]} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Translate(Sponsors);
