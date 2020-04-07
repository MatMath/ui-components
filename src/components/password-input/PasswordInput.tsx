import * as React from 'react';

import { getClassNames } from '@utility/cssUtils';
import { HideIcon, RevealIcon } from '@atoms/icons';
import { midGreen00 } from '@colors';
import { Tooltip } from 'components';

import {
  PasswordStrength,
  PasswordStrengthProps
} from './subcomponents/PasswordStrength/PasswordStrength';
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
   * Some text to display under the input when triggering a feedback type
   */
  feedbackType?: PasswordInputFeedbackType;
  /**
   * The text that is displayed on hover on the hide icon when the
   * password is shown
   * @default 'Hide'
   */
  hidePasswordTooltipText?: string;
  /**
   * The label used to describe the field, it's displayed on top.
   * Note that the text will be uppercase
   * @default 'Password'
   */
  label?: string;
  /**
   * A function that controls the behavior of the show / hide feature.
   * You should use that with the `showPassword` property to make a controlled component
   */
  onShowHidePassword?: () => void;
  /**
   * Props for the password strength indicator, see below for better description.
   */
  passwordStrengthProps?: PasswordStrengthProps;
  /**
   * Boolean triggering the display / hide of the password
   * @default false
   */
  showPassword?: boolean;
  /**
   * Password strength indicator (score from 0 to 4)
   * @default false
   */
  showPasswordStrength?: boolean;
  /**
   * The text that is displayed on hover on the reveal icon when the
   * password is hidden
   * @default 'Reveal'
   */
  showPasswordTooltipText?: string;
}

const shouldShowFeedback = ({
  feedbackText,
  feedbackType
}: PasswordInputProps) => {
  return feedbackText && feedbackType;
};

const shouldShowPasswordStrength = ({
  showPasswordStrength,
  passwordStrengthProps
}: PasswordInputProps) => {
  return showPasswordStrength && passwordStrengthProps;
};

export const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  const {
    feedbackText,
    feedbackType,
    hidePasswordTooltipText = 'Hide',
    label = 'Password',
    onShowHidePassword,
    passwordStrengthProps,
    showPassword = false,
    showPasswordStrength,
    showPasswordTooltipText = 'Reveal',
    ...rest
  } = props;

  const [showPasswordState, setShowPasswordState] = React.useState(
    showPassword
  );

  React.useEffect(() => {
    setShowPasswordState(showPassword);
  }, [props.showPassword]);

  const handleShowPassword = () => {
    if (onShowHidePassword) {
      onShowHidePassword();
    } else {
      setShowPasswordState(prevState => !prevState);
    }
  };

  const styledClassName =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  const Icon = showPasswordState ? HideIcon : RevealIcon;

  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <div className={styles.container}>
        <input
          {...rest}
          type={showPasswordState ? 'text' : 'password'}
          className={getClassNames(styles.input, styledClassName)}
        />
        <span className={styles.icon} onClick={handleShowPassword}>
          {rest.disabled ? (
            <Icon disabled={rest.disabled} />
          ) : (
            <Tooltip
              placement='left'
              title={
                showPasswordState
                  ? hidePasswordTooltipText
                  : showPasswordTooltipText
              }
            >
              <Icon hoverColor={midGreen00} />
            </Tooltip>
          )}
        </span>
      </div>
      {shouldShowFeedback({ feedbackText, feedbackType }) && (
        <span className={getClassNames(styles.feedback, styledClassName)}>
          {feedbackText}
        </span>
      )}
      {shouldShowPasswordStrength({
        showPasswordStrength,
        passwordStrengthProps
      }) && <PasswordStrength {...passwordStrengthProps} />}
    </div>
  );
};
