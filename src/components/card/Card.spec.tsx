import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Card } from './Card';

describe('<Card>', () => {
  describe('Global render', () => {
    it('should be styled', () => {
      const hasClass = mount(<Card></Card>)
        .find('div')
        .first()
        .hasClass('card');
      expect(hasClass).toBe(true);
    });
    it('should render its children', () => {
      const text = 'text';
      const child = <div>{text}</div>;
      const renderedText = mount(<Card>{child}</Card>)
        .find('div')
        .last()
        .text();
      expect(renderedText).toEqual(text);
    });
  });
});
