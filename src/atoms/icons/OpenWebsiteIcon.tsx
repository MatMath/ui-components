import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const OpenWebsiteIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M12 6H6V18H18V12H19.9999L20 20H4V4H12V6Z' />
      <path d='M14 3H21V10H19V6.39133L13.8036 11.5878L12.3894 10.1735L17.5629 5H14V3Z' />
    </React.Fragment>
  </SvgWrapper>
);
