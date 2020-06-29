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
  id?: string;
}

export const Slider = ({
  label,
  value,
  className = '',
  min = 0,
  max = 100,
  step = 1,
  tooltip = true,
  id = 'slider',
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
    if (onChangeComplete) {
      return onChangeComplete(value);
    }
    return null;
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
        return onChange(floatValue);
      }
      return null;
    },
    [onChange]
  );

  return (
    <div className={getClassNames(styles.sliderContainer, className)}>
      <label htmlFor={id} className={styles.sliderLabel}>
        {label}
      </label>
      <input
        {...otherProps}
        id={id}
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
        <output className={styles.tooltip} ref={tooltipRef} htmlFor={id}>
          <span className={styles.tooltipContent}>{value}</span>
        </output>
      ) : null}
      <div className={styles.sliderMin}>{min}</div>
      <div className={styles.sliderMax}>{max}</div>
    </div>
  );
};
