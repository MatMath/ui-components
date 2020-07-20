import * as React from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

export const Badge = ({ text, textColor, backgroundColor }: BadgeProps) => {
  return (
    <div
      className={styles.badge}
      style={{
        color: `${textColor}`,
        backgroundColor: `${backgroundColor}`
      }}
    >
      {text}
    </div>
  );
};
