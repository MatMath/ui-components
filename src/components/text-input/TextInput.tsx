import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './TextInput.module.scss';

type TextInputFeedbackType = 'error' | 'warning';
type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  /**
   * The feedback nature of the input
   */
  feedbackType?: TextInputFeedbackType;
  /**
   * Some text to display under the input when triggering a feedback type
   */
  feedbackText?: string;
  /**
   * Make this field take 100% of the width of it's container
   * @default false
   */
  fullWidth?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  feedbackType,
  feedbackText,
  fullWidth = false,
  ...htmlInputProps
}) => {
  const feedbackCssClass =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  return (
    <div
      className={getClassNames(styles.root, feedbackCssClass, {
        [styles.fullWidth]: fullWidth
      })}
    >
      <input
        {...htmlInputProps}
        className={getClassNames(styles.input, feedbackCssClass, {
          [styles.fullWidth]: fullWidth
        })}
        type='text'
      />
      {feedbackText && feedbackType ? (
        <span
          className={getClassNames(styles.feedback, feedbackCssClass, {
            [styles.fullWidth]: fullWidth
          })}
        >
          {feedbackText}
        </span>
      ) : null}
    </div>
  );
};
