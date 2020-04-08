import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './TextInput.module.scss';

type TextInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  feedbackType?: TextInputFeedbackType;
  feedbackText?: string;
}

const shouldShowFeedback = (
  feedbackText: string | undefined,
  feedbackType: TextInputFeedbackType | undefined
) => {
  return feedbackText && feedbackType;
};

export const TextInput: React.FC<TextInputProps> = ({
  feedbackType,
  feedbackText,
  ...htmlInputProps
}) => {
  const feedbackCssClass =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  return (
    <div className={getClassNames(styles.root, feedbackCssClass)}>
      <input
        {...htmlInputProps}
        className={getClassNames(styles.input, feedbackCssClass)}
        type='text'
      />
      {shouldShowFeedback(feedbackText, feedbackType) ? (
        <span className={getClassNames(styles.feedback, feedbackCssClass)}>
          {feedbackText}
        </span>
      ) : null}
    </div>
  );
};
