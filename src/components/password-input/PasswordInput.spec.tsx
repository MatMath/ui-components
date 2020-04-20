import * as React from 'react';
import { mount } from 'enzyme';

import { PasswordInput } from './PasswordInput';

describe('<PasswordInput />', () => {
  it('should render default', () => {
    const passwordInput = mount(
      <PasswordInput
        showPasswordTooltipText='Reveal'
        hidePasswordTooltipText='Hide'
        label='Password'
      />
    );

    expect(passwordInput).toMatchSnapshot();
    expect(
      passwordInput
        .find('span')
        .first()
        .text()
    ).toEqual('Password');
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

    expect(passwordInput.find('input').getElement().props).toHaveProperty(
      'className',
      'input warning'
    );
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

    expect(passwordInput.find('input').getElement().props).toHaveProperty(
      'className',
      'input warning'
    );

    expect(
      passwordInput
        .find('span')
        .last()
        .text()
    ).toEqual('Some feedback');
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

    expect(passwordInput.find('input').getElement().props).toHaveProperty(
      'className',
      'input error'
    );
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

    expect(passwordInput.find('input').getElement().props).toHaveProperty(
      'className',
      'input error'
    );

    expect(
      passwordInput
        .find('span')
        .last()
        .text()
    ).toEqual('Some feedback');
  });

  it('should not render feedback text without feedback type', () => {
    const passwordInput = mount(
      <PasswordInput
        showPasswordTooltipText='Reveal'
        hidePasswordTooltipText='Hide'
        label='Password'
        feedbackText='Simple feedback'
      />
    );

    expect(passwordInput.find('span')).toEqual({});
  });

  it('should call function on visibility change', () => {
    const onPasswordVisibilityChanged = jest.fn();

    const passwordInput = mount(
      <PasswordInput
        showPasswordTooltipText='Show'
        hidePasswordTooltipText='Hide'
        onPasswordVisibilityChanged={onPasswordVisibilityChanged}
        defaultValue='SamplePassword'
      />
    );

    const inputNode = passwordInput.find('input').getDOMNode();

    passwordInput.find('button').simulate('click');
    expect(inputNode.getAttribute('value')).toBe('SamplePassword');
    expect(inputNode.getAttribute('type')).toBe('text');

    passwordInput.find('button').simulate('click');
    expect(inputNode.getAttribute('value')).toBe('SamplePassword');
    expect(inputNode.getAttribute('type')).toBe('password');

    expect(onPasswordVisibilityChanged).toHaveBeenNthCalledWith(1, true);
    expect(onPasswordVisibilityChanged).toHaveBeenNthCalledWith(2, false);
  });
});
