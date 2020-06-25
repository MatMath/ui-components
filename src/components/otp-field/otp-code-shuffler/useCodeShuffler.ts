import * as React from 'react';

import {
  generateRandomCode,
  replaceNumberInCode
} from '@components/otp-field/otp-code-shuffler/helpers';

const INTERVAL_TIME = 10;

interface UseOTPCodeShuffler {
  shuffledCode: string;
}

interface UseOTPCodeShufflerParams {
  shouldShuffle: boolean;
}

export function useOTPCodeShuffler({
  shouldShuffle
}: UseOTPCodeShufflerParams): UseOTPCodeShuffler {
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const [shuffledCode, setShuffledCode] = React.useState(generateRandomCode());

  const shufflePassword = React.useCallback(() => {
    let randomPassword = replaceNumberInCode(shuffledCode);
    while (randomPassword === shuffledCode) {
      randomPassword = replaceNumberInCode(randomPassword);
    }
    setShuffledCode(randomPassword);
  }, [shuffledCode]);

  React.useEffect(() => {
    if (shouldShuffle) {
      intervalRef.current = setTimeout(shufflePassword, INTERVAL_TIME);
    } else {
      intervalRef.current && clearTimeout(intervalRef.current);
    }

    return () => {
      intervalRef.current && clearTimeout(intervalRef.current);
    };
  }, [shufflePassword, shouldShuffle]);

  return { shuffledCode };
}
