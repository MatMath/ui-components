import * as React from 'react';
import styles from './SidenavLink.module.scss';

export interface SidenavLinkProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  href: string;
}

export const SidenavLink: React.FC<SidenavLinkProps> = ({
  icon,
  label,
  href
}) => {
  return (
    <a className={styles.sidenavLink} href={href}>
      <span className={styles.sidenavIcon}>{icon}</span>
      <span className={styles.sidenavLabel}>{label}</span>
    </a>
  );
};
