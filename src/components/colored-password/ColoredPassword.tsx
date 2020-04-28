import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';

import { getValueSplitInStringCategories } from './helpers';
import styles from './ColoredPassword.module.scss';

export interface ColoredPasswordProps {
  /**
   * The password value to display with colors
   * (letters inherit color, digits in green, special characters in red)
   */
  value: string;
  /**
   * The id to link with when associated to a form label
   */
  id?: string;
}

export const ColoredPassword: React.FC<ColoredPasswordProps> = ({
  id,
  value
}) => {
  const coloredPasswordCategories = getValueSplitInStringCategories(value).map(
    (values, key) => (
      <span
        key={key}
        className={values.category && getClassNames(styles[values.category])}
      >
        {values.text}
      </span>
    )
  );

  return (
    <span id={id} className={getClassNames(styles.password)}>
      {coloredPasswordCategories}
    </span>
  );
};
