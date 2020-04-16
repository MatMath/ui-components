import * as React from 'react';
import { Checkbox } from './Checkbox';

export const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div>
      <Checkbox
        checked={isChecked}
        onChange={e => setIsChecked(e.currentTarget.checked)}
      />
    </div>
  );
};
