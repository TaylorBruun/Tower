import{_ as u,e as r,t as l,P as p,T as v,A as s}from"./index.e3eab415.js";import{A as m,c as o,a as y,o as c,b as i,d as t,t as _,F as g,B as h,q as k,s as T,C as w}from"./vendor.da070880.js";const E={name:"Account",setup(){return m(async()=>{try{await r.getEvents(),await l.getMyTickets(),await r.getEventsForMyTickets()}catch(e){p.error(e)}}),{account:o(()=>s.account),myEvents:o(()=>s.eventsAttending),myTickets:o(()=>s.myTickets)}},components:{TowerEvent:v}},f=e=>(k("data-v-1375aae6"),e=e(),T(),e),A={class:"about text-center"},S=["src"],x={class:"row"},B=f(()=>t("h5",null,"Your Events:",-1));function I(e,P,b,a,F,M){const d=y("TowerEvent");return c(),i("div",A,[t("h1",null,"Welcome "+_(a.account.name),1),t("img",{class:"rounded",src:a.account.picture,alt:""},null,8,S),t("p",null,_(a.account.email),1),t("div",x,[B,(c(!0),i(g,null,h(a.myTickets,n=>(c(),w(d,{key:n.id,events:n.event},null,8,["events"]))),128))])])}var q=u(E,[["render",I],["__scopeId","data-v-1375aae6"]]);export{q as default};