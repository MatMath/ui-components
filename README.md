# UI Components

This library contains Dashlane's reusable ui components built with React 🎉 https://dashlane.github.io/ui-components/

## Getting Started

These instructions will get you the latest version of the `ui-components` lib installed in your project, so you start integrating ans using the components.

### Compatibility

Your project needs to use React 16 or later.

### Prerequisites

You need to install on your machine :

- a recent version of [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as a dependency manager

### Installing

Add `ui-components` to your project by executing :

```
yarn add @dashlane/ui-components@latest
```

### Usage

Here's an example of basic usage:

```typescript jsx
import * as React from 'react';
import { Button } from '@dashlane/ui-components';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button nature='danger'>Danger Button</Button>
    </div>
  );
};

export default App;
```

## Live documentation

All the available components offered by this library are described [here](https://dashlane.github.io/ui-components/). Feel free to navigate through them and to live test the behaviour of each.

## Built With

- [React](https://reactjs.org/) - The javascript library
- \[OBSOLETE\] [Styled-Components](https://www.styled-components.com/) - Used to create styled React components with an improved experience for developers
- [Sass](https://sass-lang.com/) - Used to add style with an improved developer experience
- [Yarn](https://yarnpkg.com/lang/en/docs/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on contributing on this project and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. To see all available versions, you can run

```
yarn info @dashlane/ui-components versions
```
