import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownCard } from './subcomponents/DropdownCard';
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu';
import { DropdownElement } from './DropdownElement';

describe('<DropdownMenu>', () => {
  const getDropdownMenuWrapper = (props: DropdownMenuProps) => {
    const controllerRef = props.controllerRef as React.RefObject<
      HTMLDivElement
    >;
    return mount(
      <div>
        <div ref={controllerRef}>Dropdown Menu controller</div>
        <DropdownMenu
          controllerRef={controllerRef}
          isOpen={props.isOpen}
          menuMaxHeight={props.menuMaxHeight}
        >
          <DropdownElement onClick={() => {}}>Element 1</DropdownElement>
          <DropdownElement onClick={() => {}}>Element 2</DropdownElement>
        </DropdownMenu>
      </div>
    );
  };
  describe('Global render', () => {
    const controllerRef = React.createRef<HTMLDivElement>();
    it('should have scroll enabled when using max height', () => {
      const menuMaxHeight = 100;
      const dropdownMenuWrapper = getDropdownMenuWrapper({
        isOpen: true,
        menuMaxHeight: menuMaxHeight,
        controllerRef: controllerRef
      });
      expect(
        window
          .getComputedStyle(dropdownMenuWrapper.find(DropdownCard).getDOMNode())
          .getPropertyValue('overflow-y')
      ).toEqual('scroll');

      expect(dropdownMenuWrapper).toMatchSnapshot();
    });

    it('should not have scroll enabled when not using max height', () => {
      const dropdownMenuWrapper = getDropdownMenuWrapper({
        isOpen: true,
        controllerRef: controllerRef
      });
      expect(
        window
          .getComputedStyle(dropdownMenuWrapper.find(DropdownCard).getDOMNode())
          .getPropertyValue('overflow-y')
      ).not.toEqual('scroll');

      expect(dropdownMenuWrapper).toMatchSnapshot();
    });
  });
});
