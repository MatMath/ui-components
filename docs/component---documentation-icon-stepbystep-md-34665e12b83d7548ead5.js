(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v9Xh:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return c}),t.d(n,"default",function(){return l});t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"documentation/ICON_STEPBYSTEP.md"}});var i={_frontmatter:c},p=o.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(p,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-to-add-an-icon"},"How to add an icon"),Object(a.b)("p",null,"In order to avoid repetitive/manual work to create svg icons components, we choose to generate them.They are all similar and only the content of the svg changes (",Object(a.b)("a",r({parentName:"p"},{href:"../src/components/icons"}),"see ",Object(a.b)("inlineCode",{parentName:"a"},"src/components/icons")," folder"),"). Here's a step by step guide to add an icon:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Extract the icon ",Object(a.b)("inlineCode",{parentName:"p"},"svg")," and open it in your IDE."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z" fill="#0E353D"/>\n</svg>\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy the svg content, removing the ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," container and ",Object(a.b)("inlineCode",{parentName:"p"},"fill")," attributes from ",Object(a.b)("inlineCode",{parentName:"p"},"path")," elements. ",Object(a.b)("inlineCode",{parentName:"p"},"mask")," elements should be kept as they are, for more information about ",Object(a.b)("inlineCode",{parentName:"p"},"mask")," elements you can take a look at ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask"}),"mozilla's documentation on svg masks"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z"/>\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Escape all ",Object(a.b)("inlineCode",{parentName:"p"},'"')," replacing them with ",Object(a.b)("inlineCode",{parentName:"p"},'\\"'),", and replace ",Object(a.b)("inlineCode",{parentName:"p"},"kebab-named")," properties to ",Object(a.b)("inlineCode",{parentName:"p"},"camelCase"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<path fillRule=\\"evenodd\\" clipRule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\"/>\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the escaped content to ",Object(a.b)("a",r({parentName:"p"},{href:"../src/design-tokens/icons/icons-defs.json"}),Object(a.b)("inlineCode",{parentName:"a"},"src/design-tokens/icons/icons-defs.json")),", or update it if already existing. Please keep the alphabetical order."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "my icon": "<path fillRule=\\"evenodd\\" clipRule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\"/>"\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the icon generator task"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn generate-icon-components\n")),Object(a.b)("p",{parentName:"li"},"This commandline runs ",Object(a.b)("a",r({parentName:"p"},{href:"../config/generator/icons/generateIcons.js"}),"this script"),", that generates all specified icons in ",Object(a.b)("a",r({parentName:"p"},{href:"../src/design-tokens/icons/icons-defs.json"}),Object(a.b)("inlineCode",{parentName:"a"},"icons-defs.json"))," following ",Object(a.b)("a",r({parentName:"p"},{href:"../config/generator/icons/IconComponentTemplate.tsx.hbs"}),"this template"),". It also updates the ",Object(a.b)("a",r({parentName:"p"},{href:"../src/components/icons/index.ts"}),Object(a.b)("inlineCode",{parentName:"a"},"src/components/icons/index.ts"))," to export the generated components."),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the newly created icon to the ",Object(a.b)("a",r({parentName:"p"},{href:"../src/components/icons/Icons.mdx"}),"documentation file"),". Please keep the alphabetical order."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-md"}),"...\nimport { MyIcon } from './MyIcon';\n...\n<IconsWrapper>\n  ...\n  <MyIcon size={30} />\n</IconsWrapper>\n")))))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"documentation/ICON_STEPBYSTEP.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---documentation-icon-stepbystep-md-34665e12b83d7548ead5.js.map