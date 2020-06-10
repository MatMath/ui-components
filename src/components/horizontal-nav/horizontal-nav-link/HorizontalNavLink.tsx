import * as React from 'react';
import styles from './HorizontalNavLink.module.scss';
import { getClassNames } from '@utility/cssUtils';

export interface HorizontalNavLinkProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  /**
   * The link text
   */
  label: React.ReactNode;
  /**
   * To highlight the link when the current location matches the link target
   */
  selected?: boolean;
}

export const HorizontalNavLink = ({
  className,
  label,
  selected,
  ...otherProps
}: HorizontalNavLinkProps) => {
  const classname = getClassNames(styles.link, className, {
    [styles.selected]: selected
  });
  return (
    <span className={classname} {...otherProps}>
      {label}
    </span>
  );
};
