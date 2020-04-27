import * as React from 'react';
import Tippy from '@tippyjs/react/headless';

import { getClassNames } from '@utility/cssUtils';
import { HideIcon, RevealIcon } from '@atoms/icons';
import { midGreen00 } from '@colors';
import { Tooltip } from '@components/tooltip/Tooltip';

import styles from './PasswordInput.module.scss';

type PasswordInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

type TippyPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'auto'
  | 'auto-start'
  | 'auto-end';

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

  /**
   * The title of the tooltip that is displayed on focus of the input
   */
  tooltipsTitle?: string;

  /**
   * List of tooltips, if not, the tooltip will never be displayed
   */
  tooltips?: string[];

  /**
   * The placement (same as TippyJS as it's what is used internally)
   */
  tooltipsPlacement?: TippyPlacement;
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
    tooltips,
    tooltipsTitle,
    tooltipsPlacement = 'top',
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
        <Tippy
          disabled={prop.disabled || !tooltips}
          trigger='focus focusin'
          placement={tooltipsPlacement}
          render={attrs => (
            <div className={getClassNames(styles.tooltipContainer)} {...attrs}>
              {tooltipsTitle && <h1>{tooltipsTitle}</h1>}
              {tooltips && tooltips.length > 0 && (
                <ul>
                  {tooltips.map(tooltip => (
                    <li key={tooltip}>&#8226; {tooltip}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        >
          <input
            ref={inputRef}
            {...prop}
            type={showPassword ? 'text' : 'password'}
            className={getClassNames(styles.input, styledClassName, {
              [styles.fullWidth]: fullWidth
            })}
          />
        </Tippy>
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
