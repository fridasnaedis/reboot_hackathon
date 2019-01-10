import React from 'react';
import { shallow } from 'enzyme';
import SponsorRow from './sponsorRow';

describe('<SponsorRow />', () => {
  test('renders', () => {
    const wrapper = shallow(<SponsorRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
