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
      const labelOn = 'On';
      const toggle = mount(<Toggle labelOn={labelOn} checked />);
      expect(toggle.find('span').text()).toEqual(labelOn);
      expect(toggle).toMatchSnapshot();
    });

    it('should render with labelOff', () => {
      const labelOff = 'Off';
      const toggle = mount(<Toggle labelOff={labelOff} />);
      expect(toggle.find('span').text()).toEqual(labelOff);
      expect(toggle).toMatchSnapshot();
    });
  });
});
