(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{jjue:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",function(){return m}),a.d(n,"default",function(){return j});a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var i=a("/FXl"),t=a("TjRS"),d=a("kiqq"),o=a("IqsQ"),l=a("ZFoC"),c=a("YjeS"),b=a("lIIa"),r=a("pTzs"),p=a("QlSp"),s=a("tbUg");a("aD51");function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/sidenav/Sidenav.mdx"}});var S={_frontmatter:m},u=t.a;function j(e){var n,a=e.components,j=function(e,n){if(null==e)return{};var a,i,t={},d=Object.keys(e);for(i=0;i<d.length;i++)a=d[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,["components"]);return Object(i.b)(u,v({},S,j,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sidenav"},"Sidenav"),Object(i.b)("p",null,"A vertical side navigation panel. Takes all available height."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"sidenav-1"},"Sidenav"),Object(i.b)(l.d,{of:c.a,mdxType:"Props"}),Object(i.b)("h3",{id:"sidenavlink"},"SidenavLink"),Object(i.b)(l.d,{of:p.a,mdxType:"Props"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(l.c,{__position:2,__code:'<div style={{ gridColumn: 1, gridRow: 1 }}>\n  <Sidenav>\n    <SidenavHeader>\n      <BusinessLogo darkMode height={40} width={120} />\n    </SidenavHeader>\n  </Sidenav>\n</div>\n<div style={{ gridColumn: 1, gridRow: 2 }}>\n  <Sidenav>\n    <SidenavMenu>\n      <SidenavItem>\n        <a href="#">\n          <SidenavLink\n            hasNotification\n            icon={<HelpIcon />}\n            label="Notification, truncated label is too long"\n          />\n        </a>\n      </SidenavItem>\n      <SidenavItem>\n        <a href="#">\n          <SidenavLink icon={<HelpIcon />} label="Selected" selected />\n        </a>\n      </SidenavItem>\n    </SidenavMenu>\n  </Sidenav>\n</div>\n<div style={{ gridColumn: 2, gridRow: 1 }}>\n  <Sidenav collapsed>\n    <SidenavHeader>{/* D Logo */}</SidenavHeader>\n  </Sidenav>\n</div>\n<div style={{ gridColumn: 2, gridRow: 2 }}>\n  <Sidenav collapsed>\n    <SidenavMenu>\n      <SidenavItem collapsed>\n        <a href="#">\n          <SidenavLink\n            collapsed\n            hasNotification\n            icon={<HelpIcon />}\n            label="Notification, truncated label is too long"\n          />\n        </a>\n      </SidenavItem>\n      <SidenavItem>\n        <a href="#">\n          <SidenavLink\n            collapsed\n            icon={<HelpIcon />}\n            label="Selected"\n            selected\n          />\n        </a>\n      </SidenavItem>\n    </SidenavMenu>\n  </Sidenav>\n</div>',__scope:(n={props:j,DefaultLayout:t.a,BusinessLogo:d.a,HelpIcon:o.a,Playground:l.c,Props:l.d,Sidenav:c.a,SidenavHeader:b.a,SidenavItem:r.a,SidenavLink:p.a,SidenavMenu:s.a},n.DefaultLayout=t.a,n._frontmatter=m,n),style:{preview:{height:"500px",position:"relative",display:"grid",gridTemplateColumns:"256px 96px",gridTemplateRows:"89px 1fr",gridGap:"0 24px"}},mdxType:"Playground"},Object(i.b)("div",{style:{gridColumn:1,gridRow:1}},Object(i.b)(c.a,{mdxType:"Sidenav"},Object(i.b)(b.a,{mdxType:"SidenavHeader"},Object(i.b)(d.a,{darkMode:!0,height:40,width:120,mdxType:"BusinessLogo"})))),Object(i.b)("div",{style:{gridColumn:1,gridRow:2}},Object(i.b)(c.a,{mdxType:"Sidenav"},Object(i.b)(s.a,{mdxType:"SidenavMenu"},Object(i.b)(r.a,{mdxType:"SidenavItem"},Object(i.b)("a",{href:"#"},Object(i.b)(p.a,{hasNotification:!0,icon:Object(i.b)(o.a,{mdxType:"HelpIcon"}),label:"Notification, truncated label is too long",mdxType:"SidenavLink"}))),Object(i.b)(r.a,{mdxType:"SidenavItem"},Object(i.b)("a",{href:"#"},Object(i.b)(p.a,{icon:Object(i.b)(o.a,{mdxType:"HelpIcon"}),label:"Selected",selected:!0,mdxType:"SidenavLink"})))))),Object(i.b)("div",{style:{gridColumn:2,gridRow:1}},Object(i.b)(c.a,{collapsed:!0,mdxType:"Sidenav"},Object(i.b)(b.a,{mdxType:"SidenavHeader"}))),Object(i.b)("div",{style:{gridColumn:2,gridRow:2}},Object(i.b)(c.a,{collapsed:!0,mdxType:"Sidenav"},Object(i.b)(s.a,{mdxType:"SidenavMenu"},Object(i.b)(r.a,{collapsed:!0,mdxType:"SidenavItem"},Object(i.b)("a",{href:"#"},Object(i.b)(p.a,{collapsed:!0,hasNotification:!0,icon:Object(i.b)(o.a,{mdxType:"HelpIcon"}),label:"Notification, truncated label is too long",mdxType:"SidenavLink"}))),Object(i.b)(r.a,{mdxType:"SidenavItem"},Object(i.b)("a",{href:"#"},Object(i.b)(p.a,{collapsed:!0,icon:Object(i.b)(o.a,{mdxType:"HelpIcon"}),label:"Selected",selected:!0,mdxType:"SidenavLink"}))))))))}j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/sidenav/Sidenav.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-sidenav-sidenav-mdx-6c312e4100d032ef954c.js.map