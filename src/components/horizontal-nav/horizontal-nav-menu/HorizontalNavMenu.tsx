import * as React from 'react';
import styles from './HorizontalNavMenu.module.scss';
import { getClassNames } from '@utility/cssUtils';

export type HorizontalNavMenuProps = React.HTMLAttributes<HTMLUListElement>;

export const HorizontalNavMenu: React.FC<HorizontalNavMenuProps> = ({
  children,
  className,
  ...otherProps
}) => {
  const classname = getClassNames(styles.menu, className);
  return (
    <ul className={classname} {...otherProps}>
      {children}
    </ul>
  );
};
