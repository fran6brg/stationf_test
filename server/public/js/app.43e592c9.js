(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"473b":function(e,t,a){"use strict";a("78a8")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,c,o){var i=Object(n["t"])("RoomsComponent");return Object(n["m"])(),Object(n["e"])("div",null,[Object(n["i"])(i)])}var c=Object(n["C"])("data-v-0f97c54d");Object(n["o"])("data-v-0f97c54d");var o={class:"container"},i={class:"form-container"},u={class:"mb-4"},s={class:"datepicker-subtemplate flex flex-col sm:flex-row justify-start items-center"},l={class:"date-picker-input-wrapper relative flex-grow"},d=Object(n["i"])("p",{class:"label-input"},"Début",-1),p=Object(n["i"])("span",{class:"flex-shrink-0 m-2"},null,-1),b={class:"date-picker-input-wrapper relative flex-grow"},v=Object(n["i"])("p",{class:"label-input"},"Fin",-1),f={class:"capacity"},m=Object(n["i"])("p",{class:"label-capacity"},"Capacité",-1),O={class:"equipments"},j=Object(n["i"])("p",{class:"label-equipments"},"Équipements",-1),g={class:"label-display-if-booked"},h=Object(n["i"])("p",{class:"display-if-booked"},"Afficher les salles réservées",-1),y={class:"filters-synthesis"},k=Object(n["i"])("hr",null,null,-1);Object(n["n"])();var w=c((function(e,t,a,r,w,R){var D=Object(n["t"])("v-date-picker"),x=Object(n["t"])("RoomsListComponent");return Object(n["m"])(),Object(n["e"])("div",o,[Object(n["i"])("div",i,[Object(n["i"])("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8",onSubmit:t[5]||(t[5]=Object(n["B"])((function(){}),["prevent"]))},[Object(n["i"])("div",u,[Object(n["i"])(D,{modelValue:r.range,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.range=e}),mode:"dateTime",masks:r.masks,"is-range":"","min-date":(new Date).setHours(0,0,0,0),"minute-increment":5},{default:c((function(e){var t=e.inputValue,a=e.inputEvents,r=e.isDragging;return[Object(n["i"])("div",s,[Object(n["i"])("div",l,[d,Object(n["i"])("input",Object(n["k"])({class:["flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full",r?"text-gray-600":"text-gray-900"],value:t.start},Object(n["v"])(a.start)),null,16,["value"])]),p,Object(n["i"])("div",b,[v,Object(n["i"])("input",Object(n["k"])({class:["flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full",r?"text-gray-600":"text-gray-900"],value:t.end},Object(n["v"])(a.end)),null,16,["value"])])])]})),_:1},8,["modelValue","masks","min-date"]),Object(n["i"])("div",f,[m,Object(n["A"])(Object(n["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.selectedCapacity=e}),type:"number",step:"1",min:"1",required:"true"},null,512),[[n["x"],r.selectedCapacity]])]),Object(n["i"])("div",O,[j,Object(n["A"])(Object(n["i"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.selectedEquipments=e}),placeholder:"TV, Retro ..."},null,512),[[n["x"],r.selectedEquipments]])]),Object(n["i"])("div",g,[h,Object(n["A"])(Object(n["i"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.displayBookedRooms=e})},null,512),[[n["w"],r.displayBookedRooms]])])])],32)]),Object(n["i"])("p",y,Object(n["u"])(r.getSynthesis),1),k,Object(n["i"])(x,{rooms:r.filteredRooms,onCreateReservation:r.createReservation,getRangeSpan:r.getRangeSpan,isLoading:r.isLoading,error:r.error},null,8,["rooms","onCreateReservation","getRangeSpan","isLoading","error"])])})),R=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("1276"),a("498a"),a("159b"),a("96cf"),a("1da1")),D=(a("d3b7"),a("5530")),x=a("d4ec"),q=a("bee2"),S=a("bc3a"),C=a.n(S),L="api/rooms/",M=function(){function e(){Object(x["a"])(this,e)}return Object(q["a"])(e,null,[{key:"getRooms",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t,a){C.a.get(L,{params:{capacity:e}}).then((function(e){var a=e.data;t(a.map((function(e){return Object(D["a"])(Object(D["a"])({},e),{},{createdAt:new Date(e.createdAt),updatedAt:new Date(e.updatedAt)})})))})).catch((function(e){a(e)}))}))}},{key:"insertRoom",value:function(e){return C.a.post(L,{text:e})}},{key:"deleteRoom",value:function(e){return C.a.delete("".concat(L).concat(e))}}]),e}(),_=M,A="api/reservations/",E=function(){function e(){Object(x["a"])(this,e)}return Object(q["a"])(e,null,[{key:"getReservations",value:function(e){return new Promise((function(t,a){C.a.get(A,{params:{range:e}}).then((function(e){var a=e.data;t(a.map((function(e){return Object(D["a"])(Object(D["a"])({},e),{},{start:new Date(e.start),end:new Date(e.end),createdAt:new Date(e.createdAt),updatedAt:new Date(e.updatedAt)})})))})).catch((function(e){a(e)}))}))}},{key:"insertReservation",value:function(e,t,a){return C.a.post(A,{user_id:"",room_id:e._id,start:new Date(t.start.getTime()+0),end:new Date(t.end.getTime()+0),participants:a})}},{key:"deleteReservation",value:function(e){return C.a.delete("".concat(A).concat(e))}}]),e}(),T=E,I=(a("a4d3"),a("e01a"),Object(n["C"])("data-v-419ec7e0"));Object(n["o"])("data-v-419ec7e0");var P={class:"rooms-container"},V=Object(n["g"])('<div class="list-headers" data-v-419ec7e0><p class="name" data-v-419ec7e0>Nom</p><p class="capacity" data-v-419ec7e0>Capacité</p><p class="description" data-v-419ec7e0>Description</p><p class="equipments" data-v-419ec7e0>Équipements</p><p class="reservation" data-v-419ec7e0>Réservation</p></div><hr data-v-419ec7e0>',2),N={key:0,class:"loading"},J=Object(n["i"])("h2",null,"Chargement des salles ...",-1),Y={key:1,class:"error"},U={class:"name"},B={class:"capacity"},F={class:"description"},H={class:"equipments"},z={class:"reservation"},G={key:1},K={key:2};Object(n["n"])();var Q=I((function(e,t,a,r,c,o){return Object(n["m"])(),Object(n["e"])("div",P,[V,a.isLoading?(Object(n["m"])(),Object(n["e"])("div",N,[J])):a.error?(Object(n["m"])(),Object(n["e"])("div",Y,[Object(n["i"])("p",null,Object(n["u"])(a.error),1)])):(Object(n["m"])(!0),Object(n["e"])(n["a"],{key:2},Object(n["r"])(a.rooms,(function(e,t){return Object(n["m"])(),Object(n["e"])("div",{class:"room",item:e,index:t,key:e._id},[Object(n["i"])("p",U,Object(n["u"])(e.name),1),Object(n["i"])("p",B,Object(n["u"])(e.capacity),1),Object(n["i"])("p",F,Object(n["u"])(e.description),1),Object(n["i"])("ul",H,[(Object(n["m"])(!0),Object(n["e"])(n["a"],null,Object(n["r"])(e.equipments,(function(e,t){return Object(n["m"])(),Object(n["e"])("li",{class:"name",item:e,index:t,key:t},Object(n["u"])(e.name),9,["item","index"])})),128))]),Object(n["i"])("div",z,[e.booked?Object(n["f"])("",!0):(Object(n["m"])(),Object(n["e"])("button",{key:0,onClick:function(e){return r.createReservation(t)}},"Réserver",8,["onClick"])),e.booked?Object(n["f"])("",!0):(Object(n["m"])(),Object(n["e"])("p",G,"pour "+Object(n["u"])(a.getRangeSpan),1)),e.booked?(Object(n["m"])(),Object(n["e"])("p",K,Object(n["u"])(e.bookedInfo),1)):Object(n["f"])("",!0)])],8,["item","index"])})),128))])})),W={name:"RoomsListComponent",props:["rooms","getRangeSpan","isLoading","error"],emits:["create-reservation"],setup:function(e,t){function a(e){t.emit("create-reservation",e)}return{createReservation:a}}};a("ea3c");W.render=Q,W.__scopeId="data-v-419ec7e0";var X=W,Z=a("fa7d"),$=a.n(Z),ee=a("3d20"),te={name:"RoomComponent",components:{RoomsListComponent:X},setup:function(){var e=Object(n["q"])([]),t=Object(n["q"])(2),a=Object(n["q"])(""),r=Object(n["q"])(!1),c=Object(n["q"])(""),o=Object(n["q"])(!0),i=Object(n["q"])([]),u=Object(n["q"])({start:$.a.roundDate(new Date(Date.now()),5),end:$.a.roundDate(new Date(Date.now()+18e5),5)}),s={input:"YYYY-MM-DD h:mm A"};Object(n["l"])(Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getRooms();case 3:return e.value=t.sent,t.next=6,T.getReservations(u.value);case 6:i.value=t.sent,m(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),c.value=t.t0.message;case 13:return t.prev=13,o.value=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])}))));var l=Object(n["c"])((function(){return a.value.trim().toLowerCase()})),d=Object(n["c"])((function(){if("unvalid"===p.value){var e="La durée de la réservation doit être >= à 5 minutes";return e}var n="< ".concat($.a.formatLiteralDate(u.value.start)," - ").concat($.a.formatLiteralDate(u.value.end)," (").concat(p.value,") | ").concat(t.value," place").concat(t.value>1?"s":"");return n+=""!==l.value?" | équipée de : ".concat(a.value," >"):" >",n})),p=Object(n["c"])((function(){return $.a.getDuration(u.value.start,u.value.end)})),b=Object(n["c"])((function(){return e.value.filter((function(e){return e.capacity>=t.value&&(!e.booked||r.value)&&(!a.value.length||e.includesSelectedEquipments)})).sort((function(e,t){return e.distance-t.distance}))}));function v(e){l.value.length&&(e.includesSelectedEquipments=!1,l.value.split(" ").forEach((function(t){e.equipments.forEach((function(a){a.name.toLowerCase().includes(t)&&(e.includesSelectedEquipments=!0)}))})))}function f(e){i.value.forEach((function(t){if(t.room_id===e._id&&(t.start>=u.value.start&&t.start<u.value.end||t.end>u.value.start&&t.end<=u.value.end))return e.booked=!0,void(e.bookedInfo="Réservée du ".concat($.a.formatNumericDate(u.value.start)," au ").concat($.a.formatNumericDate(u.value.end)))}))}function m(){e.value=e.value.map((function(e){var t=Object.assign({},e);return t.booked=!1,t.includesSelectedEquipments=!0,t})),e.value.forEach((function(e){f(e),v(e)}))}function O(e){return j.apply(this,arguments)}function j(){return j=Object(R["a"])(regeneratorRuntime.mark((function a(n){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.value[n],r){a.next=4;break}return ee.fire("Oops...","Impossible de réserver cette salle","error"),a.abrupt("return");case 4:return r.booked=!0,r.bookedInfo="Réservée du ".concat($.a.formatNumericDate(u.value.start)," au ").concat($.a.formatNumericDate(u.value.end)),ee.fire("Réservation enregistrée","Du ".concat($.a.formatLiteralDate(u.value.start),"<br>au ").concat($.a.formatLiteralDate(u.value.end),"<br>Durée de ").concat(p.value,"<br>Capacité : ").concat(r.capacity," places au total"),"success"),a.prev=7,o.value=!0,a.next=11,T.insertReservation(r,u.value,t.value);case 11:s=a.sent,0===Object.keys(s).length&&s.constructor===Object||i.value.push(s),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](7),c.value=a.t0;case 18:return a.prev=18,o.value=!1,a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[7,15,18,21]])}))),j.apply(this,arguments)}return Object(n["y"])(u,Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("unvalid"!==p.value){e.next=4;break}return c.value=d.value,ee.fire("Oops...",d.value,"error"),e.abrupt("return");case 4:return c.value="",e.prev=5,e.next=8,T.getReservations(u.value);case 8:i.value=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](5),c.value=e.t0;case 14:m();case 15:case"end":return e.stop()}}),e,null,[[5,11]])}))),{immediate:!1}),Object(n["y"])(l,(function(){l.value.length&&m()}),{immediate:!1}),{rooms:e,selectedCapacity:t,selectedEquipments:a,displayBookedRooms:r,error:c,isLoading:o,reservations:i,range:u,masks:s,getSynthesis:d,getRangeSpan:p,filteredRooms:b,createReservation:O}}};a("473b");te.render=w,te.__scopeId="data-v-0f97c54d";var ae=te,ne={name:"App",components:{RoomsComponent:ae}};a("7154");ne.render=r;var re=ne,ce=a("7b37");Object(n["d"])(re).use(ce["a"],{}).mount("#app")},7154:function(e,t,a){"use strict";a("8052")},"78a8":function(e,t,a){},8052:function(e,t,a){},e009:function(e,t,a){},ea3c:function(e,t,a){"use strict";a("e009")},fa7d:function(e,t,a){a("99af"),a("d3b7"),a("25f0"),a("6062"),a("3ca3"),a("ddb0");var n=a("448a");function r(e,t){e=e.toString();while(e.length<t)e="0"+e;return e}function c(e){return"".concat(r(e.getHours(),2),":").concat(r(e.getMinutes(),2))}function o(e){return"".concat(r(e.getDate(),2),"/").concat(e.getMonth(),"/").concat(e.getFullYear()," ").concat(c(e))}function i(e){var t=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],a=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];return"".concat(t[e.getDay()]," ").concat(r(e.getDate(),2)," ").concat(a[e.getMonth()]," ").concat(e.getFullYear()," ").concat(c(e))}function u(e,t){var a=6e4*t,n=new Date(Math.round(e.getTime()/a)*a);return n}function s(e,t){var a=u(e,t);return a.getTime()>e.getTime()?a:new Date(a.getTime()+6e4*t)}function l(e,t){var a=t-e,n=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),c=Math.round(a%864e5%36e5/6e4);if(0===n&&0===r&&0===c)return"unvalid";var o="";return n>0&&(o+="".concat(n," jour"),o+=n>=2?"s ":" "),r>0&&(o+="".concat(r," heure"),o+=r>=2?"s ":" "),c>0&&(o+="".concat(c," minute"),o+=c>=2?"s":""),o}function d(e){var t;return(t=String.prototype).concat.apply(t,n(new Set(e)))}function p(e,t,a){return e>=t&&e<=a}e.exports={formatTime:c,formatNumericDate:o,formatLiteralDate:i,roundDate:s,getDuration:l,getUniqueCharactersIn:d,dateIsInRange:p}}});
//# sourceMappingURL=app.43e592c9.js.map