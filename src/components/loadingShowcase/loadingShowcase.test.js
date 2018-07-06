import React from 'react';
import { shallow } from 'enzyme';
import LoadingShowcase from './loadingShowcase';

describe('<LoadingShowcase />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoadingShowcase />);
    expect(wrapper).toMatchSnapshot();
  });
});
