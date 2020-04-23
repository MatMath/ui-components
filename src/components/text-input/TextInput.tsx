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
  fluid?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  feedbackType,
  feedbackText,
  fluid = false,
  ...htmlInputProps
}) => {
  const feedbackCssClass =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  const fluidCssClass = fluid && styles.fluid ? styles.fluid : '';

  return (
    <div
      className={getClassNames(styles.root, feedbackCssClass, fluidCssClass)}
    >
      <input
        {...htmlInputProps}
        className={getClassNames(styles.input, feedbackCssClass, fluidCssClass)}
        type='text'
      />
      {feedbackText && feedbackType ? (
        <span className={getClassNames(styles.feedback, feedbackCssClass)}>
          {feedbackText}
        </span>
      ) : null}
    </div>
  );
};
