import * as React from 'react';
import styles from './Slider.module.scss';
import { getClassNames } from '@utility/cssUtils';
import {
  evaluateRangeValuePercentage,
  evaluateSliderTooltipLeftPosition,
  parseIntFromDOMPropertyValueInPixel
} from './geometry/SliderGeometry';

export interface SliderProps {
  label: string;
  value: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  onChange?(value: number): void;
  onChangeComplete?(value: number): void;
  step?: number;
  tooltip?: boolean;
  className?: string;
}

export const Slider = ({
  label,
  value,
  className = '',
  min = 0,
  max = 100,
  step = 1,
  tooltip = true,
  onChange,
  onChangeComplete,
  ...otherProps
}: SliderProps) => {
  const sliderRef = React.useRef<HTMLInputElement>(null);
  const tooltipRef = React.useRef<HTMLOutputElement>(null);

  React.useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    slider.style.setProperty(
      '--fill-percentage-value',
      `${evaluateRangeValuePercentage(value, min, max) * 100}%`
    );
  }, [sliderRef, value, max, min]);

  const handleChangeDone = React.useCallback(() => {
    onChangeComplete ? onChangeComplete(value) : null;
  }, [value, onChangeComplete]);

  React.useEffect(() => {
    const { current: slider } = sliderRef;

    if (!slider) {
      return;
    }

    // Add event listener
    slider.addEventListener('mouseup', handleChangeDone);
    slider.addEventListener('keyup', handleChangeDone);

    // Remove event listener on cleanup
    return () => {
      slider.removeEventListener('mouseup', handleChangeDone);
      slider.removeEventListener('keyup', handleChangeDone);
    };
  }, [sliderRef, handleChangeDone]);

  React.useEffect(() => {
    const { current: slider } = sliderRef;
    const { current: tooltipElement } = tooltipRef;
    if (!slider || !tooltipElement) {
      return;
    }

    tooltipElement.style.left = `${evaluateSliderTooltipLeftPosition({
      sliderWidth: slider.clientWidth,
      tooltipWidth: tooltipElement.clientWidth,
      thumbWidth: parseIntFromDOMPropertyValueInPixel(slider, '--thumb-size'),
      valuePercentage: evaluateRangeValuePercentage(value, min, max)
    })}px`;
  }, [value, sliderRef, tooltipRef, max, min]);

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const floatValue = parseFloat(event.target.value);
      if (!isNaN(floatValue) && onChange) {
        onChange(floatValue);
      }
    },
    [onChange]
  );

  return (
    <div className={getClassNames(styles.sliderContainer, className)}>
      <label htmlFor={`slider-${label}`} className={styles.sliderLabel}>
        {label} ({value})
      </label>
      <input
        {...otherProps}
        name={`slider-${label}`}
        type='range'
        ref={sliderRef}
        min={min}
        value={value}
        max={max}
        step={step}
        className={styles.sliderRange}
        onChange={handleOnChange}
      />
      {tooltip ? (
        <output
          className={styles.tooltip}
          ref={tooltipRef}
          htmlFor={`slider-${label}`}
        >
          <span className={styles.tooltipContent}>{value}</span>
        </output>
      ) : null}
      <div className={styles.sliderMin}>{min}</div>
      <div className={styles.sliderMax}>{max}</div>
    </div>
  );
};
