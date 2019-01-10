import React, { Component } from 'react';
import SponsorRow from './components/sponsorRow';
import SponsorDetail from './components/sponsor-detail';
import './sponsors.css';
import Translate from '../translate';
import SponsorImages from './components/sponsorImages';

class Sponsors extends Component {
  render() {
    const { sponsors } = this.props.translations;
    const { table } = sponsors;
    return (
      <div>
        {/* <HeaderImage text={sponsors.header} image="ht_orange_blur2.jpg" /> */}

        <div className="sponsor__content">
          <h1 className="sponsor__header sponsor__header--main">
            {sponsors.sponsors}
          </h1>
          <SponsorImages />
          <h2 className="sponsor__header">{sponsors.tableHeader}</h2>
          <table className="sponsor__table">
            <thead className="sponsor__table-header">
              <tr className="sponsor__table-header--category">
                <th> </th>
                <th>Re:load</th>
                <th>Re:start</th>
                <th>
                  Re:bo
                  <span>o</span>t
                </th>
              </tr>
              <tr className="sponsor__table-header--price">
                <th>{table.r0}</th>
                <th>75.000 kr</th>
                <th>175.000 kr</th>
                <th>300.000 kr</th>
              </tr>
            </thead>
            <tbody>
              <SponsorRow text={table.r10} values={['', '', 'X']} />
              <SponsorRow text={table.r1} values={['X', 'X', '']} />
              <SponsorRow text={table.r2} values={['X', 'X', 'X']} />
              <SponsorRow text={table.r3} values={['X', 'X', 'X']} />
              <SponsorRow text={table.r4} values={['', 'X', 'X']} />
              <SponsorRow text={table.r5} values={['', 'X', 'X']} />
              <SponsorRow text={table.r6} values={['', 'X', 'X']} />
              <SponsorRow
                text={table.r7}
                values={['', '15-20 mín', '30-45 mín']}
              />
              <SponsorRow text={table.r8} values={['', '', 'X']} />
              <SponsorRow text={table.r9} values={['', '', 'X']} />
            </tbody>
          </table>
          <p className="additional__info">{sponsors.additionalinfo.first}</p>

          <SponsorDetail
            header={sponsors.details.reload.header}
            main={sponsors.details.reload.main}
          />
          <SponsorDetail
            header={sponsors.details.restart.header}
            main={sponsors.details.restart.main}
          />
          <SponsorDetail
            header={sponsors.details.reboot.header}
            main={sponsors.details.reboot.main}
          />
          <p className="additional__info__second">
            {sponsors.additionalinfo.second}
          </p>
          {/* <div className="team-text">
          <div className="container">
            <h1 className="team-header">{sponsors.team.header}</h1>
            <div className="team-about">
              <img className="team-photo" src="/images/allar.jpg" />
              <p className="team-info">{sponsors.team.main}</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Translate(Sponsors);
