import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const WindowsIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <g fill='#0178D6'>
        <path d='M0.0632768362 14.6027119 0.0632768362 24.0103955 11.4325424 25.6033898 11.4325424 14.6501695z' />
        <path d='M11.4325424 2.42824859 0.0632768362 4.10824859 0.0632768362 13.4099435 11.4325424 13.3624859z' />
        <path d='M27.8623729 13.2944633 27.8623729 0 12.7629379 2.2320904 12.7629379 13.3577401z' />
        <path d='M12.7629379 25.7900565 27.8623729 27.9066667 27.8623729 14.7181921 12.7629379 14.6564972z' />
      </g>
    </React.Fragment>
  </SvgWrapper>
);
