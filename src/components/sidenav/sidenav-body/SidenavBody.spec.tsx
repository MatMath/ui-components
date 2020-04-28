import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavBody } from './SidenavBody';

describe('<SidenavBody>', () => {
  describe('Global render', () => {
    it('should be a div with sidenavBody class', () => {
      const wrapper = mount(<SidenavBody></SidenavBody>);
      const hasClass = wrapper
        .find('div')
        .first()
        .hasClass('sidenavBody');
      expect(hasClass).toBe(true);
    });
    it('should render its children', () => {
      const text = 'text';
      const child = <div>{text}</div>;
      const wrapper = mount(<SidenavBody>{child}</SidenavBody>);
      const renderedText = wrapper
        .find('div')
        .last()
        .text();
      expect(renderedText).toEqual(text);
    });
  });
});
