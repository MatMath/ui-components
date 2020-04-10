import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Button } from './Button';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const button = mount(<Button />);

      expect(button).toMatchSnapshot();
    });
  });

  describe('Style properties', () => {
    it('should render small size', () => {
      const button = mount(<Button size='small' />);

      expect(button).toMatchSnapshot();
    });

    it('should render medium size', () => {
      const button = mount(<Button size='medium' />);

      expect(button).toMatchSnapshot();
    });

    it('should render large size', () => {
      const button = mount(<Button size='large' />);

      expect(button).toMatchSnapshot();
    });

    it('should render primary nature', () => {
      const button = mount(<Button nature='primary' />);

      expect(button).toMatchSnapshot();
    });

    it('should render secondary nature', () => {
      const button = mount(<Button nature='secondary' />);

      expect(button).toMatchSnapshot();
    });

    it('should render danger nature', () => {
      const button = mount(<Button nature='danger' />);

      expect(button).toMatchSnapshot();
    });

    it('should render danger nature and small size', () => {
      const button = mount(<Button nature='danger' size='small' />);

      expect(button).toMatchSnapshot();
    });
  });

  describe('Children render', () => {
    it('should render Default when no children are specified', () => {
      const button = mount(<Button />);

      expect(button.text()).toBe('');
    });

    it('should render the specified text', () => {
      const text = 'Hello There';
      const button = mount(<Button>{text}</Button>);

      expect(button.text()).toEqual(text);
      expect(button.find('span')).toBeTruthy();
    });

    it('should render the specified children', () => {
      const text = 'Ok';
      const button = mount(
        <Button>
          <label>{text}</label>
        </Button>
      );

      expect(button.find('label')).toBeTruthy();
    });
  });

  describe('Interaction', () => {
    it('should execute action on click', () => {
      const button = mount(<Button onClick={() => window.alert('hello')} />);

      window.alert = jest.fn();
      button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when the button is disabled', () => {
      const button = mount(
        <Button onClick={() => window.alert('hello')} disabled />
      );

      window.alert = jest.fn();
      button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });
});
