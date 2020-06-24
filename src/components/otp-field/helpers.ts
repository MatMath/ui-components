export function formatCode(code: string): string {
  return [code.slice(0, 3), ' ', code.slice(3)].join('');
}

const ANIMATION_TIME = 1000; // in ms

/**
 * Compute the circle perimiter that needs to be filled according to the time left
 * period. Normally, this would simply be (timeLeft / validityPeriod) * perimiter.
 * However, since the SVG animation takes 1 second, we need to adapt the formula so
 * that when the timeLeft reaches 0, the filled perimiter is also 0.
 */
export function computeFilledPerimiter(
  timeLeft: number,
  validityPeriod: number,
  perimiter: number
): number {
  const timeFraction = timeLeft / validityPeriod;

  const adaptedTimeFraction =
    timeFraction - (ANIMATION_TIME / validityPeriod) * (1 - timeFraction);

  const circleDashArrayValue = adaptedTimeFraction * perimiter;

  return circleDashArrayValue > 0 ? circleDashArrayValue : 0;
}
