import * as React from 'react';

import { getClassNames } from '@utility/cssUtils';
import styles from './TimerClock.module.scss';

const PERIMITER = 38;

export interface TimerClockProps {
  /**
   * Total time the code should be valid in ms
   */
  validityPeriod: number;
  /**
   * Unix time when the code is no longer valid
   */
  validityEndDate: number;
  /**
   * Remaining time after which the circle's color changes to alert in ms
   */
  alertThreshold?: number;
  /**
   * Callback triggered after the timer expires
   * ie when the validityEndDate is reached
   */
  onTimerEnd?: () => void;
}

export const TimerClock = ({
  validityEndDate,
  validityPeriod,
  alertThreshold = 0,
  onTimerEnd
}: TimerClockProps): JSX.Element => {
  const timeRef = React.useRef<NodeJS.Timeout | null>(null);

  // Initialize the timeLeft to the total possible waiting time.
  const [timeLeft, setTimeLeft] = React.useState(validityPeriod);

  React.useEffect(() => {
    if (timeRef.current && timeLeft < 0) {
      timeRef.current && clearTimeout(timeRef.current);
      onTimerEnd && onTimerEnd();
      return;
    }

    // Set the timeLeft to the real time left to catch up the possible delay
    // Important to have a 'catch up' animation
    if (!timeRef.current) {
      setTimeLeft(validityEndDate - Date.now());
    }

    // Update the timeLeft each second (in sync with the 1s animation of the SVG)
    timeRef.current = setTimeout(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  }, [timeLeft, validityEndDate, onTimerEnd]);

  const circleDashArray = ((timeLeft / validityPeriod) * PERIMITER).toFixed(0);
  const isClockStatusAlert = timeLeft < alertThreshold;

  return (
    <div className={styles.baseTimer}>
      <svg
        className={styles.baseTimerSvg}
        viewBox='0 0 14 14'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g className={styles.baseTimerCircle}>
          <circle className={styles.baseTimerPathElapsed} cx='7' cy='7' r='6' />
          <path
            strokeDasharray={`${circleDashArray} ${PERIMITER}`}
            className={getClassNames(styles.baseTimerPathRemaining, {
              [styles.alertPath]: isClockStatusAlert
            })}
            d='
              M 7, 7
              m -6, 0
              a 6,6 0 0,0 12,0
              a 6,6 0 0,0 -12,0
            '
          ></path>
        </g>
      </svg>
    </div>
  );
};
