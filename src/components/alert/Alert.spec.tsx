import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { Alert, AlertProps } from '@components/alert/Alert';
import { AlertSeverity, AlertSize } from '@components/alert/types';
import { CheckCircleIcon, CloseIcon } from '@components';

describe('<Alert />', () => {
  let wrapper: ReactWrapper;

  const createWrapper = ({
    severity,
    showIcon,
    showCloseIcon,
    size,
    children
  }: AlertProps) =>
    mount(
      <Alert
        severity={severity}
        showIcon={showIcon}
        showCloseIcon={showCloseIcon}
        size={size}
      >
        {children}
      </Alert>
    );

  it('should create an alert with success, medium, and with icon closed if children is defined', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      children
    });
    expect(wrapper.exists('.root.success')).toEqual(true);
    expect(wrapper.exists('.root.medium')).toEqual(true);
  });

  it('should not show alert if children is empty', () => {
    wrapper = createWrapper({ children: '' });
    expect(wrapper.exists('.root.success')).toEqual(false);
  });

  it('should be able to create a success alert', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      severity: AlertSeverity.SUCCESS,
      children
    });
    expect(wrapper.exists('.root.success')).toEqual(true);
  });

  it('should be able to create an error alert', () => {
    const children = 'Error test';
    wrapper = createWrapper({
      severity: AlertSeverity.ERROR,
      children
    });
    expect(wrapper.exists('.root.error')).toEqual(true);
  });

  it('should close alert when close button is pressed', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      severity: AlertSeverity.SUCCESS,
      showCloseIcon: true,
      children
    });
    expect(wrapper.exists('.root.success')).toEqual(true);
    const closeBtn = wrapper.find(CloseIcon);
    closeBtn.simulate('click');
    expect(wrapper.exists('.root.success')).toEqual(false);
  });

  it('should not show icon if showIcon is false', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      severity: AlertSeverity.SUCCESS,
      showIcon: false,
      showCloseIcon: true,
      children
    });
    expect(wrapper.exists('.root.success')).toEqual(true);
    expect(wrapper.exists(CheckCircleIcon)).toEqual(false);
  });

  it('should not show close button if showCloseIcon is false', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      severity: AlertSeverity.SUCCESS,
      showIcon: true,
      showCloseIcon: false,
      children
    });
    expect(wrapper.exists('.root.success')).toEqual(true);
    expect(wrapper.exists(CloseIcon)).toEqual(false);
  });

  it('Should create a small alert', () => {
    const children = 'Success test';
    wrapper = createWrapper({
      size: AlertSize.SMALL,
      children
    });
    expect(wrapper.exists('.description.small')).toEqual(true);
    expect(wrapper.exists('.icon.small')).toEqual(true);
    expect(wrapper.exists('.description.medium')).toEqual(false);
  });
});
