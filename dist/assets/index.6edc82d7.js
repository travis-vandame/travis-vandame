import{d as v,o as h,c as d,a as t,t as M,p as V,b as k,e,f as a,w as r,u as f,R as z,g as H,F as w,r as p,h as C,i as x,j as L}from"./vendor.4f7de575.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}};j();var I="/travis-vandame/assets/logo.da9b9095.svg";var u=(o,n)=>{const l=o.__vccOpts||o;for(const[c,s]of n)l[c]=s;return l};const A=o=>(V("data-v-9e7c8828"),o=o(),k(),o),S={class:"greetings"},E={class:"green"},R=A(()=>t("h3",null,[e(" You\u2019ve successfully created a project with "),t("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),e(" + "),t("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),e(". What's next? ")],-1)),T=v({props:{msg:null},setup(o){return(n,l)=>(h(),d("div",S,[t("h1",E,M(o.msg),1),R]))}});var D=u(T,[["__scopeId","data-v-9e7c8828"]]);const O=t("img",{alt:"Vue logo",class:"logo",src:I,width:"125",height:"125"},null,-1),P={class:"wrapper"},W=e("Home"),N=e("About"),Y=v({setup(o){return(n,l)=>(h(),d(w,null,[t("header",null,[O,t("div",P,[a(D,{msg:"You did it!"}),t("nav",null,[a(f(z),{to:"/"},{default:r(()=>[W]),_:1}),a(f(z),{to:"/about"},{default:r(()=>[N]),_:1})])])]),a(f(H))],64))}}),q="modulepreload",g={},B="/travis-vandame/",F=function(n,l){return!l||l.length===0?n():Promise.all(l.map(c=>{if(c=`${B}${c}`,c in g)return;g[c]=!0;const s=c.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${i}`))return;const _=document.createElement("link");if(_.rel=s?"stylesheet":q,s||(_.as="script",_.crossOrigin=""),_.href=c,document.head.appendChild(_),s)return new Promise((y,b)=>{_.addEventListener("load",y),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>n())};const G={},U={class:"item"},K={class:"details"};function J(o,n){return h(),d("div",U,[t("i",null,[p(o.$slots,"icon",{},void 0,!0)]),t("div",K,[t("h3",null,[p(o.$slots,"heading",{},void 0,!0)]),p(o.$slots,"default",{},void 0,!0)])])}var m=u(G,[["render",J],["__scopeId","data-v-7a6fe88e"]]);const Q={},X={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Z=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),t1=[Z];function e1(o,n){return h(),d("svg",X,t1)}var o1=u(Q,[["render",e1]]);const s1={},n1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r1=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),a1=[r1];function c1(o,n){return h(),d("svg",n1,a1)}var i1=u(s1,[["render",c1]]);const l1={},_1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},h1=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),d1=[h1];function u1(o,n){return h(),d("svg",_1,d1)}var m1=u(l1,[["render",u1]]);const v1={},f1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},p1=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),z1=[p1];function g1(o,n){return h(),d("svg",f1,z1)}var w1=u(v1,[["render",g1]]);const $1={},y1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},b1=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),M1=[b1];function V1(o,n){return h(),d("svg",y1,M1)}var k1=u($1,[["render",V1]]);const H1=e("Documentation"),C1=e(" Vue\u2019s "),x1=t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),L1=e(" provides you with all information you need to get started. "),j1=e("Tooling"),I1=e(" This project is served and bundled with "),A1=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),S1=e(". The recommended IDE setup is "),E1=t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),R1=e(" + "),T1=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),D1=e(". If you need to test your components and web pages, check out "),O1=t("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),P1=e(" and "),W1=t("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),N1=e(". "),Y1=t("br",null,null,-1),q1=e(" More instructions are available in "),B1=t("code",null,"README.md",-1),F1=e(". "),G1=e("Ecosystem"),U1=e(" Get official tools and libraries for your project: "),K1=t("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),J1=e(", "),Q1=t("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),X1=e(", "),Z1=t("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),tt=e(", and "),et=t("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),ot=e(". If you need more resources, we suggest paying "),st=t("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),nt=e(" a visit. "),rt=e("Community"),at=e(" Got stuck? Ask your question on "),ct=t("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),it=e(", our official Discord server, or "),lt=t("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),_t=e(". You should also subscribe to "),ht=t("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),dt=e(" and follow the official "),ut=t("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),mt=e(" twitter account for latest news in the Vue world. "),vt=e("Support Vue"),ft=e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),pt=t("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),zt=e(". "),gt=v({setup(o){return(n,l)=>(h(),d(w,null,[a(m,null,{icon:r(()=>[a(o1)]),heading:r(()=>[H1]),default:r(()=>[C1,x1,L1]),_:1}),a(m,null,{icon:r(()=>[a(i1)]),heading:r(()=>[j1]),default:r(()=>[I1,A1,S1,E1,R1,T1,D1,O1,P1,W1,N1,Y1,q1,B1,F1]),_:1}),a(m,null,{icon:r(()=>[a(m1)]),heading:r(()=>[G1]),default:r(()=>[U1,K1,J1,Q1,X1,Z1,tt,et,ot,st,nt]),_:1}),a(m,null,{icon:r(()=>[a(w1)]),heading:r(()=>[rt]),default:r(()=>[at,ct,it,lt,_t,ht,dt,ut,mt]),_:1}),a(m,null,{icon:r(()=>[a(k1)]),heading:r(()=>[vt]),default:r(()=>[ft,pt,zt]),_:1})],64))}}),wt=v({setup(o){return(n,l)=>(h(),d("main",null,[a(gt)]))}}),$t=C({history:x("/travis-vandame/"),routes:[{path:"/",name:"home",component:wt},{path:"/about",name:"about",component:()=>F(()=>import("./AboutView.3dcf73e1.js"),["assets/AboutView.3dcf73e1.js","assets/AboutView.ab071ea6.css","assets/vendor.4f7de575.js"])}]}),$=L(Y);$.use($t);$.mount("#app");export{u as _};
