import * as React from 'react';

import { getClassNames } from '@utility/cssUtils';

import styles from './PasswordStrength.module.scss';

export interface PasswordStrengthProps {
  /**
   * Any text you want to display under the strength indicator
   */
  additionalText?: string;
  /**
   * Make this field take 100% of the width of it's container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Score indicating the strength of a password
   * The scale (0 - 4) is based on the levels from the ZXCVBN algorithm
   */
  score?: 0 | 1 | 2 | 3 | 4;
  /**
   * Wether to display or not the additional info under the strength indicator
   */
  showAdditionalText?: boolean;
}

const classNameColorScoreMapping = {
  0: styles.weakest,
  1: styles.weak,
  2: styles.acceptable,
  3: styles.good,
  4: styles.strong
};

export const PasswordStrength = ({
  additionalText,
  fullWidth = false,
  score = 0,
  showAdditionalText
}: PasswordStrengthProps) => {
  const strengthClassName = classNameColorScoreMapping[score];

  return (
    <div
      className={getClassNames(styles.root, { [styles.fullWidth]: fullWidth })}
    >
      <div
        className={getClassNames(styles.container, {
          [styles.fullWidth]: fullWidth
        })}
      >
        <span
          className={getClassNames(
            styles.passwordStrength,
            score >= 0 ? strengthClassName : ''
          )}
        ></span>
        <span
          className={getClassNames(
            styles.passwordStrength,
            score >= 1 ? strengthClassName : ''
          )}
        ></span>
        <span
          className={getClassNames(
            styles.passwordStrength,
            score >= 2 ? strengthClassName : ''
          )}
        ></span>
        <span
          className={getClassNames(
            styles.passwordStrength,
            score >= 3 ? strengthClassName : ''
          )}
        ></span>
        <span
          className={getClassNames(
            styles.passwordStrength,
            score >= 4 ? strengthClassName : ''
          )}
        ></span>
      </div>
      {showAdditionalText && additionalText && (
        <span className={styles.additionalInfo}>{additionalText}</span>
      )}
    </div>
  );
};
