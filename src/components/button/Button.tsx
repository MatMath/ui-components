import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Button.module.scss';

type ButtonNature = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonTheme = 'light' | 'dark';

const defaultNature: ButtonNature = 'primary';
const defaultSize: ButtonSize = 'medium';
const defaultTheme: ButtonTheme = 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nature?: ButtonNature;
  size?: ButtonSize;
  theme?: ButtonTheme;
}

const Button: React.FC<ButtonProps> = ({
  nature = defaultNature,
  size = defaultSize,
  theme = defaultTheme,
  children,
  ...htmlButtonProps
}) => {
  return (
    <button
      {...htmlButtonProps}
      className={getClassNames(
        styles.button,
        styles[nature],
        styles[size],
        styles[theme]
      )}
    >
      {children ? <span className={styles.content}>{children}</span> : null}
    </button>
  );
};

Button.defaultProps = {
  nature: defaultNature,
  size: defaultSize,
  theme: defaultTheme
};

export default Button;
