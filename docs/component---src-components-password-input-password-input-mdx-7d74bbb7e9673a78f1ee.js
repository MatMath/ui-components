(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0tzs":function(e,t,n){"use strict";n.d(t,"a",function(){return a});n("2mQt");var o=n("mXGw"),r=n("Yobm"),i=n("aD51"),a=function(e){return Object(i.c)(r.a,e,Object(i.c)(o.Fragment,null,Object(i.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"})," ",Object(i.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 10.0001C18 10.0001 16 4 10 4C4 4 2 10.0001 2 10.0001C2 10.0001 4 16 10 16C16 16 18 10.0001 18 10.0001ZM3.62005 10.0001C3.65718 10.0811 3.69973 10.1704 3.74789 10.2668C3.9914 10.7538 4.36904 11.3998 4.90232 12.0398C5.95964 13.3085 7.57163 14.5 10 14.5C12.4284 14.5 14.0404 13.3085 15.0977 12.0398C15.631 11.3998 16.0086 10.7538 16.2521 10.2668C16.3003 10.1705 16.3428 10.0811 16.38 10.0001C16.3428 9.9191 16.3003 9.82974 16.2521 9.73341C16.0086 9.24637 15.6309 8.60028 15.0977 7.96032C14.0403 6.69151 12.4283 5.5 10 5.5C7.57166 5.5 5.95967 6.69151 4.90234 7.96032C4.36905 8.60028 3.99141 9.24637 3.7479 9.73341C3.69973 9.82974 3.65718 9.9191 3.62005 10.0001Z"})))};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"RevealIcon",filename:"src/atoms/icons/RevealIcon.tsx"}})},"2eMa":function(e,t,n){"use strict";n.d(t,"a",function(){return o});n("2mQt"),n("abGl"),n("gZHo"),n("Fdmb"),n("Q0yf");var o=function(){for(var e=[],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.forEach(function(t){t&&("string"==typeof t?e.push(t):Object.entries(t).forEach(function(t){var n=t[0];t[1]&&e.push(n)}))}),e.join(" ")};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"getClassNames",filename:"src/utility/cssUtils.ts"}})},Id6K:function(e,t,n){"use strict";n.r(t);n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var o=n("/FXl"),r=n("TjRS"),i=n("ZFoC"),a=n("mXGw"),s=n("2eMa"),l=n("TVYv"),c=n("0tzs"),p=n("K2MI"),u=n("Yp4V"),f=n("zViD"),d=n.n(f),m=n("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}"undefined"!=typeof PasswordInputProps&&PasswordInputProps&&PasswordInputProps===Object(PasswordInputProps)&&Object.isExtensible(PasswordInputProps)&&!PasswordInputProps.hasOwnProperty("__filemeta")&&Object.defineProperty(PasswordInputProps,"__filemeta",{configurable:!0,value:{name:"PasswordInputProps",filename:"src/components/password-input/PasswordInput.tsx"}});var h=function(e){var t,n,o,r,i=e.feedbackText,f=e.feedbackType,h=e.fullWidth,O=void 0!==h&&h,w=e.hidePasswordTooltipText,P=e.label,g=e.onPasswordVisibilityChanged,v=e.showPasswordTooltipText,j=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["feedbackText","feedbackType","fullWidth","hidePasswordTooltipText","label","onPasswordVisibilityChanged","showPasswordTooltipText"]),y=a.useState(!1),x=y[0],_=y[1],C=a.createRef(),T=f&&d.a[f]||"",I=x?l.a:c.a;return Object(m.c)("div",{className:Object(s.a)(d.a.root,(t={},t[d.a.fullWidth]=O,t))},P&&Object(m.c)("span",{className:d.a.label},P),Object(m.c)("div",{className:Object(s.a)(d.a.container,(n={},n[d.a.fullWidth]=O,n))},Object(m.c)("input",b({ref:C},j,{type:x?"text":"password",className:Object(s.a)(d.a.input,T,(o={},o[d.a.fullWidth]=O,o))})),Object(m.c)("button",{className:Object(s.a)(d.a.icon,(r={},r[d.a.fullWidth]=O,r)),onClick:function(){g&&g(!x),_(function(e){return!e}),C.current&&C.current.focus()}},j.disabled?Object(m.c)(I,{disabled:j.disabled}):Object(m.c)(u.a,{placement:"left",title:x?w:v},Object(m.c)(I,{hoverColor:p.e})))),i&&f&&Object(m.c)("span",{className:Object(s.a)(d.a.feedback,T)},i))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"PasswordInput",filename:"src/components/password-input/PasswordInput.tsx"}}),n.d(t,"_frontmatter",function(){return w}),n.d(t,"default",function(){return v});var w={};void 0!==w&&w&&w===Object(w)&&Object.isExtensible(w)&&!w.hasOwnProperty("__filemeta")&&Object.defineProperty(w,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/password-input/PasswordInput.mdx"}});var P={_frontmatter:w},g=r.a;function v(e){var t,n=e.components,a=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(g,O({},P,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"password-input"},"Password Input"),Object(o.b)("p",null,"A Password input component"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(i.d,{of:h,mdxType:"Props"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"Examples below show usage of the Password Input"),Object(o.b)(i.c,{__position:1,__code:'<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n  label="Password"\n  placeholder="Test"\n  fluid\n/>\n<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n  label="Password"\n  placeholder="Test"\n  onPasswordVisibilityChanged={nextState => console.log(nextState)}\n/>\n<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n/>\n<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n  disabled\n/>\n<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n  feedbackType="warning"\n  feedbackText="This password contains invalid characters"\n/>\n<PasswordInput\n  hidePasswordTooltipText="Hide"\n  showPasswordTooltipText="Reveal"\n  feedbackType="error"\n  feedbackText="Wrong password"\n/>',__scope:(t={props:a,DefaultLayout:r.a,Playground:i.c,Props:i.d,PasswordInput:h},t.DefaultLayout=r.a,t._frontmatter=w,t),style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",height:400,flex:1},mdxType:"Playground"},Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",label:"Password",placeholder:"Test",fluid:!0,mdxType:"PasswordInput"}),Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",label:"Password",placeholder:"Test",onPasswordVisibilityChanged:function(e){return console.log(e)},mdxType:"PasswordInput"}),Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",mdxType:"PasswordInput"}),Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",disabled:!0,mdxType:"PasswordInput"}),Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",feedbackType:"warning",feedbackText:"This password contains invalid characters",mdxType:"PasswordInput"}),Object(o.b)(h,{hidePasswordTooltipText:"Hide",showPasswordTooltipText:"Reveal",feedbackType:"error",feedbackText:"Wrong password",mdxType:"PasswordInput"})))}v&&v===Object(v)&&Object.isExtensible(v)&&!v.hasOwnProperty("__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/password-input/PasswordInput.mdx"}}),v.isMDXComponent=!0},"O+WZ":function(e,t,n){"use strict";n.d(t,"i",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return b}),n.d(t,"e",function(){return h}),n.d(t,"g",function(){return O}),n.d(t,"h",function(){return w});n("wDqy"),n("yvkl"),n("Ir+3"),n("2mQt"),n("Eb4t"),n("abGl"),n("gZHo"),n("Fdmb"),n("QqzS");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){return/\d/.test(e)},s=function(e,t){return-1!==e.indexOf(t)},l=function(e){var t=e.height,n=e.width;return!(!t||!n)&&(a(t)||a(n)||!s(t,"%")||!s(n,"%"))};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"isHeightAndWidthSet",filename:"src/utility/positionCompute.ts"}});var c=function(e){return isNaN(e)?0:e},p=function(e,t){var n=parseInt(e.paddingTop||"0",10)+parseInt(e.paddingBottom||"0",10)+parseInt(e.marginTop||"0",10)+parseInt(e.marginBottom||"0",10)+parseInt(t||e.height||"0",10);return c(n)};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"computeElementHeight",filename:"src/utility/positionCompute.ts"}});var u=function(e,t){var n=parseInt(e.paddingLeft||"0",10)+parseInt(e.paddingRight||"0",10)+parseInt(e.marginLeft||"0",10)+parseInt(e.marginRight||"0",10)+parseInt(t||e.width||"0",10);return c(n)};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"computeElementWidth",filename:"src/utility/positionCompute.ts"}});var f=function(e,t){if(!t)return{height:"0",width:"0"};var n=document.createElement("div");Object.values(e).forEach(function(t){t&&"length"!==t&&"parentRule"!==t&&!a(t.toString())&&(n.style[t]=e[t])}),t.appendChild(n);var o=n.getBoundingClientRect(),r=o.height,i=o.width;return n.remove(),{height:r.toString(),width:i.toString()}};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"getAlternativeStyle",filename:"src/utility/positionCompute.ts"}});var d={top:0,left:0,right:0,bottom:0,width:0,height:0},m=function(e){return e?e.getBoundingClientRect():d};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"getBoundingRect",filename:"src/utility/positionCompute.ts"}});var b=function(e){if(e===window)return{maxHeight:window.innerHeight,minHeight:0,maxWidth:window.innerWidth,minWidth:0};var t=m(e);return{maxHeight:t.top+t.height,minHeight:t.top,minWidth:t.left,maxWidth:t.left+t.width}};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"getContainerBoundaries",filename:"src/utility/positionCompute.ts"}});var h=function(e){return window.getComputedStyle(e.element,e.getBeforePseudoElement?":before":void 0)};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"getCSSComputedStyle",filename:"src/utility/positionCompute.ts"}});var O=function(e){if(!e.elementRef.current)return{totalHeight:0,totalWidth:0,rect:d};var t=h({element:e.elementRef.current,getBeforePseudoElement:e.elementIsBefore});if(!t)return{totalHeight:0,totalWidth:0,rect:d};var n=l(t)?{}:f(t,e.elementRef.current),o=n.height,r=void 0===o?null:o,i=n.width,a=void 0===i?null:i;return{totalHeight:p(t,r),totalWidth:u(t,a),rect:m(e.elementRef.current)}};void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"getElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!=typeof ElementDimensions&&ElementDimensions&&ElementDimensions===Object(ElementDimensions)&&Object.isExtensible(ElementDimensions)&&!ElementDimensions.hasOwnProperty("__filemeta")&&Object.defineProperty(ElementDimensions,"__filemeta",{configurable:!0,value:{name:"ElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!=typeof IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod===Object(IsElementOutOfContainerMethod)&&Object.isExtensible(IsElementOutOfContainerMethod)&&!IsElementOutOfContainerMethod.hasOwnProperty("__filemeta")&&Object.defineProperty(IsElementOutOfContainerMethod,"__filemeta",{configurable:!0,value:{name:"IsElementOutOfContainerMethod",filename:"src/utility/positionCompute.ts"}});var w=function e(t){if(!t.placement)throw new Error("Element cannot be displayed in the container Element/Window due to its incompatible size.Please consider reducing it or better position tooltipedelement in the screen.");if(!t.isElementOutOfContainerMethod(r({},t)))return t.placement;var n=t.possibilities.filter(function(e){return t.placement!==e}),o=n[0];return e(r({},t,{placement:o,possibilities:n}))};void 0!==w&&w&&w===Object(w)&&Object.isExtensible(w)&&!w.hasOwnProperty("__filemeta")&&Object.defineProperty(w,"__filemeta",{configurable:!0,value:{name:"getElementPlacement",filename:"src/utility/positionCompute.ts"}})},QqzS:function(e,t,n){var o=n("NTkt"),r=n("M/Xa")(!1);o(o.S,"Object",{values:function(e){return r(e)}})},TVYv:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n("2mQt");var o=n("mXGw"),r=n("Yobm"),i=n("aD51"),a=function(e){return Object(i.c)(r.a,e,Object(i.c)(o.Fragment,null,Object(i.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 11.5C10.8284 11.5 11.5 10.8284 11.5 9.99998C11.5 9.17156 10.8284 8.49998 10 8.49998C9.17157 8.49998 8.5 9.17156 8.5 9.99998C8.5 10.8284 9.17157 11.5 10 11.5ZM10 13C11.6569 13 13 11.6568 13 9.99998C13 8.34313 11.6569 6.99998 10 6.99998C8.34315 6.99998 7 8.34313 7 9.99998C7 11.6568 8.34315 13 10 13Z"}),Object(i.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 9.86558C18 9.86558 16 3.86546 10 3.86546C4 3.86546 2 9.86558 2 9.86558C2 9.86558 4 15.8655 10 15.8655C16 15.8655 18 9.86558 18 9.86558ZM3.62005 9.86557C3.65718 9.94656 3.69973 10.0359 3.74789 10.1322C3.9914 10.6192 4.36904 11.2653 4.90232 11.9052C5.95964 13.174 7.57163 14.3655 10 14.3655C12.4284 14.3655 14.0404 13.174 15.0977 11.9052C15.631 11.2653 16.0086 10.6192 16.2521 10.1322C16.3003 10.0359 16.3428 9.94655 16.38 9.86556C16.3428 9.78456 16.3003 9.6952 16.2521 9.59887C16.0086 9.11183 15.6309 8.46574 15.0977 7.82579C14.0403 6.55697 12.4283 5.36546 10 5.36546C7.57166 5.36546 5.95967 6.55697 4.90234 7.82579C4.36905 8.46574 3.99141 9.11183 3.7479 9.59887C3.69973 9.6952 3.65718 9.78457 3.62005 9.86557Z"}),Object(i.c)("path",{d:"M2 16.9333L16.8492 2L17.9099 3.06667L3.06066 18L2 16.9333Z"})))};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"HideIcon",filename:"src/atoms/icons/HideIcon.tsx"}})},XoAA:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n("2mQt");function o(e){throw new Error("Unexpected value. Should have been never.")}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"assertUnreachable",filename:"src/utility/helpers.ts"}})},Yobm:function(e,t,n){"use strict";n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("VlJN"),n("YjJN"),n("p0JG"),n("mXGw");var o=n("UutA"),r=n("K2MI");function i(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: flex;\n  width: ",";\n  height: ",";\n  cursor: ",";\n  outline: none;\n  border-radius: 4px;\n  fill: ",";\n  opacity: ",";\n  transition: ",";\n  &:hover {\n    fill: ",";\n  }\n  &:active {\n    fill: ",";\n  }\n"]);return i=function(){return e},e}"undefined"!=typeof ColorProps&&ColorProps&&ColorProps===Object(ColorProps)&&Object.isExtensible(ColorProps)&&!ColorProps.hasOwnProperty("__filemeta")&&Object.defineProperty(ColorProps,"__filemeta",{configurable:!0,value:{name:"ColorProps",filename:"src/ions/icon/base/Icon.tsx"}});var a=function(e){return void 0===e&&(e="color"),function(t){return t.animated?"none":t[e]||t.color||r.a}},s=o.a.svg.attrs(function(e){return{viewBox:e.viewBox||"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}})(i(),function(e){var t=e.width;return(e.size||t||20)+"px"},function(e){var t=e.height;return(e.size||t||20)+"px"},function(e){return e.disabled?"not-allowed":"inherit"},a(),function(e){return e.disabled?.5:1},function(e){return e.animated?"none":"all 0.1s ease-in"},a("hoverColor"),a("activeColor"));void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"Icon",filename:"src/ions/icon/base/Icon.tsx"}});var l=n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",function(){return p});var p=function(e){var t=e.title,n=e.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["title","children"]),r=!(!n.props||!n.props.children)&&function(e){return!!Array.from(e).find(function(e){return"animateTransform"===e.type})}(n.props.children);return Object(l.c)(s,c({animated:r},o),t?Object(l.c)("title",null,t):null,n)};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"SvgWrapper",filename:"src/ions/icon/wrapper/SvgWrapper.tsx"}})},Yp4V:function(e,t,n){"use strict";n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var o=n("mXGw"),r=n("UutA"),i=n("K2MI"),a=n("XoAA");10===Object(10)&&Object.isExtensible(10)&&!10..hasOwnProperty("__filemeta")&&Object.defineProperty(10,"__filemeta",{configurable:!0,value:{name:"tooltipMargin",filename:"src/components/tooltip/helpers.ts"}});var s=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 10px;\n  bottom: 100%;\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: 10px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: 10px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  margin-top: 10px;\n";default:return Object(a.a)(t)}};s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"handleTooltipPosition",filename:"src/components/tooltip/helpers.ts"}});var l=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 5px;\n  bottom: 100%;\n  transform: translate(-50%, 0);\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(90deg) translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -4px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(-90deg) translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: -2px;\n  margin-top: -4px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(180deg) translate(-50%, 0);\n  top: 100%;\n  left: unset;\n  right: 50%\n  margin-top: 5px;\n";default:return Object(a.a)(t)}};l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"handleTooltipArrowPosition",filename:"src/components/tooltip/helpers.ts"}});var c=function(e){return e.outOfContainer?"":"visibility: visible;\n       opacity: 1;"};c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"displayIfInContainer",filename:"src/components/tooltip/helpers.ts"}});var p=function(e){switch(e){case"info":return i.a;case"success":return i.f;case"error":return i.d;default:return Object(a.a)(e)}};p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"getTooltipBgColorByType",filename:"src/components/tooltip/helpers.ts"}});var u=function(e){var t=e.elementDimensions,n=e.containerDimensions,o=e.placement;switch(o){case"top":return t.rect.top-t.totalHeight<n.minHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"bottom":return t.rect.top+t.rect.height+t.totalHeight>n.maxHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"right":return t.rect.left+t.rect.width+t.totalWidth>n.maxWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;case"left":return t.rect.left-t.totalWidth<n.minWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;default:return Object(a.a)(o),!0}};u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"isTooltipOutOfContainer",filename:"src/components/tooltip/helpers.ts"}});var f=function(e,t){return e.filter(function(e){return e!==t})};f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"removeOutOfScreenPlacement",filename:"src/components/tooltip/helpers.ts"}});var d=n("O+WZ"),m=n("aD51");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  > :first-child:hover {\n    position: relative;\n  }\n\n  > :first-child::before {\n    font-family: inherit;\n    visibility: hidden;\n    opacity: 0;\n    font-size: 0.75rem;\n    line-height: 1.25;\n    display: inline-block;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    padding: 8px;\n    background-color: ",";\n    content: attr(data-tooltip);\n    color: ",";\n    position: absolute;\n    max-width: ",";\n    width: max-content;\n    @supports (-ms-ime-align: auto) {\n      min-width: 50px;\n    }\n    word-wrap: break-word;\n    transform: translate(-50%, 0);\n    text-align: center;\n    z-index: 1001;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::before {\n    ","\n  }\n\n  > :first-child::after {\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid\n      ",";\n    position: absolute;\n    content: '';\n    z-index: 1002;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::after {\n    ","\n  }\n"]);return O=function(){return e},e}n.d(t,"a",function(){return P}),"undefined"!=typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&!Props.hasOwnProperty("__filemeta")&&Object.defineProperty(Props,"__filemeta",{configurable:!0,value:{name:"Props",filename:"src/components/tooltip/Tooltip.tsx"}}),"undefined"!=typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&!WrapperProps.hasOwnProperty("__filemeta")&&Object.defineProperty(WrapperProps,"__filemeta",{configurable:!0,value:{name:"WrapperProps",filename:"src/components/tooltip/Tooltip.tsx"}});var w=r.a.span(O(),function(e){var t=e.type;return p(t)},i.g,function(e){var t=e.options;return t.tooltipMaxWidth?t.tooltipMaxWidth+"px":"300px"},s,c,function(e){var t=e.type;return p(t)},l,c),P=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).ref=o.createRef(),n.tooltipPossiblePlacements=[],n.onHover=function(e){var t=e.currentTarget,o=n.coordinates,r=o.top,i=o.left,a=Object(d.d)(t),s=a.top,l=a.left;s===r&&l===i||(n.coordinates=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){h(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.coordinates,{},{top:s,left:l}),n.positionTooltip())},n.cloneChildren=function(e){return function(t,r){if(o.isValidElement(t))return o.cloneElement(t,{"data-tooltip":e,onMouseEnter:n.onHover,ref:0===r&&n.ref})}},n.defaultPlacement="top",n.state={placement:t.placement||n.defaultPlacement,outOfContainer:!1},n.tooltipPossiblePlacements=["top","left","right","bottom"],n.coordinates={top:null,left:null},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidUpdate=function(e,t){t.placement===this.state.placement&&this.ref&&this.positionTooltip()},i.positionTooltip=function(){if(this.ref.current){var e=Object(d.g)({elementRef:this.ref,elementIsBefore:!0}),t=this.props.options&&this.props.options.container&&this.props.options.container.current||window,n=Object(d.f)(t);try{var o=Object(d.h)({isElementOutOfContainerMethod:u,placement:this.props.placement||this.defaultPlacement,possibilities:this.tooltipPossiblePlacements,elementDimensions:e,containerDimensions:n});this.setState({placement:o})}catch(r){this.setState({outOfContainer:!0}),console.error("Error while computing Tooltip position",r)}}},i.render=function(){var e=this.props,t=e.title,n=void 0===t?"Default":t,r=e.type,i=void 0===r?"info":r,a=e.children,s=e.options,l=void 0===s?{}:s,c=o.Children.map(Object(m.c)("div",null,a),this.cloneChildren(n));return Object(m.c)(w,{type:i,placement:this.state.placement||this.defaultPlacement,outOfContainer:this.state.outOfContainer,options:l},c)},r}(o.PureComponent);void 0!==P&&P&&P===Object(P)&&Object.isExtensible(P)&&!P.hasOwnProperty("__filemeta")&&Object.defineProperty(P,"__filemeta",{configurable:!0,value:{name:"Tooltip",filename:"src/components/tooltip/Tooltip.tsx"}})},zViD:function(e,t,n){e.exports={root:"PasswordInput-module--root--R7z82",label:"PasswordInput-module--label--1gsmo",feedback:"PasswordInput-module--feedback--1N93-",warning:"PasswordInput-module--warning--VPRwG",error:"PasswordInput-module--error--2dGDd",container:"PasswordInput-module--container--ibvop",fullWidth:"PasswordInput-module--fullWidth--3S_kb",input:"PasswordInput-module--input--1JOqP",icon:"PasswordInput-module--icon--3Pwe5"}}}]);
//# sourceMappingURL=component---src-components-password-input-password-input-mdx-7d74bbb7e9673a78f1ee.js.map