<<<<<<< HEAD:docs/static/js/src-components-toggle-toggle.df82a855.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/toggle/Toggle.mdx":function(e,t,n){"use strict";n.r(t);var c=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),o=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),d=n("./src/utility/cssUtils.ts"),r=n("./src/components/toggle/Toggle.module.scss"),i=n.n(r),b=function(e){return l.createElement("input",Object.assign({className:i.a.hiddenInput,type:"checkbox"},e))},g=function(e){var t,n=e.checked,c=e.disabled,o=e.children;return l.createElement("div",{className:Object(d.a)(i.a.groove,(t={},Object(s.a)(t,i.a.checked,n),Object(s.a)(t,i.a.disabled,c),t))},o)},u=function(e){var t,n=e.checked,c=e.disabled;return l.createElement("div",{className:Object(d.a)(i.a.handle,(t={},Object(s.a)(t,i.a.checked,n),Object(s.a)(t,i.a.disabled,c),t))})},m=function(e){var t=e.checked,n=e.labelChecked,c=e.labelUnchecked;return t&&n||!t&&c?l.createElement("span",{className:i.a.text},t?n:c):null},p=function(e){var t,n=e.labelChecked,o=e.labelUnchecked,a=e.checked,r=e.disabled,p=Object(c.a)(e,["labelChecked","labelUnchecked","checked","disabled"]);return l.createElement("label",{className:Object(d.a)(i.a.root,(t={},Object(s.a)(t,i.a.checked,a),Object(s.a)(t,i.a.disabled,r),t))},l.createElement(b,Object.assign({},p,{checked:a,disabled:r})),l.createElement(g,{checked:a,disabled:r},l.createElement(u,{checked:a,disabled:r})),l.createElement(m,{checked:a,labelUnchecked:o,labelChecked:n}))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/toggle/Toggle.tsx"}});var h=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),j=function(){var e=l.useState(!1),t=Object(h.a)(e,2),n=t[0],c=t[1];return l.createElement("div",null,l.createElement(p,{labelChecked:"Activated",labelUnchecked:"Deactivated",checked:n,onChange:function(e){return c(e.currentTarget.checked)}}))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleDemo",filename:"src/components/toggle/ToggleDemo.tsx"}}),n.d(t,"default",function(){return _});var O={},f="wrapper";function _(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)(f,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"toggle"},"Toggle"),Object(o.b)("p",null,"An On/Off checkable toggle component."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(a.d,{of:p,mdxType:"Props"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"Examples below show the ",Object(o.b)("inlineCode",{parentName:"p"},"Toggle")," in its checked and unchecked states, both in enabled and disabled modes:"),Object(o.b)(a.c,{__position:1,__code:"<Toggle readOnly />\n<Toggle checked readOnly />\n<Toggle disabled readOnly />\n<Toggle disabled checked readOnly />",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Toggle:p,ToggleDemo:j},style:{display:"flex",flexDirection:"row",justifyContent:"space-around",pointerEvents:"none"},mdxType:"Playground"},Object(o.b)(p,{readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{checked:!0,readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{disabled:!0,readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{disabled:!0,checked:!0,readOnly:!0,mdxType:"Toggle"})),Object(o.b)("p",null,"The example below shows an interactive ",Object(o.b)("inlineCode",{parentName:"p"},"Toggle"),"."),Object(o.b)(a.c,{__position:2,__code:"<ToggleDemo />",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Toggle:p,ToggleDemo:j},style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},mdxType:"Playground"},Object(o.b)(j,{mdxType:"ToggleDemo"})))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/toggle/Toggle.mdx"}}),_.isMDXComponent=!0},"./src/components/toggle/Toggle.module.scss":function(e,t,n){e.exports={root:"Toggle_root__3KLjs",handle:"Toggle_handle__9XSnI",checked:"Toggle_checked__3dIX1",groove:"Toggle_groove__Fd-XI",disabled:"Toggle_disabled__31vLU",hiddenInput:"Toggle_hiddenInput__A1LPy",text:"Toggle_text__IDbPZ"}},"./src/utility/cssUtils.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var c=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=function(){for(var e=[],t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return n.forEach(function(t){"string"===typeof t?e.push(t):Object.entries(t).forEach(function(t){var n=Object(c.a)(t,2),l=n[0];n[1]&&e.push(l)})}),e.join(" ")};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getClassNames",filename:"src/utility/cssUtils.ts"}})}}]);
//# sourceMappingURL=src-components-toggle-toggle.1012f28f664e939214bb.js.map
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/toggle/Toggle.mdx":function(e,t,n){"use strict";n.r(t);var c=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),o=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),d=n("./src/utility/cssUtils.ts"),r=n("./src/components/toggle/Toggle.module.scss"),i=n.n(r),b=function(e){return l.createElement("input",Object.assign({className:i.a.hiddenInput,type:"checkbox"},e))},g=function(e){var t,n=e.checked,c=e.disabled,o=e.children;return l.createElement("div",{className:Object(d.a)(i.a.groove,(t={},Object(s.a)(t,i.a.checked,n),Object(s.a)(t,i.a.disabled,c),t))},o)},u=function(e){var t,n=e.checked,c=e.disabled;return l.createElement("div",{className:Object(d.a)(i.a.handle,(t={},Object(s.a)(t,i.a.checked,n),Object(s.a)(t,i.a.disabled,c),t))})},m=function(e){var t=e.checked,n=e.labelChecked,c=e.labelUnchecked;return t&&n||!t&&c?l.createElement("span",{className:i.a.text},t?n:c):null},p=function(e){var t,n=e.labelChecked,o=e.labelUnchecked,a=e.checked,r=e.disabled,p=Object(c.a)(e,["labelChecked","labelUnchecked","checked","disabled"]);return l.createElement("label",{className:Object(d.a)(i.a.root,(t={},Object(s.a)(t,i.a.checked,a),Object(s.a)(t,i.a.disabled,r),t))},l.createElement(b,Object.assign({},p,{checked:a,disabled:r})),l.createElement(g,{checked:a,disabled:r},l.createElement(u,{checked:a,disabled:r})),l.createElement(m,{checked:a,labelUnchecked:o,labelChecked:n}))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/toggle/Toggle.tsx"}});var h=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),j=function(){var e=l.useState(!1),t=Object(h.a)(e,2),n=t[0],c=t[1];return l.createElement("div",null,l.createElement(p,{labelChecked:"Activated",labelUnchecked:"Deactivated",checked:n,onChange:function(e){return c(e.currentTarget.checked)}}))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleDemo",filename:"src/components/toggle/ToggleDemo.tsx"}}),n.d(t,"default",function(){return _});var O={},f="wrapper";function _(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)(f,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"toggle"},"Toggle"),Object(o.b)("p",null,"An On/Off checkable toggle component."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(a.d,{of:p,mdxType:"Props"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"Examples below show the ",Object(o.b)("inlineCode",{parentName:"p"},"Toggle")," in its checked and unchecked states, both in enabled and disabled modes:"),Object(o.b)(a.c,{__position:1,__code:"<Toggle readOnly />\n<Toggle checked readOnly />\n<Toggle disabled readOnly />\n<Toggle disabled checked readOnly />",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Toggle:p,ToggleDemo:j},style:{display:"flex",flexDirection:"row",justifyContent:"space-around",pointerEvents:"none"},mdxType:"Playground"},Object(o.b)(p,{readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{checked:!0,readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{disabled:!0,readOnly:!0,mdxType:"Toggle"}),Object(o.b)(p,{disabled:!0,checked:!0,readOnly:!0,mdxType:"Toggle"})),Object(o.b)("p",null,"The example below shows an interactive ",Object(o.b)("inlineCode",{parentName:"p"},"Toggle"),"."),Object(o.b)(a.c,{__position:2,__code:"<ToggleDemo />",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Toggle:p,ToggleDemo:j},style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},mdxType:"Playground"},Object(o.b)(j,{mdxType:"ToggleDemo"})))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/toggle/Toggle.mdx"}}),_.isMDXComponent=!0},"./src/components/toggle/Toggle.module.scss":function(e,t,n){e.exports={root:"Toggle_root__3KLjs",handle:"Toggle_handle__9XSnI",checked:"Toggle_checked__3dIX1",groove:"Toggle_groove__Fd-XI",disabled:"Toggle_disabled__31vLU",hiddenInput:"Toggle_hiddenInput__A1LPy",text:"Toggle_text__IDbPZ"}},"./src/utility/cssUtils.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var c=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=function(){for(var e=[],t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return n.forEach(function(t){"string"===typeof t?e.push(t):Object.entries(t).forEach(function(t){var n=Object(c.a)(t,2),l=n[0];n[1]&&e.push(l)})}),e.join(" ")};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getClassNames",filename:"src/utility/cssUtils.ts"}})}}]);
//# sourceMappingURL=src-components-toggle-toggle.d1bb784a0f00ba484905.js.map
>>>>>>> ad1926d... docs: update docz documentation:docs/static/js/src-components-toggle-toggle.c5771943.js
