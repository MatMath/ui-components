import * as React from 'react';
import BaseButton from '@components/button/base/BaseButton';
import {
  ThemeColors,
  ThemeWrapperProps
} from '@components/button/themes/types';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components';

interface Props extends ThemeWrapperProps {
  colors: ThemeColors;
  customStyle?: FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>;
}

export const ThemeWrapper = ({
  colors,
  theme = 'default',
  ...props
}: Props) => {
  const buttonTheme =
    theme === 'dark' && colors.dark ? colors.dark : colors.default;

  return <BaseButton theme={buttonTheme} {...props} />;
};
