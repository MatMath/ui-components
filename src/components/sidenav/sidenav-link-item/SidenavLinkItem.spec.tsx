import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavLinkItem } from './SidenavLinkItem';

describe('<SidenavLinkItem>', () => {
  describe('Global render', () => {
    const label = 'label';
    it('should have sidenavLinkItem class', () => {
      const wrapper = mount(<SidenavLinkItem />);
      const elem = wrapper.find('li').first();
      const hasBaseClass = elem.hasClass('sidenavLinkItem');
      expect(hasBaseClass).toBe(true);
    });
    it('should have sidenavLinkItem class and custom class', () => {
      const className = 'test';
      const wrapper = mount(<SidenavLinkItem className={className} />);
      const elem = wrapper.find('li').first();

      const hasBaseClass = elem.hasClass('sidenavLinkItem');
      expect(hasBaseClass).toBe(true);

      const hasCustomClass = elem.hasClass(className);
      expect(hasCustomClass).toBe(true);
    });
    it('should render its children', () => {
      const wrapper = mount(<SidenavLinkItem>{label}</SidenavLinkItem>);
      const elem = wrapper.find('li').last();
      expect(elem.text()).toBe(label);
    });
  });
});
