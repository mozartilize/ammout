(function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ammout/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"894b":function(t,e,n){"use strict";n("a8f9")},"9c0c":function(t,e,n){},a8f9:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{staticClass:"toggle-adding-btn",on:{click:t.toggleAdding}},[t._v(" "+t._s(t.isAdding?"Done":"Add new point")+" ")]),t.newPoint?n("div",{staticClass:"sidebar",class:{shown:!!t.newPoint}},[n("input",{attrs:{type:"text",name:"long",disabled:""},domProps:{value:t.newPoint?t.newPoint[0]:""}}),n("input",{attrs:{type:"text",name:"lat",disabled:""},domProps:{value:t.newPoint?t.newPoint[1]:""}}),n("button",{on:{click:function(e){return t.createNewPoint(t.newPoint)}}},[t._v("Create")]),n("button",{on:{click:function(){return t.setNewPoint(null)}}},[t._v("Cancel")])]):t._e(),t.selectedPoint?n("div",{staticClass:"sidebar",class:{shown:!!t.selectedPoint}},[n("div",[n("button",{on:{click:function(e){return t.setSelectedPoint(null)}}},[t._v("close")])]),n("input",{attrs:{type:"text",name:"long",disabled:""},domProps:{value:t.selectedPoint?t.selectedPoint[0]:""}}),n("input",{attrs:{type:"text",name:"lat",disabled:""},domProps:{value:t.selectedPoint?t.selectedPoint[1]:""}}),n("div",[t._v(" Vote: "),n("button",{on:{click:function(e){return t.createNewVote({vote:!0,pointId:t.selectedPoint.id})}}},[t._v(" Up")]),n("span",[t._v(t._s(t.selectedPointVotes[0]))]),n("button",{on:{click:function(e){return t.createNewVote({vote:!1,pointId:t.selectedPoint.id})}}},[t._v(" Down")]),n("span",[t._v(t._s(t.selectedPointVotes[1]))])])]):t._e(),n("Map")],1)},r=[],a=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),p=n("4bb5"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"map",attrs:{id:"map"}})},f=[],h=(n("4de4"),n("d81d"),n("4478")),m=n("2909"),b=(n("96cf"),n("1da1")),v=n("bee2"),g=n("e192"),y=n.n(g),P=(n("ac6d"),n("99af"),n("9072")),O=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;Object(a["a"])(this,n);var o=[arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]];return t=e.call.apply(e,[this].concat(o)),t.id=arguments.length<=2?void 0:arguments[2],t.title=arguments.length<=3?void 0:arguments[3],t}return n}(Object(P["a"])(Array)),w=(n("cb29"),n("d3b7"),n("5cc6"),n("8a59"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("20bf"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[27,184,13],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3;Object(a["a"])(this,t),this.map=null,this.needRender=!0,this.context=null,this.size=e,this.width=e,this.height=e,this.color=o,this.animated=n,this.animationDuration=i,this.data=Uint8ClampedArray.from(new Uint8Array(e*e*4))}return Object(v["a"])(t,[{key:"onAdd",value:function(t){this.map=t;var e=document.createElement("canvas");e.width=this.size,e.height=this.size,this.context=e.getContext("2d")}},{key:"_render",value:function(){this.context&&(this.context.beginPath(),this.context.arc(this.size/2,this.size/2,this.radius,0,2*Math.PI),this.context.fillStyle=this.rgbFillColor,this.context.strokeStyle="white",this.context.lineWidth=this.circleStrokeWidth,this.context.fill(),this.context.stroke())}},{key:"_renderAnimation",value:function(){this.context&&(this.context.beginPath(),this.context.arc(this.size/2,this.size/2,this.outerRadius,0,2*Math.PI),this.context.fillStyle=this.rgbAnimationColor,this.context.fill())}},{key:"_setDataFromContext",value:function(){this.context&&(this.data=this.context.getImageData(0,0,this.size,this.size).data)}},{key:"render",value:function(){return!(!this.context||!this.map)&&(this.animated?(this.context.clearRect(0,0,this.size,this.size),this._renderAnimation(),this._render(),this._setDataFromContext(),this.map.triggerRepaint(),!0):!!this.needRender&&(this._render(),this._setDataFromContext(),this.needRender=!1,!0))}},{key:"animationRatio",get:function(){return this.animated?performance.now()%this.animationDuration/this.animationDuration:0}},{key:"radius",get:function(){return this.size/2*(this.animated?.4:1)-(this.animated?0:this.circleStrokeWidth/2)}},{key:"outerRadius",get:function(){return this.size/2*this.animationRatio}},{key:"circleStrokeWidth",get:function(){return this.size/30+.02*this.size*(1-this.animationRatio)}},{key:"rgbFillColor",get:function(){return"rgba(".concat(this.color[0],", ").concat(this.color[1],", ").concat(this.color[2],", 1)")}},{key:"rgbAnimationColor",get:function(){return"rgba(".concat(this.color[0],", ").concat(this.color[1],", ").concat(this.color[2],", ").concat(1-this.animationRatio,")")}}]),t}()),j=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.map=null,t}return Object(v["a"])(n,[{key:"onListOfPointsChange",value:function(){if(null!=this.map){var t={type:"FeatureCollection",features:this.points.map((function(t){return{type:"Feature",geometry:{type:"Point",coordinates:t},properties:{id:t.id}}}))},e=this.map.getSource("points");e&&e.setData(t)}}},{key:"onIsAddingChange",value:function(t){null!=this.map&&(t?(this.map.on("dblclick",this.handleDbClick),this.map.doubleClickZoom.disable()):(this.map.off("dblclick",this.handleDbClick),this.map.doubleClickZoom.enable()))}},{key:"onNewPointChange",value:function(t){if(null!=this.map){var e=t?{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:t},properties:{}}]}:{type:"FeatureCollection",features:[]},n=this.map.getSource("newPoint");n&&n.setData(e)}}},{key:"mounted",value:function(){var t=this;y.a.accessToken="pk.eyJ1IjoiZGF0YWZsdWN0LWFsaW5lIiwiYSI6ImNrNnh1YW0zdjByMmwzZnM0am45Y3M4b2oifQ.XTTQfsj3LNEr6-8H0SMCXg",this.map=new y.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9"});var e=new w(100);this.map.on("load",Object(b["a"])(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==t.map){n.next=2;break}return n.abrupt("return");case 2:return o=t.map.getCanvasContainer(),t.map.addImage("pulsing-dot",e,{pixelRatio:2}),n.next=6,t.getSource();case 6:i=n.sent,t.map.addSource("points",i),t.map.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":"pulsing-dot"}}),t.map.on("mouseup","points",(function(e){if(e.features&&e.features.length>0){var n,o=null===(n=e.features[0].properties)||void 0===n?void 0:n.id,i=t.points.filter((function(t){return t.id==o}))[0];t.setSelectedPoint(i)}})),t.map.addSource("newPoint",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.map.addLayer({id:"newPoint",type:"symbol",source:"newPoint",layout:{"icon-image":"pulsing-dot"}}),t.map.on("mouseenter","newPoint",(function(){o.style.cursor="move"})),t.map.on("mouseleave","newPoint",(function(){o.style.cursor=""})),t.map.on("mousedown","newPoint",(function(e){e.preventDefault(),t.map&&(o.style.cursor="grab",t.map.on("mousemove",t.onMove),t.map.once("mouseup",t.onUp))}));case 15:case"end":return n.stop()}}),n)}))))}},{key:"handleDbClick",value:function(t){var e=Object(h["a"])(O,Object(m["a"])(t.lngLat.toArray()));this.setNewPoint(e)}},{key:"getSource",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getPointsFromIssues();case 2:return t.abrupt("return",{type:"geojson",data:{type:"FeatureCollection",features:this.points.map((function(t){return{type:"Feature",geometry:{type:"Point",coordinates:t},properties:{id:t.id}}}))}});case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onUp",value:function(){if(this.map){var t=this.map.getCanvasContainer();t.style.cursor="",this.map.off("mousemove",this.onMove)}}},{key:"onMove",value:function(t){var e=Object(h["a"])(O,Object(m["a"])(t.lngLat.toArray()));this.setNewPoint(e)}},{key:"beforeDestroy",value:function(){this.map&&this.map.remove()}}]),n}(l["b"]);Object(u["a"])([Object(p["b"])("points")],j.prototype,"points",void 0),Object(u["a"])([Object(p["b"])("isAdding")],j.prototype,"isAdding",void 0),Object(u["a"])([Object(p["b"])("newPoint")],j.prototype,"newPoint",void 0),Object(u["a"])([Object(p["b"])("selectedPoint")],j.prototype,"selectedPoint",void 0),Object(u["a"])([Object(p["a"])("GET_POINTS_FROM_ISSUES")],j.prototype,"getPointsFromIssues",void 0),Object(u["a"])([Object(p["a"])("SET_NEW_POINT")],j.prototype,"setNewPoint",void 0),Object(u["a"])([Object(p["a"])("SET_SELECTED_POINT")],j.prototype,"setSelectedPoint",void 0),Object(u["a"])([Object(l["c"])("points")],j.prototype,"onListOfPointsChange",null),Object(u["a"])([Object(l["c"])("isAdding")],j.prototype,"onIsAddingChange",null),Object(u["a"])([Object(l["c"])("newPoint")],j.prototype,"onNewPointChange",null),j=Object(u["a"])([l["a"]],j);var _=j,k=_,x=(n("894b"),n("2877")),E=Object(x["a"])(k,d,f,!1,null,null,null),S=E.exports,C=(n("fb98"),function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]));Object(u["a"])([Object(p["b"])("isAdding")],C.prototype,"isAdding",void 0),Object(u["a"])([Object(p["b"])("newPoint")],C.prototype,"newPoint",void 0),Object(u["a"])([Object(p["b"])("selectedPoint")],C.prototype,"selectedPoint",void 0),Object(u["a"])([Object(p["b"])("selectedPointVotes")],C.prototype,"selectedPointVotes",void 0),Object(u["a"])([Object(p["a"])("TOGGLE_ADDING")],C.prototype,"toggleAdding",void 0),Object(u["a"])([Object(p["a"])("SET_NEW_POINT")],C.prototype,"setNewPoint",void 0),Object(u["a"])([Object(p["a"])("CREATE_NEW_POINT")],C.prototype,"createNewPoint",void 0),Object(u["a"])([Object(p["a"])("SET_SELECTED_POINT")],C.prototype,"setSelectedPoint",void 0),Object(u["a"])([Object(p["a"])("CREATE_NEW_VOTE")],C.prototype,"createNewVote",void 0),C=Object(u["a"])([Object(l["a"])({components:{Map:S}})],C);var T=C,N=T,R=(n("5c0b"),Object(x["a"])(N,i,r,!1,null,null,null)),A=R.exports,I=n("9483");Object(I["a"])("".concat("/ammout/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var F=n("2f62"),D=n("bc3a"),V=n.n(D);function M(){return z.apply(this,arguments)}function z(){return z=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("/api/v1/points/");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.map((function(t){return new O(t.long,t.lat,t.id)})));case 5:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function W(t){return L.apply(this,arguments)}function L(){return L=Object(b["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.post("/api/v1/points/",e,{headers:{"Content-Type":"multipart/form-data"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function G(t,e){return U.apply(this,arguments)}function U(){return U=Object(b["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.post("api/v1/points/".concat(e,"/votes/"),n,{headers:{"Content-Type":"multipart/form-data"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}function Z(t){return Y.apply(this,arguments)}function Y(){return Y=Object(b["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("api/v1/points/".concat(e,"/"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function J(t){var e=new FormData;return e.append("long",t[0]),e.append("lat",t[1]),e}function $(t){var e=new FormData;return e.append("vote",t.vote?"1":"0"),t.comment&&e.append("comment",t.comment),e}o["a"].use(F["b"]);var B=new F["a"]({state:{points:Array(),loadingPoints:!1,isAdding:!1,newPoint:null,selectedPoint:null,selectedPointVotes:[0,0]},mutations:{setPoints:function(t,e){t.points=e},appendPoint:function(t,e){t.points.push(e)},toggleAdding:function(t){t.isAdding=!t.isAdding},setNewPoint:function(t,e){t.newPoint=e},setSelectedPoint:function(t,e){t.selectedPoint=e},setVotesForSelectedPoint:function(t,e){t.selectedPoint?t.selectedPointVotes=[e.upvotes,e.downvotes]:t.selectedPointVotes=[0,0]},updateVotesForSelectedPoint:function(t,e){t.selectedPoint&&(t.selectedPointVotes=e?[t.selectedPointVotes[0]+1,t.selectedPointVotes[1]]:[t.selectedPointVotes[0],t.selectedPointVotes[1]+1])}},actions:{GET_POINTS_FROM_ISSUES:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,M();case 3:o=e.sent,n("setPoints",o);case 5:case"end":return e.stop()}}),e)})))()},TOGGLE_ADDING:function(t){var e=t.commit;e("toggleAdding")},SET_NEW_POINT:function(t,e){var n=t.commit;n("setNewPoint",e)},SET_SELECTED_POINT:function(t,e){var n=t.commit,o=t.dispatch;n("setSelectedPoint",e),o("SET_VOTES_FOR_SELECTED_POINT")},CREATE_NEW_POINT:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function n(){var o,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,i=J(e),n.next=4,W(i);case 4:return r=n.sent,e.id=r.data.id,o("appendPoint",e),o("setNewPoint",null),n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))()},CREATE_NEW_VOTE:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function n(){var o,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.commit,!e.pointId){n.next=10;break}return i=$(e),n.next=5,G(e.pointId,i);case 5:return r=n.sent,o("updateVotesForSelectedPoint",e.vote),n.abrupt("return",r);case 10:throw new Error("undefined pointId");case 11:case"end":return n.stop()}}),n)})))()},SET_VOTES_FOR_SELECTED_POINT:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,o,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state,o=t.commit,n.selectedPoint){e.next=3;break}return e.abrupt("return");case 3:if(n.selectedPoint.id){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Z(n.selectedPoint.id);case 7:i=e.sent,r=i.data,o("setVotesForSelectedPoint",r);case 10:case"end":return e.stop()}}),e)})))()}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:B,render:function(t){return t(A)}}).$mount("#app")},fb98:function(t,e,n){}});
//# sourceMappingURL=app.f9dbbe18.js.map