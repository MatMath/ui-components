import * as React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { Alert } from '@components/alert/Alert';
import { AlertSeverity, AlertSize } from '@components/alert/types';

describe('<Alert />', () => {
  it('should create an alert with success, medium, and with icon closed if children is defined', () => {
    const children = 'Success test';
    const { container, queryByText } = render(<Alert>{children}</Alert>);
    expect(queryByText(children)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should not show icon if showIcon is false', () => {
    const children = 'Success test';
    const { container, queryByText } = render(
      <Alert showIcon={false}>{children}</Alert>
    );
    expect(queryByText(children)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should not show alert if children is empty', () => {
    const children = '';
    const { container } = render(<Alert>{children}</Alert>);
    expect(container).toMatchSnapshot();
  });

  it('should be able to create an error alert', () => {
    const children = 'Error test';
    const { container, queryByText } = render(
      <Alert severity={AlertSeverity.ERROR}>{children}</Alert>
    );
    expect(queryByText(children)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should create a small alert', () => {
    const children = 'Success test';
    const { container, queryByText } = render(
      <Alert size={AlertSize.SMALL}>{children}</Alert>
    );
    expect(queryByText(children)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should not show close button if showCloseIcon is false', () => {
    const children = 'Success test';
    const { container, queryByText } = render(
      <Alert showCloseIcon={false}>{children}</Alert>
    );
    expect(queryByText(children)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should close alert when close button is pressed', () => {
    const children = 'Success test';
    const { container, queryByText } = render(
      <Alert showCloseIcon={true}>{children}</Alert>
    );
    expect(queryByText(children)).toBeInTheDocument();
    fireEvent.click(getByRole(container, 'button'));
    expect(queryByText(children)).not.toBeInTheDocument();
  });
});
