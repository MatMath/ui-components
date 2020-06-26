import * as React from 'react';

import { InfoCircleIcon } from '@components/icons';
import { Button } from '@components/button/Button';
import { dashGreen00, functionalRed00, orange00, white } from '@colors';
import { getClassNames } from '@utility/cssUtils';

import styles from './InfoBox.module.scss';

type InfoBoxSize = 'small' | 'simple' | 'descriptive';
type InfoBoxSeverity = 'alert' | 'strong' | 'subtle' | 'warning';

export interface InfoBoxProps {
  title: string;
  size?: InfoBoxSize;
  severity?: InfoBoxSeverity;
  children?: string;
  primary?: Function;
  primaryLabel?: string;
  secondary?: Function;
  secondaryLabel?: string;
}

const showActions = ({
  severity,
  primary,
  primaryLabel,
  secondary,
  secondaryLabel
}: Partial<InfoBoxProps>) => {
  return (
    <div className={styles.actionBox}>
      {secondary ? (
        <Button
          nature='secondary'
          size='small'
          theme={severity === 'strong' ? 'dark' : 'light'}
          className={styles.actionsBtn}
          onClick={() => secondary()}
        >
          {secondaryLabel}
        </Button>
      ) : null}

      {primary ? (
        <Button
          nature='primary'
          size='small'
          theme={severity === 'strong' ? 'dark' : 'light'}
          className={styles.actionsBtn}
          onClick={() => primary()}
        >
          {primaryLabel}
        </Button>
      ) : null}
    </div>
  );
};

const selectIconColor = (severity: InfoBoxSeverity) => {
  switch (severity) {
    case 'alert':
      return functionalRed00;
    case 'strong':
      return white;
    case 'warning':
      return orange00;
    case 'subtle':
    default:
      return dashGreen00;
  }
};

export const InfoBox = ({
  title,
  size = 'simple',
  severity = 'subtle',
  children,
  primary,
  primaryLabel,
  secondary,
  secondaryLabel
}: InfoBoxProps) => {
  return (
    <div className={getClassNames(styles.root, styles[severity])}>
      <div className={styles.headerRow}>
        <div className={getClassNames(styles.icon, styles[size])}>
          <InfoCircleIcon color={selectIconColor(severity)} />
        </div>
        <p className={getClassNames(styles.title, styles[size])}>{title}</p>
      </div>
      {size === 'descriptive' ? (
        <p className={styles.description}> {children} </p>
      ) : null}
      {showActions({
        severity,
        primary,
        primaryLabel,
        secondary,
        secondaryLabel
      })}
    </div>
  );
};
