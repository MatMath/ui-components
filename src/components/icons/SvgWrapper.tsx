import * as CSS from 'csstype';
import * as React from 'react';

import { Props } from './types';
import { dashGreen00 } from '@colors';
import styles from './SvgWrapper.module.scss';

/**
 * In order to support passing CSS variables with Typescriot
 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
 */
declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

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
  size,
  width,
  height,
  rotate,
  iconAnimated,
  disabled,
  ...props
}: Props) => {
  const wrapperWidth = size || width || DEFAULT_SIZE;
  const wrapperHeight = size || height || DEFAULT_SIZE;

  const isAnimated =
    children.props && children.props.children
      ? isAnimatedSvg(children.props.children)
      : false;

  const getIconColor = (propName: ColorProps = 'color'): string => {
    return isAnimated ? 'none' : props[propName] || props.color || dashGreen00;
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
      xmlns='http://www.w3.org/2000/svg'
      viewBox={props.viewBox || '0 0 20 20'}
      version='1.1'
      className={`${styles.svgWrapper} ${
        hasTransition ? styles.animated : ''
      } ${disabled ? styles.disabled : ''}`}
      style={styleVars}
    >
      {props.title ? <title>{props.title}</title> : null}
      {children}
    </svg>
  );
};
