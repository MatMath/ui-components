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
  const strengthLevel = (score * 100) / 4;

  return (
    <div
      className={getClassNames(styles.root, { [styles.fullWidth]: fullWidth })}
    >
      <div
        className={getClassNames(styles.container, {
          [styles.fullWidth]: fullWidth
        })}
      >
        <div className={getClassNames(styles.passwordStrengthBackground)}>
          <span
            style={{
              width: `${strengthLevel}%`
            }}
            className={getClassNames(
              styles.passwordStrength,
              strengthClassName
            )}
          ></span>
        </div>
      </div>
      {showAdditionalText && additionalText && (
        <span className={styles.additionalInfo}>{additionalText}</span>
      )}
    </div>
  );
};
