(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var u=a[s];0!==o[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"05db":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=a("6fc5");let r=class extends o.VuexModule{constructor(){super(...arguments),this.message="",this.active=!1,this.color="success"}setSnackbar(t){Object.assign(this,t)}setActive(t){this.active=t}setSnackbarError(t){this.message=t,this.active=!0,this.color="error"}setSnackbarSuccess(t){this.message=t,this.active=!0,this.color="success"}hideSnackbar(){this.active=!1}};n.__decorate([o.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[r]),n.__metadata("design:returntype",void 0)],r.prototype,"setSnackbar",null),n.__decorate([o.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Boolean]),n.__metadata("design:returntype",void 0)],r.prototype,"setActive",null),n.__decorate([o.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[String]),n.__metadata("design:returntype",void 0)],r.prototype,"setSnackbarError",null),n.__decorate([o.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[String]),n.__metadata("design:returntype",void 0)],r.prototype,"setSnackbarSuccess",null),n.__decorate([o.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],r.prototype,"hideSnackbar",null),r=n.__decorate([o.Module({namespaced:!0,name:"SnackbarStore"})],r),e.default=r},"0613":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("4d97")),r=n.__importDefault(a("05db")),i=n.__importDefault(a("dd9d")),s=n.__importDefault(a("2b0e")),u=n.__importDefault(a("2f62"));s.default.use(u.default);const c=new u.default.Store({modules:{AppStore:o.default,SnackbarStore:r.default},plugins:[i.default]});e.default=c},"0670":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importStar(a("bb71"));a("bf40"),o.default.use(r.default,{components:{VApp:r.VApp,VAppBar:r.VAppBar,VToolbarTitle:r.VToolbarTitle,VSpacer:r.VSpacer,VBtn:r.VBtn,VIcon:r.VIcon,VMenu:r.VMenu,VList:r.VList,VListItem:r.VListItem,VListItemTitle:r.VListItemTitle,VFlex:r.VFlex,VLayout:r.VLayout,VSnackbar:r.VSnackbar,VMain:r.VMain}}),e.default=new r.default({icons:{iconfont:"mdi"}})},"1a12":function(t,e,a){},"22b2":function(t,e,a){"use strict";a.r(e);var n=a("4a53"),o=a("6a01");for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"28e1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e"));o.default.use(a("a3ad"))},"3d48":function(t,e,a){"use strict";a.r(e);var n=a("7402"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"3dfd":function(t,e,a){"use strict";a.r(e);var n=a("7b54"),o=a("6f68");for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"458f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},"46cd":function(t,e,a){"use strict";a.r(e);var n=a("e5f4"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},4720:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1"));let i=class extends o.default{};i=n.__decorate([r.default],i),e.default=i},"4a53":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-snackbar",{attrs:{app:"",timeout:4e3,top:"",color:t.color,flat:""},model:{value:t.safeActive,callback:function(e){t.safeActive=e},expression:"safeActive"}},[a("span",[t._v(t._s(t.text))]),a("v-btn",{attrs:{color:"white",text:""},on:{click:t.hideSnackbar}},[t._v(t._s(t.$t("close")))])],1)],1)},o=[]},"4d97":function(t,e,a){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0});const o=a("9ab4"),r=a("458f"),i=a("6fc5");let s=class extends i.VuexModule{constructor(){super(...arguments),this.user=void 0,this.language=void 0,this.dark=!1}setUser(t){this.user=t}setLanguage(t){this.language=t}setDark(t){this.dark=t}};o.__decorate([i.Mutation,o.__metadata("design:type",Function),o.__metadata("design:paramtypes",["function"===typeof(n="undefined"!==typeof r.User&&r.User)?n:Object]),o.__metadata("design:returntype",void 0)],s.prototype,"setUser",null),o.__decorate([i.Mutation,o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[String]),o.__metadata("design:returntype",void 0)],s.prototype,"setLanguage",null),o.__decorate([i.Mutation,o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Boolean]),o.__metadata("design:returntype",void 0)],s.prototype,"setDark",null),s=o.__decorate([i.Module({namespaced:!0,name:"AppStore"})],s),e.default=s},"5b65":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("d178")),i=n.__importDefault(a("22b2")),s=n.__importDefault(a("d2d0")),u=a("fe0b"),c=n.__importDefault(a("2fe1")),l=a("4bb5"),d=l.namespace("AppStore"),f=l.namespace("SnackbarStore");let p=class extends o.default{get style(){return{"background-color":this.dark?"#303030":"#fafafa"}}created(){this.$vuetify.theme.dark=this.dark;const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",this.dark?"#303030":"#fafafa"),this.hideSnackbar(),document.title=u.i18n.t("title")}get metaInfo(){return{title:u.i18n.t("title")}}};n.__decorate([d.State,n.__metadata("design:type",Boolean)],p.prototype,"dark",void 0),n.__decorate([f.Mutation,n.__metadata("design:type",Function)],p.prototype,"hideSnackbar",void 0),p=n.__decorate([c.default({components:{Navbar:r.default,CookieLaw:s.default,Snackbar:i.default}})],p),e.default=p},"5ced":function(t,e,a){},"5dfc":function(t,e,a){"use strict";a("1a12")},"6a01":function(t,e,a){"use strict";a.r(e);var n=a("cd00"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"6f68":function(t,e,a){"use strict";a.r(e);var n=a("5b65"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"72aa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages=void 0,e.messages={ru:{title:"Темплейт фронтенда",notFound:"Страница не найдена"},en:{title:"Frontend template",notFound:"Page not found"}}},7402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=a("97e5"),i=n.__importDefault(a("2fe1")),s=a("4bb5"),{vueTelegramLogin:u}=a("d226"),c=s.namespace("AppStore"),l=s.namespace("SnackbarStore");let d=class extends o.default{get googleClientId(){return"906458427314-vrgseuf6gsroa41l88005jqko24g8shs.apps.googleusercontent.com"}onFacebookSignInSuccess(t){FB.api("/me",async e=>{try{const e=await r.loginFacebook(t.authResponse.accessToken);this.setUser(e),this.$router.replace("app")}catch(a){this.setSnackbarError("errors.facebook")}})}onFacebookSignInError(t){this.setSnackbarError("errors.facebook")}async onGoogleSignInSuccess(t){try{const e=await r.loginGoogle(t.getAuthResponse().id_token);this.setUser(e),this.$router.replace("cabinet")}catch(e){this.setSnackbarError("errors.google")}}onGoogleSignInError(t){this.setSnackbarError("errors.google")}async onTelegramAuth(t){try{const e=await r.loginTelegram(t);this.setUser(e),this.$router.replace("cabinet")}catch(e){this.setSnackbarError("errors.telegram")}}};n.__decorate([c.Mutation,n.__metadata("design:type",Function)],d.prototype,"setUser",void 0),n.__decorate([l.Mutation,n.__metadata("design:type",Function)],d.prototype,"setSnackbarError",void 0),d=n.__decorate([i.default({components:{vueTelegramLogin:u}})],d),e.default=d},"7b54":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:t.$store.state.dark?"grey darken-4":"grey lighten-4",attrs:{dark:t.$store.state.dark}},[a("cookie-law",{attrs:{theme:"blood-orange",buttonText:t.$t("cookieButton"),message:t.$t("cookieMessage")}}),a("Navbar"),a("Snackbar"),a("v-main",[a("router-view")],1)],1)},o=[]},9703:function(t,e,a){"use strict";a.r(e);var n=a("fde4"),o=a("ed6f");for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"97e5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reset=e.loginTelegram=e.loginGoogle=e.loginFacebook=void 0;const n=a("9ab4"),o=n.__importDefault(a("bc3a")),r="https://template.com";async function i(t){return(await o.default.post(r+"/login/facebook",{accessToken:t})).data}async function s(t){return(await o.default.post(r+"/login/google",{accessToken:t})).data}async function u(t){return(await o.default.post(r+"/login/telegram",t)).data}async function c(t){return(await o.default.post(r+"/users/reset",{},{headers:l(t)})).data}function l(t){return t.token?{token:t.token}:void 0}e.loginFacebook=i,e.loginGoogle=s,e.loginTelegram=u,e.reset=c},"9df5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("v-layout",{staticClass:"text-center",attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("div",{staticClass:"headline pb-4"},[a("span",{domProps:{innerHTML:t._s(t.$t("home.info"))}})]),a("p",[t._v(t._s(t.$t("home.rules.register")))]),a("p",[t._v(t._s(t.$t("home.rules.money")))]),a("p",[t._v(t._s(t.$t("home.rules.success")))])]),a("v-flex",{staticClass:"pt-4"},[a("vue-telegram-login",{attrs:{mode:"callback","telegram-login":"mamkintrade_bot",radius:"3",userpic:!1},on:{callback:t.onTelegramAuth}}),a("g-signin-button",{attrs:{params:{client_id:t.googleClientId}},on:{success:t.onGoogleSignInSuccess,error:t.onGoogleSignInError}},[t._v(t._s(t.$t("home.google")))]),a("fb-signin-button",{attrs:{params:{scope:"email",return_scopes:!0}},on:{success:t.onFacebookSignInSuccess,error:t.onFacebookSignInError}},[t._v(t._s(t.$t("home.facebook")))]),a("div",{staticClass:"vk-signin-button",on:{click:function(e){e.stopPropagation(),t.vkDialog=!0}}},[t._v(t._s(t.$t("home.vk")))]),a("div",{staticClass:"api-signin-button",on:{click:function(e){e.stopPropagation(),t.keyDialog=!0}}},[t._v(t._s(t.$t("home.key")))])],1),a("v-flex",{staticClass:"pt-4"},[a("div",{staticClass:"caption"},[a("router-link",{attrs:{to:"/privacy"}},[t._v(t._s(t.$t("home.privacy")))])],1)])],1)],1)},o=[]},ad7c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e"));o.default.use(a("4f76"))},b909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("8c4f")),i=n.__importDefault(a("bb51")),s=n.__importDefault(a("9703")),u=n.__importDefault(a("0613"));o.default.use(r.default);const c=new r.default({mode:"history",routes:[{path:"/",name:"home",component:i.default},{path:"*",name:"notFound",component:s.default}]});c.beforeEach((t,e,a)=>{const n=t.matched.some(t=>t.meta.requiresAuth),o=u.default.state.AppStore.user;n&&!o?a("/"):"/"===t.path&&o?a({name:"cabinet",query:t.query}):a()}),e.default=c},bb51:function(t,e,a){"use strict";a.r(e);var n=a("9df5"),o=a("3d48");for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("cccb");var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},cccb:function(t,e,a){"use strict";a("5ced")},cd00:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),i=a("fe0b"),s=a("4bb5"),u=s.namespace("SnackbarStore");let c=class extends o.default{get safeActive(){return this.active}set safeActive(t){this.setActive(t)}get text(){const t=this.message;return"string"===typeof t?"Internal Server Error"===t?i.i18n.t("errors.internal"):i.i18n.t(this.message.toString()):t[i.i18n.locale]}};n.__decorate([u.State,n.__metadata("design:type",Boolean)],c.prototype,"active",void 0),n.__decorate([u.State,n.__metadata("design:type",String)],c.prototype,"color",void 0),n.__decorate([u.State,n.__metadata("design:type",String)],c.prototype,"message",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"hideSnackbar",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setActive",void 0),c=n.__decorate([r.default],c),e.default=c},cd49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("3dfd")),i=n.__importDefault(a("b909")),s=n.__importDefault(a("0613")),u=a("fe0b");a("28e1"),a("ad7c");const c=n.__importDefault(a("0670"));o.default.config.productionTip=!0,new o.default({router:i.default,store:s.default,i18n:u.i18n,vuetify:c.default,render:t=>t(r.default)}).$mount("#app")},d178:function(t,e,a){"use strict";a.r(e);var n=a("d556"),o=a("46cd");for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("5dfc");var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},d556:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[t._v(t._s(t.$t("title")))])]),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:"",color:"grey"},on:{click:t.toggleMode}},[a("v-icon",{attrs:{small:""}},[t._v("brightness_2")])],1),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{text:"",icon:"",color:"grey"}},n),[t._v(t._s(t.currentLocale.icon))])]}}])},[a("v-list",t._l(t.locales,(function(e){return a("v-list-item",{key:e.code,on:{click:function(a){return t.changeLanguage(e.code)}}},[a("v-list-item-title",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1)},o=[]},dd9d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("0e44"));e.default=o.default({paths:["AppStore.user","AppStore.language","AppStore.dark"]})},e5f4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("2fe1")),i=a("fe0b"),s=a("4bb5"),u=s.namespace("AppStore");let c=class extends o.default{get locales(){return[{icon:"🇺🇸",code:"en"},{icon:"🇷🇺",code:"ru"}]}get currentLocale(){for(const t of this.locales)if(t.code===i.i18n.locale)return t}toggleMode(){this.setDark(!this.dark),this.$vuetify.theme.dark=this.dark}changeLanguage(t){i.i18n.locale=t,this.setLanguage(t),document.title=i.i18n.t("strippedTitle")}};n.__decorate([u.State,n.__metadata("design:type",Boolean)],c.prototype,"dark",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setDark",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setLanguage",void 0),c=n.__decorate([r.default],c),e.default=c},ed6f:function(t,e,a){"use strict";a.r(e);var n=a("4720"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},fde4:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("v-layout",{staticClass:"text-xs-center",attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("div",{staticClass:"headline pb-4"},[a("span",[t._v(t._s(t.$t("notFound")))])])])],1)],1)},o=[]},fe0b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=void 0;const n=a("9ab4"),o=n.__importDefault(a("2b0e")),r=n.__importDefault(a("a925")),i=a("72aa"),s=n.__importDefault(a("0613"));function u(){if(s.default.state.AppStore.language)return s.default.state.AppStore.language;{const t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),e=["en","ru"];return e.indexOf(t)>-1?t:"en"}}o.default.use(r.default),e.i18n=new r.default({locale:u(),fallbackLocale:"en",messages:i.messages})}});
//# sourceMappingURL=app.d9099cb3.js.map