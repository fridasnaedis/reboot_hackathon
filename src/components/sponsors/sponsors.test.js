import React from 'react';
import { shallow } from 'enzyme';
import Sponsors from './sponsors';

describe('<Sponsors />', () => {
  test('renders', () => {
    const wrapper = shallow(<Sponsors />);
    expect(wrapper).toMatchSnapshot();
  });
});
