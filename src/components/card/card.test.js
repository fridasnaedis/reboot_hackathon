import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('<Card />', () => {
  test('renders', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
