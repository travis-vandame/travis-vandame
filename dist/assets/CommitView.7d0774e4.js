import{T as g,a as r}from"./TvCard.7ff210df.js";import{_ as h,a as l}from"./index.9c172b69.js";import{d as f,f as x,h as y,o as e,a as o,j as i,L as p,M as v,K as C,b as m,w as a,l as d,s as _,t as u}from"./vendor.84fac4ed.js";const b={class:"tv-app-commit-view"},V={class:"tv-app-commit-view-logo"},k=C('<div class="tv-app-commit-view-logo-item" data-v-18c2e454><span class="tv-app-commit-view-logo-item-letter-t" data-v-18c2e454>T</span><span class="tv-app-commit-view-logo-item-letter-v" data-v-18c2e454>V</span><span data-v-18c2e454><div class="tv-app-commit-view-logo-item-title" data-v-18c2e454><span class="tv-app-commit-view-logo-item-title-text-one" data-v-18c2e454>GitHub</span><span class="tv-app-commit-view-logo-item-title-text-two" data-v-18c2e454>Commits <span class="tv-app-commit-view-text-used" data-v-18c2e454>made</span></span><span class="tv-app-commit-view-logo-item-title-text-three" data-v-18c2e454>Current user commits</span></div></span></div>',1),T={class:"tv-app-commit-view-scroll-desktop"},B={class:"tv-app-commit-view-scroll-mobile"},N=f({setup(G){const s=x();async function w({owner:c},{repo:n}){s.value=await g.fetchOwnerRepoCommits(c,n)}return y(()=>{w({owner:"travis-vandame"},{repo:"travis-vandame"})}),(c,n)=>(e(),o("div",b,[i("div",V,[k,i("div",T,[(e(!0),o(p,null,v(s.value,t=>(e(),m(r,{class:"tv-card",key:t.node_id,title:t.author.login,secondary:"",content:t.commit.message},{secondary:a(()=>[d(l,{to:t.html_url},{default:a(()=>[_(u(t.commit.tree.sha.substring(0,7)),1)]),_:2},1032,["to"])]),_:2},1032,["title","content"]))),128))])]),i("div",B,[(e(!0),o(p,null,v(s.value,t=>(e(),m(r,{class:"tv-card",key:t.node_id,title:t.author.login,secondary:"",content:t.commit.message},{secondary:a(()=>[d(l,{to:t.html_url},{default:a(()=>[_(u(t.commit.tree.sha.substring(0,7)),1)]),_:2},1032,["to"])]),_:2},1032,["title","content"]))),128))])]))}});var M=h(N,[["__scopeId","data-v-18c2e454"]]);export{M as default};
