import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const { container } = render(<Button />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Style properties', () => {
    it('should render small size', () => {
      const { container } = render(<Button size='small' />);

      expect(container).toMatchSnapshot();
    });

    it('should render medium size', () => {
      const { container } = render(<Button size='medium' />);

      expect(container).toMatchSnapshot();
    });

    it('should render large size', () => {
      const { container } = render(<Button size='large' />);

      expect(container).toMatchSnapshot();
    });

    it('should render primary nature', () => {
      const { container } = render(<Button nature='primary' />);

      expect(container).toMatchSnapshot();
    });

    it('should render secondary nature', () => {
      const { container } = render(<Button nature='secondary' />);

      expect(container).toMatchSnapshot();
    });

    it('should render danger nature', () => {
      const { container } = render(<Button nature='danger' />);

      expect(container).toMatchSnapshot();
    });

    it('should render danger nature and small size', () => {
      const { container } = render(<Button nature='danger' size='small' />);

      expect(container).toMatchSnapshot();
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
      const { container } = render(<Button>{text}</Button>);

      expect(container).toMatchSnapshot();
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    it('should render the specified children', () => {
      const text = 'Ok';
      const { container } = render(
        <Button>
          <label>{text}</label>
        </Button>
      );

      expect(container).toMatchSnapshot();
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should execute action on click', () => {
      render(<Button onClick={() => window.alert('hello')} />);

      window.alert = jest.fn();
      userEvent.click(screen.getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when it is disabled', () => {
      render(<Button onClick={() => window.alert('hello')} disabled />);

      window.alert = jest.fn();
      userEvent.click(screen.getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });
});
