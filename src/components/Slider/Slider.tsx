import * as React from 'react';
import styles from './Slider.module.scss';
import { getClassNames } from '@utility/cssUtils';

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
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const range = max - min;
    const valuePercentage = ((value - min) / range) * 100;
    slider.style.setProperty('--fill-percentage-value', `${valuePercentage}%`);
  }, [sliderRef, value, max, min]);

  const handleChangeDone = () => {
    onChangeComplete && onChangeComplete(value);
  };

  React.useEffect(() => {
    const slider = sliderRef.current;

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
  }, [sliderRef, value, handleChangeDone]);

  React.useEffect(() => {
    const { current: slider } = sliderRef;
    const { current: tooltipElement } = tooltipRef;
    if (!slider || !tooltipElement) {
      return;
    }

    const halfThumbWidth =
      parseInt(
        getComputedStyle(slider)
          .getPropertyValue('--thumb-size')
          .replace('px', '')
      ) / 2;

    const halfTooltipWidth = tooltipElement.clientWidth / 2 - 2;

    const centerPosition = slider.clientWidth / 2;

    const percentOfRange = (value - min) / (max - min);
    const valuePxPosition = percentOfRange * slider.clientWidth;
    const distFromCenter = valuePxPosition - centerPosition;
    const percentDistFromCenter = distFromCenter / centerPosition;

    const offset = percentDistFromCenter * halfThumbWidth;

    const tooltipPosition = valuePxPosition - halfTooltipWidth - offset;

    tooltipElement.style.left = `${tooltipPosition}px`;
  }, [value, sliderRef, tooltipRef, max, min]);

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
        onChange={event => {
          const floatValue = parseFloat(event.currentTarget.value);
          if (!isNaN(floatValue) && onChange) {
            onChange(floatValue);
          }
        }}
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
