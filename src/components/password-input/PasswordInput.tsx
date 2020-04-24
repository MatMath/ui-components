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
   * Make this field take 100% of the width of it's container
   * @default false
   */
  fullWidth?: boolean;
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
   * A function that is triggered when the visibility
   * of the password is changed.
   */
  onPasswordVisibilityChanged?: (visible: boolean) => void;
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
    fullWidth = false,
    hidePasswordTooltipText,
    label,
    onPasswordVisibilityChanged,
    showPasswordTooltipText,
    ...prop
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  const inputRef = React.createRef<HTMLInputElement>();

  const handleShowPassword = () => {
    if (onPasswordVisibilityChanged) {
      onPasswordVisibilityChanged(!showPassword);
    }
    setShowPassword(prevState => !prevState);
    inputRef.current && inputRef.current.focus();
  };

  const styledClassName = (feedbackType && styles[feedbackType]) || '';

  const RevealOrHideIcon = showPassword ? HideIcon : RevealIcon;

  return (
    <div
      className={getClassNames(styles.root, { [styles.fullWidth]: fullWidth })}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div
        className={getClassNames(styles.container, {
          [styles.fullWidth]: fullWidth
        })}
      >
        <input
          ref={inputRef}
          {...prop}
          type={showPassword ? 'text' : 'password'}
          className={getClassNames(styles.input, styledClassName, {
            [styles.fullWidth]: fullWidth
          })}
        />
        <button
          className={getClassNames(styles.icon, {
            [styles.fullWidth]: fullWidth
          })}
          onClick={handleShowPassword}
        >
          {prop.disabled ? (
            <RevealOrHideIcon disabled={prop.disabled} />
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
