import * as React from 'react';
import { mount } from 'enzyme';
import { PasswordInput } from './PasswordInput';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordTooltipText='Reveal'
          hidePasswordTooltipText='Hide'
          label='Password'
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render warning state without feedback text', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordTooltipText='Reveal'
          hidePasswordTooltipText='Hide'
          label='Password'
          feedbackType='warning'
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render warning state with feedback text', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordTooltipText='Reveal'
          hidePasswordTooltipText='Hide'
          label='Password'
          feedbackType='warning'
          feedbackText='Some feedback'
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render error state without feedback text', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordTooltipText='Reveal'
          hidePasswordTooltipText='Hide'
          label='Password'
          feedbackType='error'
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render error state with feedback text', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordTooltipText='Reveal'
          hidePasswordTooltipText='Hide'
          label='Password'
          feedbackType='error'
          feedbackText='Some feedback'
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });
  });
});
