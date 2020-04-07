import * as React from 'react';
import { mount } from 'enzyme';
import { PasswordInput } from './PasswordInput';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const passwordInput = mount(<PasswordInput />);
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render warning state without feedback text', () => {
      const passwordInput = mount(<PasswordInput feedbackType='warning' />);
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render warning state with feedback text', () => {
      const passwordInput = mount(
        <PasswordInput feedbackType='warning' feedbackText='Some feedback' />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render error state without feedback text', () => {
      const passwordInput = mount(<PasswordInput feedbackType='error' />);
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render error state with feedback text', () => {
      const passwordInput = mount(
        <PasswordInput feedbackType='error' feedbackText='Some feedback' />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render with password visible', () => {
      const passwordInput = mount(
        <PasswordInput
          showPassword={true}
          value='SomeRandomPassword'
          onChange={() => {}}
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });

    it('should render with weakest password strength indicator visible', () => {
      const passwordInput = mount(
        <PasswordInput
          showPasswordStrength={true}
          passwordStrengthProps={{ score: 0 }}
        />
      );
      expect(passwordInput).toMatchSnapshot();
    });
  });
});
