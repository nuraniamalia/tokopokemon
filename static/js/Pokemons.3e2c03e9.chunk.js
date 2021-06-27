(this.webpackJsonppokecatch=this.webpackJsonppokecatch||[]).push([[4],{229:function(n,t,e){"use strict";var i,a=e(34),o=e(0),s=e.n(o),c=e(10),r=e(230),p=e(35),d=e(65),l=e(3),x=p.a.div(i||(i=Object(a.a)(["\n  display: block;\n  border-radius: 20px;\n  background: white;\n  box-shadow: 0px 0px 10px 0px #e0e0e0;\n  margin: 10px;\n  margin-top: 20px;\n  overflow: hidden;\n  max-width: 150px;\n  transition: 0.3s;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid #d4d4d4;\n  padding-bottom: 35px;\n\n  @media only screen and (min-width: 800px) {\n    margin: 20px;\n    max-width: 192px;    \n  }\n\n  &:active {\n    opacity: 0.3;\n    transition: 0.03s;\n  }\n\n  .picture {\n    height: 80px;\n    padding: 10px;\n    max-height: 300px;\n    width: 145px;\n    margin-bottom: 20px;\n\n    span {\n      \n      width: 100%;\n    }\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      object-position: center;\n    }\n  }\n\n  .details {\n    display: block;\n    padding: 10px;\n\n    .name {\n      font-size: 15pt;\n      font-weight: 500;\n      margin-bottom: 10px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      word-wrap: break-word;\n      white-space: nowrap;\n      text-transform: capitalize;\n      text-align: center;\n      margin-top: 10px;\n    }\n\n    .owned {\n      color: #fff;\n      text-align: center;\n      background-color: #3faf48;\n      width: 95px;\n      margin: auto;\n      border-radius: 20px;\n      padding: 3px;\n    }\n\n    .nickname {\n      text-align: left;\n\n      .label {\n        color: #606060;\n        margin-top: 10px;\n        font-size: 9pt;\n      }\n\n      .nickname-value {\n        font-size: 8pt;\n        font-weight: bold;\n        color: #0098e1;\n      }\n    }\n  }\n"])));t.a=Object(c.h)((function(n){var t=n.data,e=n.history,i=n.location,a=s.a.useContext(d.a),o=a.isOwned,c=a.myPokemons;return o&&o(t.name),Object(l.jsxs)(x,{"data-testid":"pokemon-card",onClick:function(){e.push({pathname:"".concat(i.pathname,"/").concat(t.name),state:{prevPath:i.pathname}})},children:[Object(l.jsx)("div",{className:"picture",children:Object(l.jsx)(r.LazyLoadImage,{alt:"profile picture",placeholderSrc:"/images/placeholder.png",src:t.image_url,effect:"blur"})}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("div",{"data-testid":"pokemon-card-name",className:"name",children:t.name}),Object(l.jsxs)("div",{"data-testid":"pokemon-card-owned",className:"owned",children:["Owned : ",c.filter((function(n){return n.name.toLowerCase()==t.name.toLowerCase()})).length]})]})]})}))},231:function(n,t,e){"use strict";var i,a,o,s,c=e(95),r=e(34),p=e(0),d=e.n(p),l=e(35),x=e(267),h=e(268),b=e(253),m=e(65),j=e(269),g=e(98),u=e.n(g),f=e(252),w=e(28),O=e(40),v=e(66),k=e(3),y=Object(l.a)(v.b)(i||(i=Object(r.a)(["\n  && {\n    text-decoration: none;\n    color: #3faf48;\n  }\n"]))),N=Object(l.a)(x.a)(a||(a=Object(r.a)(["\n  && {\n    padding: 5px;\n    background: #fff;\n    color: #3faf48;\n    font-weight: 600;\n    font-size: 16pt;\n    /* border-bottom: 1px solid #dadada; */\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),\n      0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),C=Object(l.a)(h.a)(o||(o=Object(r.a)(["\n  && {\n    justify-content: space-between;\n    min-height: 55px;\n    min-width: 200px;\n\n    .info {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n\n      &:visited {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      .title {\n        margin-left: 20px;\n        font-weight: bold;\n        display: flex;\n        width: 100px;\n      }\n    }\n    .logo {\n      display: none;\n      @media only screen and (min-width: 800px) {\n        display: block;\n      }\n    }\n    \n  }\n"]))),I=Object(l.a)(j.a)(s||(s=Object(r.a)(["\n  &&{\n    font-size: 13pt;\n    margin-left: 10px;\n  }\n"]))),z=Object(f.a)((function(n){return{grow:{flexGrow:1},menuButton:{marginRight:n.spacing(2)},title:Object(c.a)({display:"none"},n.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:Object(w.c)(n.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.c)(n.palette.common.white,.25)},marginRight:n.spacing(2),marginLeft:0,width:"100%"},n.breakpoints.up("sm"),{marginLeft:n.spacing(3),width:"auto"}),searchIcon:{padding:n.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),"px)"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(c.a)({display:"none"},n.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},n.breakpoints.up("md"),{display:"none"})}}));t.a=function(n){var t=d.a.useContext(O.a).selectedRoute,e=n.component,i=d.a.useContext(m.a).myPokemons,a=z();return Object(k.jsx)(N,{position:"fixed",children:Object(k.jsxs)(C,{children:[Object(k.jsxs)(y,{className:"info",to:"/",children:[Object(k.jsx)("div",{className:"logo",children:Object(k.jsx)("span",{children:"tokopokemon"})}),Object(k.jsx)("span",{"data-testid":"appbar-title",className:"title",children:t&&t.label})]}),e,Object(k.jsx)("div",{className:a.grow}),Object(k.jsx)("div",{className:a.sectionDesktop,children:Object(k.jsx)(y,{className:"info",to:"/mypokemons",children:Object(k.jsxs)(b.a,{badgeContent:i.length,color:"secondary",children:[Object(k.jsx)(u.a,{}),Object(k.jsx)(I,{className:a.title,noWrap:!0,children:"My Pokemon"})]})})})]})})}},233:function(n,t,e){"use strict";var i,a,o,s=e(34),c=e(0),r=e.n(c),p=e(35),d=e(232),l=e(90),x=e(3),h=p.a.div(i||(i=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background: #3498db;\n  color: white;\n  position: fixed;\n  top: 56px;\n  align-items: center;\n  width: 100%;\n  z-index: 1300;\n\n  .left {\n    display: flex;\n    align-items: center;\n\n    .close {\n      font-size: 37pt;\n      line-height: 0;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      height: 35px;\n      width: 35px;\n      font-weight: 100;\n      margin-top: -10px;\n      transition: 0.3s;\n\n      &:active {\n        opacity: 0.3;\n        transition: 0.1s;\n      }\n    }\n\n    .title {\n      font-size: 11pt;\n      margin-left: 10px;\n    }\n  }\n\n  .install-button {\n    padding: 10px 20px;\n    border-radius: 30px;\n    border: 1px solid white;\n    transition: 0.3s;\n\n    &:active {\n      opacity: 0.3;\n      transition: 0.1s;\n    }\n  }\n"]))),b=p.a.div(a||(a=Object(s.a)(["\n  width: 100%;\n  height: 60px;\n  position: relative;\n"]))),m=function(){var n=r.a.useContext(l.a),t=n.isInstallPromptUIShowed,e=n.rejectAppInstall,i=n.showAppInstallPrompt;return t?Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsxs)(h,{children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"close",onClick:function(){e&&e()},children:"\xd7"}),Object(x.jsx)("div",{className:"title",children:"Keep track of application process"})]}),Object(x.jsx)("div",{className:"install-button",onClick:function(){i&&i()},children:"Install"})]}),Object(x.jsx)(b,{})]}):Object(x.jsx)("div",{"data-testid":"appinstall-empty"})},j=e(94),g=p.a.div(o||(o=Object(s.a)(["\n  display: block;\n  padding-top: 45px;\n  height: 100vh;\n  min-height: 100vh;\n"]))),u=Object(d.a)(g)({active:{x:0,transition:{duration:300}},inactive:{x:-150,transition:{duration:700}}});t.a=function(n){var t=r.a.useContext(l.a).isInstallPromptUIShowed,e=r.a.useContext(j.a).isWindowActive;return Object(x.jsxs)(u,{appinstall:t,pose:e?"inactive":"active",initialPose:"active",children:[Object(x.jsx)(m,{}),n.children]})}},277:function(n,t,e){"use strict";e.r(t);var i,a,o,s=e(34),c=e(0),r=e.n(c),p=e(35),d=e(100),l=e(229),x=e(233),h=e(239),b=e.n(h),m=e(3),j=Object(p.a)("div")(i||(i=Object(s.a)(["\n  display: block;\n  width: 40vw;\n  max-height: 300px;\n  overflow: hidden;\n  margin: ",";\n"])),(function(n){return n.margin?"10px":"0px"})),g=function(n){var t=n.margin;return Object(m.jsxs)(j,{margin:!!t,children:[Object(m.jsx)(b.a,{width:"100%",height:"40vw"}),Object(m.jsx)(b.a,{width:"100%",height:50})]})},u=e(251),f=e(231),w=e(70),O=e(273),v=p.a.div(a||(a=Object(s.a)(["\n  padding: 15px;\n  padding-top: 25px;\n  padding-bottom: 70px;\n\n  .card-wrapper,\n  .skeleton-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    flex-wrap: wrap;\n    background: white;\n  }\n\n  .logo-wrapper {\n    display: block;\n    border-radius: 20px;\n    background: white;\n    box-shadow: 1px 1px 60px 0px #00000017;\n    margin: 10px auto;\n    max-width: 350px;\n    transition: 0.3s;\n    border: 1px solid #d4d4d4;\n    padding: 20px;\n\n    .logo-pokemon {\n      width: 100%;\n      height: 100px;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n      }\n    }\n\n    .total-caught {\n      margin-top: 20px;\n      text-align: center;\n\n      .title {\n        font-size: 14pt;\n        font-weight: bold;\n      }\n    }\n  }\n"])));t.default=function(n){var t=r.a.useContext(d.a),e=t.pokemons,i=t.isFetchingPokemons,a=t.resetAndFetch,c=t.next,p=t.hasNext,h=n.route;r.a.useEffect((function(){a&&a()}),[]);Object(O.a)(o||(o=Object(s.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"])));return Object(m.jsxs)(x.a,{children:[Object(m.jsx)(f.a,{}),Object(m.jsxs)(v,{children:[Object(m.jsx)(u.a,{dataLength:e.length,next:c||function(){},hasMore:p,loader:Object(m.jsxs)("div",{className:"skeleton-wrapper",children:[Object(m.jsx)(g,{margin:!0}),Object(m.jsx)(g,{margin:!0})]}),style:{overflow:"unset"},children:Object(m.jsx)("div",{className:"card-wrapper",children:e.map((function(n,t){return Object(m.jsx)(l.a,{data:n},t)}))})}),function(){if(i&&0===e.length)return Object(m.jsxs)("div",{className:"skeleton-wrapper",children:[Object(m.jsx)(g,{margin:!0}),Object(m.jsx)(g,{margin:!0}),Object(m.jsx)(g,{margin:!0}),Object(m.jsx)(g,{margin:!0})]})}(),(null===h||void 0===h?void 0:h.routes)&&Object(w.b)(h.routes)]})]})}}}]);
//# sourceMappingURL=Pokemons.3e2c03e9.chunk.js.map