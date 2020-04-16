import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Checkbox.module.scss';

const CheckboxContainer = ({
  className,
  children
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={getClassNames(styles.checkboxContainer, className || '')}>
      {children}
    </label>
  );
};

const HiddenCheckbox = ({
  checked = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={styles.hiddenCheckBox}
      type='checkbox'
      checked={checked}
      {...props}
    />
  );
};

const StyledCheckbox = ({
  checked = false,
  disabled = false,
  children
}: React.InputHTMLAttributes<HTMLInputElement>) => {
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
      <path
        className='checkmark__check'
        d='M5.5 10L8.45928 13L14.4796 7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Checkbox = ({
  className,
  checked,
  disabled,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} disabled={disabled}>
      <Checkmark />
    </StyledCheckbox>
  </CheckboxContainer>
);
