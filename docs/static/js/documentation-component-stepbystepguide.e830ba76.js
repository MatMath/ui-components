(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./documentation/COMPONENT_STEPBYSTEPGUIDE.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var o=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(s,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"create-your-first-component"},"Create your first component"),Object(r.b)("p",null,"Are you working on a feature that requires a new component? Do you want to migrate a duplicated component into the component library? Do you want to have fun with Dashlane Design System? You are in the right place! Here you'll find a step by step guide to add a new component. In this example we create a ",Object(r.b)("inlineCode",{parentName:"p"},"Button")," component"),Object(r.b)("h2",{id:"add-your-component"},"Add your component"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As a first step, create a folder for your component under ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"../src/components"}),"src/components"),". Naming convention for folder is ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://en.wiktionary.org/wiki/kebab_case"}),"kebab-case"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"src/components/my-button\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a file for your component ",Object(r.b)("inlineCode",{parentName:"li"},"Button.tsx"),". Naming convention for files is ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://en.wiktionary.org/wiki/Pascal_case#English"}),"PascalCase"),"."),Object(r.b)("li",{parentName:"ol"},"Add a props interface and a functional component implementation.")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import * as React from 'react';\n\ntype ButtonSize = 'small' | 'medium' | 'large';\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: ButtonSize;\n}\n\nexport const Button = (props: ButtonProps) => {\n  return <button {...props}></button>;\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If your file is larger than ~100 lines you can split it to subcomponents and move them to a ",Object(r.b)("inlineCode",{parentName:"p"},"subcomponents")," folder, and move interfaces to separate files in a ",Object(r.b)("inlineCode",{parentName:"p"},"interfaces")," folder")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Add a ",Object(r.b)("inlineCode",{parentName:"li"},"Sass")," file ",Object(r.b)("inlineCode",{parentName:"li"},"Button.module.scss")," and add the style of your button. Use ",Object(r.b)("inlineCode",{parentName:"li"},"colors")," defined in ",Object(r.b)("inlineCode",{parentName:"li"},"src/colors")," and ",Object(r.b)("inlineCode",{parentName:"li"},"typography")," defined in ",Object(r.b)("inlineCode",{parentName:"li"},"src/typography")," to use Design System tokens. Using ",Object(r.b)("inlineCode",{parentName:"li"},"*.module.css")," will enable the CSS module transpilation on this file")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),"@use '../../colors/colors';\n@use '../../typography/typography';\n\n.button {\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n\n  background-color: colors.$primary-background;\n  border-color: colors.$primary-border;\n  color: colors.$primary-foreground;\n\n  &:hover:enabled,\n  &:focus {\n    cursor: pointer;\n    outline: none;\n    background-color: colors.$primary-background-hover;\n    border-color: colors.$primary-border-hover;\n    color: colors.$primary-foreground-hover;\n  }\n\n  &:active:enabled {\n    background-color: colors.$primary-background-active;\n    border-color: colors.$primary-border-active;\n    color: colors.$primary-foreground-active;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: default;\n    background-color: colors.$primary-background-disabled;\n    border-color: colors.$primary-border-disabled;\n    color: colors.$primary-foreground-disabled;\n  }\n}\n\n/** Sizes **/\n.small {\n  padding: 8px 16px;\n  height: 32px;\n  @include typography.button-small;\n}\n\n.medium {\n  padding: 10px 16px;\n  height: 40px;\n  @include typography.button-medium;\n}\n\n.large {\n  padding: 14px 24px;\n  height: 48px;\n  @include typography.button-large;\n}\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Let's style your component \ud83c\udfa8. Add classNames to elements in your component. You can use ",Object(r.b)("inlineCode",{parentName:"li"},"getClassNames")," in ",Object(r.b)("inlineCode",{parentName:"li"},"src/utility/cssUtils.ts")," to build a className based on props. Import ",Object(r.b)("inlineCode",{parentName:"li"},"styles")," from the ",Object(r.b)("inlineCode",{parentName:"li"},".module.scss")," to navigate the stylesheet as a javascript object")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import {getClassNames} from '@utility/cssUtils'\nimport styles from './Button.module.scss'\n\nexport const Button = (props: ButtonProps) => {\n  return <button {getClassNames(styles.button, styles[props.size ?? \"medium\"]) {...props}></button>;\n};\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"You are almost done! Add a documentation file (",Object(r.b)("inlineCode",{parentName:"li"},"docz")," file): create a ",Object(r.b)("inlineCode",{parentName:"li"},"Button.mdx")," file and add your component description")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"---\nname: Button\nmenu: Components\n---\n\nimport { Playground, Props } from 'docz';\nimport { Button } from './Button';\n\n# Button\n\nA button component\n\n## Properties\n\n<Props of={Button} />\n\n## Usage\n\n### Basic usage\n\nExamples below show usage of the Button\n\n<Playground\nstyle={{\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'space-around'\n  }}>\n\n  <Button />\n\n  <Button size='small' />\n\n  <Button nature='large'/>\n</Playground>\n")),Object(r.b)("p",null,"Now you ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"../CONTRIBUTING.md#developing-on-docz"}),"can launch docz")," and see your working component in the live documentation \ud83c\udf89"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udc1edocz has a known bug with props cache and TypeScript, sometimes Props aren't displayed in the documentation. docz tasks (",Object(r.b)("inlineCode",{parentName:"p"},"yarn docoz:dev")," and ",Object(r.b)("inlineCode",{parentName:"p"},"yarn docz:build"),") will clean up docz cache automatically, but if you experience this while docz is runing in watch mode, kill it and relaunch it")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Last but not least, let's add some tests. We use ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://jestjs.io/"}),"jest")," and ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://enzymejs.github.io/enzyme/"}),"Enzyme")," to run snapshot and unit tests. Create a file ",Object(r.b)("inlineCode",{parentName:"li"},"Button.spec.tsx"))),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import * as React from 'react';\nimport { mount } from 'enzyme';\nimport 'jest-styled-components';\nimport { Button, ButtonProps } from './Button';\n\ndescribe('<Button>', () => {\n  let wrapper: ReactWrapper;\n\n  const createWrapper = ({ nature, size, children }: ButtonProps) => {\n    return mount(\n      <Button nature={nature} size={size}>\n        {children}\n      </Button>\n    );\n  };\n\n  describe('Global render', () => {\n    it('should render default', () => {\n      wrapper = createWrapper({});\n      expect(wrapper).toMatchSnapshot();\n      expect(wrapper.exists('.root.medium')).toEqual(true);\n    });\n\n    it('should render small', () => {\n      wrapper = createWrapper({\n        size: 'small'\n      });\n      expect(wrapper).toMatchSnapshot();\n      expect(wrapper.exists('.root.small')).toEqual(true);\n    });\n\n    it('should render large', () => {\n      wrapper = createWrapper({\n        size: 'large'\n      });\n      expect(wrapper).toMatchSnapshot();\n      expect(wrapper.exists('.root.large')).toEqual(true);\n    });\n  });\n});\n")),Object(r.b)("p",null,"The first time you run it, ",Object(r.b)("inlineCode",{parentName:"p"},"jest")," will create a snapshot of your component that will be used as a reference for further test runs to make sure your component's UI doesn't change unexpectedly"),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"And now you're done! Congrats, you created your first design system component. You can commit your work, open a PR and have a \u2615\ufe0f or \ud83c\udf7a")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"documentation/COMPONENT_STEPBYSTEPGUIDE.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=documentation-component-stepbystepguide.45a0b4cf825fe9eabc55.js.map