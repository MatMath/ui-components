import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const BackIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.0617 13.0316L12.8377 19.5059L11.4194 21L2 12L11.4194 3L12.8377 4.49407L6.0617 10.9684H22V13.0316H6.0617Z'
      />
    </React.Fragment>
  </SvgWrapper>
);
