(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v9Xh:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return l}),t.d(n,"default",function(){return s});t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"documentation/ICON_STEPBYSTEP.md"}});var i={_frontmatter:l},c=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-to-add-an-icon"},"How to add an icon"),Object(a.b)("p",null,"In order to avoid repetitive/manual work to create svg icons components (since they are all similar and only the content of the svg changes ","[see ",Object(a.b)("inlineCode",{parentName:"p"},"src/atoms/icons")," folder]","), we choose to generate them. Here's a step by step guide to add an icon:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Extract the icon ",Object(a.b)("inlineCode",{parentName:"li"},"svg")," and open it in your IDE")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z" fill="#0E353D"/>\n</svg>\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Copy the svg content, removing the ",Object(a.b)("inlineCode",{parentName:"li"},"<svg>")," container and ",Object(a.b)("inlineCode",{parentName:"li"},"fill")," attributes")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z"/>\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Escape all ",Object(a.b)("inlineCode",{parentName:"li"},'"')," replacing them with ",Object(a.b)("inlineCode",{parentName:"li"},'\\"'),", and replace ",Object(a.b)("inlineCode",{parentName:"li"},"kebab-named")," properties to ",Object(a.b)("inlineCode",{parentName:"li"},"camelCase"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>\n')),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Add the escaped content to ",Object(a.b)("a",r({parentName:"li"},{href:"../src/design-tokens/icons/icons-defs.json"}),Object(a.b)("inlineCode",{parentName:"a"},"src/design-tokens/icons/icons-defs.json")),", or update it if already existing. Please keep the alphabetical order.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "my icon": "<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>"\n}\n')),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Run the icon generator task")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn generate-icon-components\n")),Object(a.b)("p",null,"This commandline runs ",Object(a.b)("a",r({parentName:"p"},{href:"../config/generator/icons/generateIcons.js"}),"this script"),", that generates all specified icons in ",Object(a.b)("inlineCode",{parentName:"p"},"icons-defs.json")," following ",Object(a.b)("a",r({parentName:"p"},{href:"../config/generator/icons/IconComponentTemplate.tsx.hbs"}),"this template"),". It also updates the ",Object(a.b)("inlineCode",{parentName:"p"},"src/atoms/svg/index.ts")," to export the generated components."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)")),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"Add the newly created icon to the ",Object(a.b)("a",r({parentName:"li"},{href:"../src/atoms/icons/Icons.mdx"}),"documentation file"),". Please keep the alphabetical order.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-md"}),"...\nimport { SharedIcon } from './ShareIcon';\n...\n<IconsWrapper>\n...\n<MyIcon size={30} />\n</IconsWrapper>\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"documentation/ICON_STEPBYSTEP.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---documentation-icon-stepbystep-md-d2d4d8fa75b3d82371f3.js.map