import * as React from 'react';
import styles from './SidenavHeader.module.scss';

export const SidenavHeader: React.FC<{}> = ({ children }) => {
  return <header className={styles.sidenavHeader}>{children}</header>;
};
