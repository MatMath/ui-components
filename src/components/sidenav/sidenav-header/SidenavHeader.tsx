import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './SidenavHeader.module.scss';

export type SidenavHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * A simple <header> with a .sidenavHeader class.
 */
export const SidenavHeader: React.FC<SidenavHeaderProps> = props => {
  const { className, children, ...otherProps } = props;
  const classname = getClassNames(styles.sidenavHeader, className);
  return (
    <header className={classname} {...otherProps}>
      {children}
    </header>
  );
};
