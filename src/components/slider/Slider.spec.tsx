import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Slider } from './Slider';

describe('<Slider />', () => {
  it('should render default', () => {
    const label = 'Slider';
    const value = 50;
    const { asFragment, queryByText } = render(
      <Slider value={value} label={label} />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText(`${label} (${value})`)).not.toBe(null);
    expect(queryByText('0')).not.toBe(null);
    expect(queryByText('100')).not.toBe(null);
  });

  it('should render with a tooltip on press', () => {
    const value = 30;
    const label = 'Slider';
    const { getByLabelText, queryByText } = render(
      <Slider value={value} label={label} />
    );
    const slider = getByLabelText(`${label} (${value})`);
    fireEvent.mouseDown(slider);
    expect(queryByText(value.toString())).not.toBe(null);
  });

  it('should not render with a tooltip on press when tooltip is set to false', () => {
    const value = 30;
    const label = 'Slider';
    const { getByLabelText, queryByText } = render(
      <Slider value={value} label={label} tooltip={false} />
    );
    const slider = getByLabelText(`${label} (${value})`);
    fireEvent.mouseDown(slider);
    expect(queryByText(value.toString())).toBe(null);
  });
});
