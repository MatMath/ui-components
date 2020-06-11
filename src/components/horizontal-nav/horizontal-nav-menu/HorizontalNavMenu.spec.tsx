import * as React from 'react';
import { mount } from 'enzyme';
import { HorizontalNavMenu } from './HorizontalNavMenu';

describe('<HorizontalNavMenu>', () => {
  describe('Global render', () => {
    it('should have a .menu class', () => {
      const wrapper = mount(<HorizontalNavMenu />);
      const ul = wrapper.find('ul').first();
      expect(ul.hasClass('menu')).toBe(true);
    });
    it('should have a custom class', () => {
      const customClass = 'test';
      const wrapper = mount(<HorizontalNavMenu className={customClass} />);
      const ul = wrapper.find('ul').first();
      expect(ul.hasClass('menu')).toBe(true);
      expect(ul.hasClass(customClass)).toBe(true);
    });
  });
});
