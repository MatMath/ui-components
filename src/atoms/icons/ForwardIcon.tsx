import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const ForwardIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.1395 9.30282L9.44146 3.98596L10.4981 3L18 10L10.4981 17L9.44146 16.014L15.1395 10.6972L2 10.6972L2 9.30282L15.1395 9.30282Z'
      />
    </React.Fragment>
  </SvgWrapper>
);
