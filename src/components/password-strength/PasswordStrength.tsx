import * as React from 'react';

import { getClassNames } from '@utility/cssUtils';

import { dashGreen05 } from '@colors';

import styles from './PasswordStrength.module.scss';

export interface PasswordStrengthProps {
  /**
   * Any text you want to display under the strength indicator
   */
  additionalText?: string;
  /**
   * Score indicating the strength of a password
   * The scale (0 - 4) is based on the levels from the ZXCVBN algorithm
   */
  score?: 0 | 1 | 2 | 3 | 4;
  /**
   * Wether to display or not the additional info under the strength indicator
   */
  showAdditionalText?: boolean;
  /**
   * Background of the strength indicator
   */
  backgroundColor?: string;
  /**
   * Use Philly Pride flag colors for score 4 strength
   */
  showQueerColors?: false;
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
  score = 0,
  showAdditionalText,
  backgroundColor = dashGreen05,
  showQueerColors = false
}: PasswordStrengthProps) => {
  const strengthClassName = classNameColorScoreMapping[score];
  const strengthLevel = ((score + 1) * 100) / 5;

  return (
    <div className={getClassNames(styles.root)}>
      <div
        className={getClassNames(styles.container)}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className={getClassNames(styles.passwordStrengthBackground)}>
          <span
            style={{
              width: `${strengthLevel}%`
            }}
            className={getClassNames(
              styles.passwordStrength,
              strengthClassName,
              { [styles.queer]: score === 4 && showQueerColors }
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
