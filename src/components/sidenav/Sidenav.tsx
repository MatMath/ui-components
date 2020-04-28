import * as React from 'react';
import styles from './Sidenav.module.scss';

export const Sidenav: React.FC<{}> = ({ children }) => {
  return <nav className={styles.sidenav}>{children}</nav>;
};
