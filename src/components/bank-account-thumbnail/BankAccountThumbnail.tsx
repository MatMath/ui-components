import * as React from 'react';
import styles from './BankAccountThumbnail.module.scss';
import { BankAccountThumbnailSize } from './types';
import { dashGreen04, dashGreen06 } from '@colors';

export interface BankAccountThumbnailProps {
  size: BankAccountThumbnailSize;
}

const BankAccountThumbnailSmall: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    className={styles.bankAccountThumbnail}
    viewBox='0 0 48 32'
    style={{ width: '48px', height: '32px' }}
  >
    <React.Fragment>
      <path
        d='M16.5 3H39.9959C41.9959 3 42.9959 4 42.9959 6H19.9959L16.5 3Z'
        fill={dashGreen04}
      />
      <path
        d='M19.6746 6.37963L19.815 6.5H20H41.9933C45.0353 6.5 47.5 8.96142 47.5 11.9976V27.9945C47.5 29.9301 45.9302 31.5 43.9901 31.5H4.00989C2.07047 31.5 0.5 29.9339 0.5 27.9957V4.00426C0.5 2.06919 2.06981 0.5 4.0065 0.5H12.815L19.6746 6.37963Z'
        fill={dashGreen06}
        stroke={dashGreen04}
      />
    </React.Fragment>
  </svg>
);

const BankAccountThumbnailMedium: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    className={styles.bankAccountThumbnail}
    viewBox='0 0 246 144'
    style={{ width: '246px', height: '144px' }}
  >
    <React.Fragment>
      <path
        d='M102 21H234V15.04C234 11.7107 231.289 9.01801 227.96 9.04013L83.5 10L102 21Z'
        fill={dashGreen04}
      />
      <path
        d='M101.743 21.4287L101.862 21.5H102H240C243.038 21.5 245.5 23.9624 245.5 27V138C245.5 141.038 243.038 143.5 240 143.5H5.99999C2.96243 143.5 0.5 141.038 0.5 138V6C0.5 2.96244 2.96243 0.5 6 0.5H66.8615L101.743 21.4287Z'
        fill={dashGreen06}
        stroke={dashGreen04}
      />
    </React.Fragment>
  </svg>
);

export const BankAccountThumbnail: React.FC<BankAccountThumbnailProps> = (
  props: BankAccountThumbnailProps
) => {
  switch (props.size) {
    case 'small':
      return <BankAccountThumbnailSmall />;
    case 'medium':
      return <BankAccountThumbnailMedium />;
    default:
      return null;
  }
};
