import React from 'react';
import { shallow } from 'enzyme';
import Info from './info';

describe('<Info />', () => {
  test('renders', () => {
    const wrapper = shallow(<Info />);
    expect(wrapper).toMatchSnapshot();
  });
});
