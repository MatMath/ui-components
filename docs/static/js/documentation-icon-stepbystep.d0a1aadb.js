(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./documentation/ICON_STEPBYSTEP.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),c={},i="wrapper";function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(i,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-add-an-icon"},"How to add an icon"),Object(o.b)("p",null,"In order to avoid repetitive/manual work to create svg icons components (since they are all similar and only the content of the svg changes ","[see ",Object(o.b)("inlineCode",{parentName:"p"},"src/atoms/icons")," folder]","), we choose to generate them. Here's a step by step guide to add an icon:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Extract the icon ",Object(o.b)("inlineCode",{parentName:"li"},"svg")," and open it in your IDE")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z" fill="#0E353D"/>\n</svg>\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Copy the svg content, removing the ",Object(o.b)("inlineCode",{parentName:"li"},"<svg>")," container and ",Object(o.b)("inlineCode",{parentName:"li"},"fill")," attributes")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z"/>\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Escape all ",Object(o.b)("inlineCode",{parentName:"li"},'"')," replacing them with ",Object(o.b)("inlineCode",{parentName:"li"},'\\"'),", and replace ",Object(o.b)("inlineCode",{parentName:"li"},"kebab-named")," properties to ",Object(o.b)("inlineCode",{parentName:"li"},"camelCase"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>\n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Add the escaped content to ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"../src/design-tokens/icons/icons-defs.json"}),Object(o.b)("inlineCode",{parentName:"a"},"src/design-tokens/icons/icons-defs.json")),", or update it if already existing. Please keep the alphabetical order.")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "my icon": "<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>"\n}\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Run the icon generator task")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn generate-icon-components\n")),Object(o.b)("p",null,"This commandline runs ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../config/generator/icons/generateIcons.js"}),"this script"),", that generates all specified icons in ",Object(o.b)("inlineCode",{parentName:"p"},"icons-defs.json")," following ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../config/generator/icons/IconComponentTemplate.tsx.hbs"}),"this template"),". It also updates the ",Object(o.b)("inlineCode",{parentName:"p"},"src/atoms/svg/index.ts")," to export the generated components."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Add the newly created icon to the ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"../src/atoms/icons/Icons.mdx"}),"documentation file"),". Please keep the alphabetical order.")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"...\nimport { SharedIcon } from './ShareIcon';\n...\n<IconsWrapper>\n...\n<MyIcon size={30} />\n</IconsWrapper>\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"documentation/ICON_STEPBYSTEP.md"}}),l.isMDXComponent=!0}}]);
<<<<<<< HEAD:docs/static/js/documentation-icon-stepbystep.d0a1aadb.js
//# sourceMappingURL=documentation-icon-stepbystep.1012f28f664e939214bb.js.map
=======
//# sourceMappingURL=documentation-icon-stepbystep.d1bb784a0f00ba484905.js.map
>>>>>>> ad1926d... docs: update docz documentation:docs/static/js/documentation-icon-stepbystep.3b56c4ce.js
