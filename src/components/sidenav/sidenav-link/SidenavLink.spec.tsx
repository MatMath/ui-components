import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavLink } from './SidenavLink';

describe('<SidenavLink>', () => {
  describe('Global render', () => {
    const label = 'label';
    const icon = 'icon';
    const href = 'href';
    it('should be an anchor with sidenavLink class', () => {
      const wrapper = mount(
        <SidenavLink icon={icon} label={label} href={href} />
      );
      const hasClass = wrapper
        .find('a')
        .first()
        .hasClass('sidenavLink');
      expect(hasClass).toBe(true);
    });
    it('should render the icon', () => {
      const wrapper = mount(
        <SidenavLink icon={icon} label={label} href={href} />
      );
      expect(
        wrapper
          .find('.sidenavIcon')
          .last()
          .text()
      ).toBe(icon);
    });
    it('should render the label', () => {
      const wrapper = mount(
        <SidenavLink icon={icon} label={label} href={href} />
      );
      expect(
        wrapper
          .find('.sidenavLabel')
          .last()
          .text()
      ).toBe(label);
    });
  });
});
