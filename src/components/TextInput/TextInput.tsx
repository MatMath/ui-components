import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import './TextInput.css';

type TextInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  placeholder?: string;
  feedbackType?: TextInputFeedbackType;
  feedbackText?: string;
}

const classNameFromFeedbackType: Record<TextInputFeedbackType, string> = {
  error: 'error',
  warning: 'warning'
};

const getClassNameFromFeedbackType = (
  feedbackType?: TextInputFeedbackType
): string => {
  return feedbackType ? classNameFromFeedbackType[feedbackType] : '';
};

const shouldShowFeedback = ({
  feedbackText,
  feedbackType
}: TextInputProps): boolean => {
  return (
    feedbackType !== undefined &&
    feedbackText !== undefined &&
    feedbackText !== null &&
    feedbackText.length > 0
  );
};

export const TextInput: React.FC<TextInputProps> = props => {
  const className = getClassNameFromFeedbackType(props.feedbackType);
  const { feedbackText, feedbackType, ...htmlInputProps } = props;

  return (
    <div className={'root ' + className}>
      <input
        {...htmlInputProps}
        className={getClassNames('input', className)}
        type='text'
      />
      {shouldShowFeedback(props) ? (
        <span className={getClassNames('feedback', className)}>
          {feedbackText}
        </span>
      ) : null}
    </div>
  );
};
