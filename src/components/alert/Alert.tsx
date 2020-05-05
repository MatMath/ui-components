import * as React from 'react';

import {
  CheckCircleIcon,
  CloseIcon,
  CrossCircleIcon
} from '@components/icons/Icons';

import { AlertSeverity } from './types';
import { Button } from '@components/button/Button';
import { getClassNames } from '@utility/cssUtils';
import styles from './Alert.module.scss';

export interface AlertProps {
  severity?: AlertSeverity;
  showIcon?: boolean;
  showCloseIcon?: boolean;
  children: string;
}

export const Alert = ({
  severity = AlertSeverity.SUCCESS,
  showIcon = true,
  showCloseIcon = false,
  children
}: AlertProps) => {
  const [close, setClose] = React.useState(false);

  if (!children || close) {
    return null;
  }

  const getIconBySeverity = (alertSeverity: AlertSeverity) => {
    switch (alertSeverity) {
      case AlertSeverity.ERROR:
        return <CrossCircleIcon size={30} color='white' />;
      case AlertSeverity.SUCCESS:
      default:
        return <CheckCircleIcon size={30} color='white' />;
    }
  };

  const renderIcon = (alertSeverity: AlertSeverity) => {
    const icon = getIconBySeverity(alertSeverity);
    return <div className={styles.icon}>{icon}</div>;
  };

  return (
    <div className={getClassNames(styles.root, styles[severity])}>
      <div className={styles.content}>
        {showIcon && renderIcon(severity)}
        <p className={styles.description}>{children}</p>
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
