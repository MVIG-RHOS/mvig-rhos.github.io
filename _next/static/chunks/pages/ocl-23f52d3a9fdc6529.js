(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{4815:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ocl",function(){return t(6596)}])},144:function(e,n,t){"use strict";t.r(n),n.default={src:"/_next/static/media/oclTeaser.43b8f595.png",height:732,width:3327,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/APf4+PD06vHu7tzW1+3v9e7s4fLw5P38+wD27u/p5+vw8/ru7vHLzdjq5u3t6vD6+fhY0ixpuUotgQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},7782:function(e,n,t){"use strict";t.d(n,{jE:function(){return f},yb:function(){return h},zM:function(){return x}});var i=t(5893),r=t(4829),s=t(728),a=t(1561),o=t(4184),c=t.n(o),l=t(1664),d=t.n(l),u=t(7294),h="headerNav",f=(0,u.memo)(function(e){var n=e.navSections,t="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",r=c()(t,"text-orange-500"),s=c()(t,"text-neutral-100");return(0,i.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:h,children:(0,i.jsxs)("nav",{className:"flex justify-center gap-x-8",children:[(0,i.jsx)(d(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{className:s,children:"Home"},"home")}),n.map(function(e){return(0,i.jsx)(m,{activeClass:r,current:!1,inactiveClass:s,section:e},e)})]})})}),x=(0,u.memo)(function(e){var n=e.navSections,t=(0,u.useState)(!1),o=t[0],l=t[1],h=(0,u.useCallback)(function(){l(!o)},[o]),f="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",x=c()(f,"bg-neutral-900 text-white font-bold"),g=c()(f,"text-neutral-200 font-medium");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{"aria-label":"Menu Button",className:"fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:h,children:[(0,i.jsx)(a.Z,{className:"h-8 w-8 text-white"}),(0,i.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,i.jsx)(r.u.Root,{as:u.Fragment,show:o,children:(0,i.jsxs)(s.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:h,children:[(0,i.jsx)(r.u.Child,{as:u.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)(s.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,i.jsx)(r.u.Child,{as:u.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,i.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,i.jsxs)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:[(0,i.jsx)(d(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{className:g,onClick:h,children:"Home"},"home")}),n.map(function(e){return(0,i.jsx)(m,{activeClass:x,current:!1,inactiveClass:g,onClick:h,section:e},e)})]})})})]})})]})}),m=(0,u.memo)(function(e){var n=e.section,t=e.current,r=e.inactiveClass,s=e.activeClass,a=e.onClick;return(0,i.jsx)(d(),{href:"#".concat(n),passHref:!0,children:(0,i.jsx)("a",{className:c()(t?s:r),onClick:a,children:n},n)})})},2535:function(e,n,t){"use strict";t.d(n,{e:function(){return s}});var i=t(7294),r=t(7782),s=function(e,n){(0,i.useEffect)(function(){var t=document.querySelectorAll(e),i=Array.from(t),s=document.getElementById(r.yb),a=new IntersectionObserver(function(e){e.forEach(function(e){var t=e.boundingClientRect.y,r=e.target.getAttribute("id");if(s){var a,o={id:r,currentIndex:i.findIndex(function(e){return e.getAttribute("id")===r}),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:t<s.getBoundingClientRect().y,belowToc:!(t<s.getBoundingClientRect().y)};o.isIntersecting?n(o.id):!o.isIntersecting&&o.currentRatio<1&&o.currentRatio>0&&o.belowToc&&n(null===(a=i[o.currentIndex-1])||void 0===a?void 0:a.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return t.forEach(function(e){a.observe(e)}),function(){a.disconnect()}},[])}},6596:function(e,n,t){"use strict";t.r(n),t.d(n,{HeaderSectionIdList:function(){return m},SectionId:function(){return x}});var i=t(603),r=t(5893),s=t(7294),a=t(9770),o=t(6571),c=t(3031),l=t(11),d=t(2535),u=t(7782),h=t(5675),f=t.n(h),x={About:"about",Demo:"demo",News:"news",Download:"download",Disclaimer:"disclaimer",Publications:"publications"},m=[x.About,x.Demo,x.News,x.Download,x.Publications,],g=[["2023.11",(0,r.jsxs)(r.Fragment,{children:["We release the code and data of OCL on ",(0,r.jsx)("a",{className:"underline text-sky-600",href:"https://github.com/silicx/ObjectConceptLearning",children:"Github"}),"."]}),],["2023.07",(0,r.jsx)(r.Fragment,{children:"OCL will appear at ICCV 2023."}),],["2022.12",(0,r.jsxs)(r.Fragment,{children:["Our preprint paper is available on ",(0,r.jsx)("a",{className:"underline text-sky-600",href:"https://arxiv.org/abs/2212.02710",children:"arXiv"}),"."]}),],],b=(0,s.memo)(function(){return(0,r.jsxs)(a.Z,{description:"O.C.L",title:"OCL",children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{className:"relative flex h-screen-no w-screen items-center justify-center bg-neutral-100",children:(0,r.jsxs)("div",{className:"flex flex-col z-10 w-full max-w-screen-lg p-4 lg:px-0 items-center text-center ",children:[(0,r.jsx)("div",{className:"h-20"}),(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl p-4",children:"OCL: Object Concept Learning"}),(0,r.jsx)("p",{className:"text-gray-600 text-2xl",children:"MVIG-RHOS, SJTU"})]})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.About,children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"grid justify-items-center pb-8",children:(0,r.jsx)("div",{className:"w-3/4",children:(0,r.jsx)(f(),{alt:"demo",src:t(144),className:"place-self-center"})})}),(0,r.jsx)("div",{children:"Understanding objects is a central building block of artificial intelligence, especially for embodied AI. Even though object recognition excels with deep learning, current machines still struggle to learn higher-level knowledge, e.g., what attributes does an object have, what can we do with an object. In this work, we propose a challenging Object Concept Learning (OCL) task to push the envelope of object understanding. It requires machines to reason out object affordances and simultaneously give the reason: what attributes make an object possesses these affordances. To support OCL, we build a densely annotated knowledge base including extensive labels for three levels of object concept: categories, attributes, and affordances, together with their causal relations. By analyzing the causal structure of OCL, we present a strong baseline, Object Concept Reasoning Network (OCRN). It leverages causal intervention and concept instantiation to infer the three levels following their causal relations."})]})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.Demo,children:(0,r.jsx)(l.Z,{title:"Demo",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("video",{autoPlay:!0,loop:!0,controls:!0,children:(0,r.jsx)("source",{src:"/media/demo_small.mp4",type:"video/mp4"})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 pt-6 gap-1",children:[(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("b",{children:"Left-top"}),": object (in yellow box) "]}),(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("b",{children:"Right-top"}),": key causal graph "]}),(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("b",{children:"Left-bottom"}),": affordance prediction score "]}),(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("b",{children:"Right-bottom"}),": key causal relations "]}),(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("a",{className:"underline text-sky-600",href:"https://youtu.be/NTyJmTzhfkE",children:"Full demo on Youtube"})]}),(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("a",{className:"underline text-sky-600",href:"https://www.bilibili.com/video/BV1Vm4y1V7aC/?share_source=copy_web&vd_source=33c221d66435cf014ff6a86a1ddd62b8",children:"Full demo on BiliBili"})]})]})]})})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.News,children:(0,r.jsx)(l.Z,{title:"News and Olds",children:(0,r.jsx)("div",{className:"flex flex-col",children:g.map(function(e,n){var t=(0,i.Z)(e,2),s=t[0],a=t[1];return(0,r.jsxs)("div",{className:"pb-2",children:[(0,r.jsxs)("span",{className:"flex-1 font-bold sm:flex-none",children:["[",s,"] "]}),(0,r.jsx)("span",{className:"flex-1 sm:flex-none",children:a})]},"".concat(s,"-").concat(n))})})})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.Download,children:(0,r.jsx)(l.Z,{title:"Download",children:(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("div",{children:(0,r.jsxs)("p",{children:["Our code and full data are available on ",(0,r.jsx)("a",{className:"underline text-sky-600",href:"https://github.com/silicx/ObjectConceptLearning",children:"Github"}),".",(0,r.jsx)("br",{})]})})})})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.Publications,children:(0,r.jsx)(l.Z,{title:"Publications",children:(0,r.jsxs)("div",{className:"flex flex-col divide-y-2",children:[(0,r.jsx)("div",{children:"To use our data and code in your project, please cite:"}),(0,r.jsx)("div",{className:"text-sm bg-neutral-300 p-2",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"@inproceedings{li2023beyond,\n  title={Beyond Object Recognition: A New Benchmark towards Object Concept Learning},\n  author={Li, Yong-Lu and Xu, Yue and Xu, Xinyu and Mao, Xiaohan and Yao, Yuan and Liu, Siqi and Lu, Cewu},\n  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},\n  pages={20029--20040},\n  year={2023}\n}"})})})]})})}),(0,r.jsx)(c.Z,{className:"bg-neutral-100",sectionId:x.Disclaimer,children:(0,r.jsx)(l.Z,{title:"Disclaimer",children:(0,r.jsx)("div",{className:"flex flex-col divide-y-4",children:(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:(0,r.jsx)("img",{alt:"Creative Commons License",style:{borderWidth:0},src:"https://i.creativecommons.org/l/by-nc/4.0/88x31.png"})}),(0,r.jsx)("br",{}),"This work is licensed under a ",(0,r.jsx)("a",{className:"text-sky-600",rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:"Creative Commons Attribution-NonCommercial 4.0 International License"}),".",(0,r.jsx)("br",{}),"In our database, 75,578 images and their anntations are extracted from existing datasets (COCOa, ImageNet-150K, aPY, SUN). 4,885 images are from internet. We only provide image links for ",(0,r.jsx)("b",{children:"research"})," purposes."]})})})}),(0,r.jsx)(o.Z,{})]})}),p=(0,s.memo)(function(){var e=(0,s.useState)(null),n=e[0],t=e[1],i=(0,s.useMemo)(function(){return m},[]),a=(0,s.useCallback)(function(e){e&&t(e)},[]);return(0,d.e)(i.map(function(e){return"#".concat(e)}).join(","),a),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.zM,{currentSection:n,navSections:i}),(0,r.jsx)(u.jE,{currentSection:n,navSections:i})]})});n.default=b},603:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,n)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[526,342,675,345,774,888,179],function(){return e(e.s=4815)}),_N_E=e.O()}]);