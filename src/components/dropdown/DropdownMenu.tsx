import * as React from 'react';
import styled from 'styled-components';
import { DropdownCard } from './subcomponents/DropdownCard';
import { DockingSide, Placement } from './types';
import {
  getControllerAndMenuDimensions,
  getDropdownPosition,
  isDropdownOutOfContainer
} from './helpers';
import {
  getContainerBoundaries,
  getElementPlacement
} from '@utility/positionCompute';

export interface DropdownMenuProps {
  isOpen: boolean;
  controllerRef: React.RefObject<HTMLElement>;
  /**
   * using menuMaxHeight will add max-height and overflow-y: scroll css properties
   */
  menuMaxHeight?: number;
  dockingSide?: DockingSide;
  placement?: Placement;
  containerRef?: React.RefObject<HTMLElement>;
  menuClassName?: string;
}

export interface MenuWrapperProps {
  placement: Placement;
  dockingSide: DockingSide;
  isReadyForDisplay: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  opacity: ${props => (props.isReadyForDisplay ? 1 : 0)};
  ${getDropdownPosition}
  max-width: 318px;
`;

const DEFAULT_PLACEMENT = 'bottom';
const POSSIBLE_PLACEMENTS: Placement[] = ['top', 'bottom'];

export const DropdownMenu = ({
  isOpen,
  controllerRef,
  menuMaxHeight,
  dockingSide,
  placement: dropdownPlacement,
  containerRef,
  menuClassName,
  children
}: React.PropsWithChildren<DropdownMenuProps>) => {
  const [placement, setPlacement] = React.useState<Placement | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const prevIsOpen = React.useRef(false);

  React.useEffect(() => {
    if (isOpen === prevIsOpen.current) {
      return;
    }
    prevIsOpen.current = isOpen;
    setPlacement(null);

    if (!menuRef.current || !controllerRef.current) {
      return;
    }
    const elementDimensions = getControllerAndMenuDimensions({
      menuRef,
      controllerRef
    });

    const containerElement = (containerRef && containerRef.current) || window;
    const containerDimensions = getContainerBoundaries(containerElement);

    try {
      const newPlacement = getElementPlacement({
        isElementOutOfContainerMethod: isDropdownOutOfContainer,
        placement: dropdownPlacement || DEFAULT_PLACEMENT,
        possibilities: POSSIBLE_PLACEMENTS,
        elementDimensions,
        containerDimensions
      });
      setPlacement(newPlacement);
    } catch (e) {
      console.error('Error while computing DropdownMenu position', e);
      setPlacement(DEFAULT_PLACEMENT);
    }
  }, [containerRef, controllerRef, dropdownPlacement, isOpen]);

  return (
    <>
      {isOpen && (
        <MenuWrapper
          placement={placement || DEFAULT_PLACEMENT}
          ref={menuRef}
          dockingSide={dockingSide || 'left'}
          isReadyForDisplay={placement !== null}
        >
          <DropdownCard maxHeight={menuMaxHeight} className={menuClassName}>
            {children}
          </DropdownCard>
        </MenuWrapper>
      )}
    </>
  );
};
