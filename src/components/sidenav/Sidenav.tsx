import * as React from 'react';
import styles from './Sidenav.module.scss';
import { getClassNames } from '@utility/cssUtils';

export interface SidenavProps {
  /**
   * Enables thinner collapsed mode
   */
  collapsed?: boolean;
}

export const Sidenav: React.FC<SidenavProps> = ({ children, collapsed }) => {
  const className = getClassNames(styles.sidenav, {
    [styles.collapsed]: collapsed
  });
  return <nav className={className}>{children}</nav>;
};
