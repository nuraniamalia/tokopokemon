(this.webpackJsonppokecatch=this.webpackJsonppokecatch||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return P}));var r=n(64),a=n(6),o=n.n(a),c=n(5),s=n(9),i=n(20),u=n(21),p=n(25),l=n(24),d=n(0),f=n.n(d),h=n(43),m=n(26),b=n.n(m),j=n(12),v=n(47),x=n.n(v),O=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,n=r.length>1&&void 0!==r[1]?r[1]:10,e.next=4,x.a.get("/pokemon?offset=".concat(t,"&limit=").concat(n));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/pokemon/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(3),y={pokemons:[],pokemon:null,isFetchingPokemon:!1,isFetchingPokemons:!1,offset:0,limit:20,hasNext:!1},g=f.a.createContext(y),P=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).state=y,a.fetchPokemon=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setStateAsync({isFetchingPokemon:!0});case 3:return e.next=5,a.getPokemonFromLocal(t);case 5:if(!(n=e.sent)){e.next=9;break}return e.next=9,a.setStateAsync({pokemon:n});case 9:return e.next=11,k(t);case 11:r=e.sent,(s=r.data)&&(i={name:s.name,image_url:Object(h.c)(s.id),abilities:s.abilities,species:s.species,types:s.types,moves:s.moves},a.setStateAsync({pokemon:Object(c.a)({},i)}),a.setPokemonToLocal(i)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:return e.prev=19,e.next=22,a.setStateAsync({isFetchingPokemon:!1});case 22:return e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[0,16,19,23]])})));return function(t){return e.apply(this,arguments)}}(),a.getPokemonFromLocal=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getPokemonsMapFromLocal();case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n[t]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.setPokemonToLocal=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getPokemonsMapFromLocal();case 2:(n=e.sent)[t.name]=t,a.setPokemonsMapToLocal(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getPokemonsMapFromLocal=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getItem(j.f);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:return n={},e.next=8,b.a.setItem(j.f,n);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),a.setPokemonsMapToLocal=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.setItem(j.f,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.fetchPokemons=Object(s.a)(o.a.mark((function e(){var t,n,c,s,i,u,p,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setStateAsync({isFetchingPokemons:!0});case 3:return t=a.state,n=t.offset,c=t.limit,e.next=6,O(n,c);case 6:s=e.sent,i=s.data,u=i.results,p=i.next,u&&(l=u.map((function(e){return{name:e.name,image_url:Object(h.d)(e.url)}})),a.setStateAsync({pokemons:[].concat(Object(r.a)(a.state.pokemons),Object(r.a)(l)),hasNext:!!p})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:return e.prev=16,e.next=19,a.setStateAsync({isFetchingPokemons:!1});case 19:return e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[0,13,16,20]])}))),a.next=Object(s.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.offset,r=t.limit,!t.hasNext){e.next=6;break}return e.next=4,a.setStateAsync({offset:n+r});case 4:return e.next=6,a.fetchPokemons();case 6:case"end":return e.stop()}}),e)}))),a.resetAndFetch=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setStateAsync({offset:0,pokemons:[]});case 2:return e.next=4,a.fetchPokemons();case 4:case"end":return e.stop()}}),e)}))),a.resetPokemon=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setStateAsync({pokemon:null});case 2:case"end":return e.stop()}}),e)}))),a.setStateAsync=function(e){return new Promise((function(t){a.setState(e,(function(){return t(e)}))}))};var u=y;for(var p in console.log(u),e);return a.state=u,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(w.jsx)(g.Provider,{value:Object(c.a)(Object(c.a)({},this.state),{},{fetchPokemon:this.fetchPokemon,fetchPokemons:this.fetchPokemons,next:this.next,resetAndFetch:this.resetAndFetch,resetPokemon:this.resetPokemon}),children:this.props.children})}}]),n}(d.Component)},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return i}));var r="https://pokeapi.co/api/v2",a="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",o={primary:"#3498db",secondary:"#e74c3c",clouds:"#ecf0f1",background:"#f6f7f9"},c="pokemonyay",s="pokemonmap",i="mypokemonmap"},149:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t),n.d(t,"renderOnServer",(function(){return xe}));var r,a,o,c,s=n(0),i=n.n(s),u=n(31),p=n.n(u),l=(n(149),n(5)),d=n(226),f=n(225),h=n(41),m=n(47),b=n.n(m),j=n(12),v=n(34),x=n(35),O=n(207),k=n(50),w=n(3),y=x.a.div(r||(r=Object(v.a)(["\n  display: flex;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000000;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n\n  .overlay-loading-2 {\n    padding: 20px 30px;\n    border-radius: 20px;\n    background: white;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 300;\n    font-size: 17pt;\n\n    .wrapper {\n      width: 50px;\n      height: 50px;\n      margin-right: 10px;\n    }\n  }\n"]))),g=function(){return i.a.useContext(k.a).isOpened?Object(w.jsx)(y,{"data-testid":"overlay-loading",children:Object(w.jsx)("div",{className:"overlay-loading",children:Object(w.jsxs)("div",{className:"overlay-loading-2",children:[Object(w.jsx)("div",{className:"wrapper",children:Object(w.jsx)(O.a,{})}),Object(w.jsx)("div",{children:"Processing .."})]})})}):Object(w.jsx)("div",{})},P=n(65),S=n(215),A=n(91),I=n(10),C=n(211),M=n(212),N=n(40),F=n(129),L=n.n(F),E=n(98),R=n.n(E),T=Object(x.a)(C.a)(a||(a=Object(v.a)(["\n  && {\n    width: 100%;\n    height: 55px;\n    .MuiBottomNavigationAction-root {\n      min-width: 50px;\n    }\n    @media only screen and (min-width: 800px) {\n      display: none;\n    }\n  }\n  \n"]))),U=x.a.div(o||(o=Object(v.a)(["\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid #dadada;\n  background: #ecf0f1;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 24px 0px rgba(0, 0, 0, 0.12);\n\n  .icon {\n    width: 1em;\n    height: 1em;\n    font-size: 1.7rem;\n    line-height: 1;\n  }\n"]))),K=Object(I.h)((function(e){var t=e.history,n=i.a.useContext(N.a),r=n.selectedPath,a=n.updateRouter;return Object(w.jsx)(U,{children:Object(w.jsx)(i.a.Fragment,{children:Object(w.jsxs)(T,{value:r,onChange:function(e,n){a&&a(n),t.push(n)},children:[Object(w.jsx)(M.a,{label:"Home",value:"/pokemons",icon:Object(w.jsx)(L.a,{})}),Object(w.jsx)(M.a,{label:"My Pokemons",value:"/mypokemons",icon:Object(w.jsx)(R.a,{})})]})})})})),W=n(70),D=n(84),H=n(6),B=n.n(H),z=n(9),_=n(213),G=x.a.div(c||(c=Object(v.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 20000;\n"]))),J=function(e){var t=null,n=function(){var n=Object(z.a)(B.a.mark((function n(){var r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t=r.default||r;case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=function(e){var r=i.a.useState(null),a=Object(D.a)(r,2),o=a[0],c=a[1],s=i.a.useState(!0),u=Object(D.a)(s,2),p=u[0],d=u[1],f=i.a.useContext(h.a);return i.a.useEffect((function(){d(!0),function(){var e=Object(z.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:d(!1),o!==t&&c((function(){return t})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),f.show&&f.show("Error loading page, please refresh page",{severity:"error"}),console.log("ERROR WHILE LOADING PAGE ROUTE",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),t?Object(w.jsx)(t,Object(l.a)({},e)):p?Object(w.jsx)(G,{children:Object(w.jsx)(_.a,{})}):o?Object(w.jsx)(o,Object(l.a)({},e)):Object(w.jsx)("div",{children:"404 Not Found"})};return r.load=Object(z.a)(B.a.mark((function n(){var r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t=r.default||r;case 4:case"end":return n.stop()}}),n)}))),r},Y=J((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(4)]).then(n.bind(null,277))})),q=J((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,270))})),Q=J((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(3)]).then(n.bind(null,275))})),V=[{component:Y,path:N.c.POKEMONS,routes:[{component:Q,path:"/pokemons/:name"}]},{component:q,path:N.c.MY_POKEMONS,routes:[{component:Q,path:"/mypokemons/:name"}]},{component:function(){return Object(w.jsx)(I.a,{from:"/",to:N.c.POKEMONS})},path:"/"}];function X(e){return Object(w.jsx)(f.a,Object(l.a)({elevation:6,variant:"filled"},e))}b.a.defaults.baseURL=j.b,b.a.defaults.headers.Accept="application/json",b.a.defaults.headers["Content-Type"]="application/json";var Z=function(){var e=i.a.useContext(h.a),t=e.autoHideDuration,n=e.isOpened,r=e.message,a=e.severity,o=e.close,c=i.a.useContext(P.a).fetchMyPokemons;return i.a.useEffect((function(){c&&c()}),[]),Object(w.jsxs)("div",{className:"App",children:[Object(W.b)(V),Object(w.jsx)(K,{}),Object(w.jsx)(d.a,{open:!!n,autoHideDuration:t,onClose:o,message:!a&&r,style:{bottom:"70px"},action:[Object(w.jsx)(S.a,{"aria-label":"Close",color:"inherit",onClick:o,children:Object(w.jsx)(A.a,{icon:"close"})},"close")],"data-testid":"snackbar",children:Object(w.jsx)(X,{onClose:o,severity:a,children:r})}),Object(w.jsx)(g,{})]})},$=n(132),ee=n(221),te=n(90),ne=n(94),re=n(100),ae=n(43),oe=n(66),ce=n(224),se=n(133),ie=n(223),ue=n(228),pe=Object($.a)({palette:{primary:{main:j.c.primary},secondary:{main:j.c.secondary}}}),le=(new ce.a,Object(se.a)({uri:"https://graphql-pokeapi.vercel.app/api/graphql"})),de=new ie.a({cache:new ce.a,link:le}),fe=function(e){var t=e||{},n=t.pokemon,r=t.pokemons;return Object(w.jsx)(ue.a,{client:de,children:Object(w.jsx)(k.b,{children:Object(w.jsx)(h.b,{children:Object(w.jsx)(te.b,{children:Object(w.jsx)(N.b,{children:Object(w.jsx)(ne.b,{children:Object(w.jsx)(re.b,{pokemon:n,pokemons:r,children:Object(w.jsx)(P.b,{children:Object(w.jsx)(ee.a,{theme:pe,children:Object(w.jsx)(Z,{})})})})})})})})})})};if("undefined"!==typeof window){var he,me,be=null===(he=document.getElementById("props"))||void 0===he||null===(me=he.dataset)||void 0===me?void 0:me.props,je=void 0;try{var ve=JSON.parse(be||"");je=ve}catch(Oe){je=void 0}Object(ae.b)(V).then((function(){p.a.hydrate(Object(w.jsx)(oe.a,{children:fe(je)}),document.getElementById("root"))}))}var xe=function(e,t){return Object(ae.b)(V,e).then((function(){return Object(w.jsx)(I.d,{location:e,context:{},children:fe(t)})}))}},40:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(5),a=n(20),o=n(21),c=n(25),s=n(24),i=n(0),u=n.n(i),p=n(3),l={POKEMONS:"/pokemons",MY_POKEMONS:"/mypokemons"},d=[{icon:"pokemon-go",label:"Pokemon List",path:l.POKEMONS,outline:!1},{icon:"pokeball",label:"My Pokemon",path:l.MY_POKEMONS,outline:!1}],f={selectedPath:l.POKEMONS,selectedRoute:null,containerPose:"opencontainer",routers:d},h=u.a.createContext(f),m=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=f,e.updateRouter=function(t){var n=e.state.routers.find((function(e){return e.path===t}));n&&e.setState({selectedRoute:Object(r.a)({},n),selectedPath:n.path})},e.checkAndUpdateRouter=function(){if("undefined"!==typeof window){var t=window.location.pathname,n=e.state.routers;if(n){var r=n.find((function(e){return-1!==t.indexOf(e.path)}));r&&e.setState({selectedRoute:r,selectedPath:r.path})}}},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(h.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{checkAndUpdateRouter:this.checkAndUpdateRouter,updateRouter:this.updateRouter}),children:this.props.children})}}]),n}(i.Component)},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n(5),a=n(20),o=n(21),c=n(25),s=n(24),i=n(0),u=n.n(i),p=n(3),l={isOpened:!1,autoHideDuration:6e3,severity:null,message:""},d=u.a.createContext(l),f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=l,e.show=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.setState(Object(r.a)(Object(r.a)({},n),{},{message:t,isOpened:!0}))},e.close=function(){e.setState({isOpened:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(d.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{show:this.show,close:this.close}),children:this.props.children})}}]),n}(i.Component),h=function(e){return function(t){return Object(p.jsx)(d.Consumer,{children:function(n){return Object(p.jsx)(e,Object(r.a)(Object(r.a)({},t),{},{snackbarContext:n}))}})}}},43:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l}));var r=n(26),a=n.n(r),o=n(12),c=n(70),s=function(e){var t=e.split("/"),n=t[t.length-1]||t[t.length-2];return"".concat(o.d,"/").concat(n,".png")},i=function(e){return"".concat(o.d,"/").concat(e,".png")},u={calculateCatchPokemon:function(){return Math.random()<.5},localforage:a.a},p=function(e){return e.replace(/-/g," ")},l=function(e,t){var n=Object(c.a)(e,t||window.location.pathname);return Promise.all(n.map((function(e){var t=e.route.component;if(t&&t.load)return t.load()})))};"undefined"!==typeof window&&window&&(window.utils=u)},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n(5),a=n(20),o=n(21),c=n(25),s=n(24),i=n(0),u=n.n(i),p=n(3),l={isOpened:!1},d=u.a.createContext(l),f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=l,e.show=function(){e.setState({isOpened:!0})},e.hide=function(){e.setState({isOpened:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(d.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{show:this.show,hide:this.hide}),children:this.props.children})}}]),n}(i.Component),h=function(e){return function(t){return Object(p.jsx)(d.Consumer,{children:function(n){return Object(p.jsx)(e,Object(r.a)(Object(r.a)({},t),{},{overlayLoadingContext:n}))}})}}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return P}));var r=n(128),a=n(6),o=n.n(a),c=n(64),s=n(5),i=n(9),u=n(20),p=n(21),l=n(25),d=n(24),f=n(0),h=n.n(f),m=n(26),b=n.n(m),j=n(12),v=n(43),x=n(50),O=n(41),k=n(3),w={myPokemons:[],isCalculatingCatch:!1,timeoutId:-1},y=h.a.createContext(w),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).catchPokemon=function(e){return new Promise((function(t){a.props.overlayLoadingContext.show();var n=setTimeout(Object(i.a)(o.a.mark((function n(){var r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.props.overlayLoadingContext.hide(),!v.e.calculateCatchPokemon()){n.next=18;break}return n.next=4,a.getMyPokemonsFromLocal();case 4:if(!(r=n.sent)){n.next=16;break}return n.next=8,a.isOwned(e.name);case 8:return n.sent||(r.push(Object(s.a)(Object(s.a)({},e),{},{nickname:""})),a.props.snackbarContext.show("Gotcha!",{severity:"success"})),i=Object(c.a)(r),n.next=13,b.a.setItem(j.e,i);case 13:return n.next=15,a.setStateAsync({myPokemons:i});case 15:t(i);case 16:n.next=19;break;case 18:a.props.snackbarContext.show("Failed to catch :( never give up!",{severity:"failed"});case 19:t(!1);case 20:case"end":return n.stop()}}),n)}))),2e3*Math.random()+1e3);a.setStateAsync({timeoutId:n})}))},a.clearCatchTimeout=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===(t=a.state.timeoutId)){e.next=5;break}return clearTimeout(t),e.next=5,a.setStateAsync({timeoutId:-1});case 5:case"end":return e.stop()}}),e)}))),a.clearPokemons=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,a.setStateAsync({myPokemons:t});case 3:return e.next=5,b.a.setItem(j.e,t);case 5:case"end":return e.stop()}}),e)}))),a.fetchMyPokemons=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getMyPokemonsFromLocal();case 3:if(!(t=e.sent)){e.next=8;break}return e.next=7,a.setStateAsync({myPokemons:t});case 7:return e.abrupt("return",t);case 8:return n=[],e.next=11,b.a.setItem(j.e,n);case 11:return e.next=13,a.setStateAsync({myPokemons:Object(s.a)({},n)});case 13:return e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:return e.prev=19,e.next=22,a.setStateAsync({isFetchingMyPokemons:!1});case 22:return e.finish(19);case 23:return e.abrupt("return",[]);case 24:case"end":return e.stop()}}),e,null,[[0,16,19,23]])}))),a.getMyPokemonsFromLocal=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getItem(j.e);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:return n=[],b.a.setItem(j.e,n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)}))),a.isOwned=function(e){var t=a.state.myPokemons;if(t.length>0){var n,o=Object(r.a)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;if(c.name===e)return c}}catch(s){o.e(s)}finally{o.f()}}return null},a.updateNickname=function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getMyPokemonsFromLocal();case 2:if(!((r=e.sent).length>0)){e.next=16;break}c=0;case 5:if(!(c<r.length)){e.next=16;break}if(r[c].name!==t){e.next=13;break}return r[c].nickname=n,e.next=10,a.setStateAsync({myPokemons:r});case 10:return e.next=12,b.a.setItem(j.e,r);case 12:a.props.snackbarContext.show("Nickname updated",{severity:"success"});case 13:c++,e.next=5;break;case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.release=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getMyPokemonsFromLocal();case 2:if(!((n=e.sent).length>0)){e.next=16;break}r=0;case 5:if(!(r<n.length)){e.next=16;break}if(n[r].name!==t){e.next=13;break}return n.splice(r,1),e.next=10,a.setStateAsync({myPokemons:n});case 10:return e.next=12,b.a.setItem(j.e,n);case 12:a.props.snackbarContext.show("Pokemon ".concat(t," released"),{severity:"success"});case 13:r++,e.next=5;break;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.setStateAsync=function(e){return new Promise((function(t){a.setState(e,(function(){return t(e)}))}))},a.state=e.value||w,a}return Object(p.a)(n,[{key:"render",value:function(){return Object(k.jsx)(y.Provider,{value:Object(s.a)(Object(s.a)({},this.state),{},{fetchMyPokemons:this.fetchMyPokemons,catchPokemon:this.catchPokemon,clearCatchTimeout:this.clearCatchTimeout,isOwned:this.isOwned,clearPokemons:this.clearPokemons,updateNickname:this.updateNickname,release:this.release}),children:this.props.children})}}]),n}(f.Component),P=Object(x.c)(Object(O.c)(g))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(5),a=n(6),o=n.n(a),c=n(9),s=n(20),i=n(21),u=n(25),p=n(24),l=n(0),d=n.n(l),f=n(12),h=n(3),m={shouldUpdate:!1,countDown:5,intervalId:null,isNotificationAllowed:!1,appInstallationStatus:"unset",isInstallPromptUIShowed:!1},b=d.a.createContext(m),j=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state=m,e.deferredAppInstallPrompt=null,e.updateServiceWorker=function(){e.setState({countDown:5,shouldUpdate:!0},(function(){e.setState({intervalId:null})}))},e.refreshPage=function(){navigator.serviceWorker.getRegistration().then((function(e){e?e.unregister().then((function(){window.location.reload(!0)})):window.location.reload(!0)}))},e.checkAppInstalledStatus=function(){e.setState({}),"undefined"!==typeof window&&window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.deferredAppInstallPrompt=t;var n=localStorage.getItem(f.a);n?e.setState({appInstallationStatus:n}):e.setState({appInstallationStatus:"unset",isInstallPromptUIShowed:!0})}))},e.showAppInstallPrompt=Object(c.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.deferredAppInstallPrompt){t.next=2;break}return t.abrupt("return");case 2:return e.setState({isInstallPromptUIShowed:!1}),e.deferredAppInstallPrompt.prompt(),t.next=6,e.deferredAppInstallPrompt.userChoice;case 6:"accepted"===(n=t.sent).outcome?console.log("A2HS accepted"):console.log("A2HS dismissed"),e.setState({appInstallationStatus:n.outcome}),localStorage.setItem(f.a,n.outcome),e.deferredAppInstallPrompt=null;case 11:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(n,[{key:"rejectAppInstall",value:function(){this.setState({appInstallationStatus:"dismissed"}),localStorage.setItem(f.a,"dismissed"),this.setState({isInstallPromptUIShowed:!1})}},{key:"render",value:function(){return Object(h.jsx)(b.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{updateServiceWorker:this.updateServiceWorker,refreshPage:this.refreshPage,checkAppInstalledStatus:this.checkAppInstalledStatus,showAppInstallPrompt:this.showAppInstallPrompt,rejectAppInstall:this.rejectAppInstall}),children:this.props.children})}}]),n}(l.Component)},91:function(e,t,n){"use strict";var r,a=n(34),o=(n(0),n(35)),c=n(3),s=o.a.span(r||(r=Object(a.a)(["\n  width: 1em;\n  height: 1em;\n  font-size: 1.5rem;\n  line-height: 1;\n"])));t.a=function(e){var t=e.className,n=void 0===t?"":t,r=e.icon;return Object(c.jsx)(s,{className:"".concat(n," mdi mdi-").concat(r)})}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(5),a=n(20),o=n(21),c=n(25),s=n(24),i=n(0),u=n.n(i),p=n(3),l={windows:[]},d=u.a.createContext(l),f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=l,e.push=function(){var t=e.state.windows.length;return e.state.windows.push(t),e.setState({windows:e.state.windows.slice()}),t},e.pop=function(){return e.state.windows.pop(),e.setState(Object(r.a)({},e.state.windows)),e.state.windows.length},e.popById=function(t){return e.state.windows.splice(e.state.windows.indexOf(t),1),e.setState(Object(r.a)({},e.state.windows)),e.state.windows.length},e.reset=function(){e.setState({windows:[]})},e.isAtTop=function(t){return e.state.windows.length>0&&e.state.windows[e.state.windows.length-1]===t},e}return Object(o.a)(n,[{key:"isWindowActive",get:function(){return this.state.windows.length>0}},{key:"render",value:function(){return Object(p.jsx)(d.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{push:this.push,pop:this.pop,popById:this.popById,reset:this.reset,isWindowActive:this.isWindowActive,isAtTop:this.isAtTop}),children:this.props.children})}}]),n}(i.Component)}},[[180,6,7]]]);
//# sourceMappingURL=main.e593a7be.chunk.js.map