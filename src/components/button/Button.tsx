import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import {
  ButtonNature,
  ButtonSize,
  ButtonTheme
} from '@components/button/types';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nature?: ButtonNature;
  size?: ButtonSize;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = ({
  nature = 'primary',
  size = 'medium',
  theme = 'light',
  children,
  className,
  ...htmlButtonProps
}) => {
  return (
    <button
      {...htmlButtonProps}
      className={getClassNames(
        styles.button,
        styles[nature],
        styles[size],
        styles[theme],
        className
      )}
    >
      {children ? <span className={styles.content}>{children}</span> : null}
    </button>
  );
};
