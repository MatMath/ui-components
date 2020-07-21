import * as React from 'react';

import { InfoCircleIcon } from '@components/icons';
import { Button } from '@components/button/Button';
import { dashGreen00, functionalRed00, warningRed00, white } from '@colors';
import { getClassNames } from '@utility/cssUtils';

import styles from './InfoBox.module.scss';

type InfoBoxSize = 'small' | 'simple' | 'descriptive';
type InfoBoxSeverity = 'alert' | 'strong' | 'subtle' | 'warning';

export interface InfoBoxProps {
  title: React.ReactNode;
  size?: InfoBoxSize;
  severity?: InfoBoxSeverity;
  children?: React.ReactNode;
  primary?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  primaryLabel?: string;
  secondary?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  secondaryLabel?: string;
  iconSizePx?: number;
}

const severitySelector = (severity: InfoBoxSeverity | undefined) => {
  switch (severity) {
    case undefined:
    case 'subtle':
    case 'alert':
      return 'light';
    case 'strong':
      return 'dark';
    default:
      return severity;
  }
};

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
          theme={severitySelector(severity)}
          onClick={secondary}
        >
          {secondaryLabel}
        </Button>
      ) : null}

      {primary ? (
        <Button
          nature={severity === 'alert' ? 'danger' : 'primary'}
          size='small'
          theme={severitySelector(severity)}
          onClick={primary}
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
      return warningRed00;
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
  secondaryLabel,
  iconSizePx
}: InfoBoxProps) => {
  return (
    <div className={getClassNames(styles.root, styles[severity])}>
      <div className={styles.headerRow}>
        <div className={styles.icon}>
          <InfoCircleIcon size={iconSizePx} color={selectIconColor(severity)} />
        </div>
        <p className={getClassNames(styles.title, styles[size])}>{title}</p>
      </div>
      {(children === 0 || children) && size === 'descriptive' ? (
        <div className={styles.description}> {children} </div>
      ) : null}
      {primary || secondary
        ? showActions({
            severity,
            primary,
            primaryLabel,
            secondary,
            secondaryLabel
          })
        : null}
    </div>
  );
};
