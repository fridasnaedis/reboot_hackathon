import React from 'react';
import { shallow } from 'enzyme';
import Faq from './faq';

describe('<Faq />', () => {
  test('renders', () => {
    const wrapper = shallow(<Faq />);
    expect(wrapper).toMatchSnapshot();
  });
});
