import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavMenu } from './SidenavMenu';

describe('<SidenavMenu>', () => {
  describe('Global render', () => {
    const label = 'label';
    it('should have sidenavMenu class', () => {
      const wrapper = mount(<SidenavMenu />);
      const elem = wrapper.find('ul').first();
      const hasSidenavClass = elem.hasClass('sidenavMenu');
      expect(hasSidenavClass).toBe(true);
    });
    it('should have sidenavMenu class and custom class', () => {
      const className = 'test';
      const wrapper = mount(<SidenavMenu className={className} />);
      const elem = wrapper.find('ul').first();

      const hasSidenavClass = elem.hasClass('sidenavMenu');
      expect(hasSidenavClass).toBe(true);

      const hasCustomClass = elem.hasClass(className);
      expect(hasCustomClass).toBe(true);
    });
    it('should render its children', () => {
      const wrapper = mount(<SidenavMenu>{label}</SidenavMenu>);
      const elem = wrapper.find('ul').last();
      expect(elem.text()).toBe(label);
    });
  });
});
