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
      const toggle = mount(<Toggle checked defaultChecked />);
      expect(toggle.props().checked).toEqual(true);
      expect(toggle).toMatchSnapshot();
    });

    it('should render with labelOn', () => {
      const labelChecked = 'On';
      const toggle = mount(<Toggle labelChecked={labelChecked} checked />);
      expect(toggle.find('span').text()).toEqual(labelChecked);
      expect(toggle).toMatchSnapshot();
    });

    it('should render with labelOff', () => {
      const labelUnchecked = 'Off';
      const toggle = mount(<Toggle labelUnchecked={labelUnchecked} />);
      expect(toggle.find('span').text()).toEqual(labelUnchecked);
      expect(toggle).toMatchSnapshot();
    });
  });
});
