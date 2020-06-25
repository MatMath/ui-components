import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { OTPField } from '@components/otp-field/OTPField';

Date.now = jest.fn().mockReturnValue(1592829201510);

const DEFAULT_LABEL = 'security code';
const DEFAULT_CODE = '000000';
const CURRENT_DATE = Date.now();
const VALIDITY_PERIOD = 30000; // Time in ms
const VALIDITY_ENDED_TIME = CURRENT_DATE - 1000; // Time in the past

describe('<OTPField>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const otpField = mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE + VALIDITY_PERIOD}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(otpField).toMatchSnapshot();
    });
  });

  describe('OTP Clock', () => {
    it('should have a full dash array when no time has been elapsed', () => {
      const otpField = mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE + VALIDITY_PERIOD}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(
        otpField
          .find('path')
          .getDOMNode()
          .getAttribute('stroke-dasharray')
      ).toBe('38 38');
    });

    it('should have an empty dash array when there is no more time left', () => {
      const otpField = mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(
        otpField
          .find('path')
          .getDOMNode()
          .getAttribute('stroke-dasharray')
      ).toBe('0 38');
    });
  });

  describe('OTP Field onTimerEnd', () => {
    it('should trigger the onTimerEnd callback when there is not time left', () => {
      const onTimerEnd = jest.fn();
      mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={VALIDITY_ENDED_TIME}
          validityPeriod={VALIDITY_PERIOD}
          onTimerEnd={onTimerEnd}
        />
      );

      expect(onTimerEnd).toBeCalledTimes(1);
    });

    it('should not trigger the onTimerEnd callback when there is still time left', () => {
      const onTimerEnd = jest.fn();
      mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE + 1000}
          validityPeriod={VALIDITY_PERIOD}
          onTimerEnd={onTimerEnd}
        />
      );

      expect(onTimerEnd).toBeCalledTimes(0);
    });
  });

  describe('OTP Field code shuffler', () => {
    it('should trigger a code shuffle when there is no time left', () => {
      const otpField = mount(
        <OTPField
          code={DEFAULT_CODE}
          label={DEFAULT_LABEL}
          validityEndDate={VALIDITY_ENDED_TIME}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(otpField.find('.code').text()).not.toBe(DEFAULT_CODE);
    });

    it('should trigger a code suffle when the code is null', () => {
      const otpField = mount(
        <OTPField
          code={null}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE + VALIDITY_PERIOD}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(otpField.find('.code').text()).toHaveLength(7);
    });

    it('should not trigger a code suffle and show the code when there is time left', () => {
      const code = '123456';
      const formattedCode = '123 456';
      const otpField = mount(
        <OTPField
          code={code}
          label={DEFAULT_LABEL}
          validityEndDate={CURRENT_DATE + VALIDITY_PERIOD}
          validityPeriod={VALIDITY_PERIOD}
        />
      );

      expect(otpField.find('.code').text()).toBe(formattedCode);
    });
  });
});
