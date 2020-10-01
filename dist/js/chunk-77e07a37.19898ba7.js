(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e07a37"],{"297c":function(t,e,i){"use strict";i("a9e3");var a=i("2b0e"),n=(i("c7cd"),i("5530")),s=i("ade3"),r=(i("6ece"),i("0789")),o=i("a9ad"),c=i("fe6c"),l=i("a452"),u=i("7560"),h=i("80d2"),d=i("58df"),f=Object(d["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]),v=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.$vuetify.rtl?"right":"left",Object(h["f"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(h["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["c"]:r["d"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(h["m"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=v;e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"553a":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var a=i("5530"),n=(i("b5b6"),i("3a66")),s=i("8dd9"),r=i("d10f"),o=i("58df"),c=i("80d2");e["a"]=Object(o["a"])(s["a"],Object(n["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])({},s["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])({},s["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(c["f"])(t),left:Object(c["f"])(this.computedLeft),right:Object(c["f"])(this.computedRight),bottom:Object(c["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}})},"615b":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var a=i("ade3"),n=i("5530"),s=(i("4b85"),i("2b0e")),r=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["v"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(o["v"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,i){var a=t;if(null!=i&&!1!==i){if(e){var n=e.replace(t,"");a+="-".concat(n)}return"col"!==t||""!==i&&!0!==i?(a+="-".concat(i),a.toLowerCase()):a.toLowerCase()}}var v=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,s=e.children,o=(e.parent,"");for(var c in i)o+=String(i[c]);var l=v.get(o);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var a=i[t],n=f(e,t,a);n&&l.push(n)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!i.cols},Object(a["a"])(t,"col-".concat(i.cols),i.cols),Object(a["a"])(t,"offset-".concat(i.offset),i.offset),Object(a["a"])(t,"order-".concat(i.order),i.order),Object(a["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(o,l)}(),t(i.tag,Object(r["a"])(n,{class:l}),s)}})},"6ece":function(t,e,i){},7061:function(t,e,i){"use strict";var a=i("a798"),n=i.n(a);n.a},7958:function(t,e,i){},8738:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var a=i("b0af"),n=i("80d2"),s=Object(n["g"])("v-card__actions"),r=Object(n["g"])("v-card__subtitle"),o=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");a["a"]},"9a4a":function(t,e,i){"use strict";var a=i("8738"),n=i.n(a);n.a},a798:function(t,e,i){},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var a=i("5530"),n=(i("615b"),i("10d2")),s=i("297c"),r=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(s["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,i){},cd56:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{attrs:{id:"start"}},[i("main-page"),i("v-btn",{staticClass:"margin",attrs:{absolute:"",fixed:"",fab:"",bottom:"",right:""},on:{click:function(e){return t.$vuetify.goTo("#start")}}},[i("v-icon",[t._v("mdi-arrow-up")])],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-navigation-drawer",{staticClass:"drawer",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{attrs:{href:"./myproducts"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-folder-download")])],1),a("v-list-item-title",[t._v("My products")])],1),a("v-list-item",{attrs:{href:"./myuploads"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cloud-upload")])],1),a("v-list-item-title",[t._v("My uploads")])],1),a("v-list-item",{attrs:{href:"./profile"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("My profile")])],1),a("v-list-item",{attrs:{href:"./"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-logout")])],1),a("v-list-item-title",[t._v("Log out")])],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"#FF5D73",height:"100","scroll-threshold":"5","clipped-right":"",elevation:"0"}},[a("a",{attrs:{href:"./dashboard"}},[a("v-avatar",{staticClass:"mr-3",attrs:{color:"#FF5D73",size:"70"}},[a("v-img",{attrs:{contain:"","max-height":"70%",src:i("cf05")}})],1)],1),a("h1",{staticClass:"titlee"},[t._v("Open Sourx")]),a("v-spacer"),t.$vuetify.breakpoint.mdOnly||t.$vuetify.breakpoint.lgOnly||t.$vuetify.breakpoint.xlOnly?a("v-btn",{staticClass:"bar-b",staticStyle:{color:"white"},attrs:{title:"Cloned",href:"./myproducts",icon:""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-folder-download")])],1):t._e(),t.$vuetify.breakpoint.mdOnly||t.$vuetify.breakpoint.lgOnly||t.$vuetify.breakpoint.xlOnly?a("v-btn",{staticClass:"bar-b",staticStyle:{color:"white"},attrs:{title:"Uploads",href:"./myuploads",icon:""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-cloud-upload")])],1):t._e(),t.$vuetify.breakpoint.mdOnly||t.$vuetify.breakpoint.lgOnly||t.$vuetify.breakpoint.xlOnly?a("v-btn",{staticClass:"bar-b",staticStyle:{color:"white"},attrs:{title:"Profile",href:"./profile",icon:""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-account")])],1):t._e(),t.$vuetify.breakpoint.mdOnly||t.$vuetify.breakpoint.lgOnly||t.$vuetify.breakpoint.xlOnly?a("v-btn",{staticClass:"bar-b",staticStyle:{color:"white"},attrs:{title:"Log out",href:"./",icon:""},on:{click:function(e){return t.logout()}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-logout")])],1):t._e(),t.$vuetify.breakpoint.smOnly||t.$vuetify.breakpoint.xsOnly?a("v-btn",{staticClass:"bar-b",staticStyle:{color:"white"},attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-menu")])],1):t._e()],1),a("v-content",[a("section",{staticClass:"background",attrs:{id:"about-me"}},[a("v-container",{staticClass:" container text-center less-margin"},[a("h2",{staticClass:"left black-text font-weight-bold mb-3"},[t._v("Hello, "+t._s(t.user.name.split(" ")[0]))]),a("v-card",{attrs:{target:"_blank",elevation:"0.5","max-width":"100%"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"text"},[a("p",{staticClass:"left black-text font-weight-bold mb-3"},[t._v("Your newest cloned projects:")])]),a("v-card-text",{staticClass:"center"},t._l(t.user.projects,(function(e,i){return a("v-row",{key:"proj"+i,staticClass:"margin-about"},[a("v-col",{staticClass:"black-text left",attrs:{md:"4",sm:"6",cols:"12"}},[t._v(" "+t._s(e.name)+" ")]),a("v-col",{staticClass:"black-text left",attrs:{md:"8",sm:"6",cols:"12"}},[t._v(" "+t._s(e.description)+" ")])],1)})),1)],1)],1)],1),a("br"),a("v-card",{attrs:{target:"_blank",elevation:"0.5","max-width":"100%"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"text"},[a("p",{staticClass:"left black-text font-weight-bold mb-3"},[t._v("Your newest upload projects:")])]),a("v-card-text",{staticClass:"center"},t._l(t.user.uploads,(function(e,i){return a("v-row",{key:"up"+i,staticClass:"margin-about"},[a("v-col",{staticClass:"black-text left",attrs:{md:"4",sm:"6",cols:"12"}},[t._v(" "+t._s(e.name)+" ")]),a("v-col",{staticClass:"black-text left",attrs:{md:"8",sm:"6",cols:"12"}},[t._v(" "+t._s(e.description)+" ")])],1)})),1)],1)],1)],1)],1)],1)]),a("v-footer",{staticClass:"justify-center",attrs:{color:"#FF5D73",height:"50"}},[a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Made with 💜 by Santiago Mille ")])])],1)],1)},r=[],o={name:"MainPage",data:function(){return{drawer:!1,user:{name:"Rodrigo Cabrera Pliego",username:"rocapl",email:"rodrigo@amazon.com",uploads:[{name:"Sumo Robot",description:"This a chassis and code for a mini sumo robot.",documents:[{name:"chassis.stl",size:2889}]}],projects:[{name:"Quadruped Robot",description:"This is the structure, mechanics and code for a quadruped robot built in wood",documents:[{name:"leg.stl",size:2889},{name:"chassis.stl",size:28889},{name:"code.c",size:289}]}]}}},methods:{logout:function(){console.log("logout")}}},c=o,l=(i("9a4a"),i("2877")),u=i("6544"),h=i.n(u),d=i("7496"),f=i("40dc"),v=i("8212"),p=i("8336"),m=i("b0af"),g=i("99d9"),b=i("62ad"),y=i("a523"),_=i("a75b"),O=i("553a"),w=i("132d"),C=i("adda"),k=i("8860"),B=i("da13"),j=i("34c3"),x=i("5d23"),$=i("f774"),V=i("0fd9"),M=i("2fa4"),S=Object(l["a"])(c,s,r,!1,null,"64c9ffac",null),A=S.exports;h()(S,{VApp:d["a"],VAppBar:f["a"],VAvatar:v["a"],VBtn:p["a"],VCard:m["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:b["a"],VContainer:y["a"],VContent:_["a"],VFooter:O["a"],VIcon:w["a"],VImg:C["a"],VList:k["a"],VListItem:B["a"],VListItemIcon:j["a"],VListItemTitle:x["b"],VNavigationDrawer:$["a"],VRow:V["a"],VSpacer:M["a"]});var T={name:"Main",components:{MainPage:A}},z=T,E=(i("7061"),Object(l["a"])(z,a,n,!1,null,"6aaa9afb",null));e["default"]=E.exports;h()(E,{VBtn:p["a"],VIcon:w["a"]})},f774:function(t,e,i){"use strict";i("99af"),i("a9e3"),i("c7cd");var a=i("5530"),n=(i("7958"),i("adda")),s=i("3a66"),r=i("a9ad"),o=i("b848"),c=i("e707"),l=i("d10f"),u=i("7560"),h=i("a293"),d=i("dc22"),f=(i("4160"),i("159b"),i("80d2")),v=function(t){var e=t.touchstartX,i=t.touchendX,a=t.touchstartY,n=t.touchendY,s=.5,r=16;t.offsetX=i-e,t.offsetY=n-a,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&n<a-r&&t.up(t),t.down&&n>a+r&&t.down(t))};function p(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function m(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),v(e)}function g(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function b(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return p(t,e)},touchend:function(t){return m(t,e)},touchmove:function(t){return g(t,e)}}}function y(t,e,i){var a=e.value,n=a.parent?t.parentElement:t,s=a.options||{passive:!0};if(n){var r=b(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=r,Object(f["r"])(r).forEach((function(t){n.addEventListener(t,r[t],s)}))}}function _(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var n=a._touchHandlers[i.context._uid];Object(f["r"])(n).forEach((function(t){a.removeEventListener(t,n[t])})),delete a._touchHandlers[i.context._uid]}}var O={inserted:y,unbind:_},w=O,C=i("58df"),k=Object(C["a"])(Object(s["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),r["a"],o["a"],c["a"],l["a"],u["a"]);e["a"]=k.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:h["a"],Resize:d["a"],Touch:w},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(a["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(f["f"])(this.height),top:this.isBottom?"auto":Object(f["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(f["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(f["f"])(this.computedTransform,"%"),")"),width:Object(f["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(f["m"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(f["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})}}]);
//# sourceMappingURL=chunk-77e07a37.19898ba7.js.map