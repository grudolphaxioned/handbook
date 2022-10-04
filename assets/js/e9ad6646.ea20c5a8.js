"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[8247],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(g,i(i({ref:t},u),{},{components:o})):n.createElement(g,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6344:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={id:"change",title:"Change management flow",sidebar_label:"Change management flow"},i=void 0,l={unversionedId:"playbook/change",id:"playbook/change",title:"Change management flow",description:"Below are the 4 key stages which we'd like to put all our significant changes through, namely: Hold, Assess, Trial and then Adopt.",source:"@site/docs/playbook/change.md",sourceDirName:"playbook",slug:"/playbook/change",permalink:"/handbook/docs/playbook/change",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/playbook/change.md",tags:[],version:"current",frontMatter:{id:"change",title:"Change management flow",sidebar_label:"Change management flow"},sidebar:"tutorialSidebar",previous:{title:"Core Software Development priciples",permalink:"/handbook/docs/playbook/principles/core-dev-priciples"},next:{title:"Culture",permalink:"/handbook/docs/playbook/culture"}},s={},p=[{value:"Adopt",id:"adopt",level:2},{value:"Trial",id:"trial",level:2},{value:"Assess",id:"assess",level:2},{value:"Hold",id:"hold",level:2},{value:"Backlog",id:"backlog",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below are the 4 key stages which we'd like to put all our significant changes through, namely: Hold, Assess, Trial and then Adopt."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"These are inspired by ThoughtWorks' Radar (more specifically, the rings).")),(0,a.kt)("p",null,"Here is a bit more about these:"),(0,a.kt)("h2",{id:"adopt"},"Adopt"),(0,a.kt)("p",null,"This represents things we seriously consider using as an agreed practice throughout the organization. We don't say that you should use these for every project; any tool should only be used in an appropriate context. However, if there is a relevant use case then we strongly recommend that you use the ones in 'Adopt'."),(0,a.kt)("p",null,"Example: Next.js, Prisma"),(0,a.kt)("h2",{id:"trial"},"Trial"),(0,a.kt)("p",null,"This comprises of things we think are ready for use, but not as completely proven as those in the Adopt ring. We think of applying these things on a trial basis, to decide whether they should be part of our toolkit/workflow. Using these on a client or a production environment requires senior oversight and support."),(0,a.kt)("p",null,'Typically, something will "graduate" from this into Adopt when we have a clear end-to-end application of a tool/workflow/process ready and documented. This doesn\'t have to be a final version or a final form of evolution/perfection. This can be gradual. Like an MVP (Minimum Viable Product).'),(0,a.kt)("p",null,"Example: Cypress, PHP_CodeSniffer WordPress Coding Standards, WordPress deployment and environment sync strategies"),(0,a.kt)("p",null,"Other times, things like Tailwind CSS will prove that they have specific applicability but might not be ready for full-scale adoption - and hence moved to Hold. Doesn't mean it is bad, familiarity/knowledge is great, and so is recognizing the limits/scalability."),(0,a.kt)("h2",{id:"assess"},"Assess"),(0,a.kt)("p",null,"This consists of things to look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for our clients and/or teams. These are things we feel are interesting and worth keeping an eye on."),(0,a.kt)("p",null,"For example: Redux Toolkit"),(0,a.kt)("h2",{id:"hold"},"Hold"),(0,a.kt)("p",null,"This can contain this thing that is even though widely accepted in the industry, or has a big enough buzz around or lot so of anticipation - we haven't had a good experience with or don't see broad enough applicability to our clients and team members."),(0,a.kt)("p",null,"For example: Gastsby boilerplate or Partytown"),(0,a.kt)("h2",{id:"backlog"},"Backlog"),(0,a.kt)("p",null,"To drop/list out all our ideas/blips/things we see or things we want to discuss with others around us."),(0,a.kt)("p",null,"If you have any questions, thoughts or suggestions then feel free to engage in a conversation here, or on the full roadmap here: Technology Roadmap."),(0,a.kt)("p",null,"If you see us jumping/skipping this, we welcome you to guide us through this process. More importantly, if you see something missing from the list and want to put it on our radar, then please add/share!"))}c.isMDXComponent=!0}}]);