import * as React from 'react';

import { TimerClock, TimerClockProps } from '@components/otp-field/TimerClock';
import { formatCode } from '@components/otp-field/helpers';
import { useOTPCodeShuffler } from '@components/otp-field/otp-code-shuffler/useCodeShuffler';
import styles from './OTPField.module.scss';

export interface OTPFieldProps extends TimerClockProps {
  label: string;
  /**
   * A 6-character otp code string
   * No space character should be within the code
   * If null is provided, the component will shuffle the code
   */
  code: string | null;
}

export const OTPField = ({
  code,
  label,
  onTimerEnd,
  ...clockProps
}: OTPFieldProps): JSX.Element => {
  const [isShuffling, setIsShuffling] = React.useState(false);

  const resetCode = React.useCallback(() => {
    setIsShuffling(true);
    onTimerEnd && onTimerEnd();
  }, [onTimerEnd]);

  React.useEffect(() => {
    setIsShuffling(!code);
  }, [code]);

  const { shuffledCode } = useOTPCodeShuffler({
    shouldShuffle: isShuffling
  });

  const formattedCode = formatCode(isShuffling || !code ? shuffledCode : code);

  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <div className={styles.container}>
        <div className={styles.code}>{formattedCode}</div>
        <TimerClock
          key={clockProps.validityEndDate}
          onTimerEnd={resetCode}
          {...clockProps}
        />
      </div>
    </div>
  );
};
