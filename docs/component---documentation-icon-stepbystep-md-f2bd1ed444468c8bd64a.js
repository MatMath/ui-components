(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v9Xh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return s});n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),o=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"documentation/ICON_STEPBYSTEP.md"}});var i={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-to-add-an-icon"},"How to add an icon"),Object(a.b)("p",null,"In order to avoid repetitive/manual work to create svg icons components (since they are all similar and only the content of the svg changes ","[see ",Object(a.b)("inlineCode",{parentName:"p"},"src/atoms/icons")," folder]","), we choose to generate them. Here's a step by step guide to add an icon:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Extract the icon ",Object(a.b)("inlineCode",{parentName:"li"},"svg")," and open it in your IDE")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-xml"}),'<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z" fill="#0E353D"/>\n</svg>\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Copy the svg content, removing the ",Object(a.b)("inlineCode",{parentName:"li"},"<svg>")," container and ",Object(a.b)("inlineCode",{parentName:"li"},"fill")," attributes")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-xml"}),'<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z"/>\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Escape all ",Object(a.b)("inlineCode",{parentName:"li"},'"')," replacing them with ",Object(a.b)("inlineCode",{parentName:"li"},'\\"'))),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-xml"}),'<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>\n')),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Add the escaped content to ",Object(a.b)("a",l({parentName:"li"},{href:"../src/design-tokens/icons/icons-defs.json"}),Object(a.b)("inlineCode",{parentName:"a"},"src/design-tokens/icons/icons-defs.json")),", or update it if already existing")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "my icon": "<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\\" fill=\\"#0E353D\\"/>"\n}\n')),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Run the icon generator task")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn generate-icon-components\n")),Object(a.b)("p",null,"This commandline runs ",Object(a.b)("a",l({parentName:"p"},{href:"../config/generator/icons/generateIcons.js"}),"this script"),", that generates all specified icons in ",Object(a.b)("inlineCode",{parentName:"p"},"icons-defs.json")," following ",Object(a.b)("a",l({parentName:"p"},{href:"../config/generator/icons/IconComponentTemplate.tsx.hbs"}),"this template"),". It also updates the ",Object(a.b)("inlineCode",{parentName:"p"},"src/atoms/svg/index.ts")," to export the generated components."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"documentation/ICON_STEPBYSTEP.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---documentation-icon-stepbystep-md-f2bd1ed444468c8bd64a.js.map