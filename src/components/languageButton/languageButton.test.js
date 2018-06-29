import React from 'react';
import { shallow } from 'enzyme';
import LanguageButton from './languageButton';

describe('<LanguageButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<LanguageButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
