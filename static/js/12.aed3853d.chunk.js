(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{558:function(t,e,n){"use strict";n.d(e,"m",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"k",(function(){return x})),n.d(e,"h",(function(){return b})),n.d(e,"e",(function(){return g})),n.d(e,"g",(function(){return O})),n.d(e,"j",(function(){return w})),n.d(e,"l",(function(){return k})),n.d(e,"a",(function(){return y})),n.d(e,"i",(function(){return q})),n.d(e,"n",(function(){return A})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return h}));var a=n(24),r=n.n(a),c=n(110),o=n(605),i=n.n(o),s="https://arredobimbo.com:8443",u=n(572),l=n.n(u),d=n(92),f=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=d.a.auth().currentUser,t.t0=e,!t.t0){t.next=6;break}return t.next=5,e.getIdToken();case 5:t.t0=t.sent;case 6:return n=t.t0,a={headers:{Authorization:"Bearer "+n}},t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a,c){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.post(s+"/uploadFoto",{url:a,id:e,indice:n},o).then((function(t){console.log("vettore_url",a),c(t.data,a)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(s+"/delete-tmp",n).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(s+"/lista-prodotti-dashboard",n).then((function(t){l.a.set("lista_prodotti",t.data),e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(s+"/acquisti-tmp",n).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,i.a.get(s+"/lista-acquisti",a).then((function(t){for(var a=[],r=0;r<t.data.length;r++)for(var c=0;c<e.length;c++)e[c].idArticolo==t.data[r].idArticoloAcquistato&&(console.log(t.data[r]),a.push({id:t.data[r].idAcquisto,name:t.data[r].nome+" "+t.data[r].cognome,image:"",date:t.data[r].dataAcquisto.split("T")[0],amount:t.data[r].totalePrezzo,numeroacquisti:t.data[r].numeroAcquisti,orderStatus:t.data[r].stato,colore:e[c].coloriDisp[t.data[r].indiceColore].color,nomearticolo:t.data[r].nomeArticolo,articoloCompleto:t.data[r],tracking:t.data[r].nrtracking,idordine:t.data[r].idordine,personalizzazione:t.data[r].personalizzazione,taglia:t.data[r].taglia}),r==t.data.length-1&&n(a))})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,i.a.post(s+"/insertArticoli",e,a).then((function(t){n(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a,c){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.put(s+"/updateArticolo",{id:e,lista_foto:n,values:a},o).then((function(t){c(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(s+"/lista-foto",n).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,i.a.get(s+"/ordini-odierni",a).then((function(t){var a=[];if(0!=t.data.length)for(var r=0;r<t.data.length;r++)for(var c=0;c<e.length;c++)e[c].idArticolo===t.data[r].idArticoloAcquistato&&(null!=t.data.Nome&&null!=t.data.Cognome?a.push({id:r,name:t.data[r].Nome+" "+t.data[r].Cognome,amount:t.data[r].totalePrezzo,articolo:e[c].nomeArticolo,numero_acquisti:t.data[r].numeroAcquisti}):a.push({id:r,name:t.data[r].emailAcquirente,amount:t.data[r].totalePrezzo,articolo:e[c].nomeArticolo,numero_acquisti:t.data[r].numeroAcquisti}),r==t.data.length-1&&n(a));else n(a)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.post(s+"/top-acquisti",{periodo:n},c).then((function(t){var n=[];if(0!=t.data.length)for(var r=0;r<t.data.length;r++)for(var c=0;c<e.length;c++)e[c].idArticolo==t.data[r].idArticoloAcquistato&&(0==e[c].coloriDisp[t.data[r].indiceColore].image.length?n.push({name:e[c].nomeArticolo,image:"",category:e[c].categoria,sales:t.data[r].sum,status:"up",venduti:t.data[r].numerototaleacquisti}):n.push({name:e[c].nomeArticolo,image:e[c].coloriDisp[t.data[r].indiceColore].image[0],category:e[c].categoria,sales:t.data[r].sum,status:"up",venduti:t.data[r].numerototaleacquisti}),r==t.data.length-1&&a(n));else a(n)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.put(s+"/update-tracking",{tracking:e,indice:n},c).then((function(t){a(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,i.a.put(s+"/conferma-tracking",{indice:e},a).then((function(t){n(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),q=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.post(s+"/insert-foto-ecommerce",{url:e,colonna_db:n},c).then((function(t){a(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),A=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.put(s+"/upload-foto-ecommerce",{url:e,colonna_db:n},c).then((function(t){a(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},576:function(t,e,n){"use strict";var a=n(2),r=n(14),c=(n(0),n(913)),o=function(t){return Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({},t),{},{className:"ant-avatar-".concat(t.type),children:t.text}))};e.a=function(t){var e=t.name,n=t.suffix,r=t.subTitle,c=t.id,i=t.type,s=t.src,u=t.icon,l=t.size,d=t.shape,f=t.gap,p=t.text,h=t.onNameClick;return Object(a.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[o({icon:u,src:s,type:i,size:l,shape:d,gap:f,text:p}),Object(a.jsxs)("div",{className:"ml-2",children:[Object(a.jsxs)("div",{children:[h?Object(a.jsx)("div",{onClick:function(){return h({name:e,subTitle:r,src:s,id:c})},className:"avatar-status-name clickable",children:e}):Object(a.jsx)("div",{className:"avatar-status-name",children:e}),Object(a.jsx)("span",{children:n})]}),Object(a.jsx)("div",{className:"text-muted avatar-status-subtitle",children:r})]})]})}},698:function(t,e){},858:function(t,e){},859:function(t,e){},860:function(t,e){},861:function(t,e){},862:function(t,e){},900:function(t,e,n){"use strict";n.r(e);var a=n(79),r=n(2),c=n(0),o=n(159),i=n(913),s=n(570),u=n(571),l=n(618),d=n(909),f=n(63),p=n(178),h=n(576),m=n(619),j=n(558),v=(n(722),n(892),o.a.Option),b=[{title:"Cliente",dataIndex:"name",key:"name",render:function(t,e){return Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)(i.a,{size:30,className:"font-size-sm",style:{backgroundColor:e.avatarColor},children:f.a.getNameInitial(t)}),Object(r.jsx)("span",{className:"ml-2",children:t})]})}},{title:"Articolo acquistato",dataIndex:"articolo",key:"articolo"},{title:"Spesa effettuata",dataIndex:"amount",key:"amount"},{title:"Numero acquisti",dataIndex:"numero_acquisti",key:"numero_acquisti"}];e.default=function(){var t=Object(c.useState)(1),e=(Object(a.a)(t,1)[0],Object(c.useState)(1)),n=Object(a.a)(e,2),i=(n[0],n[1],Object(c.useState)([])),f=Object(a.a)(i,2),x=f[0],g=f[1],O=Object(c.useState)([]),w=Object(a.a)(O,2),k=w[0],y=w[1],q=Object(c.useState)([]),A=Object(a.a)(q,2),z=A[0],N=A[1],C=Object(c.useState)([]),S=Object(a.a)(C,2),_=(S[0],S[1]);Object(c.useEffect)((function(){Object(j.f)((function(t){console.log("lista-prodotti-dashboard",t),N(t),Object(j.j)(t,"week",(function(e){console.log("top-acquisti : ",e),Object(j.g)(t,(function(t){g(e),y(t),console.log("ordini odierni",t),Object(j.d)((function(t){console.log("acquisti temporanei",t),_(t)}))}))}))}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(s.a,{gutter:16,children:Object(r.jsx)(u.a,{xs:24,sm:24,md:24,lg:24,children:Object(r.jsx)(l.a,{title:"Ordini del giorno",children:Object(r.jsx)(d.a,{className:"no-border-last",columns:b,dataSource:k,rowKey:"id",pagination:!0})})})}),Object(r.jsx)(s.a,{gutter:16,children:Object(r.jsx)(u.a,{xs:24,sm:24,md:24,lg:24,children:Object(r.jsx)(l.a,{title:"I prodotti pi\xf9 venduti",extra:Object(r.jsxs)(o.a,{onChange:function(t){g([]),Object(j.j)(z,t,(function(t){g(t)}))},defaultValue:"week",size:"small",style:{minWidth:110},children:[Object(r.jsx)(v,{value:"week",children:"Questa settimana"}),Object(r.jsx)(v,{value:"month",children:"Questo mese"}),Object(r.jsx)(v,{value:"year",children:"Questo anno"})]}),children:x.map((function(t){return Object(r.jsxs)(p.a,{className:"w-100 py-3",justifyContent:"between",alignItems:"center",children:[Object(r.jsx)(h.a,{shape:"square",src:t.image,name:t.name,subTitle:t.category}),Object(r.jsx)(p.a,{children:Object(r.jsxs)("div",{className:"mr-3 text-right",children:[Object(r.jsx)("span",{className:"mb-0 h5 font-weight-bold",children:"Guadagno totale / Numero totale venduti"}),Object(r.jsxs)("div",{className:"text-muted",children:[Object(r.jsx)(m.a,{prefix:"Guadagno: \u20ac",value:t.sales+"/ Pezzi venduti: ",thousandSeparator:!0,displayType:"text"}),Object(r.jsx)(m.a,{prefix:"/ Pezzi venduti: ",value:t.venduti,thousandSeparator:!0,displayType:"text"})]})]})})]},t.name)}))})})})]})}}}]);
//# sourceMappingURL=12.aed3853d.chunk.js.map