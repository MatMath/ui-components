(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{e2aI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return c});n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"CONTRIBUTING.md"}});var l={_frontmatter:r},b=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All you need to do is :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a file called ",Object(a.b)("inlineCode",{parentName:"li"},"yourComponent.mdx")),Object(a.b)("li",{parentName:"ul"},"Import your component and start specifying its behaviour (its basic usage with defaults, specified props ...)"),Object(a.b)("li",{parentName:"ul"},"Add Docz ",Object(a.b)("strong",null," ",Object(a.b)("inlineCode",{parentName:"li"},"<Playground>")," ")," built-in component to enable live code testing on your component"),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("strong",null,Object(a.b)("inlineCode",{parentName:"li"},"yarn docz:dev"))," in order to start a local server of our documented ui-components lib"),Object(a.b)("li",{parentName:"ul"},"Visualize your documentation: You can play/live test the components behaviour by clicking on ",Object(a.b)("inlineCode",{parentName:"li"},"<>")," button")),Object(a.b)("h3",{id:"code-linting-and-formatting"},"Code linting and formatting"),Object(a.b)("p",null,"We use ",Object(a.b)("inlineCode",{parentName:"p"},"prettier")," to format and ",Object(a.b)("inlineCode",{parentName:"p"},"eslint")," with typescript settings to lint our code. Your IDE should also be able to respect the rules defined with ",Object(a.b)("inlineCode",{parentName:"p"},"EditorConfig"),"."),Object(a.b)("h3",{id:"good-to-know-"},"Good to know :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you don't have an integrated prettier plugin in your IDE, we have a yarn task that formats your ",Object(a.b)("strong",null,"git staged files")," for you. You can run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn pretty-quick"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"An automatic task runs a ",Object(a.b)("strong",null,"prettier")," and ",Object(a.b)("strong",null,"eslint")," check on git staged files everytime you attempt to create a new ",Object(a.b)("strong",null,"commit")," in order to be sure that things are OK")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A check on the message format is executed as well on commit-msg hook using ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/conventional-changelog/commitlint"}),"commitlint tool"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We also execute the task ",Object(a.b)("strong",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn exec-docz-update"))," on post-commit that will check if we have added or updated any ",Object(a.b)("inlineCode",{parentName:"p"},"Docz")," documentation (by modifying or adding any .mdx file), regenerate new built documentation and add push it through a new dedicated commit : in this way, we assure that ",Object(a.b)("a",i({parentName:"p"},{href:"https://dashlane.github.io/ui-components"}),"https://dashlane.github.io/ui-components")," is always up to date.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",null,"Jest tests")," are run everytime you attempt to ",Object(a.b)("strong",null,"push new code on remote")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Theses checks/rules are quite strict but very beneficial: they protect us from having :poop: slip into our code base"))),Object(a.b)("h3",{id:"running-tests"},"Running tests"),Object(a.b)("p",null,"We use ",Object(a.b)("a",i({parentName:"p"},{href:"https://jestjs.io/"}),"Jest")," as testing framework and assertion library. We use ",Object(a.b)("a",i({parentName:"p"},{href:"https://airbnb.io/enzyme/"}),"Enzyme")," as a testing utility for react components and ",Object(a.b)("a",i({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),"snapshot tests")," to make sure that our UI does not change unexpectedly."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run tests, please execute"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"yarn test\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run tests in watch mode, please execute"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{}),"yarn test:watch\n")))),Object(a.b)("h2",{id:"build"},"Build"),Object(a.b)("p",null,"In order to build this library you can simply run"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"yarn build\n")),Object(a.b)("p",null,"which will generate in the folder ",Object(a.b)("inlineCode",{parentName:"p"},"build")," a transpiled and minified components as ",Object(a.b)("a",i({parentName:"p"},{href:"https://rollupjs.org/guide/en/#es-module-syntax"}),"ES6 modules")," (to allow tree-shaking) with the associated typing."),Object(a.b)("h2",{id:"release"},"Release"),Object(a.b)("p",null,"In order to relase and publish the library, run"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"yarn release\n")),Object(a.b)("p",null,"This will build your project, automaticaly assign a new version to the package and publish it."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"CONTRIBUTING.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---contributing-md-82aaa98ae36618cb1e08.js.map