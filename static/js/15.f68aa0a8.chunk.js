(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15],{558:function(t,e,o){"use strict";o.d(e,"m",(function(){return h})),o.d(e,"f",(function(){return p})),o.d(e,"c",(function(){return v})),o.d(e,"k",(function(){return j})),o.d(e,"h",(function(){return _})),o.d(e,"e",(function(){return b})),o.d(e,"g",(function(){return O})),o.d(e,"j",(function(){return x})),o.d(e,"l",(function(){return w})),o.d(e,"a",(function(){return F})),o.d(e,"i",(function(){return y})),o.d(e,"n",(function(){return k})),o.d(e,"d",(function(){return g})),o.d(e,"b",(function(){return m}));var n=o(24),a=o.n(n),s=o(110),c=o(605),i=o.n(c),r="https://arredobimbo.com:8443",l=o(572),u=o.n(l),d=o(92),f=function(){var t=Object(s.a)(a.a.mark((function t(){var e,o,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=d.a.auth().currentUser,t.t0=e,!t.t0){t.next=6;break}return t.next=5,e.getIdToken();case 5:t.t0=t.sent;case 6:return o=t.t0,n={headers:{Authorization:"Bearer "+o}},t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n,s){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.post(r+"/uploadFoto",{url:n,id:e,indice:o},c).then((function(t){s(t.data,n)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n,a){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(a.a.mark((function t(e){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.get(r+"/delete-tmp",o).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(s.a)(a.a.mark((function t(e){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.get(r+"/lista-prodotti-dashboard",o).then((function(t){u.a.set("lista_prodotti",t.data),e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(s.a)(a.a.mark((function t(e){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.get(r+"/acquisti-tmp",o).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(a.a.mark((function t(e,o){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(r+"/lista-acquisti",n).then((function(t){for(var n=[],a=0;a<t.data.length;a++)for(var s=0;s<e.length;s++)e[s].idArticolo==t.data[a].idArticoloAcquistato&&(n.push({id:t.data[a].idAcquisto,name:t.data[a].nome+" "+t.data[a].cognome,image:"",date:t.data[a].dataAcquisto.split("T")[0],amount:t.data[a].totalePrezzo,numeroacquisti:t.data[a].numeroAcquisti,orderStatus:t.data[a].stato,colore:e[s].coloriDisp[t.data[a].indiceColore].color,nomearticolo:t.data[a].nomeArticolo,articoloCompleto:t.data[a],tracking:t.data[a].nrtracking,idordine:t.data[a].idordine,personalizzazione:t.data[a].personalizzazione,taglia:t.data[a].taglia}),a==t.data.length-1&&o(n))})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),_=function(){var t=Object(s.a)(a.a.mark((function t(e,o){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.post(r+"/insertArticoli",e,n).then((function(t){o(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),j=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n,s){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.put(r+"/updateArticolo",{id:e,lista_foto:o,values:n},c).then((function(t){s(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n,a){return t.apply(this,arguments)}}(),b=function(){var t=Object(s.a)(a.a.mark((function t(e){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:o=t.sent,i.a.get(r+"/lista-foto",o).then((function(t){e(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(s.a)(a.a.mark((function t(e,o){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.get(r+"/ordini-odierni",n).then((function(t){var n=[];if(0!=t.data.length)for(var a=0;a<t.data.length;a++)for(var s=0;s<e.length;s++)e[s].idArticolo===t.data[a].idArticoloAcquistato&&(null!=t.data.Nome&&null!=t.data.Cognome?n.push({id:a,name:t.data[a].Nome+" "+t.data[a].Cognome,amount:t.data[a].totalePrezzo,articolo:e[s].nomeArticolo,numero_acquisti:t.data[a].numeroAcquisti}):n.push({id:a,name:t.data[a].emailAcquirente,amount:t.data[a].totalePrezzo,articolo:e[s].nomeArticolo,numero_acquisti:t.data[a].numeroAcquisti}),a==t.data.length-1&&o(n));else o(n)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),x=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:s=t.sent,i.a.post(r+"/top-acquisti",{periodo:o},s).then((function(t){var o=[];if(0!=t.data.length)for(var a=0;a<t.data.length;a++)for(var s=0;s<e.length;s++)e[s].idArticolo==t.data[a].idArticoloAcquistato&&(0==e[s].coloriDisp[t.data[a].indiceColore].image.length?o.push({name:e[s].nomeArticolo,image:"",category:e[s].categoria,sales:t.data[a].sum,status:"up",venduti:t.data[a].numerototaleacquisti}):o.push({name:e[s].nomeArticolo,image:e[s].coloriDisp[t.data[a].indiceColore].image[0],category:e[s].categoria,sales:t.data[a].sum,status:"up",venduti:t.data[a].numerototaleacquisti}),a==t.data.length-1&&n(o));else n(o)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n,s){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:c=t.sent,i.a.put(r+"/update-tracking",{tracking:e,vendortracking:o,indice:n},c).then((function(t){s(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n,a){return t.apply(this,arguments)}}(),F=function(){var t=Object(s.a)(a.a.mark((function t(e,o){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,i.a.put(r+"/conferma-tracking",{indice:e},n).then((function(t){o(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),y=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:s=t.sent,i.a.post(r+"/insert-foto-ecommerce",{url:e,colonna_db:o},s).then((function(t){n(t)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(s.a)(a.a.mark((function t(e,o,n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:s=t.sent,i.a.put(r+"/upload-foto-ecommerce",{url:e,colonna_db:o},s).then((function(t){n(t.data)})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,o,n){return t.apply(this,arguments)}}()},641:function(t,e,o){"use strict";var n=o(2),a=o(79),s=o(0),c=o(40),i=o(20);e.a=Object(c.b)((function(t){return{navType:t.theme.navType}}),{})((function(t){var e=t.children,o=t.background,c=t.className,r=t.overlap,l=t.navType,u=Object(s.useState)(0),d=Object(a.a)(u,2),f=d[0],h=d[1],m=Object(s.useRef)(null);Object(s.useEffect)((function(){if(l===i.d){var t=window.innerWidth,e=m.current.offsetWidth;h((t-e)/2)}}),[l]);return Object(n.jsx)("div",{ref:m,className:"page-header-alt ".concat(c||""," ").concat(r&&"overlap"),style:function(){var t={backgroundImage:o?"url(".concat(o,")"):"none"};return l===i.d&&(t.marginRight=-f,t.marginLeft=-f,t.paddingLeft=0,t.paddingRight=0),t}(),children:l===i.d?Object(n.jsx)("div",{className:"container",children:e}):Object(n.jsx)(n.Fragment,{children:e})})}))},914:function(t,e,o){"use strict";o.r(e);var n=o(2),a=o(0),s=o(602),c=o(558),i=o(210),r=o.n(i),l=o(101),u=o(102),d=o(215),f=o(122),h=o(121),m=o(702),p=o(701),g=o(515),v=o(120),_=o(509),j=o(93),b=function(t){Object(f.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(l.a)(this,o),(n=e.call(this,t)).selectFiles=n.selectFiles.bind(Object(d.a)(n)),n.uploadImages=n.uploadImages.bind(Object(d.a)(n)),n.state={selectedFiles:void 0,previewImages:[],vettoreFoto:[],inserita:!1,upload_completo:!1,caricamento:!1,vettore_foto_old:[],vettore_foto_old_2:[],indiceColore:[],cancellazione:!1,upload_completo_cancellazione:!1,position_state:[],enable_loop:!0,listaFoto:[]},n}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var t=this;Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null!=e[0].home_1&&t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_1}]},(function(){console.log(t.state.vettore_foto_old)})),null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:1,name:1,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))}},{key:"selectFiles",value:function(t){for(var e=this,o=[],n=[],a=[],s=0;s<t.target.files.length;s++)o.push(URL.createObjectURL(t.target.files[s])),n.push(document.createElement("img"));this.setState({selectedFiles:t.target.files,previewImages:o,cancellazione:!1},(function(){for(var t=function(t){n[t].src=e.state.previewImages[t],n[t].onload=function(){console.log("dentro img",n[t]),console.log("NEW IMAGE width",n[t].width),console.log("NEW IMAGE height: ",n[t].height),(n[t].width<700||n[t].height<724)&&a.push(t)}},o=0;o<e.state.selectedFiles.length;o++)t(o);for(var s=[],c=0;c<e.state.selectedFiles.length;c++)s.push({uid:c,name:e.state.selectedFiles[c].name,status:"done",url:e.state.previewImages[c]});e.setState({vettoreFoto:s,position_state:a})}))}},{key:"uploadImages",value:function(){for(var t=this,e=[],o=0;o<this.state.selectedFiles.length;o++)e.push(this.state.selectedFiles[o].name);console.log("posizione della foto errata: ",this.state.position_state),0!=this.state.position_state.length?(console.log(this.state.selectedFiles),console.log(this.state.position_state),1==this.state.position_state.length&&r.a.fire({icon:"error",title:"Errore!",text:"La foto "+this.state.selectedFiles[0].name+" non rispetta la risoluzione. Non \xe8 stato possibile caricare le foto. Rimuoverla o modificare la risoluzione della foto in questione"})):(this.setState({caricamento:!0}),setTimeout((function(){1==t.state.caricamento&&(t.setState({caricamento:!1}),clearTimeout(),r.a.fire({icon:"error",title:"Errore di rete!",text:"Qualcosa \xe8 andato storto nel caricamento delle foto! Riprova."}))}),1e4),Array.from(this.state.selectedFiles).forEach((function(e){j.d.child("/".concat(Date.now(),"-").concat(e.name)).put(e).then((function(e){console.log("mazzeo merda",e.ref.getDownloadURL()),e.ref.getDownloadURL().then((function(e){console.log("File available at",e),console.log("new foto len",t.state.selectedFiles.length),console.log("old foto len",t.state.vettore_foto_old),console.log("INDICE",t.props.indice),0!=t.state.vettore_foto_old.length||t.state.inserita||0!=t.state.vettore_foto_old_2.length?Object(c.n)(e,"home_1",(function(e){(e.status=200)&&(t.setState({inserita:!0,caricamento:!1,upload_completo:!0}),r.a.fire("Completato!","La foto numero 1 \xe8 stata modificata correttamente!","success"),Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null!=e[0].home_1&&t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_1}]},(function(){console.log(t.state.vettore_foto_old)})),null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:1,name:1,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))),console.log(e)})):Object(c.i)(e,"home_1",(function(e){(e.status=200)&&(t.setState({inserita:!0,caricamento:!1,upload_completo:!0}),r.a.fire("Completato!","La foto numero 1 \xe8 stata inserita correttamente!","success"),Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null!=e[0].home_1&&t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_1}]},(function(){console.log(t.state.vettore_foto_old)})),null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:1,name:1,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))),console.log(e)}))}))}))})))}},{key:"render",value:function(){var t=this.state,e=t.selectedFiles,o=t.previewImages;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[0!=this.state.vettore_foto_old.length&&Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"clearfix",children:[Object(n.jsx)(m.a,{message:"Foto attualmente presenti",type:"info",showIcon:!0}),Object(n.jsx)(p.a,{listType:"picture-card",fileList:this.state.vettore_foto_old,onChange:this.handleChange})]})}),this.state.upload_completo?Object(n.jsx)(m.a,{message:"Upload avvenuto con successo!",description:"Le modifiche sono state effettuate correttamente.",type:"success",showIcon:!0}):Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("label",{className:"btn btn-default p-0",children:Object(n.jsx)(g.a,{type:"file",accept:"image/*",onChange:this.selectFiles})})}),o&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"clearfix",children:Object(n.jsx)(p.a,{listType:"picture-card",fileList:this.state.vettoreFoto})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(v.a,{className:"btn btn-success btn-sm",disabled:!e,onClick:this.uploadImages,children:"Carica foto"})})]}),1==this.state.caricamento&&Object(n.jsx)(_.a,{})]})]})})}}]),o}(a.Component),O=o(178),x=o(641),w=function(t){Object(f.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(l.a)(this,o),(n=e.call(this,t)).selectFiles=n.selectFiles.bind(Object(d.a)(n)),n.uploadImages=n.uploadImages.bind(Object(d.a)(n)),n.state={selectedFiles:void 0,previewImages:[],vettoreFoto:[],inserita:!1,upload_completo:!1,caricamento:!1,vettore_foto_old:[],vettore_foto_old_2:[],indiceColore:[],cancellazione:!1,upload_completo_cancellazione:!1,position_state:[],enable_loop:!0,listaFoto:[]},n}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var t=this;Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null==e[0].home_2&&null!=e[0].home_1?t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old)})):null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:0,name:0,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))}},{key:"selectFiles",value:function(t){for(var e=this,o=[],n=[],a=[],s=0;s<t.target.files.length;s++)o.push(URL.createObjectURL(t.target.files[s])),n.push(document.createElement("img"));this.setState({selectedFiles:t.target.files,previewImages:o,cancellazione:!1},(function(){for(var t=function(t){n[t].src=e.state.previewImages[t],n[t].onload=function(){console.log("dentro img",n[t]),console.log("NEW IMAGE width",n[t].width),console.log("NEW IMAGE height: ",n[t].height),(n[t].width<700||n[t].height<724)&&a.push(t)}},o=0;o<e.state.selectedFiles.length;o++)t(o);for(var s=[],c=0;c<e.state.selectedFiles.length;c++)s.push({uid:c,name:e.state.selectedFiles[c].name,status:"done",url:e.state.previewImages[c]});e.setState({vettoreFoto:s,position_state:a})}))}},{key:"uploadImages",value:function(){for(var t=this,e=[],o=0;o<this.state.selectedFiles.length;o++)e.push(this.state.selectedFiles[o].name);console.log("posizione della foto errata: ",this.state.position_state),0!=this.state.position_state.length?(console.log(this.state.selectedFiles),console.log(this.state.position_state),1==this.state.position_state.length&&r.a.fire({icon:"error",title:"Errore!",text:"La foto "+this.state.selectedFiles[0].name+" non rispetta la risoluzione. Non \xe8 stato possibile caricare le foto. Rimuoverla o modificare la risoluzione della foto in questione"})):(this.setState({caricamento:!0}),setTimeout((function(){1==t.state.caricamento&&(t.setState({caricamento:!1}),clearTimeout(),r.a.fire({icon:"error",title:"Errore di rete!",text:"Qualcosa \xe8 andato storto nel caricamento delle foto! Riprova."}))}),1e4),Array.from(this.state.selectedFiles).forEach((function(e){j.d.child("/".concat(Date.now(),"-").concat(e.name)).put(e).then((function(e){console.log("mazzeo merda",e.ref.getDownloadURL()),e.ref.getDownloadURL().then((function(e){console.log("File available at",e),console.log("new foto len",t.state.selectedFiles.length),console.log("old foto len",t.state.vettore_foto_old),console.log("INDICE",t.props.indice),0!=t.state.vettore_foto_old.length||t.state.inserita||0!=t.state.vettore_foto_old_2.length?Object(c.n)(e,"home_2",(function(e){(e.status=200)&&(t.setState({inserita:!0,caricamento:!1,upload_completo:!0}),r.a.fire("Completato!","La foto numero 1 \xe8 stata modificata correttamente!","success"),Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null!=e[0].home_1&&t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_1}]},(function(){console.log(t.state.vettore_foto_old)})),null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:1,name:1,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))),console.log(e)})):Object(c.i)(e,"home_2",(function(e){(e.status=200)&&(t.setState({inserita:!0,caricamento:!1,upload_completo:!0}),r.a.fire("Completato!","La foto numero 1 \xe8 stata inserita correttamente!","success"),Object(c.e)((function(e){t.setState({listaFoto:e}),console.log("vettoreFotogi\xe0presenti",e),0!=e.length&&(null!=e[0].home_1&&t.setState({vettore_foto_old:[{uid:0,name:0,status:"done",url:e[0].home_1}]},(function(){console.log(t.state.vettore_foto_old)})),null!=e[0].home_2&&t.setState({vettore_foto_old_2:[{uid:1,name:1,status:"done",url:e[0].home_2}]},(function(){console.log(t.state.vettore_foto_old_2)})))}))),console.log(e)}))}))}))})))}},{key:"render",value:function(){var t=this.state,e=t.selectedFiles,o=t.previewImages;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[0!=this.state.vettore_foto_old_2.length&&Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"clearfix",children:[Object(n.jsx)(m.a,{message:"Foto attualmente presenti",type:"info",showIcon:!0}),Object(n.jsx)(p.a,{listType:"picture-card",fileList:this.state.vettore_foto_old_2})]})}),this.state.upload_completo?Object(n.jsx)(m.a,{message:"Upload avvenuto con successo!",description:"Le modifiche sono state effettuate correttamente.",type:"success",showIcon:!0}):Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("label",{className:"btn btn-default p-0",children:Object(n.jsx)(g.a,{type:"file",accept:"image/*",onChange:this.selectFiles})})}),o&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"clearfix",children:Object(n.jsx)(p.a,{listType:"picture-card",fileList:this.state.vettoreFoto})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(v.a,{className:"btn btn-success btn-sm",disabled:!e,onClick:this.uploadImages,children:"Carica foto"})})]}),1==this.state.caricamento&&Object(n.jsx)(_.a,{})]})]})})}}]),o}(a.Component),F=s.a.TabPane;e.default=function(){return Object(a.useEffect)((function(){}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{className:"border-bottom",overlap:!0,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(O.a,{className:"py-2",mobileFlex:!1,justifyContent:"between",alignItems:"center",children:[Object(n.jsxs)("h2",{className:"mb-3",children:["Modifica qui le tue foto"," "]}),Object(n.jsx)("div",{className:"mb-3"})]})})}),Object(n.jsxs)(s.a,{defaultActiveKey:"1",style:{marginTop:30},children:[Object(n.jsx)(F,{tab:"Home_1",children:Object(n.jsx)(b,{})},1),Object(n.jsx)(F,{tab:"Home_2",children:Object(n.jsx)(w,{})},2)]})]})}}}]);
//# sourceMappingURL=15.f68aa0a8.chunk.js.map