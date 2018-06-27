import React from 'react';
import { shallow } from 'enzyme';
import Detail from './detail';

describe('<Detail />', () => {
  test('renders', () => {
    const wrapper = shallow(<Detail />);
    expect(wrapper).toMatchSnapshot();
  });
});
