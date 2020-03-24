(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/atoms/tooltip/Tooltip.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),p=n("./node_modules/react/index.js"),m=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),u=n("./src/colors/colors.ts"),d=n("./src/utility/helpers.ts");10===Object(10)&&Object.isExtensible(10)&&Object.defineProperty(10,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"tooltipMargin",filename:"src/atoms/tooltip/helpers.ts"}});var b="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: ".concat(10,"px;\n"),f="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: ".concat(10,"px;\n"),h="\n  margin-bottom: 0;\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  margin-top: ".concat(10,"px;\n"),O=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 10px;\n  bottom: 100%;\n  left: 50%;\n";case"right":return b;case"left":return f;case"bottom":return h;default:return Object(d.a)(t)}};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipPosition",filename:"src/atoms/tooltip/helpers.ts"}});var g=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 5px;\n  bottom: 100%;\n  transform: translate(-50%, 0);\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(90deg) translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -4px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(-90deg) translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: -2px;\n  margin-top: -4px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(180deg) translate(-50%, 0);\n  top: 100%;\n  left: unset;\n  right: 50%\n  margin-top: 5px;\n";default:return Object(d.a)(t)}};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipArrowPosition",filename:"src/atoms/tooltip/helpers.ts"}});var j=function(e){return e.outOfContainer?"":"visibility: visible;\n       opacity: 1;"};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"displayIfInContainer",filename:"src/atoms/tooltip/helpers.ts"}});var x=function(e){switch(e){case"info":return u.b;case"success":return u.p;case"error":return u.k;default:return Object(d.a)(e)}};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTooltipBgColorByType",filename:"src/atoms/tooltip/helpers.ts"}});var y=function(e){var t=e.elementDimensions,n=e.containerDimensions,o=e.placement;switch(o){case"top":return t.rect.top-t.totalHeight<n.minHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"bottom":return t.rect.top+t.rect.height+t.totalHeight>n.maxHeight||t.rect.left+t.rect.width/2+t.totalWidth/2>n.maxWidth||t.rect.left+t.rect.width/2-t.totalWidth/2<n.minWidth;case"right":return t.rect.left+t.rect.width+t.totalWidth>n.maxWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;case"left":return t.rect.left-t.totalWidth<n.minWidth||t.rect.top+t.rect.height/2-t.totalHeight/2<n.minHeight||t.rect.top+t.rect.height/2+t.totalHeight/2>n.maxHeight;default:return Object(d.a)(o),!0}};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isTooltipOutOfContainer",filename:"src/atoms/tooltip/helpers.ts"}});var v=function(e,t){return e.filter(function(e){return e!==t})};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"removeOutOfScreenPlacement",filename:"src/atoms/tooltip/helpers.ts"}});var P=n("./src/utility/positionCompute.ts");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function w(){var e=Object(c.a)(["\n  > :first-child:hover {\n    position: relative;\n  }\n\n  > :first-child::before {\n    font-family: inherit;\n    visibility: hidden;\n    opacity: 0;\n    font-size: 0.75rem;\n    line-height: 1.25;\n    display: inline-block;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    padding: 8px;\n    background-color: ",";\n    content: attr(data-tooltip);\n    color: ",";\n    position: absolute;\n    max-width: ",";\n    width: max-content;\n    @supports (-ms-ime-align: auto) {\n      min-width: 50px;\n    }\n    word-wrap: break-word;\n    transform: translate(-50%, 0);\n    text-align: center;\n    z-index: 1001;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::before {\n    ","\n  }\n\n  > :first-child::after {\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid\n      ",";\n    position: absolute;\n    content: '';\n    z-index: 1002;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::after {\n    ","\n  }\n"]);return w=function(){return e},e}"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/tooltip/Tooltip.tsx"}}),"undefined"!==typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&Object.defineProperty(WrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WrapperProps",filename:"src/atoms/tooltip/Tooltip.tsx"}});var E=m.d.span(w(),function(e){var t=e.type;return x(t)},u.q,function(e){var t=e.options;return t.tooltipMaxWidth?"".concat(t.tooltipMaxWidth,"px"):"300px"},O,j,function(e){var t=e.type;return x(t)},g,j),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).ref=p.createRef(),n.coordinates=void 0,n.tooltipPossiblePlacements=[],n.defaultPlacement=void 0,n.onHover=function(e){var t=e.currentTarget,r=n.coordinates,i=r.top,a=r.left,s=Object(P.d)(t),l=s.top,c=s.left;l===i&&c===a||(n.coordinates=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.coordinates,{},{top:l,left:c}),n.positionTooltip())},n.cloneChildren=function(e){return function(t,o){if(p.isValidElement(t))return p.cloneElement(t,{"data-tooltip":e,onMouseEnter:n.onHover,ref:0===o&&n.ref})}},n.defaultPlacement="top",n.state={placement:e.placement||n.defaultPlacement,outOfContainer:!1},n.tooltipPossiblePlacements=["top","left","right","bottom"],n.coordinates={top:null,left:null},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.placement===this.state.placement&&this.ref&&this.positionTooltip()}},{key:"positionTooltip",value:function(){if(this.ref.current){var e=Object(P.g)({elementRef:this.ref,elementIsBefore:!0}),t=this.props.options&&this.props.options.container&&this.props.options.container.current||window,n=Object(P.f)(t);try{var o=Object(P.h)({isElementOutOfContainerMethod:y,placement:this.props.placement||this.defaultPlacement,possibilities:this.tooltipPossiblePlacements,elementDimensions:e,containerDimensions:n});this.setState({placement:o})}catch(r){this.setState({outOfContainer:!0}),console.error("Error while computing Tooltip position",r)}}}},{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"Default":t,o=e.type,r=void 0===o?"info":o,i=e.children,a=e.options,s=void 0===a?{}:a,l=p.Children.map(p.createElement("div",null,i),this.cloneChildren(n));return p.createElement(E,{type:r,placement:this.state.placement||this.defaultPlacement,outOfContainer:this.state.outOfContainer,options:s},l)}}]),t}(p.PureComponent);t.a=k;"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tooltip",filename:"src/atoms/tooltip/Tooltip.tsx"}})},"./src/molecules/quick-actions-menu/QuickActionsMenu.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),a=n.n(i),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/atoms/button/Button.tsx"),p=n("./src/ions/icon/wrapper/SvgWrapper.tsx"),m=function(e){return i.createElement(p.a,e,i.createElement(i.Fragment,null,i.createElement("path",{d:"M4 9H6V11H4V9Z"}),i.createElement("path",{d:"M9 9H11V11H9V9Z"}),i.createElement("path",{d:"M14 9H16V11H14V9Z"})))},u=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MoreIcon",filename:"src/atoms/icons/MoreIcon.tsx"}});var d=n("./src/ions/dropdown/element/DropdownElement.tsx"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),f=n("./src/atoms/dropdownMenu/DropdownMenu.tsx"),h=n("./src/atoms/tooltip/Tooltip.tsx"),O=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),g=n("./src/colors/colors.ts");function j(){var e=Object(b.a)(["\n  width: 32px;\n  height: 32px;\n  position: relative;\n"]);return j=function(){return e},e}function x(){var e=Object(b.a)(["\n  width: 32px;\n  height: 32px;\n  fill: ",";\n"]);return x=function(){return e},e}var y=Object(O.d)(c.a)(x(),g.b),v=O.d.div(j()),P=function(e){var t=i.useRef(null);return i.createElement(v,null,i.createElement("div",{ref:t},i.createElement(h.a,{placement:"left",title:e.tooltipTitle,options:{tooltipMaxWidth:172}},i.createElement(y,{nature:"ghost",onClick:e.onClick,disabled:e.isDisabled},e.icon))),i.createElement(f.a,{dockingSide:"right",menuMaxHeight:e.maxMenuHeight,isOpen:e.isOpen,controllerRef:t,containerRef:e.containerRef,menuClassName:e.menuClassName},e.children))},_=P;P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"QuickActionsMenu",filename:"src/molecules/quick-actions-menu/QuickActionsMenu.tsx"}}),n.d(t,"default",function(){return k});var w={},E="wrapper";function k(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(E,Object.assign({},w,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"quick-actions-menu"},"Quick Actions Menu"),Object(s.b)("p",null,"Quick action menu is a specific components meant for users to quickly copy\na credential's information like login and password.\nIt is not meant to be used in an other context. If you're looking for customizable dropdown,\ncheck out the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./src-atoms-button-button"}),"Dropdown Menu component"),"."),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(l.d,{of:_,mdxType:"Props"}),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(l.c,{__position:1,__code:'() => {\n  const [isOpen, setIsOpen] = React.useState(false)\n  const onClick = e => {\n    e.preventDefault()\n    setIsOpen(!isOpen)\n  }\n  return (\n    <QuickActionsMenu\n      icon={<MoreIcon />}\n      isOpen={isOpen}\n      onClick={onClick}\n      tooltipTitle="Tooltip"\n    >\n      <DropdownElement>Copy Password</DropdownElement>\n      <DropdownElement>Copy Login</DropdownElement>\n    </QuickActionsMenu>\n  )\n}',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Button:c.a,MoreIcon:u,DropdownElement:d.a,QuickActionsMenu:_},style:{display:"flex",flexDirection:"row",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=a.a.useState(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(s.b)(_,{icon:Object(s.b)(u,{mdxType:"MoreIcon"}),isOpen:n,onClick:function(e){e.preventDefault(),r(!n)},tooltipTitle:"Tooltip",mdxType:"QuickActionsMenu"},Object(s.b)(d.a,{mdxType:"DropdownElement"},"Copy Password"),Object(s.b)(d.a,{mdxType:"DropdownElement"},"Copy Login"))}))}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/molecules/quick-actions-menu/QuickActionsMenu.mdx"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=src-molecules-quick-actions-menu-quick-actions-menu.a1e62b77580bd2c57717.js.map