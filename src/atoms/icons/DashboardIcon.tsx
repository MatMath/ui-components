import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const DashboardIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.0013 4H2.99878V5.5H17.0013V4ZM1.49878 2.5V7H18.5013V2.5H1.49878Z'
      />
      <path d='M15.2698 10.96L16.0416 12.24L11.3114 15.08L7.37199 13.42L4.69142 15.48L3.91461 14.19L7.15054 11.7L11.192 13.4L15.2698 10.96Z' />
      <path d='M18.5013 17.5H17.0013L17.0013 10.5H2.99881L3.00125 16H14.3013L15.2013 17.5H1.50125V9H18.5013V17.5Z' />
    </React.Fragment>
  </SvgWrapper>
);
