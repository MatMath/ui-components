import * as React from 'react';
import styles from './SidenavItem.module.scss';

export type SidenavItemProps = React.HTMLAttributes<HTMLLIElement>;

/**
 * A simple <li> with a .sidenavItem class in addition to any other
 * provided className.
 * It styles the layout and hover effect of a standatd navigation item.
 */
export const SidenavItem: React.FC<SidenavItemProps> = props => {
  const { children, className, ...otherProps } = props;
  const customClassName = className ? ` ${className}` : '';
  const classname = `${styles.sidenavItem}${customClassName}`;
  return (
    <li className={classname} {...otherProps}>
      {children}
    </li>
  );
};
