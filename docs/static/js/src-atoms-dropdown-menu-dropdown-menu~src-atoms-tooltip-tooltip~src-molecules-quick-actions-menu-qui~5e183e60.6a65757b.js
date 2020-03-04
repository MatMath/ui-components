(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/atoms/tooltip/Tooltip.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),a=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),s=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=n("../extension/Popup/node_modules/react/index.js"),b=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("./src/colors/colors.ts"),m=n("./src/utility/helpers.ts");10===Object(10)&&Object.isExtensible(10)&&Object.defineProperty(10,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"tooltipMargin",filename:"src/atoms/tooltip/helpers.ts"}});var p="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: ".concat(10,"px;\n"),d="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: ".concat(10,"px;\n"),O="\n  margin-bottom: 0;\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  margin-top: ".concat(10,"px;\n"),j=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 10px;\n  bottom: 100%;\n  left: 50%;\n";case"right":return p;case"left":return d;case"bottom":return O;default:return Object(m.a)(t)}};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipPosition",filename:"src/atoms/tooltip/helpers.ts"}});var g=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 5px;\n  bottom: 100%;\n  transform: translate(-50%, 0);\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(90deg) translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -4px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(-90deg) translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: -2px;\n  margin-top: -4px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(180deg) translate(-50%, 0);\n  top: 100%;\n  left: unset;\n  right: 50%\n  margin-top: 5px;\n";default:return Object(m.a)(t)}};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipArrowPosition",filename:"src/atoms/tooltip/helpers.ts"}});var h=function(e){switch(e){case"info":return f.b;case"success":return f.p;case"error":return f.k;default:return Object(m.a)(e)}};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTooltipBgColorByType",filename:"src/atoms/tooltip/helpers.ts"}});var v=function(e){var t=e.elementDimensions,n=e.containerDimensions,r=e.placement;switch(r){case"top":return t.rect.top-t.totalHeight<n.minHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"bottom":return t.rect.top+t.rect.height+t.totalHeight>n.maxHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"right":return t.rect.left+t.rect.width+t.totalWidth>n.maxWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;case"left":return t.rect.left-t.totalWidth<n.minWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;default:return Object(m.a)(r),!0}};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isTooltipOutOfContainer",filename:"src/atoms/tooltip/helpers.ts"}});var y=function(e,t){return e.filter(function(e){return e!==t})};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"removeOutOfScreenPlacement",filename:"src/atoms/tooltip/helpers.ts"}});var E=n("./src/utility/positionCompute.ts");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(){var e=Object(s.a)(["\n  > :first-child:hover {\n    position: relative;\n  }\n\n  > :first-child::before {\n    font-family: inherit;\n    visibility: hidden;\n    opacity: 0;\n    font-size: 0.75rem;\n    line-height: 1.25;\n    display: inline-block;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    padding: 8px;\n    background-color: ",";\n    content: attr(data-tooltip);\n    color: ",";\n    position: absolute;\n    max-width: ",";\n    width: max-content;\n    @supports (-ms-ime-align: auto) {\n      min-width: 50px;\n    }\n    word-wrap: break-word;\n    transform: translate(-50%, 0);\n    text-align: center;\n    z-index: 1001;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::before {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  > :first-child::after {\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid\n      ",";\n    position: absolute;\n    content: '';\n    z-index: 1002;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::after {\n    visibility: visible;\n    opacity: 1;\n  }\n"]);return x=function(){return e},e}"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/tooltip/Tooltip.tsx"}}),"undefined"!==typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&Object.defineProperty(WrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WrapperProps",filename:"src/atoms/tooltip/Tooltip.tsx"}});var P=b.d.span(x(),function(e){var t=e.type;return h(t)},f.q,function(e){var t=e.options;return t.tooltipMaxWidth?"".concat(t.tooltipMaxWidth,"px"):"300px"},j,function(e){var t=e.type;return h(t)},g),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(a.a)(this,Object(l.a)(t).call(this,e))).ref=u.createRef(),n.coordinates=void 0,n.tooltipPossiblePlacements=[],n.defaultPlacement=void 0,n.onHover=function(e){var t=e.currentTarget,i=n.coordinates,o=i.top,a=i.left,l=Object(E.e)(t),c=l.top,s=l.left;c===o&&s===a||(n.coordinates=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.coordinates,{},{top:c,left:s}),n.positionTooltip())},n.cloneChildren=function(e){return function(t,r){if(u.isValidElement(t))return u.cloneElement(t,{"data-tooltip":e,onMouseEnter:n.onHover,ref:0===r&&n.ref})}},n.defaultPlacement="top",n.state={placement:e.placement||n.defaultPlacement},n.tooltipPossiblePlacements=["top","left","right","bottom"],n.coordinates={top:null,left:null},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.placement===this.state.placement&&this.ref&&this.positionTooltip()}},{key:"positionTooltip",value:function(){if(this.ref.current){var e=Object(E.h)(this.ref,!0),t=this.props.options&&this.props.options.container&&this.props.options.container.current||window,n=Object(E.g)(t);try{var r=Object(E.i)(v,this.props.placement||this.defaultPlacement,this.tooltipPossiblePlacements,e,n);this.setState({placement:r})}catch(i){console.error("Error while computing DropdownMenu position",i)}}}},{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"Default":t,r=e.type,i=void 0===r?"info":r,o=e.children,a=e.options,l=void 0===a?{}:a,c=u.Children.map(o,this.cloneChildren(n));return u.createElement(P,{type:i,placement:this.state.placement||this.defaultPlacement,options:l},c)}}]),t}(u.PureComponent);t.a=F;"undefined"!==typeof F&&F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tooltip",filename:"src/atoms/tooltip/Tooltip.tsx"}})},"./src/colors/colors.ts":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"l",function(){return b}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return m}),n.d(t,"i",function(){return v}),n.d(t,"j",function(){return y}),n.d(t,"k",function(){return E}),n.d(t,"q",function(){return G}),n.d(t,"p",function(){return S}),n.d(t,"o",function(){return M});var r="#0E353D";"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen00",filename:"src/colors/colors.ts"}});var i="#3E5D64";"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen01",filename:"src/colors/colors.ts"}});var o="#6E868B";"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen02",filename:"src/colors/colors.ts"}});var a="#9FAEB1";"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen03",filename:"src/colors/colors.ts"}});var l="#CFD7D8";"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen04",filename:"src/colors/colors.ts"}});var c="#D9DFE0";"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen05",filename:"src/colors/colors.ts"}});var s="#F5F7F7";"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen06",filename:"src/colors/colors.ts"}});var u="#071A1E";"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashDarkerGreen00",filename:"src/colors/colors.ts"}});var b="#0E6476";"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen00",filename:"src/colors/colors.ts"}});var f="#3E8391";"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen01",filename:"src/colors/colors.ts"}});"#6EA2AD"===Object("#6EA2AD")&&Object.isExtensible("#6EA2AD")&&Object.defineProperty("#6EA2AD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen02",filename:"src/colors/colors.ts"}});var m="#9FC1C8";"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen03",filename:"src/colors/colors.ts"}});"#CFE0E4"===Object("#CFE0E4")&&Object.isExtensible("#CFE0E4")&&Object.defineProperty("#CFE0E4","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen04",filename:"src/colors/colors.ts"}});"#D9E6E9"===Object("#D9E6E9")&&Object.isExtensible("#D9E6E9")&&Object.defineProperty("#D9E6E9","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen05",filename:"src/colors/colors.ts"}});var p="#FDB5AF";p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink00",filename:"src/colors/colors.ts"}});var d="#FDC4BF";d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink01",filename:"src/colors/colors.ts"}});var O="#FED3CF";O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink02",filename:"src/colors/colors.ts"}});var j="#FEE1DF";j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink03",filename:"src/colors/colors.ts"}});var g="#FFF0EF";g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink04",filename:"src/colors/colors.ts"}});var h="#FFF3F2";h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink05",filename:"src/colors/colors.ts"}});"#FE5B33"===Object("#FE5B33")&&Object.isExtensible("#FE5B33")&&Object.defineProperty("#FE5B33","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange00",filename:"src/colors/colors.ts"}});"#FE7C5C"===Object("#FE7C5C")&&Object.isExtensible("#FE7C5C")&&Object.defineProperty("#FE7C5C","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange01",filename:"src/colors/colors.ts"}});"#FE9D85"===Object("#FE9D85")&&Object.isExtensible("#FE9D85")&&Object.defineProperty("#FE9D85","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange02",filename:"src/colors/colors.ts"}});"#FFBDAD"===Object("#FFBDAD")&&Object.isExtensible("#FFBDAD")&&Object.defineProperty("#FFBDAD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange03",filename:"src/colors/colors.ts"}});"#FFDED6"===Object("#FFDED6")&&Object.isExtensible("#FFDED6")&&Object.defineProperty("#FFDED6","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange04",filename:"src/colors/colors.ts"}});"#FFE5DE"===Object("#FFE5DE")&&Object.isExtensible("#FFE5DE")&&Object.defineProperty("#FFE5DE","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange05",filename:"src/colors/colors.ts"}});var v="#4E000D";"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed00",filename:"src/colors/colors.ts"}});var y="#8B0018";"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed01",filename:"src/colors/colors.ts"}});var E="#FF002D";"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed02",filename:"src/colors/colors.ts"}});"#FFA49F"===Object("#FFA49F")&&Object.isExtensible("#FFA49F")&&Object.defineProperty("#FFA49F","__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed03",filename:"src/colors/colors.ts"}});var _="#BF0A33";_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red00",filename:"src/colors/colors.ts"}});var x="#CC3B5C";x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red01",filename:"src/colors/colors.ts"}});var P="#D96C85";P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red02",filename:"src/colors/colors.ts"}});var F="#E59DAD";F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red03",filename:"src/colors/colors.ts"}});var D="#F2CED6";D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red04",filename:"src/colors/colors.ts"}});var C="#F5D8DE";C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red05",filename:"src/colors/colors.ts"}});var w="#615B57";w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey00",filename:"src/colors/colors.ts"}});var W="#999592";W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey01",filename:"src/colors/colors.ts"}});var B="#CCC7C2";B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey02",filename:"src/colors/colors.ts"}});var A="#D6D2CE";A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey03",filename:"src/colors/colors.ts"}});var k="#E0DDDA";k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey04",filename:"src/colors/colors.ts"}});var H="#EBE9E7";H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey05",filename:"src/colors/colors.ts"}});var I="#F5F4F3";I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey06",filename:"src/colors/colors.ts"}});var T="#000000";T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"black",filename:"src/colors/colors.ts"}});var G="#FFFFFF";"undefined"!==typeof G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"white",filename:"src/colors/colors.ts"}});var S="#20B422";"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"validatorGreen",filename:"src/colors/colors.ts"}});var M="transparent";"undefined"!==typeof M&&M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"transparent",filename:"src/colors/colors.ts"}})},"./src/utility/helpers.ts":function(e,t,n){"use strict";function r(e){throw new Error("Unexpected value. Should have been never.")}n.d(t,"a",function(){return r}),r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"assertUnreachable",filename:"src/utility/helpers.ts"}})},"./src/utility/positionCompute.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return b}),n.d(t,"g",function(){return f}),n.d(t,"f",function(){return m}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return d});var r=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=function(e){return/\d/.test(e)},o=function(e,t){return-1!==e.indexOf(t)},a=function(e){var t=e.height,n=e.width;return!(!t||!n)&&(i(t)||i(n)||!o(t,"%")||!o(n,"%"))};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkIsStyleComputed",filename:"src/utility/positionCompute.ts"}});var l=function(e){return isNaN(e)?0:e},c=function(e,t){var n=parseInt(e.paddingTop||"0",10)+parseInt(e.paddingBottom||"0",10)+parseInt(e.marginTop||"0",10)+parseInt(e.marginBottom||"0",10)+parseInt(t||e.height||"0",10);return l(n)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeElementHeight",filename:"src/utility/positionCompute.ts"}});var s=function(e,t){var n=parseInt(e.paddingLeft||"0",10)+parseInt(e.paddingRight||"0",10)+parseInt(e.marginLeft||"0",10)+parseInt(e.marginRight||"0",10)+parseInt(t||e.width||"0",10);return l(n)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeElementWidth",filename:"src/utility/positionCompute.ts"}});var u=function(e,t){var n=document.createElement("div");Object.values(e).forEach(function(t){t&&"length"!==t&&"parentRule"!==t&&!i(t.toString())&&(n.style[t]=e[t])}),t.appendChild(n);var r=n.getBoundingClientRect(),o=r.height,a=r.width;return n.remove(),{height:o.toString(),width:a.toString()}};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlternativeStyle",filename:"src/utility/positionCompute.ts"}});var b=function(e){return e?e.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBoundingRect",filename:"src/utility/positionCompute.ts"}});var f=function(e){if(e===window)return{maxHeight:window.innerHeight,minHeight:0,maxWidth:window.innerWidth,minWidth:0};var t=b(e);return{maxHeight:t.top+t.height,minHeight:t.top,minWidth:t.left,maxWidth:t.left+t.width}};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getContainerBoundaries",filename:"src/utility/positionCompute.ts"}});var m=function(e,t){return window.getComputedStyle(e,t?":before":void 0)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCSSComputedStyle",filename:"src/utility/positionCompute.ts"}});var p=function(e,t){var n=m(e.current,t),r=a(n)?{}:u(n,e.current),i=r.height,o=void 0===i?null:i,l=r.width,f=void 0===l?null:l;return{totalHeight:c(n,o),totalWidth:s(n,f),rect:b(e.current)}};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!==typeof ElementDimensions&&ElementDimensions&&ElementDimensions===Object(ElementDimensions)&&Object.isExtensible(ElementDimensions)&&Object.defineProperty(ElementDimensions,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ElementDimensions",filename:"src/utility/positionCompute.ts"}}),"undefined"!==typeof IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod&&IsElementOutOfContainerMethod===Object(IsElementOutOfContainerMethod)&&Object.isExtensible(IsElementOutOfContainerMethod)&&Object.defineProperty(IsElementOutOfContainerMethod,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IsElementOutOfContainerMethod",filename:"src/utility/positionCompute.ts"}});var d=function e(t,n,i,o,a){if(!n)throw new Error("Element cannot be displayed in the container Element/Window due to its incompatible size.Please consider reducing it or better position tooltipedelement in the screen.");if(!t({elementDimensions:o,containerDimensions:a,placement:n}))return n;var l=i.filter(function(e){return n!==e});return e(t,Object(r.a)(l,1)[0],l,o,a)};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getElementPlacement",filename:"src/utility/positionCompute.ts"}})}}]);
//# sourceMappingURL=src-atoms-dropdown-menu-dropdown-menu~src-atoms-tooltip-tooltip~src-molecules-quick-actions-menu-qui~5e183e60.8d142be7da2f0a6acf38.js.map