import * as React from 'react';

import { Props, Tooltip } from '@components/tooltip/Tooltip';

import styles from './IconsWrapper.module.scss';

const getName = (component: React.ReactElement) => {
  const type = (component as React.ReactElement).type as React.ComponentClass;
  return type.displayName || type.name;
};

interface IconsWrapperProps {
  children: React.ReactElement[];
}

const defaultTooltip: Props = {
  title: 'Click to copy',
  type: 'info',
  placement: 'right'
};

const successTooltip: Props = {
  title: 'Copied !',
  type: 'success',
  placement: 'right'
};

interface IconWrapperProps {
  child: React.ReactElement;
}

const IconWrapper = ({ child }: IconWrapperProps) => {
  const [tooltipState, setTooltipState] = React.useState<Props>(defaultTooltip);
  const name = getName(child);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(`<${name} />`);
    setTooltipState(successTooltip);
  }, [name]);

  const resetTooltip = React.useCallback(() => {
    setTooltipState(defaultTooltip);
  }, []);

  return (
    <div
      key={name}
      className={styles.wrapperItem}
      onClick={copyToClipboard}
      onMouseLeave={resetTooltip}
    >
      <Tooltip {...tooltipState}>
        <div style={{ display: 'flex' }}>
          <div className={styles.item}>{child}</div>
          <p className={styles.item}>{name}</p>
        </div>
      </Tooltip>
    </div>
  );
};

// This is a utility to show components and their name side by side in the component library
export const IconsWrapper = ({ children }: IconsWrapperProps) => (
  <div className={styles.wrapper}>
    {React.Children.map(children, child => (
      <IconWrapper child={child} />
    ))}
  </div>
);
