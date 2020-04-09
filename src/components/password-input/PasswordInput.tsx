import * as React from 'react';

import { getClassNames } from '@utility/cssUtils';
import { HideIcon, RevealIcon } from '@atoms/icons';
import { midGreen00 } from '@colors';
import { Tooltip } from '@components';

import styles from './PasswordInput.module.scss';

type PasswordInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  /**
   * Some text to display under the input when triggering a feedback type
   */
  feedbackText?: string;
  /**
   * The feedback nature of the input
   */
  feedbackType?: PasswordInputFeedbackType;
  /**
   * The text that is displayed on hover on the hide icon when the
   * password is shown
   */
  hidePasswordTooltipText: string;
  /**
   * The label used to describe the field, it's displayed on top.
   * Note that the text will be uppercase
   */
  label?: string;
  /**
   * A function that is triggered when the password gets revealed
   */
  onShowPassword?: () => void;
  /**
   * A function that is triggered when the password gets hidden
   */
  onHidePassword?: () => void;
  /**
   * The text that is displayed on hover on the reveal icon when the
   * password is hidden
   */
  showPasswordTooltipText: string;
}

export const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  const {
    feedbackText,
    feedbackType,
    hidePasswordTooltipText,
    label,
    onShowPassword,
    onHidePassword,
    showPasswordTooltipText,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    if (showPassword && onShowPassword) {
      onShowPassword();
    } else if (!showPassword && onHidePassword) {
      onHidePassword();
    }
    setShowPassword(prevState => !prevState);
  };

  const styledClassName =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  const RevealOrHideIcon = showPassword ? HideIcon : RevealIcon;

  return (
    <div className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.container}>
        <input
          {...rest}
          type={showPassword ? 'text' : 'password'}
          className={getClassNames(styles.input, styledClassName)}
        />
        <button className={styles.icon} onClick={handleShowPassword}>
          {rest.disabled ? (
            <RevealOrHideIcon disabled={rest.disabled} />
          ) : (
            <Tooltip
              placement='left'
              title={
                showPassword ? hidePasswordTooltipText : showPasswordTooltipText
              }
            >
              <RevealOrHideIcon hoverColor={midGreen00} />
            </Tooltip>
          )}
        </button>
      </div>
      {feedbackText && feedbackType && (
        <span className={getClassNames(styles.feedback, styledClassName)}>
          {feedbackText}
        </span>
      )}
    </div>
  );
};
