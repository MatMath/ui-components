import * as React from 'react';
import styles from './IconsWrapper.module.scss';

const getName = (component: React.ReactElement) => {
  const type = (component as React.ReactElement).type as React.ComponentClass;
  return type.displayName;
};

interface IconsWrapperProps {
  children: React.ReactElement[];
}

// This is a utility to show components and their name side by side in the component library
export const IconsWrapper = ({ children }: IconsWrapperProps) => (
  <div className={styles.wrapper}>
    {React.Children.map(children, child => {
      const name = getName(child);
      return (
        <div key={name} className={styles.wrapperItem}>
          <div className={styles.item}>{child}</div>
          <p className={styles.item}>{name}</p>
        </div>
      );
    })}
  </div>
);
