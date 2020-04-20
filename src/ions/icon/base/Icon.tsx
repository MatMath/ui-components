import styled from 'styled-components';
import { Props as IconProps } from '@ions/icon/types';
import { dashGreen00 } from '@colors';

export type ColorProps = 'color' | 'hoverColor' | 'activeColor';
interface Props extends Omit<IconProps, 'title' | 'children'> {
  svgAnimated?: boolean;
}

const getWidth = ({ width, size }: Props) => `${size || width || 20}px`;
const getHeight = ({ height, size }: Props) => `${size || height || 20}px`;
const getColor = (propName: ColorProps = 'color') => (props: Props): string =>
  props.svgAnimated ? 'none' : props[propName] || props['color'] || dashGreen00;
const getTransform = ({ rotate }: Props) =>
  rotate ? 'rotate(' + rotate + 'deg)' : 'none';

const getTransition = ({ svgAnimated, iconAnimated }: Props) => {
  let transition = svgAnimated ? 'none' : 'all 0.1s ease-in';

  if (typeof iconAnimated !== 'undefined') {
    //check if the user actually passed a iconAniamted prop
    transition = iconAnimated ? 'all 0.1s ease-in' : 'none';
  }

  return transition;
};

export const Icon = styled.svg.attrs<Props>(({ viewBox }: Props) => ({
  viewBox: viewBox || '0 0 20 20',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg'
}))`
  display: flex;
  width: ${getWidth};
  height: ${getHeight};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'inherit')};
  outline: none;
  border-radius: 4px;
  fill: ${getColor()};
  transform: ${getTransform};
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)};
  transition: ${getTransition}
  &:hover {
    fill: ${getColor('hoverColor')};
  }
  &:active {
    fill: ${getColor('activeColor')};
  }
`;
