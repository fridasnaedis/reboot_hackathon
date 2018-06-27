import React from 'react';
import { shallow } from 'enzyme';
import Intro from './intro';

describe('<Intro />', () => {
  test('renders', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).toMatchSnapshot();
  });
});
