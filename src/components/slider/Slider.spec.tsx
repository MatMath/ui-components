import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Slider } from './Slider';

describe('<Slider />', () => {
  it('should render default', () => {
    const label = 'Slider';
    const value = 50;
    const { asFragment } = render(<Slider value={value} label={label} />);

    expect(asFragment()).toMatchSnapshot();

    expect(screen.queryByText(label)).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
    expect(screen.queryByText('100')).toBeInTheDocument();
  });

  it('should render with a tooltip on press', () => {
    const value = 30;
    const label = 'Slider';
    render(<Slider value={value} label={label} />);
    const slider = screen.getByLabelText(label);
    fireEvent.mouseDown(slider);
    expect(screen.queryByText(value.toString())).toBeInTheDocument();
  });

  it('should not render with a tooltip on press when tooltip is set to false', () => {
    const value = 30;
    const label = 'Slider';
    render(<Slider value={value} label={label} tooltip={false} />);
    const slider = screen.getByLabelText(label);
    fireEvent.mouseDown(slider);
    expect(screen.queryByText(value.toString())).not.toBeInTheDocument();
  });
});
