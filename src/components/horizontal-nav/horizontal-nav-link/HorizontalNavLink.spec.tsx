import * as React from 'react';
import { mount } from 'enzyme';
import { HorizontalNavLink } from './HorizontalNavLink';

describe('<HorizontalNavLink>', () => {
  describe('Global render', () => {
    const label = 'label';
    it('should have a .link class', () => {
      const wrapper = mount(<HorizontalNavLink label={label} />);
      const span = wrapper.find('span').first();
      expect(span.hasClass('link')).toBe(true);
      expect(span.hasClass('selected')).toBe(false);
    });
    it('should have a custom class', () => {
      const customClass = 'test';
      const wrapper = mount(
        <HorizontalNavLink label={label} className={customClass} />
      );
      const span = wrapper.find('span').first();
      expect(span.hasClass('link')).toBe(true);
      expect(span.hasClass(customClass)).toBe(true);
    });
    it('should have a .selected class', () => {
      const wrapper = mount(<HorizontalNavLink label={label} selected />);
      const span = wrapper.find('span').first();
      expect(span.hasClass('link')).toBe(true);
      expect(span.hasClass('selected')).toBe(true);
    });
  });
});
