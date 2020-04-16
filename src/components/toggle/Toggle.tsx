import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Toggle.module.scss';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelUnchecked?: string;
  labelChecked?: string;
}

interface GrooveProps {
  checked?: boolean;
  disabled?: boolean;
}

interface HandleProps {
  checked?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  checked?: boolean;
  labelUnchecked?: string;
  labelChecked?: string;
}

const HiddenInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => (
  <input className={styles.hiddenInput} type='checkbox' {...props} />
);

const Groove: React.FC<GrooveProps> = ({ checked, disabled, children }) => (
  <div
    className={getClassNames(styles.groove, {
      [styles.checked]: checked,
      [styles.disabled]: disabled
    })}
  >
    {children}
  </div>
);

const Handle: React.FC<HandleProps> = ({ checked, disabled }) => (
  <div
    className={getClassNames(styles.handle, {
      [styles.checked]: checked,
      [styles.disabled]: disabled
    })}
  />
);

const Label: React.FC<LabelProps> = ({
  checked,
  labelChecked,
  labelUnchecked
}) => {
  const isLabelVisible =
    (checked && labelChecked) || (!checked && labelUnchecked);

  return isLabelVisible ? (
    <span className={styles.text}>
      {checked ? labelChecked : labelUnchecked}
    </span>
  ) : null;
};

export const Toggle: React.FC<ToggleProps> = ({
  labelChecked,
  labelUnchecked,
  checked,
  disabled,
  ...props
}) => {
  return (
    <label
      className={getClassNames(styles.root, {
        [styles.checked]: checked,
        [styles.disabled]: disabled
      })}
    >
      <HiddenInput {...props} checked={checked} disabled={disabled} />
      <Groove checked={checked} disabled={disabled}>
        <Handle checked={checked} disabled={disabled} />
      </Groove>
      <Label
        checked={checked}
        labelUnchecked={labelUnchecked}
        labelChecked={labelChecked}
      />
    </label>
  );
};
