import React from 'react';
import { shallow } from 'enzyme';
import FillerImage from './fillerImage';

describe('<FillerImage />', () => {
  test('renders', () => {
    const wrapper = shallow(<FillerImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
