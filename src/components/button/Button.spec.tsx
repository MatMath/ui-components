import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const { asFragment } = render(<Button />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Style properties', () => {
    it('should render small size', () => {
      const { asFragment } = render(<Button size='small' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render medium size', () => {
      const { asFragment } = render(<Button size='medium' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render large size', () => {
      const { asFragment } = render(<Button size='large' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render primary nature', () => {
      const { asFragment } = render(<Button nature='primary' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render secondary nature', () => {
      const { asFragment } = render(<Button nature='secondary' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render danger nature', () => {
      const { asFragment } = render(<Button nature='danger' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render danger nature and small size', () => {
      const { asFragment } = render(<Button nature='danger' size='small' />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render with the custom class name', () => {
      const customClassName = 'customClassName';
      const { container } = render(<Button className={customClassName} />);

      expect(container.firstChild).toHaveClass(customClassName);
    });
  });

  describe('Children render', () => {
    it('should render the specified text', () => {
      const text = 'Hello There';
      const { asFragment, queryByText } = render(<Button>{text}</Button>);

      expect(asFragment()).toMatchSnapshot();
      expect(queryByText(text)).toBeInTheDocument();
    });

    it('should render the specified children', () => {
      const text = 'Ok';
      const { asFragment, queryByText } = render(
        <Button>
          <label>{text}</label>
        </Button>
      );

      expect(asFragment()).toMatchSnapshot();
      expect(queryByText(text)).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should execute action on click', () => {
      const { getByRole } = render(
        <Button onClick={() => window.alert('hello')} />
      );

      window.alert = jest.fn();
      userEvent.click(getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when it is disabled', () => {
      const { getByRole } = render(
        <Button onClick={() => window.alert('hello')} disabled />
      );

      window.alert = jest.fn();
      userEvent.click(getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });
});
