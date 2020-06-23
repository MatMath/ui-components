import * as React from 'react';

import { InfoCircleIcon } from '@components/icons';
import { Button } from '@components/button/Button';
import { dashGreen00, functionalRed00, orange00, white } from '@colors';
import { getClassNames } from '@utility/cssUtils';

import { InfoBoxSeverity, InfoBoxSize } from './types';
import styles from './InfoBox.module.scss';

type InfoBoxSizeList = 'small' | 'simple' | 'descriptive'; // To display via mdx
type InfoBoxSeverityList = 'alert' | 'strong' | 'subtle' | 'warning'; // To display via mdx

export interface InfoBoxProps {
  title: string;
  size?: InfoBoxSizeList;
  severity?: InfoBoxSeverityList;
  children?: string;
  primary?: Function;
  primaryLabel?: string;
  secondary?: Function;
  secondaryLabel?: string;
}

export const InfoBox = ({
  title,
  size = InfoBoxSize.SIMPLE,
  severity = InfoBoxSeverity.SUBTLE,
  children,
  primary,
  primaryLabel,
  secondary,
  secondaryLabel
}: InfoBoxProps) => {
  const selectIconColor = () => {
    switch (severity) {
      case InfoBoxSeverity.ALERT:
        return functionalRed00;
      case InfoBoxSeverity.STRONG:
        return white;
      case InfoBoxSeverity.SUBTLE:
        return dashGreen00;
      case InfoBoxSeverity.WARNING:
        return orange00;
      default:
        return dashGreen00;
    }
  };

  const showDescription = () => {
    return <p className={styles.description}> {children} </p>;
  };

  const showActions = () => {
    return (
      <div className={styles.actionBox}>
        {secondary ? (
          <Button
            nature='secondary'
            size='small'
            theme={severity === InfoBoxSeverity.STRONG ? 'dark' : 'light'}
            className={styles.actionsBtn}
            onClick={() => secondary}
          >
            {secondaryLabel}
          </Button>
        ) : null}

        {primary ? (
          <Button
            nature='primary'
            size='small'
            theme={severity === InfoBoxSeverity.STRONG ? 'dark' : 'light'}
            className={styles.actionsBtn}
            onClick={() => primary}
          >
            {primaryLabel}
          </Button>
        ) : null}
      </div>
    );
  };

  return (
    <div className={getClassNames(styles.root, styles[severity])}>
      <div className={styles.headerRow}>
        <div className={getClassNames(styles.icon, styles[size])}>
          <InfoCircleIcon color={selectIconColor()} />
        </div>
        <p className={getClassNames(styles.title, styles[size])}>{title}</p>
      </div>
      {size === InfoBoxSize.DESCRIPTIVE ? showDescription() : null}
      {showActions()}
    </div>
  );
};
