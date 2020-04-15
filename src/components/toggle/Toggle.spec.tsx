import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Toggle } from './Toggle';

describe('<Toggle>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const toggle = mount(<Toggle />);
      expect(toggle).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const toggle = mount(<Toggle disabled />);
      expect(toggle).toMatchSnapshot();
    });

    it('should render checked', () => {
      const toggle = mount(<Toggle checked />);
      expect(toggle.props().checked).toEqual(true);
      expect(toggle).toMatchSnapshot();
    });

    it('should render unchecked', () => {
      const toggle = mount(<Toggle />);
      expect(toggle.props().checked).toEqual(undefined);
      expect(toggle).toMatchSnapshot();
    });

    it('should render with checked label', () => {
      const labelChecked = 'labelChecked';
      const toggle = mount(<Toggle labelChecked={labelChecked} checked />);
      expect(toggle.find('span').text()).toEqual(labelChecked);
      expect(toggle).toMatchSnapshot();
    });

    it('should render with unchecked label', () => {
      const labelUnchecked = 'labelUnchecked';
      const toggle = mount(<Toggle labelUnchecked={labelUnchecked} />);
      expect(toggle.find('span').text()).toEqual(labelUnchecked);
      expect(toggle).toMatchSnapshot();
    });
  });
});
