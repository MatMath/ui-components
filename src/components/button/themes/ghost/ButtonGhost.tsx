import * as React from 'react';
import { css } from 'styled-components';
import { dashGreen00, dashGreen01, dashGreen05, transparent } from '@colors';
import {
  ThemeColors,
  ThemeWrapperProps
} from '@components/button/themes/types';
import { ThemeWrapper } from '@components/button/themes/ThemeWrapper';

const primaryColors: ThemeColors = {
  default: {
    backgroundColor: {
      idle: transparent,
      hover: transparent,
      active: dashGreen05
    },
    textColor: dashGreen00,
    borderColor: {
      idle: transparent,
      hover: dashGreen05,
      active: dashGreen05
    }
  },
  dark: {
    backgroundColor: {
      idle: transparent,
      hover: transparent,
      active: dashGreen01
    },
    borderColor: {
      idle: transparent,
      hover: dashGreen01,
      active: dashGreen01
    }
  }
};

/**
 * Ghost button special styling
 */
const ghostStyle = css`
  min-width: 32px;
  svg {
    margin: -8px -16px;
  }
`;

const ButtonGhost = (props: ThemeWrapperProps) => (
  <ThemeWrapper customStyle={ghostStyle} colors={primaryColors} {...props} />
);

export default ButtonGhost;
