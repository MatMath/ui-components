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
   * Text to display under the input when triggering a feedback type
   */
  feedbackText?: string;
  /**
   * Text to display within the input, justified to the right.
   */
  inlineFeedbackText?: string;
  /**
   * Make this field take 100% of the width of it's container
   * @default false
   */
  fullWidth?: boolean;
}

//If inlineText is requested, we add a display : flex
//and flex-direction : row wrapper around our input and our
//added text
const InlineTextWrapper: React.FC<{
  inlineText?: string;
  inlineCss?: string;
}> = ({ inlineText, inlineCss, children }) =>
  inlineText ? (
    <div className={styles.inlineInputContainer}>
      {children}
      <span className={getClassNames(styles.inlineText, inlineCss)}>
        {inlineText}
      </span>
    </div>
  ) : (
    <>{children}</>
  );

export const TextInput: React.FC<TextInputProps> = ({
  feedbackType,
  feedbackText,
  inlineFeedbackText,
  fullWidth = false,
  ...htmlInputProps
}) => {
  const feedbackCssClass =
    feedbackType && styles[feedbackType] ? styles[feedbackType] : '';

  const inlineTextCssClass =
    feedbackType && styles[feedbackType]
      ? styles[feedbackType]
      : styles['default'];

  return (
    <div
      className={getClassNames(styles.root, feedbackCssClass, {
        [styles.fullWidth]: fullWidth
      })}
    >
      <InlineTextWrapper
        inlineText={inlineFeedbackText}
        inlineCss={inlineTextCssClass}
      >
        <input
          {...htmlInputProps}
          className={getClassNames(styles.input, feedbackCssClass, {
            [styles.fullWidth]: fullWidth,
            [styles.inlineInput]: inlineFeedbackText !== undefined
          })}
          type='text'
        />
      </InlineTextWrapper>
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
