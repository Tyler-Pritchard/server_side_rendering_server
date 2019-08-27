!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(u,o){try{var a=t[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=t.FETCH_USERS="fetch_users",o=(t.fetchUsers=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_CURRENT_USER="fetch_current_user"),a=(t.fetchCurrentUser=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_ADMINS="fetch_admins");t.fetchAdmins=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:u=e.sent,t({type:a,payload:u});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=(l(n(0)),l(n(11))),o=l(n(13)),a=l(n(14)),i=l(n(15)),c=l(n(16));function l(e){return e&&e.__esModule?e:{default:e}}t.default=[r({},u.default,{routes:[r({},o.default,{path:"/",exact:!0}),r({},c.default,{path:"/admins"}),r({},a.default,{path:"/users"}),r({},i.default)]})]},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n(8);var r=l(n(9)),u=n(3),o=l(n(10)),a=l(n(4)),i=l(n(17)),c=l(n(20));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)();s.use("/api",(0,o.default)("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){e.headers["x-forwarded-host"]="localhost:3000"}})),s.use(r.default.static("public")),s.get("*",function(e,t){var n=(0,c.default)(e),r=(0,u.matchRoutes)(a.default,e.path).map(function(e){var t=e.route;return t.loadData?t.loadData(n):null}).map(function(e){if(e)return new Promise(function(t,n){e.then(t).catch(t)})});Promise.all(r).then(function(){var r={},u=(0,i.default)(e,n,r);r.notFound&&t.status(404),t.send(u)})}),s.listen(3e3,function(){console.log("Listening on port 3000")})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),u=n(3),o=i(n(12)),a=n(1);function i(e){return e&&e.__esModule?e:{default:e}}t.default={component:function(e){var t=e.route;return r.default.createElement("div",null,r.default.createElement(o.default,null),(0,u.renderRoutes)(t.routes))},loadData:function(e){return(0,e.dispatch)((0,a.fetchCurrentUser)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r},a=n(5),i=n(2);t.default=(0,i.connect)(function(e){return{auth:e.auth}})(function(e){var t=e.auth?o.default.createElement("a",{href:"/api/logout"},"Logout"):o.default.createElement("a",{href:"/api/auth/google"},"Login");return o.default.createElement("nav",null,o.default.createElement("div",{className:"nav-wrapper"},o.default.createElement(a.Link,{to:"/",className:"brand-logo"},"React SSR"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/users"},"Users")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/admins"},"Admins")),o.default.createElement("li",null,t))))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default={component:function(){return o.default.createElement("div",{className:"center-align",style:{marginTop:"200px"}},o.default.createElement("h3",null,"Welcome"),o.default.createElement("p",null,"Check out these awesome features"))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},i=n(2),c=n(1);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){return a.default.createElement("li",{key:e.id},e.name)})}},{key:"render",value:function(){return a.default.createElement("div",null,"List of Users",a.default.createElement("ul",null,this.renderUsers()))}}]),t}();t.default={loadData:function(e){return e.dispatch((0,c.fetchUsers)())},component:(0,i.connect)(function(e){return{users:e.users}},{fetchUsers:c.fetchUsers})(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default={component:function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,o.default.createElement("h1",null,"Ooops, route not found.")}}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var u,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(u=a)&&u.__esModule?u:{default:u},c=n(2),l=n(1);var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){this.props.fetchAdmins()}},{key:"renderAdmins",value:function(){return this.props.admins.map(function(e){return i.default.createElement("li",{key:e.id},e.name)})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h3",null,"Protected list of admins"),i.default.createElement("ul",null,this.renderAdmins()))}}]),t}();t.default={component:(0,c.connect)(function(e){return{admins:e.admins}},{fetchAdmins:l.fetchAdmins})(s),loadData:(r=dispatch((0,l.fetchAdmins)()),dispatch=r.dispatch,r)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(0)),u=n(18),o=n(5),a=n(2),i=n(3),c=s(n(19)),l=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return'\n        <html>\n            <head>\n            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n\n            </head>\n            <body>\n                <div id="root">'+(0,u.renderToString)(r.default.createElement(a.Provider,{store:t},r.default.createElement(o.StaticRouter,{location:e.path,context:{context:context}},r.default.createElement("div",null,(0,i.renderRoutes)(l.default)))))+"</div>\n                <script>\n                  window.INITIAL_STATE = "+(0,c.default)(t.getState())+'\n                <\/script>\n                <script src="bundle.js"><\/script>\n            </body>\n        </html>\n    '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=i(n(21)),o=i(n(22)),a=i(n(23));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=o.default.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return(0,r.createStore)(a.default,{},(0,r.applyMiddleware)(u.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=i(n(24)),o=i(n(25)),a=i(n(26));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({users:u.default,auth:o.default,admins:a.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case r.FETCH_CURRENT_USER:return t.payload.data||!1;default:return e}};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_ADMINS:return t.payload.data;default:return e}}}]);