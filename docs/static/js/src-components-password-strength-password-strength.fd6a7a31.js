<<<<<<< HEAD:docs/static/js/src-components-password-strength-password-strength.fd6a7a31.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/password-strength/PasswordStrength.mdx":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=s("./node_modules/react/index.js"),a=s("./node_modules/@mdx-js/react/dist/index.es.js"),o=s("./node_modules/docz/dist/index.esm.js"),d=s("./src/utility/cssUtils.ts"),i=s("./src/components/password-strength/PasswordStrength.module.scss"),c=s.n(i);"undefined"!==typeof PasswordStrengthProps&&PasswordStrengthProps&&PasswordStrengthProps===Object(PasswordStrengthProps)&&Object.isExtensible(PasswordStrengthProps)&&Object.defineProperty(PasswordStrengthProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PasswordStrengthProps",filename:"src/components/password-strength/PasswordStrength.tsx"}});var l={0:c.a.weakest,1:c.a.weak,2:c.a.acceptable,3:c.a.good,4:c.a.strong},p=function(e){var t=e.additionalText,s=e.score,n=void 0===s?0:s,a=e.showAdditionalText,o=l[n];return r.createElement("div",{className:c.a.root},r.createElement("div",{className:c.a.container},r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=0?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=1?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=2?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=3?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=4?o:"")})),a&&t&&r.createElement("span",{className:c.a.additionalInfo},t))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PasswordStrength",filename:"src/components/password-strength/PasswordStrength.tsx"}}),s.d(t,"default",function(){return g});var h={},b="wrapper";function g(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(a.b)(b,Object.assign({},h,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"password-input"},"Password Input"),Object(a.b)("p",null,"A component that indicates the strength of a password.\nThe score is based on the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/dropbox/zxcvbn"}),"ZXCVBN")," algorithm"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(o.d,{of:p,mdxType:"Props"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"basic-usage"},"Basic usage"),Object(a.b)("p",null,"Examples below show usage of the Password Strength"),Object(a.b)(o.c,{__position:1,__code:'<PasswordStrength score={0} />\n<PasswordStrength\n  score={1}\n  showAdditionalText={true}\n  additionalText="Keep going !"\n/>\n<PasswordStrength\n  score={2}\n  showAdditionalText={true}\n  additionalText="That\'s better !"\n/>\n<PasswordStrength\n  score={3}\n  showAdditionalText={true}\n  additionalText="You\'re almost there !"\n/>\n<PasswordStrength\n  score={4}\n  showAdditionalText={true}\n  additionalText="Hurray !"\n/>',__scope:{props:this?this.props:s,Playground:o.c,Props:o.d,PasswordStrength:p},style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",height:400,flex:1},mdxType:"Playground"},Object(a.b)(p,{score:0,mdxType:"PasswordStrength"}),Object(a.b)(p,{score:1,showAdditionalText:!0,additionalText:"Keep going !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:2,showAdditionalText:!0,additionalText:"That's better !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:3,showAdditionalText:!0,additionalText:"You're almost there !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:4,showAdditionalText:!0,additionalText:"Hurray !",mdxType:"PasswordStrength"})))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/password-strength/PasswordStrength.mdx"}}),g.isMDXComponent=!0},"./src/components/password-strength/PasswordStrength.module.scss":function(e,t,s){e.exports={root:"PasswordStrength_root__2plJ2",container:"PasswordStrength_container__1xjkw",passwordStrength:"PasswordStrength_passwordStrength__2xvXc",weakest:"PasswordStrength_weakest__3NMbq",weak:"PasswordStrength_weak__1Hq2N",acceptable:"PasswordStrength_acceptable__3WSxi",good:"PasswordStrength_good__2xxRE",strong:"PasswordStrength_strong__3hkK5",additionalInfo:"PasswordStrength_additionalInfo__2b_RT"}},"./src/utility/cssUtils.ts":function(e,t,s){"use strict";s.d(t,"a",function(){return r});var n=s("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=function(){for(var e=[],t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return s.forEach(function(t){"string"===typeof t?e.push(t):Object.entries(t).forEach(function(t){var s=Object(n.a)(t,2),r=s[0];s[1]&&e.push(r)})}),e.join(" ")};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getClassNames",filename:"src/utility/cssUtils.ts"}})}}]);
//# sourceMappingURL=src-components-password-strength-password-strength.1012f28f664e939214bb.js.map
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/password-strength/PasswordStrength.mdx":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=s("./node_modules/react/index.js"),a=s("./node_modules/@mdx-js/react/dist/index.es.js"),o=s("./node_modules/docz/dist/index.esm.js"),d=s("./src/utility/cssUtils.ts"),i=s("./src/components/password-strength/PasswordStrength.module.scss"),c=s.n(i);"undefined"!==typeof PasswordStrengthProps&&PasswordStrengthProps&&PasswordStrengthProps===Object(PasswordStrengthProps)&&Object.isExtensible(PasswordStrengthProps)&&Object.defineProperty(PasswordStrengthProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PasswordStrengthProps",filename:"src/components/password-strength/PasswordStrength.tsx"}});var l={0:c.a.weakest,1:c.a.weak,2:c.a.acceptable,3:c.a.good,4:c.a.strong},p=function(e){var t=e.additionalText,s=e.score,n=void 0===s?0:s,a=e.showAdditionalText,o=l[n];return r.createElement("div",{className:c.a.root},r.createElement("div",{className:c.a.container},r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=0?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=1?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=2?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=3?o:"")}),r.createElement("span",{className:Object(d.a)(c.a.passwordStrength,n>=4?o:"")})),a&&t&&r.createElement("span",{className:c.a.additionalInfo},t))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PasswordStrength",filename:"src/components/password-strength/PasswordStrength.tsx"}}),s.d(t,"default",function(){return g});var h={},b="wrapper";function g(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(a.b)(b,Object.assign({},h,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"password-input"},"Password Input"),Object(a.b)("p",null,"A component that indicates the strength of a password.\nThe score is based on the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/dropbox/zxcvbn"}),"ZXCVBN")," algorithm"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(o.d,{of:p,mdxType:"Props"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"basic-usage"},"Basic usage"),Object(a.b)("p",null,"Examples below show usage of the Password Strength"),Object(a.b)(o.c,{__position:1,__code:'<PasswordStrength score={0} />\n<PasswordStrength\n  score={1}\n  showAdditionalText={true}\n  additionalText="Keep going !"\n/>\n<PasswordStrength\n  score={2}\n  showAdditionalText={true}\n  additionalText="That\'s better !"\n/>\n<PasswordStrength\n  score={3}\n  showAdditionalText={true}\n  additionalText="You\'re almost there !"\n/>\n<PasswordStrength\n  score={4}\n  showAdditionalText={true}\n  additionalText="Hurray !"\n/>',__scope:{props:this?this.props:s,Playground:o.c,Props:o.d,PasswordStrength:p},style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",height:400,flex:1},mdxType:"Playground"},Object(a.b)(p,{score:0,mdxType:"PasswordStrength"}),Object(a.b)(p,{score:1,showAdditionalText:!0,additionalText:"Keep going !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:2,showAdditionalText:!0,additionalText:"That's better !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:3,showAdditionalText:!0,additionalText:"You're almost there !",mdxType:"PasswordStrength"}),Object(a.b)(p,{score:4,showAdditionalText:!0,additionalText:"Hurray !",mdxType:"PasswordStrength"})))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/password-strength/PasswordStrength.mdx"}}),g.isMDXComponent=!0},"./src/components/password-strength/PasswordStrength.module.scss":function(e,t,s){e.exports={root:"PasswordStrength_root__2plJ2",container:"PasswordStrength_container__1xjkw",passwordStrength:"PasswordStrength_passwordStrength__2xvXc",weakest:"PasswordStrength_weakest__3NMbq",weak:"PasswordStrength_weak__1Hq2N",acceptable:"PasswordStrength_acceptable__3WSxi",good:"PasswordStrength_good__2xxRE",strong:"PasswordStrength_strong__3hkK5",additionalInfo:"PasswordStrength_additionalInfo__2b_RT"}},"./src/utility/cssUtils.ts":function(e,t,s){"use strict";s.d(t,"a",function(){return r});var n=s("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=function(){for(var e=[],t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return s.forEach(function(t){"string"===typeof t?e.push(t):Object.entries(t).forEach(function(t){var s=Object(n.a)(t,2),r=s[0];s[1]&&e.push(r)})}),e.join(" ")};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getClassNames",filename:"src/utility/cssUtils.ts"}})}}]);
//# sourceMappingURL=src-components-password-strength-password-strength.d1bb784a0f00ba484905.js.map
>>>>>>> ad1926d... docs: update docz documentation:docs/static/js/src-components-password-strength-password-strength.25c00279.js