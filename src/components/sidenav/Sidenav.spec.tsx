import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Sidenav } from './Sidenav';

describe('<Sidenav>', () => {
  describe('Global render', () => {
    it('should be styled', () => {
      const wrapper = mount(<Sidenav></Sidenav>);
      const hasClass = wrapper
        .find('nav')
        .first()
        .hasClass('sidenav');
      expect(hasClass).toBe(true);
    });
    it('should render its children', () => {
      const text = 'text';
      const child = <div>{text}</div>;
      const wrapper = mount(<Sidenav>{child}</Sidenav>);
      const renderedText = wrapper
        .find('div')
        .last()
        .text();
      expect(renderedText).toEqual(text);
    });
  });
});
