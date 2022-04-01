var U=Object.defineProperty,q=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var O=(e,o,s)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,S=(e,o)=>{for(var s in o||(o={}))K.call(o,s)&&O(e,s,o[s]);if(M)for(var s of M(o))Z.call(o,s)&&O(e,s,o[s]);return e},L=(e,o)=>q(e,J(o));import{d as f,R as D,c as Q,u as d,o as u,a as p,r as v,b as R,w as i,m as X,e as V,f as C,g as $,h as Y,i as E,j as a,t as x,k as B,l as c,p as j,n as N,q as oo,s as to,v as eo,x as so,y as ao,z as m,A as ro,B as co,C as no,D as lo,E as io,F as uo,G as vo,H as po,I as _o,J as mo}from"./vendor.84fac4ed.js";const ho=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};ho();const go=["href"],g=f({props:L(S({},D.props),{inactiveClass:String}),setup(e){const o=e,s=Q(()=>typeof o.to=="string"&&o.to.startsWith("http"));return(r,t)=>d(s)?(u(),p("a",{key:0,href:o.to},[v(r.$slots,"default")],8,go)):(u(),R(d(D),X({key:1},o,{class:"tv-app-vue-router-link"}),{default:i(()=>[v(r.$slots,"default")]),_:3},16))}});var T=(e,o)=>{const s=e.__vccOpts||e;for(const[r,t]of o)s[r]=t;return s};const fo=e=>(j("data-v-7d547704"),e=e(),N(),e),ko={class:"tv-app-toolbar"},bo={class:"tv-app-toolbar-logo"},Co={key:0,class:"tv-app-toolbar-headline"},xo=["textContent"],yo={key:1,class:"tv-app-toolbar-navigation"},Bo={class:"tv-app-toolbar-social"},wo=fo(()=>a("div",{class:"tv-app-toolbar-flexbox-break-item"},null,-1)),$o={key:3,class:"tv-app-toolbar-menu"},To=f({props:{title:{default:"tv-app-toolbar"},minimized:{type:Boolean,default:!1},menuActive:{type:Boolean,default:!1},minimizeDisabled:{type:Boolean,default:!1},cssBackgroundColor:{default:""},cssMenuBackgroundColor:{default:""},cssBoxShadow:{default:""}},emits:["toolbarEvent"],setup(e,{emit:o}){const s=e;V(h=>({"5aec22b9":d(F),a3a017d0:e.cssBackgroundColor,dc63eb64:e.cssBoxShadow}));const r=C(""),t=C(!1),n=C(!1),l=C(!0),k="96px",b="48px",y="100%",z="220px";$(()=>t.value?k:b);const F=$(()=>l.value?z:y);function W(){l.value=!l.value,o("toolbarEvent",{name:"minimal",value:l.value})}function G(){t.value=!t.value,o("toolbarEvent",{name:"menuActive",value:t.value})}return Y(()=>{r.value=s.title,t.value=s.menuActive,n.value=s.minimizeDisabled,l.value=s.minimized}),(h,ct)=>{const A=E("font-awesome-icon");return u(),p("div",ko,[a("div",bo,[v(h.$slots,"logo",{},void 0,!0)]),l.value?B("",!0):(u(),p("div",Co,[a("h6",{textContent:x(s.title),class:"tv-app-toolbar-title"},null,8,xo)])),l.value?B("",!0):(u(),p("div",yo,[v(h.$slots,"navigation",{},void 0,!0)])),a("div",Bo,[c(g,{to:"http://www.linkedin.com/in/tvandame"},{default:i(()=>[c(A,{icon:["fab","linkedin"],size:"lg",color:"var(--tv-c-white-mute)"})]),_:1}),c(g,{to:"http://github.com/travis-vandame"},{default:i(()=>[c(A,{icon:["fab","github"],size:"lg",color:"var(--tv-c-white-mute)"})]),_:1}),v(h.$slots,"icons-social",{},void 0,!0)]),a("div",{class:"tv-app-toolbar-icon-button-settings",onClick:G},[v(h.$slots,"menu-icon",{},void 0,!0)]),n.value?B("",!0):(u(),p("div",{key:2,class:"tv-app-toolbar-icon-button-minimal",onClick:W},[v(h.$slots,"minimal-icon",{},void 0,!0)])),wo,t.value?(u(),p("div",$o,[v(h.$slots,"menu",{},void 0,!0)])):B("",!0)])}}});var Ho=T(To,[["__scopeId","data-v-7d547704"]]),Eo="/travis-vandame/assets/vite-logo.99b3ccee.svg",Vo="/travis-vandame/assets/vue-logo.da9b9095.svg",Io="/travis-vandame/assets/octocat-logo.ff7ce735.png";const H=e=>(j("data-v-6ef30bec"),e=e(),N(),e),zo={class:"tv-app-footer"},Ao={class:"vite"},Mo=H(()=>a("img",{alt:"Vite logo",class:"logo",src:Eo},null,-1)),Oo={class:"vue"},So=H(()=>a("img",{alt:"Vue logo",class:"logo",src:Vo},null,-1)),Lo={class:"mdn"},Do=H(()=>a("svg",{id:"mdn-logo",class:"logo",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 361 104.2","xml:space":"preserve"},[a("g",{class:"logo-m"},[a("path",{d:"M40.3,0L11.7,92.1H0L28.5,0H40.3z"}),a("path",{d:"M50.7,0v92.1H40.3V0H50.7z"}),a("path",{d:"M101.4,0v92.1H91V0H101.4z"}),a("path",{d:"M91,0L62.5,92.1H50.8L79.3,0H91z"}),a("path",{d:"M294,95.4h67v8.8h-67V95.4z"})]),a("g",{class:"logo-text"},[a("path",{d:"M198.7,72.8h-17.1v-5.5h3.8V51.5c0-3.7-0.7-6.3-2.1-7.9c-1.4-1.6-3.3-2.3-5.7-2.3c-3.2,0-5.6,1.1-7.2,3.4 s-2.4,4.6-2.5,6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.5c0-3.8-0.7-6.4-2.1-7.9c-1.4-1.5-3.3-2.3-5.6-2.3c-3.2,0-5.5,1.1-7.2,3.3 c-1.6,2.2-2.4,4.5-2.5,6.9v15.8h6.9v5.5h-20.2v-5.5h6V42h-6.1v-5.6h13.4v6.4c1.2-2.1,2.7-3.8,4.7-5.2c2-1.3,4.4-2,7.3-2 c2.8,0,5.3,0.7,7.5,2.1c2.2,1.4,3.7,3.5,4.5,6.4c1.1-2.5,2.7-4.5,4.9-6.1c2.2-1.6,4.8-2.4,7.9-2.4c3.5,0,6.5,1.1,8.9,3.3 c2.4,2.2,3.7,5.6,3.7,10.2v18.2h6.1V72.8z"}),a("path",{d:"M241.2,72.8h-13.2v-7.2c-1.2,2.2-2.8,4.1-4.9,5.6c-2.1,1.6-4.8,2.4-8.3,2.4c-4.8,0-8.7-1.6-11.6-4.9 c-2.9-3.2-4.3-7.7-4.3-13.3c0-5,1.3-9.6,4-13.7c2.6-4.1,6.9-6.2,12.8-6.2c5.7,0,9.8,2.2,12.3,6.5V22.3h-8.6v-5.6h15.8v50.6h6 V72.8z M227.9,56v-4.4c-0.1-3-1.2-5.5-3.2-7.3c-2-1.8-4.4-2.8-7.2-2.8c-3.6,0-6.3,1.3-8.2,3.9c-1.9,2.6-2.8,5.8-2.8,9.6 c0,4.1,1,7.3,3,9.5c2,2.2,4.5,3.3,7.4,3.3c3.2,0,5.8-1.3,7.8-3.8C226.8,61.4,227.8,58.7,227.9,56z"}),a("path",{d:"M286.4,72.8h-19.3v-5.5h6V51.5c0-3.7-0.7-6.3-2.2-7.9c-1.4-1.6-3.4-2.3-5.7-2.3c-3.1,0-5.6,1-7.4,3c-1.8,2-2.8,4.4-2.9,7 v15.9h6v5.5h-19.3v-5.5h6V42h-6.2v-5.6h13.6v6.2c2.6-4.6,6.8-6.9,12.7-6.9c3.6,0,6.7,1.1,9.2,3.3c2.5,2.2,3.7,5.6,3.7,10.2v18.2 h6V72.8z"})])],-1)),Po={class:"github"},Ro=H(()=>a("img",{alt:"GitHub logo",class:"logo",src:Io},null,-1)),jo=f({props:{isFixed:{type:Boolean,default:!0},cssBackgroundColor:{default:""}},setup(e){const o=e;return V(s=>({"497423d4":e.cssBackgroundColor})),C(o.isFixed?"fixed":"inline"),(s,r)=>(u(),p("div",zo,[a("div",Ao,[c(g,{to:"http://www.vitejs.dev"},{default:i(()=>[Mo]),_:1})]),a("div",Oo,[c(g,{to:"http://vuejs.org/"},{default:i(()=>[So]),_:1})]),a("div",Lo,[c(g,{to:"https://developer.mozilla.org/"},{default:i(()=>[Do]),_:1})]),a("div",Po,[c(g,{to:"http://www.github.com"},{default:i(()=>[Ro]),_:1})])]))}});var No=T(jo,[["__scopeId","data-v-6ef30bec"]]);const Fo=f({props:{text:String,to:String,cssType:String,cssOutline:Boolean,cssTextColor:String,cssBackgroundColor:String,cssBackgroundColorHover:String},setup(e){const o=e;V(y=>({fa63c45c:d(k),"9fb4d21a":d(l),"7f480c05":d(n),"15fee2ec":d(b)}));const s=oo(),r=$(()=>o.to?"router-link":"button"),t=$(()=>s.path===o.to),n=o.cssOutline?"1px solid green":"",l=o.cssTextColor,k=t?o.cssBackgroundColorHover:o.cssBackgroundColor,b=o.cssBackgroundColorHover;return(y,z)=>(u(),R(eo(d(r)),{to:o.to,tag:"button",class:"button",outline:o.cssOutline,cssTextColor:o.cssTextColor,cssBackgroundColor:o.cssBackgroundColor,cssBackgroundColorHover:o.cssBackgroundColorHover},{default:i(()=>[to(x(o.text)+" ",1),v(y.$slots,"default",{class:""},void 0,!0)]),_:3},8,["to","outline","cssTextColor","cssBackgroundColor","cssBackgroundColorHover"]))}});var _=T(Fo,[["__scopeId","data-v-e649c634"]]);const Wo={class:"display-information"},Go={class:"window caption"},Uo={class:"screen caption"},qo=f({setup(e){const o="0.0.0-alpha.1",s=screen.height,r=screen.width;return(t,n)=>(u(),p("div",Wo,[a("div",Go,[a("span",null," Version: "+x(d(o)),1)]),a("div",Uo,[a("span",null," Resolution "+x(d(s))+" x "+x(d(r)),1)])]))}});var Jo=T(qo,[["__scopeId","data-v-733a4a1e"]]);const Ko={class:"tv-app"},Zo={class:"tv-app-header"},Qo={class:"tv-app-body"},Xo={class:"tv-app-vue-router"},Yo={class:"tv-app-navigation"},ot=a("aside",{class:"tv-app-aside"},"ASide",-1),tt={class:"tv-app-footer"},et=f({setup(e){function o(s){}return(s,r)=>{const t=E("font-awesome-icon"),n=E("router-view");return u(),p("div",Ko,[a("div",Zo,[c(Ho,{class:"tv-app-toolbar",onToolbarEvent:o,title:"Travis VanDame",cssBackgroundColor:"var(--primary-color-dark)",cssMenuBackgroundColor:"",cssBoxShadow:"var(--primary-box-shadow)"},{logo:i(()=>[c(g,{to:"http://travis-vandame/github.io"},{default:i(()=>[c(t,{size:"lg",icon:["fa-brands","vuejs"]})]),_:1})]),navigation:i(()=>[c(_,{text:"Home",to:"/home",cssOutline:!1,cssTextColor:"var(--color-secondary-background-text)",cssBackgroundColor:"var(--color-secondary-background)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"About",to:"/about",cssOutline:!1,cssTextColor:"var(--color-secondary-background-text)",cssBackgroundColor:"var(--color-secondary-background)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"Commits",to:"/commit",cssOutline:!1,cssTextColor:"var(--color-secondary-background-text)",cssBackgroundColor:"var(--color-secondary-background)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"Project",to:"/project",cssOutline:!1,cssTextColor:"var(--color-secondary-background-text)",cssBackgroundColor:"var(--color-secondary-background)",cssBackgroundColorHover:"var(--color-background-soft)"})]),"icons-social":i(()=>[]),"menu-icon":i(()=>[c(t,{icon:["fas","gear"],size:"lg",color:"var(--tv-c-white-mute)"})]),menu:i(()=>[c(Jo)]),"minimal-icon":i(()=>[c(t,{icon:["fas","minimize"],size:"lg"})]),_:1})]),a("div",Qo,[a("div",Xo,[c(n)]),a("nav",Yo,[c(_,{text:"Home",to:"/home",cssOutline:!1,cssTextColor:"var(--tv-c-anchor-green)",cssBackgroundColor:"var(--tv-c-black-mute)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"About",to:"/about",cssOutline:!1,cssTextColor:"var(--tv-c-anchor-green)",cssBackgroundColor:"var(--tv-c-black-mute)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"Commits",to:"/commit",cssOutline:!1,cssTextColor:"var(--tv-c-anchor-green)",cssBackgroundColor:"var(--tv-c-black-mute)",cssBackgroundColorHover:"var(--color-background-soft)"}),c(_,{text:"Project",to:"/project",cssOutline:!1,cssTextColor:"var(--tv-c-anchor-green)",cssBackgroundColor:"var(--tv-c-black-mute)",cssBackgroundColorHover:"var(--color-background-soft)"})]),ot]),a("div",tt,[c(No,{isFixed:!0,cssBackgroundColor:"var(--primary-color-light)"})])])}}}),st="modulepreload",P={},at="/travis-vandame/",w=function(o,s){return!s||s.length===0?o():Promise.all(s.map(r=>{if(r=`${at}${r}`,r in P)return;P[r]=!0;const t=r.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":st,t||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),t)return new Promise((k,b)=>{l.addEventListener("load",k),l.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>o())},rt=so({history:ao("/travis-vandame/"),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>w(()=>import("./HomeView.4afca854.js"),["assets/HomeView.4afca854.js","assets/HomeView.901d953b.css","assets/vendor.84fac4ed.js"])},{path:"/about",name:"about",component:()=>w(()=>import("./AboutView.a350d62f.js"),["assets/AboutView.a350d62f.js","assets/AboutView.8afd10d7.css","assets/vendor.84fac4ed.js"])},{path:"/project",name:"Project",component:()=>w(()=>import("./ProjectView.71d37b99.js"),["assets/ProjectView.71d37b99.js","assets/ProjectView.556fd069.css","assets/TvCard.3a004a57.js","assets/TvCard.c674240c.css","assets/vendor.84fac4ed.js"])},{path:"/commit",name:"Commit",component:()=>w(()=>import("./CommitView.13ed9170.js"),["assets/CommitView.13ed9170.js","assets/CommitView.441cdde7.css","assets/TvCard.3a004a57.js","assets/TvCard.c674240c.css","assets/vendor.84fac4ed.js"])}]});m.add(ro);m.add(co);m.add(no);m.add(lo);m.add(io);m.add(uo);m.add(vo);m.add(po);const I=mo(et);I.component("font-awesome-icon",_o);I.use(rt);I.mount("#app");export{T as _,g as a};