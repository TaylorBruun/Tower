import{_ as l,e as c,P as v,T as d,E as f,A as m}from"./index.e3eab415.js";import{i as b,A as u,c as p,a as E,o as r,b as a,d as e,F as y,B as k,C}from"./vendor.da070880.js";const _={name:"Home",setup(){const s=b("");return u(async()=>{try{await c.getEvents()}catch(t){v.error(t)}}),{filterEvents:s,events:p(()=>m.events.filter(t=>s.value?t.type==s.value:!0))}},components:{TowerEvent:d,EventForm:f}},w={class:"bg-dark container-fluid"},g={class:"row"},x={class:"col d-flex justify-content-around"},B={class:"row d-flex justify-content-between"};function j(s,t,A,o,T,F){const i=E("TowerEvent");return r(),a("div",w,[e("div",g,[e("div",x,[e("button",{onClick:t[0]||(t[0]=n=>o.filterEvents=""),class:"m-1 btn btn-secondary"},"All"),e("button",{onClick:t[1]||(t[1]=n=>o.filterEvents="concert"),class:"m-1 btn btn-secondary"},"Concert"),e("button",{onClick:t[2]||(t[2]=n=>o.filterEvents="convention"),class:"m-1 btn btn-secondary"},"Convention"),e("button",{onClick:t[3]||(t[3]=n=>o.filterEvents="sport"),class:"m-1 btn btn-secondary"},"Sport"),e("button",{onClick:t[4]||(t[4]=n=>o.filterEvents="digital"),class:"m-1 btn btn-secondary"},"Digital")])]),e("div",B,[(r(!0),a(y,null,k(o.events,n=>(r(),C(i,{key:n.id,events:n},null,8,["events"]))),128))])])}var $=l(_,[["render",j]]);export{$ as default};