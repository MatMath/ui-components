(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{G6li:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",function(){return r}),o.d(t,"default",function(){return d});o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt");var i=o("/FXl"),a=o("TjRS"),n=o("mXGw"),l=o("ZFoC"),s=o("Yp4V"),u=o("1IDM");o("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/tooltip/Tooltip.mdx"}});var m={_frontmatter:r},p=a.a;function d(e){var t,o,d,b,h,f=e.components,g=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(i.b)(p,c({},m,g,{components:f,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tooltip"},"Tooltip"),Object(i.b)("p",null,"A tooltip component that gives an extra information about something when the user moves the mouse pointer over an element.\nThis tooltip component is dynamic: it adapts to the container size. It means that if you specify a ",Object(i.b)("inlineCode",{parentName:"p"},"right")," placement for the tooltip and that placement doesn't fit in the current container, then the tooltip placement will be changed automatically to the first possible placement. The alternative placements order is defined like following ",Object(i.b)("inlineCode",{parentName:"p"},"['top', 'left', 'right', 'bottom']"),". If the tooltip-ed element changes its position in the container (due to scroll or window resize for example) then the placement will be calculated again to fit the new display.\nAlso, if the text of the tooltip changes while its being displayed, then the placement will be calculated again to make sure that it still fits in the container with the new content."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(l.d,{of:s.a,mdxType:"Props"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"basic-usage"},"Basic usage"),Object(i.b)("p",null,"Examples below show usage of the tooltip with different titles and types. You can change the size of the window (by opening the dev console for example) to see how the tooltip of the last button adapts to the new container size (placement goes from right to top)."),Object(i.b)(l.c,{__position:1,__code:'<div>\n  <Tooltip title="Oups!" type="error">\n    <button>Tooltip me to the default (top)</button>\n  </Tooltip>\n</div>\n<div>\n  <Tooltip\n    placement="left"\n    title="At vero eos et accusamus"\n    placement="right"\n  >\n    <button>Tooltip me to the right</button>\n  </Tooltip>\n</div>\n<div>\n  <Tooltip\n    placement="bottom"\n    title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"\n    placement="bottom"\n    type="success"\n  >\n    <button>Tooltip me to the bottom with success</button>\n  </Tooltip>\n</div>\n<div>\n  <Tooltip\n    placement="right"\n    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "\n    placement="right"\n    type="success"\n  >\n    <button>Tooltip me to the right with a long text</button>\n  </Tooltip>\n</div>',__scope:(t={props:g,DefaultLayout:a.a,useRef:n.useRef,Playground:l.c,Props:l.d,Tooltip:s.a,TooltipDemo:u.a},t.DefaultLayout=a.a,t._frontmatter=r,t),className:{preview:"playground-base"},mdxType:"Playground"},Object(i.b)("div",null,Object(i.b)(s.a,{title:"Oups!",type:"error",mdxType:"Tooltip"},Object(i.b)("button",null,"Tooltip me to the default (top)"))),Object(i.b)("div",null,Object(i.b)(s.a,((o={placement:"left",title:"At vero eos et accusamus"}).placement="right",o.mdxType="Tooltip",o),Object(i.b)("button",null,"Tooltip me to the right"))),Object(i.b)("div",null,Object(i.b)(s.a,((d={placement:"bottom",title:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"}).placement="bottom",d.type="success",d.mdxType="Tooltip",d),Object(i.b)("button",null,"Tooltip me to the bottom with success"))),Object(i.b)("div",null,Object(i.b)(s.a,((b={placement:"right",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}).placement="right",b.type="success",b.mdxType="Tooltip",b),Object(i.b)("button",null,"Tooltip me to the right with a long text")))),Object(i.b)("h3",{id:"advanced-settings"},"Advanced settings"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Tooltip can be configured with extra options in order to customize it with the desired behaviour. This is where you can make use of the ",Object(i.b)("inlineCode",{parentName:"li"},"options")," props."),Object(i.b)("li",{parentName:"ul"},'The Example below shows a list of items. A tooltip is displayed once we hover the "hover me" button of each item. The placement of tooltip is configured to ',Object(i.b)("inlineCode",{parentName:"li"},"bottom")," for all items except for the item number ",Object(i.b)("inlineCode",{parentName:"li"},"1")," that has a ",Object(i.b)("inlineCode",{parentName:"li"},"left")," placement. The code associated to this example is located in the ",Object(i.b)("inlineCode",{parentName:"li"},"TooltipDemo.tsx")," file."),Object(i.b)("li",{parentName:"ul"},"This example shows how to configure a custom ",Object(i.b)("inlineCode",{parentName:"li"},"container")," (the ",Object(i.b)("inlineCode",{parentName:"li"},"ul")," list in our case) if you need to handle the tooltip placement calculation in a specific zone. The placement will be then calculated in the range of that container instead of Window."),Object(i.b)("li",{parentName:"ul"},"Also you can configure a ",Object(i.b)("inlineCode",{parentName:"li"},"tooltipMaxWidth")," to make the max-width property smaller than default (300px) in order to adapt to the tooltip size to the new container."),Object(i.b)("li",{parentName:"ul"},"You will notice as you test the behaviour below that for the fourth item the tooltip will be displayed on top instead of specified placement ",Object(i.b)("inlineCode",{parentName:"li"},"bottom")," since the space left doesn't allow it to be visible. And if you scroll in the list, then the space will be sufficient for it to be displayed so the placement will be set back to bottom."),Object(i.b)("li",{parentName:"ul"},'You will notice as well that once you click on the "hover me" button of the item number ',Object(i.b)("inlineCode",{parentName:"li"},"1")," the tooltip title will be updated and its placement will be automatically calculated again to fit into the container with the new long text.")),Object(i.b)(l.c,{__position:2,__code:"<TooltipDemo />",__scope:(h={props:g,DefaultLayout:a.a,useRef:n.useRef,Playground:l.c,Props:l.d,Tooltip:s.a,TooltipDemo:u.a},h.DefaultLayout=a.a,h._frontmatter=r,h),className:{preview:"playground-base"},mdxType:"Playground"},Object(i.b)(u.a,{mdxType:"TooltipDemo"})))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/tooltip/Tooltip.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-tooltip-tooltip-mdx-bd9f76575243f59333fd.js.map