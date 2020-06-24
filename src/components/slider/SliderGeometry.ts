export const evaluateSliderValuePercentage = (
  value: number,
  min: number,
  max: number
) => {
  const range = max - min;
  if (range === 0) {
    return NaN;
  }
  return (value - min) / range;
};

interface SliderTooltipPositionProps {
  thumbWidth: number;
  sliderWidth: number;
  tooltipWidth: number;
  value: number;
  min: number;
  max: number;
}

export const evaluateSliderTooltipLeftPosition = ({
  thumbWidth,
  sliderWidth,
  tooltipWidth,
  value,
  min,
  max
}: SliderTooltipPositionProps) => {
  const halfThumbWidth = thumbWidth / 2;
  const halfTooltipWidth = tooltipWidth / 2 - 2;
  const centerPosition = sliderWidth / 2;

  const percentOfRange = evaluateSliderValuePercentage(value, min, max);
  const valuePxPosition = percentOfRange * sliderWidth;
  const distFromCenter = valuePxPosition - centerPosition;
  const percentDistFromCenter = distFromCenter / centerPosition;

  const offset = percentDistFromCenter * halfThumbWidth;

  return valuePxPosition - halfTooltipWidth - offset;
};

export const parseIntFromDOMPropertyValueInPixel = (
  element: HTMLElement,
  propertyName: string
) => {
  return parseInt(
    getComputedStyle(element)
      .getPropertyValue(propertyName)
      .replace('px', '')
  );
};
