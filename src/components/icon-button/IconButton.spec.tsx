import * as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { IconButton } from './IconButton';
import { CopyPasswordIcon } from '@atoms/icons';

describe('<IconButton>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const button = mount(<IconButton icon={<CopyPasswordIcon />} />);

      expect(button).toMatchSnapshot();
    });
  });

  describe('Style properties', () => {
    it('should render small size', () => {
      const button = mount(
        <IconButton icon={<CopyPasswordIcon />} size='small' />
      );

      expect(button).toMatchSnapshot();
    });

    it('should render medium size', () => {
      const button = mount(
        <IconButton icon={<CopyPasswordIcon />} size='medium' />
      );

      expect(button).toMatchSnapshot();
    });

    it('should render large size', () => {
      const button = mount(
        <IconButton icon={<CopyPasswordIcon />} size='large' />
      );

      expect(button).toMatchSnapshot();
    });
  });

  describe('Icon render', () => {
    it('should render the specified icon', () => {
      const button = mount(<IconButton icon={<CopyPasswordIcon />} />);

      expect(button.find('svg')).toBeTruthy();
    });
  });

  describe('Interaction', () => {
    it('should execute action on click', () => {
      const button = mount(
        <IconButton
          icon={<CopyPasswordIcon />}
          onClick={() => window.alert('hello')}
        />
      );

      window.alert = jest.fn();
      button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when the button is disabled', () => {
      const button = mount(
        <IconButton
          icon={<CopyPasswordIcon />}
          onClick={() => window.alert('hello')}
          disabled
        />
      );

      window.alert = jest.fn();
      button.simulate('click');
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });
});
