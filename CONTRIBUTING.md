## Contributing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You can find step by step guides to add components 🧱, colors 🎨 and icons 🖼:

- [Adding a component](./documentation/COMPONENT_STEPBYSTEPGUIDE.md) 🧱
- [Adding a color](./documentation/COLOR_STEPBYSTEP.md) 🎨
- [Adding an icon](./documentation/ICON_STEPBYSTEP.md) 🖼

Take a look at [the frequently asked question](./documentation/FAQ.md) for previously asked questions.

### Prerequisites

You need to install on your machine :

- a recent version of [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) as version control system
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as a dependency manager
- [Prettier IDE Plugin](https://prettier.io/docs/en/editors.html) to format files consistently with the repository. 🙏Configure it to format on save🙏
- To ensure your IDE is already correctly configured, we use [EditorConfig](https://editorconfig.org/). Please install the required plugin for it, if your IDE needs one:
  - [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Vim plugin](https://github.com/editorconfig/editorconfig-vim)
  - WebStorm supports it natively.
- Scss intellisense
  - [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
  - [Vim plugin](https://github.com/cakebaker/scss-syntax.vim)
  - [IntelliJ plugin](https://plugins.jetbrains.com/plugin/7530-scss-lint)
- MDX syntax highlighting
  - [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
  - [Vim plugin](https://github.com/findango/vim-mdx)
  - [IntelliJ plugin](https://youtrack.jetbrains.com/issue/WEB-32599)

### Installing

In order to get your local development env running, you need to follow the steps below :

1. Clone the project

   ```
   git clone ssh://github.com/Dashlane/ui-components.git
   ```
   You need your gpg key and ssh key to be authenticated to work in the repo. Here are some helpful documentation to follow:

   - [Adding ssh key] https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

   - [Adding gpg key] https://help.github.com/en/github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account

2. You will also need to be added to the contributors list in the Dashlane GitHub organization before being allowed to push on this repo. To do so, please contact an admin of the team.

3. Install dependencies

   ```
   yarn
   ```

4. Build in watch mode

   ```
   yarn start
   ```

The last command will watch files located `src` and will recompile whenever they change. The generated files will be located in `build` folder.

### Developing in your project

Once you have started the watched build on ui-component lib, you can start using this dev version in your project instead of the npm released version.

All you need to do is:

1. Link the ui-component lib to register it as a link-able project in yarn

   ```
   yarn link
   ```

2. Tell your project to use the local ui-component build

   ```
   yarn link @dashlane/ui-components
   ```

3. You also need to link React version to your project's as it is a peer-dependency
   ```
   npm link PATH/TO/YOUR/PROJECT/node_modules/react
   ```
   (You will need to unlink React in order for tests to pass)

4) Build the ui-component project

   ```
   yarn build
   ```

5) Start devServer on your project
   ```
   yarn start
   ```

#### Developing on Docz

You may want to develop a new component while working on Docz to see your work without having to link
it to a different project. To do so:

1. Launch Docz in dev mode in a different terminal

   ```
   yarn docz:dev
   ```

2. Launch TypeScript to type-check your work in a different terminal:
   ```
   yarn typing:watch
   ```

You will see the doc on http://localhost:3001

### Contributing

Before contributing on this repo, please keep in mind that:

- We aim to have dumb components in this lib : they are <strong>presentational components</strong> and they shouldn't do any data treatment or management.
- Every new component <strong>should be tested</strong>, if you are modifying an existing one you should update related tests.
- Every new component <strong>should be documented</strong>, please follow the section below <strong>Documented components</strong>
- Please follow the sample <strong>Button</strong> component as a reference/guide to create future ones.
- Please follow [the conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines for your commits messages <strong>Example of commit messages: `docs: correct spelling of CHANGELOG`& `feat(navbar): add background color prop`</strong>

### Documented components

You can play/test existing components or your newly created one locally (without having to integrate it into another project) by using the fascinating tool called <strong>`Docz`</strong>.

All you need to do is :

- Create a file called `yourComponent.mdx`
- Import your component and start specifying its behaviour (its basic usage with defaults, specified props ...)
- Add Docz <strong> `<Playground>` </strong> built-in component to enable live code testing on your component
- Run <strong>`yarn docz:dev`</strong> in order to start a local server of our documented ui-components lib
- Visualize your documentation: You can play/live test the components behaviour by clicking on `<>` button

### Code linting and formatting

We use `prettier` to format and `eslint` with typescript settings to lint our code. Your IDE should also be able to respect the rules defined with `EditorConfig`.

### Good to know :

- If you don't have an integrated prettier plugin in your IDE, we have a yarn task that formats your <strong>git staged files</strong> for you. You can run `yarn pretty-quick`

- An automatic task runs a <strong>prettier</strong> and <strong>eslint</strong> check on git staged files everytime you attempt to create a new <strong>commit</strong> in order to be sure that things are OK

- A check on the message format is executed as well on commit-msg hook using [commitlint tool](https://github.com/conventional-changelog/commitlint)

- We also execute the task <strong>`yarn exec-docz-update`</strong> on post-commit that will check if we have added or updated any `Docz` documentation (by modifying or adding any .mdx file), regenerate new built documentation and add push it through a new dedicated commit : in this way, we assure that https://dashlane.github.io/ui-components is always up to date.

- <strong>Jest tests</strong> are run everytime you attempt to <strong>push new code on remote</strong>

- Theses checks/rules are quite strict but very beneficial: they protect us from having :poop: slip into our code base

### Running tests

We use [Jest](https://jestjs.io/) as testing framework and assertion library. We use [Enzyme](https://airbnb.io/enzyme/) as a testing utility for react components and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing) to make sure that our UI does not change unexpectedly.

- To run tests, please execute

  ```
  yarn test
  ```

- To run tests in watch mode, please execute

  ```
  yarn test:watch
  ```

## Build

In order to build this library you can simply run

```
yarn build
```

which will generate in the folder `build` a transpiled and minified components as [ES6 modules](https://rollupjs.org/guide/en/#es-module-syntax) (to allow tree-shaking) with the associated typing.

## Release

In order to relase and publish the library, run

```
yarn release
```

This will build your project, automaticaly assign a new version to the package and publish it.
