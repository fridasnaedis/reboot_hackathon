import React from 'react';
import { shallow } from 'enzyme';
import Banner from './banner';

describe('<Banner />', () => {
  test('renders', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toMatchSnapshot();
  });
});
