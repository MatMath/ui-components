import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './SidenavLink.module.scss';

export interface SidenavLinkProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * To highlight the link when the current location matches the link target
   */
  selected?: boolean;
  /**
   * Enables thinner collapsed mode
   */
  collapsed?: boolean;
  /**
   * Displays a red dot indicating a pending notification on the target page
   */
  hasNotification?: boolean;
  /**
   * The icon component to display in the link
   */
  icon: React.ReactNode;
  /**
   * The link text
   */
  label: string;
}

/**
 * The content of a standard sidenav link, typically to be wrapped in a <a> or <Link>.
 * Displays icon, label and possible notification red dot, adapts to collapsed layout.
 */
export const SidenavLink = ({
  className,
  collapsed,
  hasNotification,
  icon,
  label,
  selected
}: SidenavLinkProps) => {
  const classname = getClassNames(styles.link, className, {
    [styles.collapsed]: collapsed,
    [styles.selected]: selected
  });
  return (
    <span className={classname}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
      {hasNotification ? <span className={styles.notification} /> : null}
    </span>
  );
};
