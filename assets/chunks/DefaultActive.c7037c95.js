import{h as f,l as m,o as n,c,a as o,f as b,m as h,n as r,p as d,k as l,F as i,r as k,b as C,t as u}from"../app.a3389b21.js";const N=f({__name:"DefaultActive",setup(g){const{COMP:_,state:t,read:a}=m({state:{active:1}}),p=()=>{t.value.active===a.value.total-1?t.value.active=0:t.value.active++};return(x,y)=>{var s;const v=k("c-tabs");return n(),c(i,null,[o("button",{onClick:p},"change active"),b(v,{ref_key:"Tabs",ref:_},h({list:l(()=>[(n(),c(i,null,r(3,e=>o("span",{key:e}," tab "+u(e),1)),64))]),_:2},[r((s=d(a))==null?void 0:s.panels,e=>({name:e,fn:l(()=>[C(" this is the "+u(e),1)])}))]),1536)],64)}}});export{N as default};
