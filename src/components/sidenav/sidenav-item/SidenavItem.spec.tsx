import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavItem } from './SidenavItem';

describe('<SidenavItem>', () => {
  describe('Global render', () => {
    const label = 'label';
    it('should have sidenavItem class', () => {
      const wrapper = mount(<SidenavItem />);
      const elem = wrapper.find('li').first();
      const hasBaseClass = elem.hasClass('sidenavItem');
      expect(hasBaseClass).toBe(true);
    });
    it('should have sidenavItem class and custom class', () => {
      const className = 'test';
      const wrapper = mount(<SidenavItem className={className} />);
      const elem = wrapper.find('li').first();

      const hasBaseClass = elem.hasClass('sidenavItem');
      expect(hasBaseClass).toBe(true);

      const hasCustomClass = elem.hasClass(className);
      expect(hasCustomClass).toBe(true);
    });
    it('should render its children', () => {
      const wrapper = mount(<SidenavItem>{label}</SidenavItem>);
      const elem = wrapper.find('li').last();
      expect(elem.text()).toBe(label);
    });
  });
});
