(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/atoms/button/Button.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n("./src/colors/colors.ts"),a=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./src/ions/text/StyledText.tsx"),s=n("./src/utility/helpers.ts");function u(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return e},e}function b(){var e=Object(a.a)(["\n  ","\n  padding: 14px 24px;\n  height: 48px;\n"]);return b=function(){return e},e}function f(){var e=Object(a.a)(["\n  ","\n  padding: 10px 16px;\n  height: 40px;\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  ","\n  padding: 8px 16px;\n  height: 32px;\n  font-size: 12px;\n  line-height: 16px;\n"]);return m=function(){return e},e}function d(){var e=Object(a.a)(["\n  color: ",";\n  font-size: 16px;\n  line-height: 20px;\n  background-color: ",";\n  cursor: pointer;\n  border: ",";\n  border-radius: 4px;\n  min-width: 60px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  transition: all 0.1s;\n  ",";\n\n  &:hover:not(:disabled),\n  &:focus:not(:disabled) {\n    border: ",";\n    background-color: ",";\n  }\n  &:active:not(:disabled) {\n    border: ",";\n    background-color: ",";\n  }\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    span {\n      pointer-events: none;\n    }\n  }\n"]);return d=function(){return e},e}"undefined"!==typeof BaseButtonProps&&BaseButtonProps&&BaseButtonProps===Object(BaseButtonProps)&&Object.isExtensible(BaseButtonProps)&&Object.defineProperty(BaseButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseButtonProps",filename:"src/ions/button/base/BaseButton.tsx"}}),"undefined"!==typeof BaseProps&&BaseProps&&BaseProps===Object(BaseProps)&&Object.isExtensible(BaseProps)&&Object.defineProperty(BaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseProps",filename:"src/ions/button/base/BaseButton.tsx"}});var p=function(e){return function(t){return t.theme.backgroundColor[e]||i.o}},j=function(e){return function(t){var n=t.theme;return n.borderColor?"1px solid ".concat(n.borderColor[e]||i.o):"none"}},O=Object(l.c)(d(),function(e){return e.theme.textColor||i.q},p("idle"),j("idle"),function(e){return e.customStyle},j("hover"),p("hover"),j("active"),p("active")),v=l.d.button(m(),O),g=l.d.button(f(),O),y=l.d.button(b(),O),E=Object(l.d)(c.a)(u()),x=function(e){var t=e.children,n=e.size,i=void 0===n?"medium":n,a=Object(r.a)(e,["children","size"]),l=o.createElement(E,null,t||"Default");switch(i){case"small":return o.createElement(v,a,l);case"medium":return o.createElement(g,a,l);case"large":return o.createElement(y,a,l);default:return Object(s.a)(i)}},h=x;x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BaseButton",filename:"src/ions/button/base/BaseButton.tsx"}});var _=function(e){var t=e.colors,n=e.theme,i=void 0===n?"default":n,a=Object(r.a)(e,["colors","theme"]),l="dark"===i&&t.dark?t.dark:t.default;return o.createElement(h,Object.assign({theme:l},a))};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeWrapper",filename:"src/ions/button/themes/ThemeWrapper.tsx"}});var P={default:{backgroundColor:{idle:i.k,hover:i.j,active:i.i}}},F=function(e){return o.createElement(_,Object.assign({colors:P},e))},C=F;F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonDanger",filename:"src/ions/button/themes/danger/ButtonDanger.tsx"}});var D={default:{backgroundColor:{idle:i.o,hover:i.g,active:i.e},textColor:i.b,borderColor:{idle:i.g,hover:i.g,active:i.e}},dark:{backgroundColor:{idle:i.o,hover:i.c,active:i.d},borderColor:{idle:i.c,hover:i.c,active:i.d}}},w=function(e){return o.createElement(_,Object.assign({colors:D},e))},B=w;w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSecondary",filename:"src/ions/button/themes/secondary/ButtonSecondary.tsx"}});var k={default:{backgroundColor:{idle:i.l,hover:i.b,active:i.a}},dark:{backgroundColor:{idle:i.q,hover:i.n,active:i.m},textColor:i.b}},M=function(e){return o.createElement(_,Object.assign({colors:k},e))},A=M;function S(){var e=Object(a.a)(["\n  min-width: 32px;\n  svg {\n    margin: -8px -16px;\n  }\n"]);return S=function(){return e},e}M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonPrimary",filename:"src/ions/button/themes/primary/ButtonPrimary.tsx"}});var W={default:{backgroundColor:{idle:i.o,hover:i.o,active:i.g},textColor:i.b,borderColor:{idle:i.o,hover:i.g,active:i.g}},dark:{backgroundColor:{idle:i.o,hover:i.o,active:i.c},borderColor:{idle:i.o,hover:i.c,active:i.c}}},R=Object(l.c)(S()),I=function(e){return o.createElement(_,Object.assign({customStyle:R,colors:W},e))},T=I;I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonGhost",filename:"src/ions/button/themes/ghost/ButtonGhost.tsx"}}),"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/button/Button.tsx"}});var G=function(e){return function(e){var t=e.nature,n=Object(r.a)(e,["nature"]);switch(t){case"danger":return o.createElement(C,n);case"secondary":return o.createElement(B,n);case"primary":return o.createElement(A,n);case"ghost":return o.createElement(T,n);default:return Object(s.a)(t)}}(e)};t.a=G;G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/atoms/button/Button.tsx"}})},"./src/atoms/dropdownMenu/DropdownMenu.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/react/index.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/colors/colors.ts");function c(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 8px 0;\n  max-height: ","px;\n  overflow-y: scroll;\n"]);return c=function(){return e},e}var s=a.d.div(c(),l.q,l.f,function(e){return e.maxHeight||100}),u=s;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DropdownCard",filename:"src/ions/dropdown/card/DropdownCard.tsx"}});var b=n("./src/utility/helpers.ts"),f=n("./src/utility/positionCompute.ts"),m=function(e){var t=e.elementDimensions,n=e.containerDimensions,r=e.placement;switch(r){case"top":return t.rect.y-t.totalHeight<n.minHeight;case"bottom":return t.rect.y+t.rect.height+t.totalHeight>n.maxHeight;default:return Object(b.a)(r),!0}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isDropdownOutOfContainer",filename:"src/atoms/dropdownMenu/helpers.ts"}});var d=function(e,t,n){var r=Object(f.f)(e.current,n),o=Object(f.a)(r)?{}:Object(f.d)(r,e.current),i=o.height,a=void 0===i?null:i,l=o.width,c=void 0===l?null:l;return{totalHeight:Object(f.b)(r,a),totalWidth:Object(f.c)(r,c),rect:Object(f.e)(t.current)}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getControllerAndMenuDimensions",filename:"src/atoms/dropdownMenu/helpers.ts"}});var p=function(e){var t=e.dockingSide,n=e.placement;return"".concat("top"===n?"bottom":"top",": 100%;\n  transform: translateY(").concat("top"===n?-4:4,"px);\n  ").concat(t,": 0;")};function j(){var e=Object(o.a)(["\n  position: absolute;\n  opacity: ",";\n  ","\n  max-width: 318px;\n"]);return j=function(){return e},e}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDropdownPosition",filename:"src/atoms/dropdownMenu/helpers.ts"}}),"undefined"!==typeof MenuWrapperProps&&MenuWrapperProps&&MenuWrapperProps===Object(MenuWrapperProps)&&Object.isExtensible(MenuWrapperProps)&&Object.defineProperty(MenuWrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MenuWrapperProps",filename:"src/atoms/dropdownMenu/DropdownMenu.tsx"}});var O=a.d.div(j(),function(e){return e.isReadyForDisplay?1:0},p),v=["top","bottom"],g=function(e){var t=i.useState(null),n=Object(r.a)(t,2),o=n[0],a=n[1],l=i.useRef(null),c=i.useRef(!1);return i.useEffect(function(){if(e.isOpen!==c.current&&(c.current=e.isOpen,a(null),l.current&&e.controllerRef.current)){var t=d(l,e.controllerRef),n=e.containerRef&&e.containerRef.current||window,r=Object(f.g)(n);try{var o=Object(f.i)(m,e.placement||"bottom",v,t,r);a(o)}catch(i){console.error("Error while computing DropdownMenu position",i)}}}),i.createElement(i.Fragment,null,e.isOpen&&i.createElement(O,{placement:o||"bottom",ref:l,dockingSide:e.dockingSide||"left",isReadyForDisplay:null!==o},i.createElement(u,{maxHeight:e.menuMaxHeight},e.children)))};t.a=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DropdownMenu",filename:"src/atoms/dropdownMenu/DropdownMenu.tsx"}})},"./src/colors/colors.ts":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"l",function(){return b}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return m}),n.d(t,"i",function(){return y}),n.d(t,"j",function(){return E}),n.d(t,"k",function(){return x}),n.d(t,"q",function(){return I}),n.d(t,"p",function(){return T}),n.d(t,"o",function(){return G});var r="#0E353D";"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen00",filename:"src/colors/colors.ts"}});var o="#3E5D64";"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen01",filename:"src/colors/colors.ts"}});var i="#6E868B";"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen02",filename:"src/colors/colors.ts"}});var a="#9FAEB1";"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen03",filename:"src/colors/colors.ts"}});var l="#CFD7D8";"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen04",filename:"src/colors/colors.ts"}});var c="#D9DFE0";"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen05",filename:"src/colors/colors.ts"}});var s="#F5F7F7";"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen06",filename:"src/colors/colors.ts"}});var u="#071A1E";"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashDarkerGreen00",filename:"src/colors/colors.ts"}});var b="#0E6476";"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen00",filename:"src/colors/colors.ts"}});var f="#3E8391";"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen01",filename:"src/colors/colors.ts"}});"#6EA2AD"===Object("#6EA2AD")&&Object.isExtensible("#6EA2AD")&&Object.defineProperty("#6EA2AD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen02",filename:"src/colors/colors.ts"}});var m="#9FC1C8";"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen03",filename:"src/colors/colors.ts"}});"#CFE0E4"===Object("#CFE0E4")&&Object.isExtensible("#CFE0E4")&&Object.defineProperty("#CFE0E4","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen04",filename:"src/colors/colors.ts"}});"#D9E6E9"===Object("#D9E6E9")&&Object.isExtensible("#D9E6E9")&&Object.defineProperty("#D9E6E9","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen05",filename:"src/colors/colors.ts"}});var d="#FDB5AF";d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink00",filename:"src/colors/colors.ts"}});var p="#FDC4BF";p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink01",filename:"src/colors/colors.ts"}});var j="#FED3CF";j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink02",filename:"src/colors/colors.ts"}});var O="#FEE1DF";O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink03",filename:"src/colors/colors.ts"}});var v="#FFF0EF";v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink04",filename:"src/colors/colors.ts"}});var g="#FFF3F2";g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink05",filename:"src/colors/colors.ts"}});"#FE5B33"===Object("#FE5B33")&&Object.isExtensible("#FE5B33")&&Object.defineProperty("#FE5B33","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange00",filename:"src/colors/colors.ts"}});"#FE7C5C"===Object("#FE7C5C")&&Object.isExtensible("#FE7C5C")&&Object.defineProperty("#FE7C5C","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange01",filename:"src/colors/colors.ts"}});"#FE9D85"===Object("#FE9D85")&&Object.isExtensible("#FE9D85")&&Object.defineProperty("#FE9D85","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange02",filename:"src/colors/colors.ts"}});"#FFBDAD"===Object("#FFBDAD")&&Object.isExtensible("#FFBDAD")&&Object.defineProperty("#FFBDAD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange03",filename:"src/colors/colors.ts"}});"#FFDED6"===Object("#FFDED6")&&Object.isExtensible("#FFDED6")&&Object.defineProperty("#FFDED6","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange04",filename:"src/colors/colors.ts"}});"#FFE5DE"===Object("#FFE5DE")&&Object.isExtensible("#FFE5DE")&&Object.defineProperty("#FFE5DE","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange05",filename:"src/colors/colors.ts"}});var y="#4E000D";"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed00",filename:"src/colors/colors.ts"}});var E="#8B0018";"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed01",filename:"src/colors/colors.ts"}});var x="#FF002D";"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed02",filename:"src/colors/colors.ts"}});"#FFA49F"===Object("#FFA49F")&&Object.isExtensible("#FFA49F")&&Object.defineProperty("#FFA49F","__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed03",filename:"src/colors/colors.ts"}});var h="#BF0A33";h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red00",filename:"src/colors/colors.ts"}});var _="#CC3B5C";_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red01",filename:"src/colors/colors.ts"}});var P="#D96C85";P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red02",filename:"src/colors/colors.ts"}});var F="#E59DAD";F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red03",filename:"src/colors/colors.ts"}});var C="#F2CED6";C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red04",filename:"src/colors/colors.ts"}});var D="#F5D8DE";D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red05",filename:"src/colors/colors.ts"}});var w="#615B57";w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey00",filename:"src/colors/colors.ts"}});var B="#999592";B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey01",filename:"src/colors/colors.ts"}});var k="#CCC7C2";k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey02",filename:"src/colors/colors.ts"}});var M="#D6D2CE";M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey03",filename:"src/colors/colors.ts"}});var A="#E0DDDA";A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey04",filename:"src/colors/colors.ts"}});var S="#EBE9E7";S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey05",filename:"src/colors/colors.ts"}});var W="#F5F4F3";W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey06",filename:"src/colors/colors.ts"}});var R="#000000";R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"black",filename:"src/colors/colors.ts"}});var I="#FFFFFF";"undefined"!==typeof I&&I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"white",filename:"src/colors/colors.ts"}});var T="#20B422";"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"validatorGreen",filename:"src/colors/colors.ts"}});var G="transparent";"undefined"!==typeof G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"transparent",filename:"src/colors/colors.ts"}})},"./src/ions/dropdown/element/DropdownElement.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=n("./node_modules/react/index.js"),i=n("./src/ions/text/StyledText.tsx"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/colors/colors.ts");function c(){var e=Object(r.a)(["\n  cursor: pointer;\n  border: transparent 0px;\n  outline: none;\n  display: flex;\n  box-sizing: border-box;\n  height: 36px;\n  flex-shrink: 0;\n  padding: 8px 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n  color: ",";\n  line-height: 20px;\n  font-size: 16px;\n"]);return s=function(){return e},e}var u=Object(a.d)(i.a)(s(),l.b),b=a.d.button(c(),l.h),f=function(e){return o.createElement(b,{type:"button",onClick:e.onClick},o.createElement(u,null,e.children))};t.a=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DropdownElement",filename:"src/ions/dropdown/element/DropdownElement.tsx"}})},"./src/ions/icon/wrapper/SvgWrapper.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function l(){var e=Object(i.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  cursor: ",";\n  outline: none;\n  border-radius: 4px;\n  fill: ",";\n  opacity: ",";\n  transition: ",";\n  &:hover {\n    fill: ",";\n  }\n  &:active {\n    fill: ",";\n  }\n"]);return l=function(){return e},e}"undefined"!==typeof ColorProps&&ColorProps&&ColorProps===Object(ColorProps)&&Object.isExtensible(ColorProps)&&Object.defineProperty(ColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorProps",filename:"src/ions/icon/base/Icon.tsx"}});var c=function(e){var t=e.size;return"".concat(void 0===t?20:t,"px")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"color";return function(t){return t.animated?"none":t[e]||t.color||"inherit"}},u=a.d.svg.attrs(function(e){return{viewBox:e.viewBox||"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}})(l(),c,c,function(e){return e.disabled?"not-allowed":"pointer"},s(),function(e){return e.disabled?.5:1},function(e){return e.animated?"none":"all 0.1s ease-in"},s("hoverColor"),s("activeColor")),b=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/ions/icon/base/Icon.tsx"}});var f=function(e){var t=e.title,n=e.children,i=Object(r.a)(e,["title","children"]),a=!(!n.props||!n.props.children)&&function(e){return!!Array.from(e).find(function(e){return"animateTransform"===e.type})}(n.props.children);return o.createElement(b,Object.assign({animated:a},i),t?o.createElement("title",null,t):null,n)};t.a=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SvgWrapper",filename:"src/ions/icon/wrapper/SvgWrapper.tsx"}})},"./src/ions/text/StyledText.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");function o(){var e=Object(r.a)(["\n  font-family: inherit;\n  font-weight: 600;\n"]);return o=function(){return e},e}var i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js").d.span(o());"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyledText",filename:"src/ions/text/StyledText.tsx"}})},"./src/molecules/quick-actions-menu/QuickActionsMenu.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/react/index.js"),a=n("./src/atoms/dropdownMenu/DropdownMenu.tsx"),l=n("./src/atoms/button/Button.tsx"),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(){var e=Object(o.a)(["\n  width: 32px;\n  height: 32px;\n  position: relative;\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n  width: 32px;\n  height: 32px;\n"]);return u=function(){return e},e}var b=Object(c.d)(l.a)(u()),f=c.d.div(s()),m=function(e){var t=i.useState(!1),n=Object(r.a)(t,2),o=n[0],l=n[1],c=i.useRef(null);return i.createElement(f,null,i.createElement("div",{ref:c},i.createElement(b,{nature:"ghost",onClick:function(e){e.preventDefault(),l(!o)}},e.icon)),i.createElement(a.a,{dockingSide:"right",menuMaxHeight:e.maxMenuHeight,isOpen:o,controllerRef:c,containerRef:e.containerRef},e.children))};t.a=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"QuickActionsMenu",filename:"src/molecules/quick-actions-menu/QuickActionsMenu.tsx"}})},"./src/utility/helpers.ts":function(e,t,n){"use strict";function r(e){throw new Error("Unexpected value. Should have been never.")}n.d(t,"a",function(){return r}),r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"assertUnreachable",filename:"src/utility/helpers.ts"}})},"./src/utility/positionCompute.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return b}),n.d(t,"g",function(){return f}),n.d(t,"f",function(){return m}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p});var r=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=function(e){return/\d/.test(e)},i=function(e,t){return-1!==e.indexOf(t)},a=function(e){var t=e.height,n=e.width;return!(!t||!n)&&(o(t)||o(n)||!i(t,"%")||!i(n,"%"))};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkIsStyleComputed",filename:"src/utility/positionCompute.ts"}});var l=function(e){return isNaN(e)?0:e},c=function(e,t){var n=parseInt(e.paddingTop||"0",10)+parseInt(e.paddingBottom||"0",10)+parseInt(e.marginTop||"0",10)+parseInt(e.marginBottom||"0",10)+parseInt(t||e.height||"0",10);return l(n)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeElementHeight",filename:"src/utility/positionCompute.ts"}});var s=function(e,t){var n=parseInt(e.paddingLeft||"0",10)+parseInt(e.paddingRight||"0",10)+parseInt(e.marginLeft||"0",10)+parseInt(e.marginRight||"0",10)+parseInt(t||e.width||"0",10);return l(n)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeElementWidth",filename:"src/utility/positionCompute.ts"}});var u=function(e,t){var n=document.createElement("div");Object.values(e).forEach(function(t){t&&"length"!==t&&"parentRule"!==t&&!o(t.toString())&&(n.style[t]=e[t])}),t.appendChild(n);var r=n.getBoundingClientRect(),i=r.height,a=r.width;return n.remove(),{height:i.toString(),width:a.toString()}};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlternativeStyle",filename:"src/utility/positionCompute.ts"}});var b=function(e){return e?e.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBoundingRect",filename:"src/utility/positionCompute.ts"}});var f=function(e){if(e===window)return{maxHeight:window.innerHeight,minHeight:0,maxWidth:window.innerWidth,minWidth:0};var t=b(e);return{maxHeight:t.top+t.height,minHeight:t.top,minWidth:t.left,maxWidth:t.left+t.width}};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getContainerBoundaries",filename:"src/utility/positionCompute.ts"}});var m=function(e,t){return window.getComputedStyle(e,t?":before":void 0)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCSSComputedStyle",filename:"src/utility/positionCompute.ts"}});var d=function(e,t){var n=m(e.current,t),r=a(n)?{}:u(n,e.current),o=r.height,i=void 0===o?null:o,l=r.width,f=void 0===l?null:l;return{totalHeight:c(n,i),totalWidth:s(n,f),rect:b(e.current)}};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!==typeof ElementDimensions&&ElementDimensions&&ElementDimensions===Object(ElementDimensions)&&Object.isExtensible(ElementDimensions)&&Object.defineProperty(ElementDimensions,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!==typeof IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod===Object(IsElementOutOfContainerMethod)&&Object.isExtensible(IsElementOutOfContainerMethod)&&Object.defineProperty(IsElementOutOfContainerMethod,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IsElementOutOfContainerMethod",filename:"src/utility/positionCompute.ts"}});var p=function e(t,n,o,i,a){if(!n)throw new Error("Element cannot be displayed in the container Element/Window due to its incompatible size.Please consider reducing it or better position tooltipedelement in the screen.");if(!t({elementDimensions:i,containerDimensions:a,placement:n}))return n;var l=o.filter(function(e){return n!==e});return e(t,Object(r.a)(l,1)[0],l,i,a)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getElementPlacement",filename:"src/utility/positionCompute.ts"}})}}]);
//# sourceMappingURL=src-atoms-dropdown-menu-dropdown-menu~src-molecules-quick-actions-menu-quick-actions-menu.06d49715cdaabc48fe65.js.map