import * as React from 'react';
import { SvgWrapper } from '@ions/icon/wrapper/SvgWrapper';
import { IconProps } from '@ions/icon/types';

export const AddIcon: React.FC<IconProps> = (props: IconProps) => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M9.25 2H10.75V18H9.25V2Z' />
      <path d='M2 11V9.5H18V11H2Z' />
    </React.Fragment>
  </SvgWrapper>
);
