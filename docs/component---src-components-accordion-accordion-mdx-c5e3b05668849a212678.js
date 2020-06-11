(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{abbu:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",function(){return s}),o.d(n,"default",function(){return p});o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt");var t=o("/FXl"),i=o("TjRS"),c=o("ZFoC"),a=o("DjeI"),r=o("NjVb");o("aD51");function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/accordion/Accordion.mdx"}});var l={_frontmatter:s},b=i.a;function p(e){var n,o,p,h=e.components,u=function(e,n){if(null==e)return{};var o,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,["components"]);return Object(t.b)(b,d({},l,u,{components:h,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"accordion"},"Accordion"),Object(t.b)("p",null,"An Accordion component built by Accordion.Sections."),Object(t.b)("p",null,"Notes on using the Accordion component wrapper : "),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Wrap the Accordion.Sections and take control over its open states. "),Object(t.b)("li",{parentName:"ul"},'When using the Accordion component use the "opened" prop on the Accordion component to specify the indexes(indexed by 0) of the Sections you want to be opened instead of using the open prop on the Section'),Object(t.b)("li",{parentName:"ul"},"If maxOneSectionOpen is passed, it overrides allSectionsOpened.")),Object(t.b)("h2",{id:"properties"},"Properties"),Object(t.b)("h3",{id:"accordion-properties"},"Accordion Properties"),Object(t.b)(c.d,{of:a.a,mdxType:"Props"}),Object(t.b)("h3",{id:"accordionsection-properties"},"Accordion.Section Properties"),Object(t.b)(c.d,{of:r.a,mdxType:"Props"}),Object(t.b)("h2",{id:"usage"},"Usage"),Object(t.b)("p",null,"In this example, we have Accordion.Section's wrapped in an Accordion Component. The Accordion then has fully control over the open states of its sections based on its prop configuration."),Object(t.b)(c.c,{__position:2,__code:'<div style={{ backgroundColor: \'#F5F7F7\', padding: \'10px\', width: \'100%\' }}>\n  <Accordion maxOneSectionOpen opened={[1]}>\n    <Accordion.Section label="Sections can be wrapped in an Accordion">\n      <div style={{ height: 150 }}>\n        The Accordion will then have say of when its sections can be\n        opened/closed based on its configuration.\n        <br /> <br />\n        For example, if you want behaviour like this Accordion where it\n        enforces only one Section to be open at a time you can set the\n        "maxOneSectionOpen" to true. Try opening another section!\n      </div>\n    </Accordion.Section>\n\n    <Accordion.Section label="Have as many sections as you want!">\n      <div style={{ height: 250, fontSize: \'7px\' }}>\n        Up to you to define the content.\n      </div>\n    </Accordion.Section>\n\n    <Accordion.Section label="A sections interactivitiy can be locked" locked>\n      <div style={{ height: 100 }}>\n        This content is viewable but no pointer-events will be passed to it.\n      </div>\n    </Accordion.Section>\n\n    <Accordion.Section\n      label="Sections can also be blocked from opening"\n      locked\n      toggable={false}\n    >\n      <div style={{ height: 100 }}>This content is not accessbile yet.</div>\n    </Accordion.Section>\n  </Accordion>\n</div>',__scope:(n={props:u,DefaultLayout:i.a,Playground:c.c,Props:c.d,Accordion:a.a,Section:r.a},n.DefaultLayout=i.a,n._frontmatter=s,n),style:{display:"flex",flexDirection:"row"},mdxType:"Playground"},Object(t.b)("div",{style:{backgroundColor:"#F5F7F7",padding:"10px",width:"100%"}},Object(t.b)(a.a,{maxOneSectionOpen:!0,opened:[1],mdxType:"Accordion"},Object(t.b)(a.a.Section,{label:"Sections can be wrapped in an Accordion"},Object(t.b)("div",{style:{height:150}},"The Accordion will then have say of when its sections can be opened/closed based on its configuration.",Object(t.b)("br",null)," ",Object(t.b)("br",null),'For example, if you want behaviour like this Accordion where it enforces only one Section to be open at a time you can set the "maxOneSectionOpen" to true. Try opening another section!')),Object(t.b)(a.a.Section,{label:"Have as many sections as you want!"},Object(t.b)("div",{style:{height:250,fontSize:"7px"}},"Up to you to define the content.")),Object(t.b)(a.a.Section,{label:"A sections interactivitiy can be locked",locked:!0},Object(t.b)("div",{style:{height:100}},"This content is viewable but no pointer-events will be passed to it.")),Object(t.b)(a.a.Section,{label:"Sections can also be blocked from opening",locked:!0,toggable:!1},Object(t.b)("div",{style:{height:100}},"This content is not accessbile yet."))))),Object(t.b)("p",null,"Here we have just an Accordion.Section. It is fully in control of when it is opened or closed."),Object(t.b)(c.c,{__position:3,__code:"<div style={{ backgroundColor: '#F5F7F7', padding: '10px', width: '100%' }}>\n  <Accordion.Section label=\"Sections can exist standalone\">\n    <div style={{ height: 100 }}>\n      You don't always need to wrap Sections in an Accordion!\n    </div>\n  </Accordion.Section>\n</div>",__scope:(o={props:u,DefaultLayout:i.a,Playground:c.c,Props:c.d,Accordion:a.a,Section:r.a},o.DefaultLayout=i.a,o._frontmatter=s,o),style:{display:"flex",flexDirection:"row"},mdxType:"Playground"},Object(t.b)("div",{style:{backgroundColor:"#F5F7F7",padding:"10px",width:"100%"}},Object(t.b)(a.a.Section,{label:"Sections can exist standalone"},Object(t.b)("div",{style:{height:100}},"You don't always need to wrap Sections in an Accordion!")))),Object(t.b)("p",null,'You can use the "header" prop on the Accordion.Section to add a custom Title for the section.'),Object(t.b)(c.c,{__position:4,__code:"<div style={{ backgroundColor: '#F5F7F7', padding: '10px', width: '100%' }}>\n  <Accordion.Section\n    open={false}\n    header={\n      <div\n        style={{\n          width: '100%',\n          textAlign: 'center',\n          cursor: 'pointer',\n          height: '40px',\n          paddingTop: '15px',\n        }}\n      >\n        Can also define a completely custom Header as well 🌴\n      </div>\n    }\n  >\n    <div style={{ height: 100 }}>🌲🌲🌲</div>\n  </Accordion.Section>\n</div>",__scope:(p={props:u,DefaultLayout:i.a,Playground:c.c,Props:c.d,Accordion:a.a,Section:r.a},p.DefaultLayout=i.a,p._frontmatter=s,p),style:{display:"flex",flexDirection:"row"},mdxType:"Playground"},Object(t.b)("div",{style:{backgroundColor:"#F5F7F7",padding:"10px",width:"100%"}},Object(t.b)(a.a.Section,{open:!1,header:Object(t.b)("div",{style:{width:"100%",textAlign:"center",cursor:"pointer",height:"40px",paddingTop:"15px"}},"Can also define a completely custom Header as well 🌴")},Object(t.b)("div",{style:{height:100}},"🌲🌲🌲")))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/accordion/Accordion.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-accordion-accordion-mdx-c5e3b05668849a212678.js.map