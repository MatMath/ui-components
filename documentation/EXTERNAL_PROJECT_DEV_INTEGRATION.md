# Use local dev version inside your project

When you want to try some changes you've made on a local version in your project, there's an extra step required to ensure there won't be any React conflict between the 2 projects.

## Use the react dependency of your project

To build _ui-components_ with another react version, you need to link it using NPM **after** installing it :

```
# Inside ui-components:

# Install the dependencies
yarn

# Use the react version of the other project
npm link $PATH_TO_FINAL_PROJECT/node_modules/react

# Build ui-components using the linked react version
yarn build
```

You can then link _ui-components_ inside your project :

```
# Inside ui-components (after a build)
yarn link

# inside the other project
yarn link @dashlane/ui-components

# Then build your project...
```
