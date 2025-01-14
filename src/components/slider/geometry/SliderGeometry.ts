export const evaluateRangeValuePercentage = (
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
  valuePercentage: number;
}

export const evaluateSliderTooltipLeftPosition = ({
  thumbWidth,
  sliderWidth,
  tooltipWidth,
  valuePercentage
}: SliderTooltipPositionProps) => {
  const halfThumbWidth = thumbWidth / 2;
  const halfTooltipWidth = tooltipWidth / 2;
  const centerPosition = sliderWidth / 2;

  const valuePxPosition = valuePercentage * sliderWidth;
  const distFromCenter = valuePxPosition - centerPosition;
  const percentDistFromCenter = distFromCenter / centerPosition;

  // not clear why offset needs an extra 2 pixel to be centered with thumb
  const offset = percentDistFromCenter * halfThumbWidth - 2;

  return valuePxPosition - halfTooltipWidth - offset;
};

export const parseIntFromValueInPixel = (valueInPixel: string) => {
  return parseInt(valueInPixel.replace('px', ''));
};

export const parseIntFromDOMPropertyValueInPixel = (
  element: HTMLElement,
  propertyName: string
) => {
  return parseIntFromValueInPixel(
    getComputedStyle(element).getPropertyValue(propertyName)
  );
};
