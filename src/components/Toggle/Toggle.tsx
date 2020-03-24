import React, { FC, useState } from 'react';
import { getClassNames } from '@utility/cssUtils';
import './Toggle.css';

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelOff?: string;
  labelOn?: string;
}

interface ToggleChildProps extends ToggleProps {
  isHover: boolean;
}

const HiddenInput = (props: ToggleProps) => {
  return <input type='checkbox' {...props} />;
};

const Handle = (props: ToggleChildProps) => {
  return (
    <span
      className={getClassNames('handle', {
        unchecked: props.checked,
        hover: props.isHover,
        disabled: props.disabled
      })}
      {...props}
    />
  );
};

const Groove: FC<ToggleChildProps> = props => {
  return (
    <label
      className={getClassNames('groove', {
        checked: props.checked,
        hover: props.isHover,
        disabled: props.disabled
      })}
    >
      {props.children}
    </label>
  );
};

const Label = (props: ToggleChildProps) => {
  return (
    <label
      className={getClassNames('label', {
        disabled: props.disabled
      })}
    >
      {props.labelOn
        ? props.checked
          ? props.labelOn
          : props.labelOff
        : props.labelOff}
    </label>
  );
};

export const Toggle = (props: ToggleProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <label
      className='root'
      onMouseLeave={() => {
        if (!props.disabled) {
          setIsHover(false);
        }
      }}
      onMouseEnter={() => {
        if (!props.disabled) {
          setIsHover(true);
        }
      }}
    >
      <HiddenInput {...props} onChange={props.onChange} />
      <Groove {...props} isHover={isHover}>
        <Handle {...props} isHover={isHover} />
      </Groove>
      <Label {...props} isHover={isHover} />
    </label>
  );
};
