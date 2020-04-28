import * as React from 'react';
import styles from './SidenavBody.module.scss';

export const SidenavBody: React.FC<{}> = ({ children }) => {
  return <div className={styles.sidenavBody}>{children}</div>;
};
