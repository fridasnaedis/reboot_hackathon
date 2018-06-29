import React from 'react';
import { shallow } from 'enzyme';
import Translate from './translate';

describe('<Translate />', () => {
  test('renders', () => {
    const wrapper = shallow(<Translate />);
    expect(wrapper).toMatchSnapshot();
  });
});
