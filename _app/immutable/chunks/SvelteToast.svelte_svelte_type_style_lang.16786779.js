import{w as m}from"./index.010a69b6.js";const b={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}};function v(){const{subscribe:l,update:o}=m(new Array),c={};let u=0;function i(t){return t instanceof Object}function f(t="default",s={}){return c[t]=s,c}function p(t,s){const n={target:"default",...i(t)?t:{...s,msg:t}},e=c[n.target]||{},r={...b,...e,...n,theme:{...e.theme,...n.theme},classes:[...e.classes||[],...n.classes||[]],id:++u};return o(a=>r.reversed?[...a,r]:[r,...a]),u}function _(t){o(s=>{if(!s.length||t===0)return[];if(typeof t=="function")return s.filter(e=>t(e));if(i(t))return s.filter(e=>e.target!==t.target);const n=t||Math.max(...s.map(e=>e.id));return s.filter(e=>e.id!==n)})}function d(t,s){const n=i(t)?t:{...s,id:t};o(e=>{const r=e.findIndex(a=>a.id===n.id);return r>-1&&(e[r]={...e[r],...n}),e})}return{subscribe:l,push:p,pop:_,set:d,_init:f}}const h=v();export{h as t};
