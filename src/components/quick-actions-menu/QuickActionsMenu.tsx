import * as React from 'react';
import styled from 'styled-components';
import { DropdownMenu } from '@components/dropdown/DropdownMenu';
import { Tooltip } from '@components/tooltip/Tooltip';
import { IconButton } from '@components/icon-button/IconButton';

interface Props {
  isOpen: boolean;
  icon: JSX.Element;
  onClick: React.MouseEventHandler;
  tooltipTitle: string;
  maxMenuHeight?: number;
  containerRef?: React.RefObject<HTMLElement>;
  isDisabled?: boolean;
  menuClassName?: string;
}

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

export const QuickActionsMenu: React.FC<Props> = props => {
  const controllerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <div ref={controllerRef}>
        <Tooltip
          placement='left'
          title={props.tooltipTitle}
          options={{ tooltipMaxWidth: 172 }}
        >
          <IconButton
            icon={props.icon}
            onClick={props.onClick}
            disabled={props.isDisabled}
          />
        </Tooltip>
      </div>
      <DropdownMenu
        dockingSide='right'
        menuMaxHeight={props.maxMenuHeight}
        isOpen={props.isOpen}
        controllerRef={controllerRef}
        containerRef={props.containerRef}
        menuClassName={props.menuClassName}
      >
        {props.children}
      </DropdownMenu>
    </Wrapper>
  );
};
