(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jssdk-demo"],{"0126":function(t){t.exports={code:100002,msg:"活动未开始",result:{id:null,actName:"测试页面",actCode:null,actBeginTime:16155648e5,actEndTime:1619193599e3,isEnableBar:null,backgroundColor:null,actHeadImg:null,actRule:null,share:null,status:null,actStatus:"NOTSTARTED",elementTypes:null,barColor:null,selectedColor:null}}},"02f4":function(t,e,i){var n=i("4588"),o=i("be13");t.exports=function(t){return function(e,i){var a,r,c=String(o(e)),s=n(i),l=c.length;return s<0||s>=l?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===l||(r=c.charCodeAt(s+1))<56320||r>57343?t?c.charAt(s):a:t?c.slice(s,s+2):r-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var n=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"0933":function(t,e,i){},"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,i){var n=i("52a7"),o=i("4630"),a=i("6821"),r=i("6a99"),c=i("69a8"),s=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=a(t),e=r(e,!0),s)try{return l(t,e)}catch(i){}if(c(t,e))return o(!n.f.call(t,e),t[e])}},"20d1":function(t,e,i){"use strict";var n=i("9f41"),o=i.n(n);o.a},"214f":function(t,e,i){"use strict";i("b0c5");var n=i("2aba"),o=i("32e9"),a=i("79e5"),r=i("be13"),c=i("2b4c"),s=i("520a"),l=c("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),g=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var f=c(t),p=!a(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=p?!a(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[l]=function(){return i}),i[f](""),!e}):void 0;if(!p||!d||"replace"===t&&!u||"split"===t&&!g){var h=/./[f],b=i(r,f,""[t],function(t,e,i,n,o){return e.exec===s?p&&!o?{done:!0,value:h.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),T=b[0],m=b[1];n(String.prototype,t,T),o(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"28a5":function(t,e,i){"use strict";var n=i("aae3"),o=i("cb7c"),a=i("ebd6"),r=i("0390"),c=i("9def"),s=i("5f1b"),l=i("520a"),u=i("79e5"),g=Math.min,f=[].push,p="split",d="length",h="lastIndex",b=4294967295,T=!u(function(){RegExp(b,"y")});i("214f")("split",2,function(t,e,i,u){var m;return m="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(o,t,e);var a,r,c,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,p=void 0===e?b:e>>>0,T=new RegExp(t.source,u+"g");while(a=l.call(T,o)){if(r=T[h],r>g&&(s.push(o.slice(g,a.index)),a[d]>1&&a.index<o[d]&&f.apply(s,a.slice(1)),c=a[0][d],g=r,s[d]>=p))break;T[h]===a.index&&T[h]++}return g===o[d]?!c&&T.test("")||s.push(""):s.push(o.slice(g)),s[d]>p?s.slice(0,p):s}:"0"[p](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var o=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,o,n):m.call(String(o),i,n)},function(t,e){var n=u(m,t,this,e,m!==i);if(n.done)return n.value;var l=o(t),f=String(this),p=a(l,RegExp),d=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(T?"y":"g"),v=new p(T?l:"^(?:"+l.source+")",h),P=void 0===e?b:e>>>0;if(0===P)return[];if(0===f.length)return null===s(v,f)?[f]:[];var B=0,y=0,S=[];while(y<f.length){v.lastIndex=T?y:0;var C,w=s(v,T?f:f.slice(y));if(null===w||(C=g(c(v.lastIndex+(T?0:y)),f.length))===B)y=r(f,y,d);else{if(S.push(f.slice(B,y)),S.length===P)return S;for(var x=1;x<=w.length-1;x++)if(S.push(w[x]),S.length===P)return S;y=B=C}}return S.push(f.slice(B)),S}]})},"2e08":function(t,e,i){var n=i("9def"),o=i("9744"),a=i("be13");t.exports=function(t,e,i,r){var c=String(a(t)),s=c.length,l=void 0===i?" ":String(i),u=n(e);if(u<=s||""==l)return c;var g=u-s,f=o.call(l,Math.ceil(g/l.length));return f.length>g&&(f=f.slice(0,g)),r?f+c:c+f}},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"3a3f":function(t,e,i){"use strict";var n=i("0933"),o=i.n(n);o.a},"3b2b":function(t,e,i){var n=i("7726"),o=i("5dbc"),a=i("86cc").f,r=i("9093").f,c=i("aae3"),s=i("0bfb"),l=n.RegExp,u=l,g=l.prototype,f=/a/g,p=/a/g,d=new l(f)!==f;if(i("9e1e")&&(!d||i("79e5")(function(){return p[i("2b4c")("match")]=!1,l(f)!=f||l(p)==p||"/a/i"!=l(f,"i")}))){l=function(t,e){var i=this instanceof l,n=c(t),a=void 0===e;return!i&&n&&t.constructor===l&&a?t:o(d?new u(n&&!a?t.source:t,e):u((n=t instanceof l)?t.source:t,n&&a?s.call(t):e),i?this:g,l)};for(var h=function(t){t in l||a(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},b=r(u),T=0;b.length>T;)h(b[T++]);g.constructor=l,l.prototype=g,i("2aba")(n,"RegExp",l)}i("7a56")("RegExp")},"520a":function(t,e,i){"use strict";var n=i("0bfb"),o=RegExp.prototype.exec,a=String.prototype.replace,r=o,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(r=function(t){var e,i,r,u,g=this;return l&&(i=new RegExp("^"+g.source+"$(?!\\s)",n.call(g))),s&&(e=g[c]),r=o.call(g,t),s&&r&&(g[c]=g.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],i,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"5dbc":function(t,e,i){var n=i("d3f4"),o=i("8b97").set;t.exports=function(t,e,i){var a,r=e.constructor;return r!==i&&"function"==typeof r&&(a=r.prototype)!==i.prototype&&n(a)&&o&&o(t,a),t}},"5f1b":function(t,e,i){"use strict";var n=i("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var a=i.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"6b54":function(t,e,i){"use strict";i("3846");var n=i("cb7c"),o=i("0bfb"),a=i("9e1e"),r="toString",c=/./[r],s=function(t){i("2aba")(RegExp.prototype,r,t,!0)};i("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)}):c.name!=r&&s(function(){return c.call(this)})},8395:function(t,e,i){},"8b97":function(t,e,i){var n=i("d3f4"),o=i("cb7c"),a=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},9093:function(t,e,i){var n=i("ce10"),o=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},"93fd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-template"},[i("m-header",{attrs:{title:"活动模板"}}),t.statusVisible?i("activity-status",{attrs:{status:t.activityStatus,"start-time":t.commonState.activityStartTime,"end-time":t.commonState.activityEndTime}}):t._e()],1)},o=[],a=i("a6f3"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.status?i("div",{staticClass:"status-content"},[i("div",{staticClass:"status-image",class:[t.status]}),i("h3",{staticClass:"main-title"},[t._v(t._s(t.mainTitle[t.status]))]),i("h3",{staticClass:"sub-title",domProps:{innerHTML:t._s(t.subTitle)}})]):t._e()},c=[],s=(i("c5f6"),i("ed08")),l={name:"ActivityStatus",props:{visible:Boolean,startTime:[String,Number],endTime:[String,Number],status:{type:String,validator:function(t){return""===t||"notStart"===t||"end"===t||"other"===t}}},data:function(){return{passVisible:this.visible,mainTitle:{notStart:"亲 您来早啦 活动还未开始",end:"亲 您来晚啦 活动已结束"}}},computed:{startTimeFormatted:function(){return this.formatDate(this.startTime,"/")},endTimeFormatted:function(){return this.formatDate(this.endTime,"/")},subTitle:function(){if("notStart"===this.status){var t="活动时间<br/>".concat(this.startTimeFormatted);return this.startTimeFormatted!==this.endTimeFormatted&&(t="".concat(t,"-").concat(this.endTimeFormatted)),t}return"end"===this.status?"感谢您的参与<br/>敬请关注其他活动":""}},methods:{formatDate:s["b"]},created:function(){"notStart"===this.status?document.body.style.background="#fff":document.body.style.background="#f0f2f5"}},u=l,g=(i("3a3f"),i("2877")),f=Object(g["a"])(u,r,c,!1,null,null,null),p=f.exports,d={activityStartTime:"",activityEndTime:""},h=i("0126"),b={data:function(){var t=s["a"].getPara("actCode",location.href);return{actId:t,statusVisible:!1,activityStatus:"",commonState:d}},components:{mHeader:a["a"],ActivityStatus:p},created:function(){this.actId&&this.init()},methods:{init:function(){var t=h.code;0===t?this.onRequestSuccess(h):this.onRequestFail(h)},onRequestSuccess:function(t){var e=t.code,i=t.result;if(0===+e&&i){this.pageConfig=i;var n=i.actName,o=i.backgroundColor,a=i.share;this.pageBackground=o,this.shareInfo=a,this.isPageVisible=!0,this.setPageTitle(n),this.setActivityTime(i)}console.log("result:",i)},onRequestFail:function(t){var e=t.code,i=t.result;if(405===e);else if(i){var n=i.actName,o=i.actStatus;"NOTSTARTED"===o?(this.setPageTitle(n),this.setActivityTime(i),this.activityStatus="notStart",this.statusVisible=!0):"EXPIRED"===o&&(this.setPageTitle(n),this.activityStatus="end",this.statusVisible=!0)}},setPageTitle:function(t){this.shareInfo?(this.setPageTitleWithShareButton(t),this.setUpShare()):this.setPageTitleWithoutShareButton(t)},setPageTitleWithShareButton:function(t){},setPageTitleWithoutShareButton:function(t){},setActivityTime:function(t){var e=t.actBeginTime,i=t.actEndTime;this.commonState.activityStartTime=e,this.commonState.activityEndTime=i}}},T=b,m=(i("cf7f"),Object(g["a"])(T,n,o,!1,null,"65928e6d",null));e["default"]=m.exports},9744:function(t,e,i){"use strict";var n=i("4588"),o=i("be13");t.exports=function(t){var e=String(o(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},"9f41":function(t,e,i){},a6f3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"back back_icon",on:{click:t.goBack}}),i("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("setting")],2)},o=[],a={props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}},r=a,c=(i("b80f"),i("2877")),s=Object(c["a"])(r,n,o,!1,null,"5fd3491e",null);e["a"]=s.exports},aa77:function(t,e,i){var n=i("5ca1"),o=i("be13"),a=i("79e5"),r=i("fdef"),c="["+r+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),g=function(t,e,i){var o={},c=a(function(){return!!r[t]()||s[t]()!=s}),l=o[t]=c?e(f):r[t];i&&(o[i]=l),n(n.P+n.F*c,"String",o)},f=g.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=g},aae3:function(t,e,i){var n=i("d3f4"),o=i("2d95"),a=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},b0c5:function(t,e,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b80f:function(t,e,i){"use strict";var n=i("ca95"),o=i.n(n);o.a},c5f6:function(t,e,i){"use strict";var n=i("7726"),o=i("69a8"),a=i("2d95"),r=i("5dbc"),c=i("6a99"),s=i("79e5"),l=i("9093").f,u=i("11e9").f,g=i("86cc").f,f=i("aa77").trim,p="Number",d=n[p],h=d,b=d.prototype,T=a(i("2aeb")(b))==p,m="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():f(e,3);var i,n,o,a=e.charCodeAt(0);if(43===a||45===a){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var r,s=e.slice(2),l=0,u=s.length;l<u;l++)if(r=s.charCodeAt(l),r<48||r>o)return NaN;return parseInt(s,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(T?s(function(){b.valueOf.call(i)}):a(i)!=p)?r(new h(v(e)),i,d):v(e)};for(var P,B=i("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;B.length>y;y++)o(h,P=B[y])&&!o(d,P)&&g(d,P,u(h,P));d.prototype=b,b.constructor=d,i("2aba")(n,p,d)}},ca95:function(t,e,i){},cf7f:function(t,e,i){"use strict";var n=i("8395"),o=i.n(n);o.a},e417:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jssdk-demo"},[i("m-header",{attrs:{title:"h5端js-sdk功能demo"}}),i("div",{staticClass:"load-btn",on:{click:t.showloading}},[t._v("显示Loading")])],1)},o=[],a=i("a6f3");const r="botaoota://",c="BGSH_OVERSEA",s="BGSH_CHINA",l="android",u="iOS";function g(t){let e=t||navigator.userAgent;return-1!==e.indexOf(c)?c:-1!==e.indexOf(s)?s:""}function f(t){var e=t||navigator.userAgent,i=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,n=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=/wehotel/.test(e)||/botao/.test(e);return i&&o?l:n&&o?u:""}function p(t){window.WebViewJavascriptBridge?t(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){t(WebViewJavascriptBridge)},!1)}function d(t){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src=r+"__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout(function(){document.documentElement.removeChild(e)},0)}const h={login:"BTLoginPlugin/login",getNativeApi:"BTPublicPlugin/getNativeApi",gainLocation:"BTPublicPlugin/gainLocation",getClientInfo:"BTPublicPlugin/getClientInfo",openNewWebView:"BTPublicPlugin/openNewWebView",openV1WebView:"BTRouterPlugin/openV1WebView",closeWebView:"BTPublicPlugin/closeWebView",showDialog:"BTPublicPlugin/showDialog",callPhone:"BTPublicPlugin/callPhone",payOrder:"BTPayPlugin/payOrder",payOrderSDK:"BTPayPlugin/payOrderSDK",initTitle:"BTTitlePlugin/initTitle",share:"BTTitlePlugin/share",goUrl:"BTTitlePlugin/goUrl",openInvoiceListVC:"BTRouterPlugin/openInvoiceListVC",openDiscountListVC:"BTRouterPlugin/openDiscountListVC",openCommonlyusedPassengerListVC:"BTRouterPlugin/openCommonlyusedPassengerListVC",openCalendarVC:"BTRouterPlugin/openCalendarVC",openMapVC:"BTRouterPlugin/openMapVC",openCommentVC:"BTRouterPlugin/openCommentVC",openImageSwitcher:"BTRouterPlugin/openImageSwitcher",selectCity:"BTCityPlugin/selectCity",getSelectCity:"BTCityPlugin/getSelectCity",getCityList:"BTCityPlugin/getCityList",openContactsVC:"BTRouterPlugin/openContactsVC",openLoadingV:"BTPublicPlugin/openLoadingView",closeLoadingV:"BTPublicPlugin/closeLoadingView",gotoHomePage:"BTRouterPlugin/gotoHomePage",jumpWalletHome:"BTWalletPlugin/jumpWalletHome",jumpBalancePage:"BTWalletPlugin/jumpBalancePage",editHotelComment:"BTRouterPlugin/editHotelComment",registTitleControler:"BTTitlePlugin/registTitleControler",unregistTitleControler:"BTTitlePlugin/unregistTitleControler",getDeliveryAddress:"BTRouterPlugin/getDeliveryAddress",refreshVC:"BTPublicPlugin/refreshVC",startTitleAnimation:"BTTitlePlugin/startTitleAnimation",selectImage:"BTPublicPlugin/selectImage",modifyUserInfo:"BTRouterPlugin/modifyUserInfo",jumpSocialHome:"BTSocialPlugin/jumpSocialHome",jumpSocialTopicDetail:"BTSocialPlugin/jumpSocialTopicDetail",jumpSocialTopicTag:"BTSocialPlugin/jumpSocialTopicTag",jumpSocialHotelTag:"BTSocialPlugin/jumpSocialHotelTag",jumpSocialTopicUserCenter:"BTSocialPlugin/jumpSocialTopicUserCenter",jumpSocialVC:"BTRouterPlugin/jumpSocialVC",openBrowser:"BTRouterPlugin/openBrowser",enterGroupConversation:"BTSocialPlugin/enterGroupConversation",jumpMemberPoint:"BTRouterPlugin/jumpMemberPoint",pushRefreshNotification:"BTRouterPlugin/pushRefreshNotification",openRoomEquipmentController:"BTPublicPlugin/openRoomEquipmentController",openFqlSDK:"BTRouterPlugin/openFqlSDK",openOtherApp:"BTRouterPlugin/openOtherApp",openVideo:"WHnativePlugin/videoPlay",networkRequest:"BTPublicPlugin/networkRequest",switchLanguage:"WHnativePlugin/switchLanguage",openMap:"BTPublicPlugin/around_map",openRouterMap:"BTPublicPlugin/router_map",openScanCard:"BTPublicPlugin/scan_card",openAskQuestion:"BTPublicPlugin/ask_que",collectMap:"BTPublicPlugin/collect_map",getSystemLanguage:"BTPublicPlugin/getlanguage",wiPhoneLogin:"BTPublicPlugin/WIPhoneLogin",loginOut:"BTPublicPlugin/logout",invitationCode:"BTPublicPlugin/InvitationCode",intProtocol:"BTPublicPlugin/isPollingScanCard",takePhoto:"BTPublicPlugin/TakePhoto",bindSelfPhone:"BTPublicPlugin/bindSelfPhone",getUserInfoFromServer:"BTPublicPlugin/getUserInfoFromServer",openShare:"BTTitlePlugin/share",getStore:"BTPublicPlugin/getKeyValue",setStore:"BTPublicPlugin/saveKeyValue",listBussinessMap:"BTPublicPlugin/listBussinessMap",isGooglePlat:"BTPublicPlugin/isGooglePlat",getMemCacheKeyValue:"BTPublicPlugin/getMemCacheKeyValue",setMemCacheKeyValue:"BTPublicPlugin/setMemCacheKeyValue",showToast:"BTPublicPlugin/showToast",nationalCode:"BTPublicPlugin/openNationalCodeList",isAppInstall:"BTPublicPlugin/isAppInstall",isYoutubeAvailable:"BTPublicPlugin/isYoutubeAvailable",openTranslation:"BTPublicPlugin/openTranslationModule",openRouterPath:"BTPublicPlugin/openRouterPath",shareAPI:"BTTitlePlugin/shareAPI",completingPhoneNumber:"BTLoginPlugin/completingPhoneNumber",openNativePage:"BTPublicPlugin/openRouterPage"};var b=h,T={};class m{constructor(){this.state=!1,this.clientType=f(),this.debug=!this.clientType,this.isAndroid=this.clientType===l,this.isIOS=this.clientType===u,this.sourceType=g(),this.appkey="",this.api=y(b),this.register=[],this.readyCallbackList=[],this.noop=function(){},this.serviceApi=[];for(let t=0,e=this.api.length;t<e;t++)this[this.api[t].key]=this.noop}static getInstance(){return this.instance||(this.instace=new m),this.instace}init(){this.debug||S(C),this.debug&&!this.state&&(this.state=!0,S(C))}registerHandler(t,e){this.register.push({handleName:t,callback:e}),console.log("%c 注册事件","color: red"),console.log(t,e),window.WebViewJavascriptBridge&&this.state&&V(window.WebViewJavascriptBridge)}ready(t){"function"===typeof t&&this.readyCallbackList.push(t),x()}setAppKey(t){this.debug||(this.appkey=t,w())}}let v=m.getInstance();function P(t){return function(e){"string"===typeof e&&(e=JSON.parse(e)),t(e)}}function B(t){return function(e,i){"string"===typeof e&&(e=JSON.parse(e)),t(e,i)}}function y(t,e,i){var n=i||[];return"string"===typeof t?n.push({key:e,api:t}):Object.keys(t).forEach(e=>{y(t[e],e,n)}),n}function S(t){if(v.debug)t();else switch(v.clientType){case"android":p(t);break;case"iOS":d(t);break}}function C(t){if("android"===v.clientType&&!v.debug&&t&&t.init(function(t,e){e()}),!v.debug)for(let e=0,i=v.api.length;e<i;e++)v[v.api[e].key]=function(i){let n;"function"==typeof i?(n={},n.success=i):n=i||{};let o=n.data||{},a=n.success||v.noop;t.callHandler(v.api[e].api,o,P(a))};!v.debug&&V(t),v.state=!0,v.debug?(x(),R()):w()}function w(){!v.debug&&v.appkey&&v.state?v.getNativeApi({data:{JSID:v.appkey},success:function(t){if(t=t||{},100==t.msgCode){let e=t.result||"";v.serviceApi=e.split("&"),console.log("服务端api列表:"),console.log(v.serviceApi),x()}}}):console.log("没有初始化appkey或者处于debug模式或者bridge初始化未完成")}function x(){if(console.log("任务列表"),v.state){for(let t=0,e=v.readyCallbackList.length;t<e;t++)v.readyCallbackList[t].call(v);v.readyCallbackList=[]}}function R(t,e){if(t&&e)v[t]=T[t]=e;else for(let i=0;i<v.api.length;i++)k(T,v.api[i].key)?v[v.api[i].key]=T[v.api[i]]:v[v.api[i].key]=function(){}}function V(t){if(v.state)for(let e=0,i=v.register.length;e<i;e++)t.registerHandler(v.register[e].handleName,B(v.register[e].callback));else console.log(v.register)}function k(t,e){return hasOwnProperty.call(t,e)}v.init();var E=v;E.setAppKey("95b04967d08c42ad91b1d56ad7e7536a");const I=t=>{E.ready(()=>{t&&t()})};class A{constructor(){}static getInstance(){return this.instance||(this.instace=new A),this.instace}showLoading(){I(()=>{E.openLoadingV({})})}hideLoading(){I(()=>{E.closeLoadingV({})})}showToast(t){I(()=>{E.showToast(t)})}setAppTitle(t){let e={showLeftBT:!0,showRightBT:!1,showRightBTText:"",title:"",showTitle:!0,transparent:!1,showLine:!1,suspension:!1,setStatusBarBlackType:!0};for(let i in t)e[i]=t[i];I(()=>{E.initTitle({data:e,success:()=>{}})})}openBrowser(t){I(()=>{E.openBrowser({data:{url:t.url}})})}watchAppBackBtn(t){this.backButtonCallBack=t,I(()=>{E.registerHandler("BTTitlePlugin/clickLeftBT",()=>{this.backButtonCallBack&&this.backButtonCallBack()})})}closeWebView(){I(()=>{E.closeWebView()})}}var _=A,N=_.getInstance(),L={data:function(){return{}},components:{mHeader:a["a"]},mounted:function(){N.watchAppBackBtn(function(){N.closeWebView()}),N.setAppTitle({title:"测试返回按钮"}),console.log(N)},methods:{showloading:function(){N.showLoading()}}},O=L,j=(i("20d1"),i("2877")),W=Object(j["a"])(O,n,o,!1,null,"1dd2f6af",null);e["default"]=W.exports},ed08:function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"b",function(){return o});i("6b54"),i("3b2b"),i("f576"),i("28a5");function n(t){for(var e="",i=t.split(":"),n=0;n<i.length-1;n++)e+=1===i[n].length?"0"+i[n]:i[n],e+=":";return e+=1===i[n].length?"0"+i[n]:i[n],e}var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=new Date(t),n=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");return"".concat(n).concat(e).concat(o).concat(e).concat(a)};e["a"]={getPara:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href;if(this._isString(t)){var i,n=new RegExp("(?:&|\\?)".concat(t,"=(.*?)(?=\\?|&|/|#|$)"),"g"),o=[];while(i=n.exec(e))o.push(decodeURIComponent(i[1]));return o.length>1?o:o[0]}},_isString:function(t){return"[object String]"===this._toString(t)},_toString:function(t){return Object.prototype.toString.call(t)}}},f576:function(t,e,i){"use strict";var n=i("5ca1"),o=i("2e08"),a=i("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);n(n.P+n.F*r,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);