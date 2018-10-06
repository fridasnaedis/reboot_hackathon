import React from 'react';
import { shallow } from 'enzyme';
import CustomCheckbox from './customCheckbox';

describe('<CustomCheckbox />', () => {
  test('renders', () => {
    const wrapper = shallow(<CustomCheckbox />);
    expect(wrapper).toMatchSnapshot();
  });
});
