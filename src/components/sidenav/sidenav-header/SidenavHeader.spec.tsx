import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { SidenavHeader } from './SidenavHeader';

describe('<SidenavHeader>', () => {
  describe('Global render', () => {
    it('should be a header with sidenavHeader class', () => {
      const wrapper = mount(<SidenavHeader></SidenavHeader>);
      const hasClass = wrapper
        .find('header')
        .first()
        .hasClass('sidenavHeader');
      expect(hasClass).toBe(true);
    });
    it('should render its children', () => {
      const text = 'text';
      const child = <div>{text}</div>;
      const wrapper = mount(<SidenavHeader>{child}</SidenavHeader>);
      const renderedText = wrapper
        .find('div')
        .last()
        .text();
      expect(renderedText).toEqual(text);
    });
  });
});
