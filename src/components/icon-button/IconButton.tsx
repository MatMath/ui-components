import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import { Button } from '@components/button/Button';
import { ButtonSize, ButtonTheme } from '@components/button/types';
import styles from './IconButton.module.scss';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  size?: ButtonSize;
  theme?: ButtonTheme;
}

export const IconButton: React.FC<IconButtonProps> = ({
  size = 'small',
  theme = 'light',
  icon,
  ...htmlButtonProps
}) => {
  return (
    <Button
      nature={'ghost'}
      size={size}
      theme={theme}
      {...htmlButtonProps}
      className={getClassNames(styles.iconButton, styles[size])}
    >
      {icon}
    </Button>
  );
};
