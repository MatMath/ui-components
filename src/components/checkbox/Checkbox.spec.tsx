import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('<Checkbox>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const { container } = render(<Checkbox />);
      expect(container).toMatchSnapshot();
      expect(screen.getByRole('checkbox')).not.toHaveAttribute('checked');
    });

    it('should render disabled', () => {
      const { container } = render(<Checkbox disabled />);
      expect(container).toMatchSnapshot();
    });

    it('should render checked', () => {
      const { container } = render(<Checkbox checked />);
      expect(container).toMatchSnapshot();
      expect(screen.getByRole('checkbox')).toHaveAttribute('checked');
    });

    it('should be checked on click', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      userEvent.click(screen.getByRole('checkbox'));
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should render unchecked and with a label', () => {
      const label = 'Label';
      render(<Checkbox label={label} />);
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });
});
