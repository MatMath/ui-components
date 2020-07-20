import * as React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('<Badge>', () => {
  describe('Global render', () => {
    it('should render default', () => {
      const { container } = render(
        <Badge text='Custom badge' textColor='white' backgroundColor='black' />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
