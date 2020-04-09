import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Toggle.module.scss';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelOff?: string;
  labelOn?: string;
}

const HiddenInput: React.FC<ToggleProps> = props => {
  const { checked, defaultChecked, labelOn, labelOff, ...inputProps } = props;
  return (
    <input
      className={styles.hiddenInput}
      type='checkbox'
      {...inputProps}
      defaultChecked={checked}
    />
  );
};

const Groove: React.FC<ToggleProps> = props => {
  return (
    <div
      className={getClassNames(styles.groove, {
        [styles.checked]: props.checked,
        [styles.disabled]: props.disabled
      })}
    >
      {props.children}
    </div>
  );
};

const Handle: React.FC<ToggleProps> = props => {
  return (
    <div
      className={getClassNames(styles.handle, {
        [styles.checked]: props.checked,
        [styles.disabled]: props.disabled
      })}
    />
  );
};

const Label: React.FC<ToggleProps> = props => {
  return (props.checked && props.labelOn) ||
    (!props.checked && props.labelOff) ? (
    <span className={styles.text}>
      {props.checked ? props.labelOn : props.labelOff}
    </span>
  ) : null;
};

export const Toggle: React.FC<ToggleProps> = props => {
  return (
    <label
      className={getClassNames(styles.root, {
        [styles.checked]: props.checked,
        [styles.disabled]: props.disabled
      })}
    >
      <HiddenInput {...props} />
      <Groove {...props}>
        <Handle {...props} />
      </Groove>
      <Label {...props} />
    </label>
  );
};
