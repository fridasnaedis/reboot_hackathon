import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('<Home />', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
