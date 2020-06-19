import * as React from 'react';

import { TimerClock, TimerClockProps } from '@components/otp-field/TimerClock';
import { formatCode } from '@components/otp-field/helpers';
import styles from './OTPField.module.scss';

export interface OTPFieldProps extends TimerClockProps {
  label: string;
  /**
   * A 6-character otp code string
   * No space character should be within the code
   */
  code: string;
}

export const OTPField = ({
  code,
  label,
  ...clockProps
}: OTPFieldProps): JSX.Element => {
  const formattedCode = formatCode(code);

  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <div className={styles.container}>
        <div className={styles.code}>{formattedCode}</div>
        <TimerClock {...clockProps} />
      </div>
    </div>
  );
};
