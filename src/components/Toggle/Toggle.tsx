import React, { FC, useState } from 'react';
import { getClassNames } from '@utility/cssUtils';
import './Toggle.css';

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelOff?: string;
  labelOn?: string;
}

const HiddenInput = (props: ToggleProps) => {
  return <input className='hidden-input' type='checkbox' {...props} />;
};

const Handle = (props: ToggleProps) => {
  return (
    <div
      className={getClassNames('handle', {
        checked: props.checked,
        disabled: props.disabled
      })}
      {...props}
    />
  );
};

const Groove: FC<ToggleProps> = props => {
  return (
    <div
      className={getClassNames('groove', {
        checked: props.checked,
        disabled: props.disabled
      })}
    >
      {props.children}
    </div>
  );
};

export const Toggle = (props: ToggleProps) => {
  return (
    <label
      className={getClassNames('Toggle', {
        checked: props.checked,
        disabled: props.disabled
      })}
    >
      <HiddenInput {...props} onChange={props.onChange} />
      <Groove {...props}>
        <Handle {...props} />
      </Groove>
      <span className='text'>
        {props.checked ? props.labelOn : props.labelOff}
      </span>
    </label>
  );
};

Toggle.defaultProps = {
  labelOn: 'On',
  labelOff: 'Off'
};
