---
name: Component Step-by-Step
---

# Create your first component

Are you working on a feature that requires a new component? Do you want to migrate a duplicated component into the component library? Do you want to have fun with Dashlane Design System? You are in the right place! Here you'll find a step by step guide to add a new component. In this example we create a `Button` component

## Add your component

1. As a first step, create a folder for your component under [src/components](../src/components). Naming convention for folder is [kebab-case](https://en.wiktionary.org/wiki/kebab_case).

```
src/components/my-button
```

2. Create a file for your component `Button.tsx`. Naming convention for files is [PascalCase](https://en.wiktionary.org/wiki/Pascal_case#English).
3. Add a props interface and a functional component implementation.

```typescript jsx
import * as React from 'react';

type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  return <button {...props}></button>;
};
```

> If your file is larger than ~100 lines you can split it to subcomponents and move them to a `subcomponents` folder, and move interfaces to separate files in a `interfaces` folder

4. Add a `Sass` file `Button.module.scss` and add the style of your button. Use `colors` defined in `src/colors` and `typography` defined in `src/typography` to use Design System tokens. Using `*.module.css` will enable the CSS module transpilation on this file

```scss
@use '../../colors/colors';
@use '../../typography/typography';

.button {
  border-width: 1px;
  border-style: solid;
  display: flex;
  flex-direction: row;
  border-radius: 4px;

  background-color: colors.$primary-background;
  border-color: colors.$primary-border;
  color: colors.$primary-foreground;

  &:hover:enabled,
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: colors.$primary-background-hover;
    border-color: colors.$primary-border-hover;
    color: colors.$primary-foreground-hover;
  }

  &:active:enabled {
    background-color: colors.$primary-background-active;
    border-color: colors.$primary-border-active;
    color: colors.$primary-foreground-active;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
    background-color: colors.$primary-background-disabled;
    border-color: colors.$primary-border-disabled;
    color: colors.$primary-foreground-disabled;
  }
}

/** Sizes **/
.small {
  padding: 8px 16px;
  height: 32px;
  @include typography.button-small;
}

.medium {
  padding: 10px 16px;
  height: 40px;
  @include typography.button-medium;
}

.large {
  padding: 14px 24px;
  height: 48px;
  @include typography.button-large;
}
```

5. Let's style your component 🎨. Add classNames to elements in your component. You can use `getClassNames` in `src/utility/cssUtils.ts` to build a className based on props. Import `styles` from the `.module.scss` to navigate the stylesheet as a javascript object

```typescript jsx
import {getClassNames} from '@utility/cssUtils'
import styles from './Button.module.scss'

export const Button = (props: ButtonProps) => {
  return <button {getClassNames(styles.button, styles[props.size ?? "medium"]) {...props}></button>;
};
```

6. You are almost done! Add a documentation file (`docz` file): create a `Button.mdx` file and add your component description

```md
---
name: Button
menu: Components
---

import { Playground, Props } from 'docz';
import { Button } from './Button';

# Button

A button component

## Properties

<Props of={Button} />

## Usage

### Basic usage

Examples below show usage of the Button

<Playground
style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }}>

  <Button />

  <Button size='small' />

  <Button nature='large'/>
</Playground>
```

Now you [can launch docz](../CONTRIBUTING.md#developing-on-docz) and see your working component in the live documentation 🎉

> 🐞docz has a known bug with props cache and TypeScript, sometimes Props aren't displayed in the documentation. docz tasks (`yarn docz:dev` and `yarn docz:build`) will clean up docz cache automatically, but if you experience this while docz is runing in watch mode, kill it and relaunch it

7. Last but not least, let's add some tests. We use [jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com) to run snapshot and unit tests. Create a file `Button.spec.tsx`

```typescript jsx
import * as React from 'react';
import { render } from '@testing-library/react';
import { Button, ButtonProps } from './Button';

describe('<Button>', () => {
  let wrapper: ReactWrapper;

  const createWrapper = ({ nature, size, children }: ButtonProps) => {
    return render(
      <Button nature={nature} size={size}>
        {children}
      </Button>
    );
  };

  describe('Global render', () => {
    it('should render default as medium', () => {
      const { asFragment } = createWrapper({});
      expect(asFragment).toMatchSnapshot();
    });

    it('should render small', () => {
      const { asFragment } = createWrapper({
        size: 'small'
      });
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render large', () => {
      const { asFragment } = createWrapper({
        size: 'large'
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Interaction', () => {
    it('should execute action on click', () => {
      const { getByRole } = render(
        <Button onClick={() => window.alert('hello')} />
      );

      window.alert = jest.fn();
      userEvent.click(getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('hello');
    });

    it('should not execute action on click when it is disabled', () => {
      const { getByRole } = render(
        <Button onClick={() => window.alert('hello')} disabled />
      );

      window.alert = jest.fn();
      userEvent.click(getByRole('button'));
      expect(window.alert).toHaveBeenCalledTimes(0);
    });
  });
});
```

The first time you run it, `jest` will create a snapshot of your component that will be used as a reference for further test runs to make sure your component's UI doesn't change unexpectedly

8. And now you're done! Congrats, you created your first design system component. You can commit your work, open a PR and have a ☕️ or 🍺
