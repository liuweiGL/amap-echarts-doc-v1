(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"i",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return h}),n.d(e,"k",function(){return p}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"j",function(){return g});const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function c(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(c(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function p(t,e,n){if(c(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=s.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},153:function(t,e,n){var r=n(60),i=n(39);n(168)("keys",function(){return function(t){return i(r(t))}})},168:function(t,e,n){var r=n(59),i=n(20),a=n(38);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",s)}},169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},174:function(t,e,n){},175:function(t,e,n){},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},179:function(t,e,n){},202:function(t,e,n){"use strict";var r=n(18),i=n(63),a=n(203),s=n(204);n(205)("match",1,function(t,e,n,o){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=r(t),u=String(this);if(!c.global)return s(c,u);var l=c.unicode;c.lastIndex=0;for(var f,h=[],p=0;null!==(f=s(c,u));){var d=String(f[0]);h[p]=d,""===d&&(c.lastIndex=a(u,i(c.lastIndex),l)),p++}return 0===p?null:h}]})},203:function(t,e,n){"use strict";var r=n(77)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},204:function(t,e,n){"use strict";var r=n(267),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},205:function(t,e,n){"use strict";n(268);var r=n(23),i=n(4),a=n(38),s=n(22),o=n(6),c=n(206),u=o("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=o(t),p=!a(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=p?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[h](""),!e}):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],g=n(s,h,""[t],function(t,e,n,r,i){return e.exec===c?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),m=g[0],b=g[1];r(String.prototype,t,m),i(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},206:function(t,e,n){"use strict";var r,i,a=n(207),s=RegExp.prototype.exec,o=String.prototype.replace,c=s,u=(r=/a/,i=/b*/g,s.call(r,"a"),s.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(c=function(t){var e,n,r,i,c=this;return l&&(n=new RegExp("^"+c.source+"$(?!\\s)",a.call(c))),u&&(e=c.lastIndex),r=s.call(c,t),u&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),l&&r&&r.length>1&&o.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=c},207:function(t,e,n){"use strict";var r=n(18);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},208:function(t,e,n){"use strict";var r=n(18),i=n(60),a=n(63),s=n(26),o=n(203),c=n(204),u=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(205)("replace",2,function(t,e,n,d){return[function(r,i){var a=t(this),s=null==r?void 0:r[e];return void 0!==s?s.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var x=c(f,h);if(null===x)break;if(b.push(x),!g)break;""===String(x[0])&&(f.lastIndex=o(h,a(f.lastIndex),m))}for(var _,k="",y=0,$=0;$<b.length;$++){x=b[$];for(var C=String(x[0]),w=u(l(s(x.index),h.length),0),S=[],L=1;L<x.length;L++)S.push(void 0===(_=x[L])?_:String(_));var O=x.groups;if(p){var j=[C].concat(S,w,h);void 0!==O&&j.push(O);var I=String(e.apply(void 0,j))}else I=v(C,h,w,S,O,e);w>=y&&(k+=h.slice(y,w)+I,y=w+C.length)}return k+h.slice(y)}];function v(t,e,r,a,s,o){var c=r+t.length,u=a.length,l=p;return void 0!==s&&(s=i(s),l=h),n.call(o,l,function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":o=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var h=f(l/10);return 0===h?n:h<=u?void 0===a[h-1]?i.charAt(1):a[h-1]+i.charAt(1):n}o=a[l-1]}return void 0===o?"":o})}})},262:function(t,e,n){"use strict";n.r(e);var r=n(138),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(263).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(262).default},methods:{isActive:r.e}},a=(n(294),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(295);function o(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function c(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var u=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),c(t,e.children,n,i,a,s+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,u=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(a,f.path),d="auto"===f.type?p||f.children.some(function(t){return Object(r.e)(a,f.basePath+"#"+t.slug)}):p,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),g=[i.frontmatter.sidebarDepth,h,u.sidebarDepth,s.sidebarDepth,1].find(function(t){return void 0!==t}),m=u.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[v,c(t,f.children,f.basePath,a,g)]:(d||m)&&f.headers&&!r.d.test(f.path)?[v,c(t,Object(r.c)(f.headers),f.path,a,g)]:v}};n(300);var l={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return"page"===e.type&&Object(r.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},f=Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=f.exports},263:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(289),n(1)),a=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},264:function(t,e,n){"use strict";n(265)("link",function(t){return function(e){return t(this,"a","href",e)}})},265:function(t,e,n){var r=n(59),i=n(38),a=n(22),s=/"/g,o=function(t,e,n,r){var i=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},266:function(t,e,n){"use strict";var r=n(169);n.n(r).a},267:function(t,e,n){var r=n(62),i=n(6)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},268:function(t,e,n){"use strict";var r=n(206);n(59)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},269:function(t,e,n){"use strict";var r=n(170);n.n(r).a},270:function(t,e,n){"use strict";var r=n(171);n.n(r).a},271:function(t,e,n){var r=n(2),i=n(272),a=n(21).f,s=n(276).f,o=n(277),c=n(207),u=r.RegExp,l=u,f=u.prototype,h=/a/g,p=/a/g,d=new u(h)!==h;if(n(9)&&(!d||n(38)(function(){return p[n(6)("match")]=!1,u(h)!=h||u(p)==p||"/a/i"!=u(h,"i")}))){u=function(t,e){var n=this instanceof u,r=o(t),a=void 0===e;return!n&&r&&t.constructor===u&&a?t:i(d?new l(r&&!a?t.source:t,e):l((r=t instanceof u)?t.source:t,r&&a?c.call(t):e),n?this:f,u)};for(var v=function(t){t in u||a(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=s(l),m=0;g.length>m;)v(g[m++]);f.constructor=u,u.prototype=f,n(23)(r,"RegExp",u)}n(278)("RegExp")},272:function(t,e,n){var r=n(19),i=n(273).set;t.exports=function(t,e,n){var a,s=e.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},273:function(t,e,n){var r=n(19),i=n(18),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(65)(Function.call,n(274).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},274:function(t,e,n){var r=n(275),i=n(42),a=n(25),s=n(74),o=n(12),c=n(73),u=Object.getOwnPropertyDescriptor;e.f=n(9)?u:function(t,e){if(t=a(t),e=s(e,!0),c)try{return u(t,e)}catch(t){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},275:function(t,e){e.f={}.propertyIsEnumerable},276:function(t,e,n){var r=n(76),i=n(43).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},277:function(t,e,n){var r=n(19),i=n(62),a=n(6)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},278:function(t,e,n){"use strict";var r=n(2),i=n(21),a=n(9),s=n(6)("species");t.exports=function(t){var e=r[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},279:function(t,e,n){t.exports=n(280)},280:function(t,e,n){n(64),n(281),t.exports=n(7).Array.from},281:function(t,e,n){"use strict";var r=n(66),i=n(40),a=n(69),s=n(282),o=n(283),c=n(68),u=n(284),l=n(70);i(i.S+i.F*!n(285)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=a(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,g=void 0!==v,m=0,b=l(h);if(g&&(v=r(v,d>2?arguments[2]:void 0,2)),null==b||p==Array&&o(b))for(n=new p(e=c(h.length));e>m;m++)u(n,m,g?v(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(i=f.next()).done;m++)u(n,m,g?s(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},282:function(t,e,n){var r=n(11);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},283:function(t,e,n){var r=n(10),i=n(3)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},284:function(t,e,n){"use strict";var r=n(24),i=n(41);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},285:function(t,e,n){var r=n(3)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],s=a[r]();s.next=function(){return{done:n=!0}},a[r]=function(){return s},t(a)}catch(t){}return n}},286:function(t,e,n){t.exports=n(287)},287:function(t,e,n){n(67),n(64),t.exports=n(288)},288:function(t,e,n){var r=n(71),i=n(3)("iterator"),a=n(10);t.exports=n(7).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(r(e))}},289:function(t,e,n){"use strict";var r=n(172);n.n(r).a},290:function(t,e,n){"use strict";var r=n(173);n.n(r).a},291:function(t,e,n){"use strict";var r=n(174);n.n(r).a},292:function(t,e,n){"use strict";var r=n(175);n.n(r).a},293:function(t,e,n){"use strict";var r=n(176);n.n(r).a},294:function(t,e,n){"use strict";var r=n(177);n.n(r).a},295:function(t,e,n){"use strict";var r=n(59),i=n(296)(5),a=!0;"find"in[]&&Array(1).find(function(){a=!1}),r(r.P+r.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(72)("find")},296:function(t,e,n){var r=n(65),i=n(75),a=n(60),s=n(63),o=n(297);t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f,p=e||o;return function(e,o,d){for(var v,g,m=a(e),b=i(m),x=r(o,d,3),_=s(b.length),k=0,y=n?p(e,_):c?p(e,0):void 0;_>k;k++)if((h||k in b)&&(g=x(v=b[k],k,m),t))if(n)y[k]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:y.push(v)}else if(l)return!1;return f?-1:u||l?l:y}}},297:function(t,e,n){var r=n(298);t.exports=function(t,e){return new(r(t))(e)}},298:function(t,e,n){var r=n(19),i=n(299),a=n(6)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},299:function(t,e,n){var r=n(62);t.exports=Array.isArray||function(t){return"Array"==r(t)}},300:function(t,e,n){"use strict";var r=n(178);n.n(r).a},301:function(t,e,n){"use strict";var r=n(179);n.n(r).a},456:function(t,e,n){"use strict";n.r(e);n(61),n(153),n(264);var r=n(138),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},a=n(1),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(n(266),Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),u=(n(202),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],a=0;a<e.length&&!(i.length>=5);a++){var s=e[a];if(this.getPageLocalePath(s)===n&&this.isSearchable(s))if(r(s))i.push(s);else if(s.headers)for(var o=0;o<s.headers.length&&!(i.length>=5);o++){var c=s.headers[o];r(c)&&i.push(Object.assign({},s,{path:s.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(269),Object(a.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),f=(n(270),Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),h=(n(271),n(44)),p=n.n(h);var d=n(279),v=n.n(d),g=n(286),m=n.n(g);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return v()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(208);var x={components:{NavLink:s,DropdownTransition:n(263).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},_=(n(290),{components:{NavLink:s,DropdownLink:Object(a.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var s,o=e[a],c=i[a]&&i[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),r.some(function(t){return t.path===s})||(s=a)),{text:c,link:s}})};return[].concat(b(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),k=(n(291),Object(a.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={components:{SidebarButton:f,NavLinks:k,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(y(this.$el,"paddingLeft"))+parseInt(y(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},C=(n(292),Object(a.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function w(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var a=r[i];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[i+n]}}var S={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,w(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(r.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,w(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,i=void 0===r?"":r,a=t.docsBranch,s=void 0===a?"master":a,o=t.docsRepo,c=void 0===o?e:o;return c&&n&&this.$page.relativePath?this.createEditLink(e,c,i,s,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+a}}},L=(n(293),Object(a.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),O={name:"Sidebar",components:{SidebarLinks:n(262).default,NavLinks:k},props:["items"]},j=(n(301),{components:{Home:c,Page:L,Sidebar:Object(a.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:C},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),I=Object(a.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null);e.default=I.exports}}]);