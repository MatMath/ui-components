import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Checkbox.module.scss';

interface StyledCheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledCheckbox = ({
  checked = false,
  disabled = false,
  children
}: StyledCheckboxProps) => {
  const className = getClassNames(styles.styledCheckbox, {
    [styles.checked]: checked,
    [styles.disabled]: disabled
  });
  return <div className={className}>{children}</div>;
};

const Checkmark = () => {
  return (
    <svg
      className={styles.checkmark}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6 10L9 13L15.0407 7' strokeLinecap='round' />
    </svg>
  );
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = ({
  className,
  checked,
  disabled,
  label,
  ...otherProps
}: CheckboxProps) => {
  return (
    <label
      className={getClassNames(
        styles.checkboxContainer,
        { [styles.disabled]: disabled },
        className || ''
      )}
    >
      <input
        className={styles.hiddenCheckBox}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        {...otherProps}
      />
      <StyledCheckbox checked={checked} disabled={disabled}>
        <Checkmark />
      </StyledCheckbox>
      {label ? <span className={styles.text}>{label}</span> : null}
    </label>
  );
};
