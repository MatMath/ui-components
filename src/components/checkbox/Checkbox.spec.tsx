import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Checkbox } from './Checkbox';

describe('<Checkbox>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const checkbox = mount(<Checkbox />);
      expect(checkbox).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const checkbox = mount(<Checkbox disabled />);
      expect(checkbox).toMatchSnapshot();
    });

    it('should render checked', () => {
      const checkbox = mount(<Checkbox checked />);
      expect(checkbox.props().checked).toEqual(true);
      expect(checkbox).toMatchSnapshot();
    });

    it('should render unchecked', () => {
      const checkbox = mount(<Checkbox />);
      expect(checkbox.props().checked).toEqual(undefined);
      expect(checkbox).toMatchSnapshot();
    });

    it('should render unchecked and with a label', () => {
      const checkbox = mount(<Checkbox label='Label' />);
      expect(checkbox.props().checked).toEqual(undefined);
      expect(checkbox).toMatchSnapshot();
    });
  });
});
