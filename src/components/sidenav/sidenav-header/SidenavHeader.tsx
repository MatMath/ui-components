import * as React from 'react';
import styles from './SidenavHeader.module.scss';

/**
 * A simple <header> with a .sidenavHeader class.
 */
export const SidenavHeader: React.FC<{}> = ({ children }) => {
  return <header className={styles.sidenavHeader}>{children}</header>;
};
