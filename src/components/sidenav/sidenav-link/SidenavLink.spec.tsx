import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavLink } from './SidenavLink';

describe('<SidenavLink>', () => {
  describe('Global render', () => {
    it('should have .link class, icon and label', () => {
      const icon = 'icon';
      const label = 'label';
      const wrapper = mount(<SidenavLink icon={icon} label={label} />);
      const elem = wrapper.find('span').first();
      const hasBaseClass = elem.hasClass('link');
      expect(hasBaseClass).toBe(true);

      const hasLabel = elem.text().indexOf(label) > -1;
      expect(hasLabel).toBe(true);

      const hasIcon = elem.text().indexOf(icon) > -1;
      expect(hasIcon).toBe(true);
    });
    it('should have .collapsed class', () => {
      const icon = 'icon';
      const label = 'label';
      const wrapper = mount(
        <SidenavLink icon={icon} label={label} collapsed />
      );
      const elem = wrapper.find('span').first();
      const hasClass = elem.hasClass('collapsed');
      expect(hasClass).toBe(true);
    });
    it('should have .selected class', () => {
      const icon = 'icon';
      const label = 'label';
      const wrapper = mount(<SidenavLink icon={icon} label={label} selected />);
      const elem = wrapper.find('.selected').first();
      const hasClass = elem.hasClass('selected');
      expect(hasClass).toBe(true);
    });
    it('should display notification', () => {
      const icon = 'icon';
      const label = 'label';
      const wrapper = mount(
        <SidenavLink icon={icon} label={label} hasNotification />
      );
      const elem = wrapper.find('.notification');
      expect(elem.length).toEqual(1);
    });
  });
});
