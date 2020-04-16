import * as React from 'react';
import { Toggle } from './Toggle';

export const ToggleDemo = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div>
      <Toggle
        labelChecked='Activated'
        labelUnchecked='Deactivated'
        checked={isChecked}
        onChange={e => setIsChecked(e.currentTarget.checked)}
      />
    </div>
  );
};
