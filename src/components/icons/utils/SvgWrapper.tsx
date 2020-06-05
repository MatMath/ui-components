import * as CSS from 'csstype';
import * as React from 'react';

import { Props } from '@components/icons/types';
import { dashGreen00 } from '@colors';
import { getClassNames } from '@utility/cssUtils';
import styles from './SvgWrapper.module.scss';

type ColorProps = 'color' | 'hoverColor' | 'activeColor';

const DEFAULT_SIZE = 20; // px

/**
 * Check if an SVG has animation child inside it
 * @param children Children of the SVG to check
 * @returns Boolean indicating whether or not the SVG is animated
 */
const isAnimatedSvg = (children: React.ReactElement[]) =>
  !!Array.from<React.ReactElement>(children).find(
    child => child.type === 'animateTransform'
  );

export const SvgWrapper = ({
  children,
  title,
  size,
  width,
  height,
  disabled,
  color,
  hoverColor,
  activeColor,
  viewBox,
  rotate,
  iconAnimated,
  ...otherProps
}: Props) => {
  const wrapperWidth = size || width || DEFAULT_SIZE;
  const wrapperHeight = size || height || DEFAULT_SIZE;

  const isAnimated =
    children.props && children.props.children
      ? isAnimatedSvg(children.props.children)
      : false;

  const getIconColor = (propName: ColorProps = 'color'): string => {
    const colors = { color, hoverColor, activeColor };
    return isAnimated ? 'none' : colors[propName] || color || dashGreen00;
  };

  /**
   * There is a transition if :
   * - iconAnimated is forced by the user to true
   * - or if there's no animation inside the svg
   *
   * There is no transition if :
   * - iconAnimated is forced by the user to false
   * - or if there's an animation inside the svg
   */
  const hasTransition = (): boolean => {
    return typeof iconAnimated !== 'undefined' ? iconAnimated : !isAnimated;
  };

  const styleVars: CSS.Properties = {
    '--icon-width': `${wrapperWidth}px`,
    '--icon-height': `${wrapperHeight}px`,
    '--icon-idle-color': getIconColor('color'),
    '--icon-hover-color': getIconColor('hoverColor'),
    '--icon-active-color': getIconColor('activeColor'),
    '--icon-rotate': rotate ? `rotate(${rotate}deg)` : 'none'
  };

  return (
    <svg
      {...otherProps}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox || '0 0 20 20'}
      version='1.1'
      className={getClassNames(styles.svgWrapper, {
        [styles.animated]: hasTransition(),
        [styles.disabled]: disabled
      })}
      style={styleVars}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};
