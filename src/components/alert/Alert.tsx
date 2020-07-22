import * as React from 'react';

import { CheckCircleIcon, CloseIcon, CrossCircleIcon } from '@components/icons';

import { AlertSeverity, AlertSize } from './types';
import { Button } from '@components/button/Button';
import { getClassNames } from '@utility/cssUtils';
import styles from './Alert.module.scss';

export interface AlertProps {
  severity?: AlertSeverity;
  showIcon?: boolean;
  showCloseIcon?: boolean;
  children: string;
  size?: AlertSize;
}

export const Alert = ({
  severity = AlertSeverity.SUCCESS,
  showIcon = true,
  showCloseIcon = false,
  size = AlertSize.MEDIUM,
  children
}: AlertProps) => {
  const [close, setClose] = React.useState(false);

  if (!children || close) {
    return null;
  }

  const getIconSize = () => {
    switch (size) {
      case AlertSize.SMALL:
        return 20;
      case AlertSize.MEDIUM:
        return 24;
      default:
        return 24;
    }
  };

  const getIconBySeverity = (alertSeverity: AlertSeverity) => {
    switch (alertSeverity) {
      case AlertSeverity.ERROR:
        return <CrossCircleIcon size={getIconSize()} color='white' />;
      case AlertSeverity.SUCCESS:
      default:
        return <CheckCircleIcon size={getIconSize()} color='white' />;
    }
  };

  const renderIcon = (alertSeverity: AlertSeverity, alertSize: AlertSize) => {
    const icon = getIconBySeverity(alertSeverity);
    return (
      <div className={getClassNames(styles.icon, styles[alertSize])}>
        {icon}
      </div>
    );
  };

  return (
    <div className={getClassNames(styles.root, styles[severity], styles[size])}>
      <div className={styles.content}>
        {showIcon && renderIcon(severity, size)}
        <p className={getClassNames(styles.description, styles[size])}>
          {children}
        </p>
      </div>
      {showCloseIcon && (
        <Button
          nature='ghost'
          size='small'
          className={styles.closeIcon}
          onClick={() => setClose(true)}
        >
          <CloseIcon size={20} color='white' />
        </Button>
      )}
    </div>
  );
};
