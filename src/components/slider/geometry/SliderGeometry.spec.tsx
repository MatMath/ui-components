import {
  evaluateRangeValuePercentage,
  evaluateSliderTooltipLeftPosition,
  parseIntFromValueInPixel
} from './SliderGeometry';
import fc from 'fast-check';

describe('SliderGeometry', () => {
  it('should parse int from a pixel value string', () => {
    fc.assert(
      fc.property(fc.integer(), value => {
        const pixelValue = `${value}px`;
        const parsedValue = parseIntFromValueInPixel(pixelValue);
        return parsedValue === value;
      })
    );
  });

  it('should evaluate value percentage', () => {
    fc.assert(
      fc.property(
        // center
        fc.integer(-100, 100),
        // range
        fc.integer(0, 5000),
        // value percentage
        fc.integer(0, 100),
        (center, range, valuePercentage) => {
          const min = center - range / 2;
          const max = center + range / 2;
          const value = (valuePercentage / 100) * range - min;
          const evaluatedPercentage = evaluateRangeValuePercentage(
            value,
            min,
            max
          );
          if (range === 0) {
            return isNaN(evaluatedPercentage);
          }
          return (value - min) / range === evaluatedPercentage;
        }
      )
    );
  });

  it('should evaluate tooltip left position based on value', () => {
    const thumbWidth = 30;
    const tooltipWidth = 50;
    const sliderWidth = 2000;
    let lastEvaluatedValue = evaluateSliderTooltipLeftPosition({
      thumbWidth,
      sliderWidth,
      tooltipWidth,
      valuePercentage: 0
    });
    for (
      let valuePercentage = 1;
      valuePercentage <= 100;
      valuePercentage += 10
    ) {
      const evaluatedTooltipPosition = evaluateSliderTooltipLeftPosition({
        thumbWidth,
        sliderWidth,
        tooltipWidth,
        valuePercentage
      });
      expect(evaluatedTooltipPosition).toBeGreaterThan(lastEvaluatedValue);
    }
  });
});
