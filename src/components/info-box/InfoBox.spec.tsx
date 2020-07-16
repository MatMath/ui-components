import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { InfoBox, InfoBoxProps } from '@components/info-box/InfoBox';

describe('<InfoBox />', () => {
  let wrapper: ReactWrapper;
  let myTitle: string;

  beforeEach(() => {
    myTitle = 'This is a good title';
  });

  const createWrapper = ({
    severity,
    size,
    title,
    children,
    primary,
    primaryLabel,
    secondary,
    secondaryLabel
  }: InfoBoxProps) =>
    mount(
      <InfoBox
        severity={severity}
        size={size}
        title={title}
        primary={primary}
        primaryLabel={primaryLabel}
        secondary={secondary}
        secondaryLabel={secondaryLabel}
      >
        {children}
      </InfoBox>
    );

  it('should create an InfoBox with minimal settings', () => {
    wrapper = createWrapper({
      title: myTitle
    });
    expect(wrapper.exists('.root.subtle')).toEqual(true);
    expect(wrapper.exists('.title.simple')).toEqual(true);
  });

  describe('display all color', () => {
    it('should create an InfoBox with alert', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'alert'
      });
      expect(wrapper.exists('.root.alert')).toEqual(true);
      expect(wrapper.exists('.title.simple')).toEqual(true);
    });

    it('should create an InfoBox with strong', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'strong'
      });
      expect(wrapper.exists('.root.strong')).toEqual(true);
      expect(wrapper.exists('.title.simple')).toEqual(true);
    });

    it('should create an InfoBox with subtle', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'subtle'
      });
      expect(wrapper.exists('.root.subtle')).toEqual(true);
      expect(wrapper.exists('.title.simple')).toEqual(true);
    });

    it('should create an InfoBox with warning', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'warning'
      });
      expect(wrapper.exists('.root.warning')).toEqual(true);
      expect(wrapper.exists('.title.simple')).toEqual(true);
    });
  });

  describe('button on all size', () => {
    it('should create a small InfoBox with button', () => {
      wrapper = createWrapper({
        title: myTitle,
        size: 'small',
        primary: () => null,
        primaryLabel: 'Ok BTN',
        secondary: () => null,
        secondaryLabel: 'Cancel BTN'
      });

      expect(wrapper.exists('.root.subtle')).toEqual(true);
      expect(wrapper.exists('.title.small')).toEqual(true);
      expect(wrapper.contains('Ok BTN')).toEqual(true);
      expect(wrapper.contains('Cancel BTN')).toEqual(true);
    });

    it('should create a simple InfoBox with button', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'strong',
        size: 'simple',
        primary: () => null,
        primaryLabel: 'Ok BTN',
        secondary: () => null,
        secondaryLabel: 'Cancel BTN'
      });

      expect(wrapper.exists('.root.strong')).toEqual(true);
      expect(wrapper.exists('.title.simple')).toEqual(true);
      expect(wrapper.contains('Ok BTN')).toEqual(true);
      expect(wrapper.contains('Cancel BTN')).toEqual(true);
    });

    it('should create a Descriptive InfoBox with 1 button', () => {
      wrapper = createWrapper({
        title: myTitle,
        severity: 'warning',
        size: 'descriptive',
        primary: () => null,
        primaryLabel: 'Ok BTN',
        secondaryLabel: 'Cancel BTN'
      });

      expect(wrapper.contains('Ok BTN')).toEqual(true);
      expect(wrapper.contains('Cancel BTN')).toEqual(false);
    });

    it('should create a Descriptive InfoBox with no button', () => {
      wrapper = createWrapper({
        title: myTitle,
        size: 'descriptive'
      });

      expect(wrapper.contains('button')).toEqual(false);
    });
  });

  it('should display children', () => {
    wrapper = createWrapper({
      title: myTitle,
      size: 'descriptive',
      children: 'Children are the future'
    });
    expect(wrapper.contains('Children are the future')).toEqual(true);
  });

  it('should simulate Primary click action', () => {
    const mockClick = jest.fn();
    wrapper = createWrapper({
      title: myTitle,
      primary: mockClick,
      primaryLabel: 'Ok BTN'
    });
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should simulate Secondary click action', () => {
    const mockClick = jest.fn();
    wrapper = createWrapper({
      title: myTitle,
      secondary: mockClick,
      secondaryLabel: 'Cancel BTN'
    });
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
