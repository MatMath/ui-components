(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Pm5c:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return i}),t.d(n,"default",function(){return l});t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"documentation/COMPONENT_STEPBYSTEPGUIDE.md"}});var c={_frontmatter:i},s=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(s,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"create-your-first-component"},"Create your first component"),Object(o.b)("p",null,"Are you working on a feature that requires a new component? Do you want to migrate a duplicated component into the component library? Do you want to have fun with Dashlane Design System? You are in the right place! Here you'll find a step by step guide to add a new component. In this example we create a ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component"),Object(o.b)("h2",{id:"add-your-component"},"Add your component"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"As a first step, create a folder for your component under ",Object(o.b)("a",a({parentName:"li"},{href:"../src/components"}),"src/components"),". Naming convention for folder is ",Object(o.b)("a",a({parentName:"li"},{href:"https://en.wiktionary.org/wiki/kebab_case"}),"kebab-case"),".")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"src/components/my-button\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create a file for your component ",Object(o.b)("inlineCode",{parentName:"li"},"Button.tsx"),". Naming convention for files is ",Object(o.b)("a",a({parentName:"li"},{href:"https://en.wiktionary.org/wiki/Pascal_case#English"}),"PascalCase"),"."),Object(o.b)("li",{parentName:"ol"},"Add a props interface and a functional component implementation.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import * as React from 'react';\n\ntype ButtonSize = 'small' | 'medium' | 'large';\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  size?: ButtonSize;\n}\n\nexport const Button = (props: ButtonProps) => {\n  return <button {...props}></button>;\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If your file is larger than ~100 lines you can split it to subcomponents and move them to a ",Object(o.b)("inlineCode",{parentName:"p"},"subcomponents")," folder, and move interfaces to separate files in a ",Object(o.b)("inlineCode",{parentName:"p"},"interfaces")," folder")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"Sass")," file ",Object(o.b)("inlineCode",{parentName:"li"},"Button.module.scss")," and add the style of your button. Use ",Object(o.b)("inlineCode",{parentName:"li"},"colors")," defined in ",Object(o.b)("inlineCode",{parentName:"li"},"src/colors")," and ",Object(o.b)("inlineCode",{parentName:"li"},"typography")," defined in ",Object(o.b)("inlineCode",{parentName:"li"},"src/typography")," to use Design System tokens. Using ",Object(o.b)("inlineCode",{parentName:"li"},"*.module.css")," will enable the CSS module transpilation on this file")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-scss"}),"@use '../../colors/colors';\n@use '../../typography/typography';\n\n.button {\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n\n  background-color: colors.$primary-background;\n  border-color: colors.$primary-border;\n  color: colors.$primary-foreground;\n\n  &:hover:enabled,\n  &:focus {\n    cursor: pointer;\n    outline: none;\n    background-color: colors.$primary-background-hover;\n    border-color: colors.$primary-border-hover;\n    color: colors.$primary-foreground-hover;\n  }\n\n  &:active:enabled {\n    background-color: colors.$primary-background-active;\n    border-color: colors.$primary-border-active;\n    color: colors.$primary-foreground-active;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: default;\n    background-color: colors.$primary-background-disabled;\n    border-color: colors.$primary-border-disabled;\n    color: colors.$primary-foreground-disabled;\n  }\n}\n\n/** Sizes **/\n.small {\n  padding: 8px 16px;\n  height: 32px;\n  @include typography.button-small;\n}\n\n.medium {\n  padding: 10px 16px;\n  height: 40px;\n  @include typography.button-medium;\n}\n\n.large {\n  padding: 14px 24px;\n  height: 48px;\n  @include typography.button-large;\n}\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Let's style your component 🎨. Add classNames to elements in your component. You can use ",Object(o.b)("inlineCode",{parentName:"li"},"getClassNames")," in ",Object(o.b)("inlineCode",{parentName:"li"},"src/utility/cssUtils.ts")," to build a className based on props. Import ",Object(o.b)("inlineCode",{parentName:"li"},"styles")," from the ",Object(o.b)("inlineCode",{parentName:"li"},".module.scss")," to navigate the stylesheet as a javascript object")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import {getClassNames} from '@utility/cssUtils'\nimport styles from './Button.module.scss'\n\nexport const Button = (props: ButtonProps) => {\n  return <button {getClassNames(styles.button, styles[props.size ?? \"medium\"]) {...props}></button>;\n};\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"You are almost done! Add a documentation file (",Object(o.b)("inlineCode",{parentName:"li"},"docz")," file): create a ",Object(o.b)("inlineCode",{parentName:"li"},"Button.mdx")," file and add your component description")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-md"}),"---\nname: Button\nmenu: Components\n---\n\nimport { Playground, Props } from 'docz';\nimport { Button } from './Button';\n\n# Button\n\nA button component\n\n## Properties\n\n<Props of={Button} />\n\n## Usage\n\n### Basic usage\n\nExamples below show usage of the Button\n\n<Playground\nstyle={{\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'space-around'\n  }}>\n\n  <Button />\n\n  <Button size='small' />\n\n  <Button nature='large'/>\n</Playground>\n")),Object(o.b)("p",null,"Now you ",Object(o.b)("a",a({parentName:"p"},{href:"../CONTRIBUTING.md#developing-on-docz"}),"can launch docz")," and see your working component in the live documentation 🎉"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"🐞docz has a known bug with props cache and TypeScript, sometimes Props aren't displayed in the documentation. docz tasks (",Object(o.b)("inlineCode",{parentName:"p"},"yarn docz:dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"yarn docz:build"),") will clean up docz cache automatically, but if you experience this while docz is runing in watch mode, kill it and relaunch it")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Last but not least, let's add some tests. We use ",Object(o.b)("a",a({parentName:"li"},{href:"https://jestjs.io/"}),"jest")," and ",Object(o.b)("a",a({parentName:"li"},{href:"https://testing-library.com"}),"React Testing Library")," to run snapshot and unit tests. Create a file ",Object(o.b)("inlineCode",{parentName:"li"},"Button.spec.tsx"))),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import * as React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { Button } from './Button';\n\ndescribe('<Button>', () => {\n  describe('Global render', () => {\n    it('should render default', () => {\n      const { container } = render(<Button />);\n\n      expect(container).toMatchSnapshot();\n    });\n  });\n\n  describe('Style properties', () => {\n    it('should render small size', () => {\n      const { container } = render(<Button size='small' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render medium size', () => {\n      const { container } = render(<Button size='medium' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render large size', () => {\n      const { container } = render(<Button size='large' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render primary nature', () => {\n      const { container } = render(<Button nature='primary' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render secondary nature', () => {\n      const { container } = render(<Button nature='secondary' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render danger nature', () => {\n      const { container } = render(<Button nature='danger' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render danger nature and small size', () => {\n      const { container } = render(<Button nature='danger' size='small' />);\n\n      expect(container).toMatchSnapshot();\n    });\n\n    it('should render with the custom class name', () => {\n      const customClassName = 'customClassName';\n      const { container } = render(<Button className={customClassName} />);\n\n      expect(container.firstChild).toHaveClass(customClassName);\n    });\n  });\n\n  describe('Children render', () => {\n    it('should render the specified text', () => {\n      const text = 'Hello There';\n      const { container } = render(<Button>{text}</Button>);\n\n      expect(container).toMatchSnapshot();\n      expect(screen.queryByText(text)).toBeInTheDocument();\n    });\n\n    it('should render the specified children', () => {\n      const text = 'Ok';\n      const { container } = render(\n        <Button>\n          <label>{text}</label>\n        </Button>\n      );\n\n      expect(container).toMatchSnapshot();\n      expect(screen.queryByText(text)).toBeInTheDocument();\n    });\n  });\n\n  describe('Interaction', () => {\n    it('should execute action on click', () => {\n      render(<Button onClick={() => window.alert('hello')} />);\n\n      window.alert = jest.fn();\n      userEvent.click(screen.getByRole('button'));\n      expect(window.alert).toHaveBeenCalledTimes(1);\n      expect(window.alert).toHaveBeenCalledWith('hello');\n    });\n\n    it('should not execute action on click when it is disabled', () => {\n      render(<Button onClick={() => window.alert('hello')} disabled />);\n\n      window.alert = jest.fn();\n      userEvent.click(screen.getByRole('button'));\n      expect(window.alert).toHaveBeenCalledTimes(0);\n    });\n  });\n});\n")),Object(o.b)("p",null,"The first time you run it, ",Object(o.b)("inlineCode",{parentName:"p"},"jest")," will create a snapshot of your component that will be used as a reference for further test runs to make sure your component's UI doesn't change unexpectedly"),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"And now you're done! Congrats, you created your first design system component. You can commit your work, open a PR and have a ☕️ or 🍺")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"documentation/COMPONENT_STEPBYSTEPGUIDE.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---documentation-component-stepbystepguide-md-fa671c952ac835a9dd81.js.map