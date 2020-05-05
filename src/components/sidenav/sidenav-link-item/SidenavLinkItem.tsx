import * as React from 'react';
import styles from './SidenavLinkItem.module.scss';
import { SidenavItem } from '@components/sidenav/sidenav-item/SidenavItem';
import { getClassNames } from '@utility/cssUtils';

export type SidenavLinkItemProps = React.HTMLAttributes<HTMLLIElement>;

/**
 * A SidenavItem with an .sidenavLinkItem class in addition to .sidenavItem
 * and any other provided class.
 * It styles an svg icon and a label inside an <a> in a standard fashion.
 */
export const SidenavLinkItem: React.FC<SidenavLinkItemProps> = props => {
  const { className, ...otherProps } = props;
  const classname = getClassNames(styles.sidenavLinkItem, className);
  return <SidenavItem className={classname} {...otherProps} />;
};
