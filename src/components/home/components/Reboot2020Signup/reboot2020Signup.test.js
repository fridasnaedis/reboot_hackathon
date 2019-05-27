import React from 'react';
import { shallow } from 'enzyme';
import Reboot2020Signup from './reboot2020Signup';

describe('<Reboot2020Signup />', () => {
  test('renders', () => {
    const wrapper = shallow(<Reboot2020Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});
