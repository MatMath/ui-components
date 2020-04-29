import * as React from 'react';
import { getClassNames } from '@utility/cssUtils';
import styles from './Thumbnail.module.scss';
import { white } from '@colors';

type ThumbnailSize = 'small' | 'medium' | 'large';

interface ThumbnailProps {
  size: ThumbnailSize;
  backgroundColor: string;
  text: string;
  iconSource?: string;
}

export const Thumbnail = ({
  size = 'medium',
  text = '',
  backgroundColor = white,
  iconSource
}: ThumbnailProps) => {
  return (
    <div
      className={getClassNames(styles.container, styles[size])}
      style={{ backgroundColor: backgroundColor }}
    >
      <Logo size={size} text={text} iconSource={iconSource} />
    </div>
  );
};

interface LogoProps {
  size: ThumbnailSize;
  iconSource?: string;
  text: string;
}

const Logo = ({ iconSource, text, size }: LogoProps) => {
  return (
    <>
      {iconSource ? (
        <span
          className={getClassNames(styles.icon, styles[size])}
          style={{ backgroundImage: `url(${iconSource})` }}
        />
      ) : (
        <span className={getClassNames(styles.letters, styles[size])}>
          {text.slice(0, 2)}
        </span>
      )}
    </>
  );
};
