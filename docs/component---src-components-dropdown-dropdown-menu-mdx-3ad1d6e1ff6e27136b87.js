(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{y3M9:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return u}),t.d(n,"default",function(){return m});t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var o=t("mXGw"),r=t("/FXl"),l=t("TjRS"),p=t("ZFoC"),i=t("b2Bc"),d=t("7nGx"),a=t("odlw"),c=t("ao7s");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/dropdown/DropdownMenu.mdx"}});var b={_frontmatter:u},f=l.a;function m(e){var n,t,m,w=e.components,O=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(r.b)(f,s({},b,O,{components:w,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"dropdown-menu"},"Dropdown Menu"),Object(r.b)("p",null,"The Dropdown Menu can be used to display a menu of options that can be hidden."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(p.d,{of:i.a,mdxType:"Props"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"The dropdown can be defined alongside a controller. To display it correctly:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"both components must be wrapped in a container with a relative or absolute position")),Object(r.b)("li",{parentName:"ul"},"the controller's ref must be passed to the Dropdown")),Object(r.b)(p.c,{__position:1,__code:'() => {\n  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false)\n  const controllerRef = React.useRef(null)\n  return (\n    <div style={{ position: \'relative\' }}>\n      <div ref={controllerRef}>\n        <Button\n          nature="primary"\n          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}\n        >\n          Click Me\n        </Button>\n      </div>\n      <DropdownMenu\n        isOpen={dropdownIsOpen}\n        dockingSide="left"\n        placement="bottom"\n        controllerRef={controllerRef}\n      >\n        <DropdownElement>Hello</DropdownElement>\n        <DropdownElement>Holà</DropdownElement>\n        <DropdownElement>Salut</DropdownElement>\n        <DropdownElement>Hallo</DropdownElement>\n      </DropdownMenu>\n    </div>\n  )\n}',__scope:(n={props:O,DefaultLayout:l.a,Playground:p.c,Props:p.d,DropdownMenu:i.a,DropdownElement:d.a,Button:a.a,PhoneIcon:c.a},n.DefaultLayout=l.a,n._frontmatter=u,n),style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=o.useState(!1),n=e[0],t=e[1],l=o.useRef(null);return Object(r.b)("div",{style:{position:"relative"}},Object(r.b)("div",{ref:l},Object(r.b)(a.a,{nature:"primary",onClick:function(){return t(!n)},mdxType:"Button"},"Click Me")),Object(r.b)(i.a,{isOpen:n,dockingSide:"left",placement:"bottom",controllerRef:l,mdxType:"DropdownMenu"},Object(r.b)(d.a,{mdxType:"DropdownElement"},"Hello"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Holà"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Salut"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Hallo")))}),Object(r.b)("p",null,"Dropdown can be defined as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"placed below or above their controllerRef,"),Object(r.b)("li",{parentName:"ul"},"aligned on their controller left or right")),Object(r.b)(p.c,{__position:2,__code:"() => {\n  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false)\n  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false)\n  const controller1Ref = React.useRef(null)\n  const controller2Ref = React.useRef(null)\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        width: '100%',\n        height: '100%',\n      }}\n    >\n      <div style={{ position: 'relative' }}>\n        <div ref={controller1Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}\n          >\n            TOP\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown1IsOpen}\n          placement=\"top\"\n          controllerRef={controller1Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Holà</DropdownElement>\n        </DropdownMenu>\n      </div>\n      <div style={{ position: 'relative' }}>\n        <div ref={controller2Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown2IsOpen(!dropdown2IsOpen)}\n          >\n            RIGHT\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown2IsOpen}\n          dockingSide=\"right\"\n          controllerRef={controller2Ref}\n        >\n          <DropdownElement>Good Morning</DropdownElement>\n          <DropdownElement>Konnichiha</DropdownElement>\n          <DropdownElement>Guten Tag</DropdownElement>\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:(t={props:O,DefaultLayout:l.a,Playground:p.c,Props:p.d,DropdownMenu:i.a,DropdownElement:d.a,Button:a.a,PhoneIcon:c.a},t.DefaultLayout=l.a,t._frontmatter=u,t),style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=o.useState(!1),n=e[0],t=e[1],l=o.useState(!1),p=l[0],c=l[1],s=o.useRef(null),u=o.useRef(null);return Object(r.b)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%"}},Object(r.b)("div",{style:{position:"relative"}},Object(r.b)("div",{ref:s},Object(r.b)(a.a,{nature:"primary",onClick:function(){return t(!n)},mdxType:"Button"},"TOP")),Object(r.b)(i.a,{isOpen:n,placement:"top",controllerRef:s,mdxType:"DropdownMenu"},Object(r.b)(d.a,{mdxType:"DropdownElement"},"Hello"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Holà"))),Object(r.b)("div",{style:{position:"relative"}},Object(r.b)("div",{ref:u},Object(r.b)(a.a,{nature:"primary",onClick:function(){return c(!p)},mdxType:"Button"},"RIGHT")),Object(r.b)(i.a,{isOpen:p,dockingSide:"right",controllerRef:u,mdxType:"DropdownMenu"},Object(r.b)(d.a,{mdxType:"DropdownElement"},"Good Morning"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Konnichiha"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Guten Tag"))))}),Object(r.b)("h2",{id:"position-within-a-container"},"Position within a container"),Object(r.b)("p",null,"Dropdown computes its ideal position within a container:\nif you pass ",Object(r.b)("inlineCode",{parentName:"p"},"top")," as the placement prop but there is not enough space within the container,\nthe menu position will be overwritten to ",Object(r.b)("inlineCode",{parentName:"p"},"bottom"),"."),Object(r.b)(p.c,{__position:3,__code:"() => {\n  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false)\n  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false)\n  const containerRef = React.useRef(null)\n  const button1Ref = React.useRef(null)\n  const button2Ref = React.useRef(null)\n  return (\n    <div\n      ref={containerRef}\n      style={{\n        height: '250px',\n        display: 'flex',\n        background: 'ghostwhite',\n        justifyContent: 'space-between',\n      }}\n    >\n      <div style={{ position: 'relative', height: 'fit-content' }}>\n        <div ref={button1Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown1IsOpen}\n          dockingSide=\"left\"\n          placement=\"top\"\n          containerRef={containerRef}\n          controllerRef={button1Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Holà</DropdownElement>\n          <DropdownElement>Salut</DropdownElement>\n        </DropdownMenu>\n      </div>\n      <div\n        style={{\n          position: 'relative',\n          height: 'fit-content',\n          alignSelf: 'flex-end',\n        }}\n      >\n        <div ref={button2Ref}>\n          <Button\n            nature=\"secondary\"\n            onClick={() => {\n              setDropdown2IsOpen(!dropdown2IsOpen)\n            }}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown2IsOpen}\n          dockingSide=\"left\"\n          placement=\"bottom\"\n          containerRef={containerRef}\n          controllerRef={button2Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Holà</DropdownElement>\n          <DropdownElement>Salut</DropdownElement>\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:(m={props:O,DefaultLayout:l.a,Playground:p.c,Props:p.d,DropdownMenu:i.a,DropdownElement:d.a,Button:a.a,PhoneIcon:c.a},m.DefaultLayout=l.a,m._frontmatter=u,m),mdxType:"Playground"},function(){var e=o.useState(!1),n=e[0],t=e[1],l=o.useState(!1),p=l[0],c=l[1],s=o.useRef(null),u=o.useRef(null),b=o.useRef(null);return Object(r.b)("div",{ref:s,style:{height:"250px",display:"flex",background:"ghostwhite",justifyContent:"space-between"}},Object(r.b)("div",{style:{position:"relative",height:"fit-content"}},Object(r.b)("div",{ref:u},Object(r.b)(a.a,{nature:"primary",onClick:function(){return t(!n)},mdxType:"Button"},"Click Me")),Object(r.b)(i.a,{isOpen:n,dockingSide:"left",placement:"top",containerRef:s,controllerRef:u,mdxType:"DropdownMenu"},Object(r.b)(d.a,{mdxType:"DropdownElement"},"Hello"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Holà"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Salut"))),Object(r.b)("div",{style:{position:"relative",height:"fit-content",alignSelf:"flex-end"}},Object(r.b)("div",{ref:b},Object(r.b)(a.a,{nature:"secondary",onClick:function(){c(!p)},mdxType:"Button"},"Click Me")),Object(r.b)(i.a,{isOpen:p,dockingSide:"left",placement:"bottom",containerRef:s,controllerRef:b,mdxType:"DropdownMenu"},Object(r.b)(d.a,{mdxType:"DropdownElement"},"Hello"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Holà"),Object(r.b)(d.a,{mdxType:"DropdownElement"},"Salut"))))}))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/dropdown/DropdownMenu.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-dropdown-dropdown-menu-mdx-3ad1d6e1ff6e27136b87.js.map