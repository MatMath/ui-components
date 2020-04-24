import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Checkbox.module.scss';

interface CheckboxContainerProps {
  className: string | undefined;
  children: React.ReactNode;
}

const CheckboxContainer = ({ className, children }: CheckboxContainerProps) => {
  return (
    <label className={getClassNames(styles.checkboxContainer, className || '')}>
      {children}
    </label>
  );
};

const HiddenCheckbox = ({
  checked = false,
  ...otherProps
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={styles.hiddenCheckBox}
      type='checkbox'
      checked={checked}
      {...otherProps}
    />
  );
};

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
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} disabled={disabled}>
      <Checkmark />
    </StyledCheckbox>
  </CheckboxContainer>
);
