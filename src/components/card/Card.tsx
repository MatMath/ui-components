import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Card.module.scss';

export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;
  const computedClassName = getClassNames(className, styles.card);
  return (
    <div {...rest} className={computedClassName}>
      {children}
    </div>
  );
};
