import * as React from 'react';
import styles from './SidenavMenu.module.scss';
import { getClassNames } from '@utility/cssUtils';

export type SidenavMenuProps = React.HTMLAttributes<HTMLUListElement>;

/**
 * A simple <ul> with a .sidenavMenu class in addition to any other
 * provided className.
 * It applies the layout of the menu.
 */
export const SidenavMenu: React.FC<SidenavMenuProps> = props => {
  const { children, className, ...otherProps } = props;
  const classname = getClassNames(styles.sidenavItem, className);
  return (
    <ul className={classname} {...otherProps}>
      {children}
    </ul>
  );
};
