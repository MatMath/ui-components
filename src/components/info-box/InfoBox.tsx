import * as React from 'react';

import { InfoCircleIcon } from '@components/icons';
import { dashGreen00, functionalRed00, orange00, white } from '@colors';

import { InfoBoxSeverity, InfoBoxSize } from './types';
import { getClassNames } from '@utility/cssUtils';
import styles from './InfoBox.module.scss';
import { Button } from '@components/button/Button';

export interface InfoBoxProps {
  severity?: InfoBoxSeverity;
  title: string;
  description: string;
  size: InfoBoxSize;
  primary?: Function;
  primaryTitle?: string;
  secondary?: Function;
  secondaryTitle: string;
}

export const InfoBox = ({
  severity = InfoBoxSeverity.SUBTLE,
  size = InfoBoxSize.SIMPLE,
  title,
  description,
  primary,
  primaryTitle,
  secondary,
  secondaryTitle
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
    return <p className={styles.description}> {description} </p>;
  };

  const showActions = () => {
    return (
      <div className={styles.actionBox}>
        {secondary ? (
          <Button
            nature='secondary'
            size='small'
            className={getClassNames(styles.actionsBtn, styles[severity])}
            onClick={() => secondary}
          >
            {secondaryTitle}
          </Button>
        ) : null}

        {primary ? (
          <Button
            nature='primary'
            size='small'
            className={getClassNames(styles.actionsBtn, styles[severity])}
            onClick={() => primary}
          >
            {primaryTitle}
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
