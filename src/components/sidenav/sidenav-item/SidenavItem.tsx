import * as React from 'react';
import styles from './SidenavItem.module.scss';
import { getClassNames } from '@utility/cssUtils';

export interface SidenavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Enables thinner collapsed mode
   */
  collapsed?: boolean;
}

/**
 * A simple <li> with a .sidenavItem class in addition to any other
 * provided className.
 * It styles the layout and hover effect of a standatd navigation item.
 */
export const SidenavItem: React.FC<SidenavItemProps> = props => {
  const { children, className, collapsed, ...otherProps } = props;
  const classname = getClassNames(styles.sidenavItem, className, {
    [styles.collapsed]: collapsed
  });
  return (
    <li className={classname} {...otherProps}>
      {children}
    </li>
  );
};
