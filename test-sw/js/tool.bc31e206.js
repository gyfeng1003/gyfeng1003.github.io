(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tool"],{"10a1":function(t,i,o){"use strict";o.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{class:{"tool-page":!0,"home-ios-11":t.isIOS,"home-ios-12":t.isIOS}},[s("header",[s("span",{staticClass:"back-box",on:{click:t.back}},[s("img",{staticClass:"back",attrs:{src:o("961c")}})]),s("span",{staticClass:"title"},[t._v(t._s(t.$t("header.tool")))]),s("div",{staticClass:"lang flex-between"},[s("div",{staticClass:"toggle"},[t.isZH?s("img",{attrs:{src:o("7faf")},on:{click:function(i){return t.selectLang("en-US")}}}):s("img",{attrs:{src:o("a4df")},on:{click:function(i){return t.selectLang("zh-CN")}}})])])]),!t.hasToken&&t.isGetmemberInfo?s("p",{staticClass:"login",on:{click:t.goLogin}},[t._v(t._s(t.$t("tool.login"))+"\n\t\t"),s("i",{staticClass:"iconfont iconlist_more iconfont_397BB9"})]):t.hasToken&&1==t.memberInfo.auditing&&t.isGetmemberInfo?s("div",{staticClass:"user-container"},[1==t.memberInfo.auditing&&t.memberInfo.virtualMobile?s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-name"},[s("span",{staticClass:"user-name-info"},[t._v(t._s(t.memberInfo.memberName))])]),s("div",{staticClass:"entry-date"},[s("span",{staticClass:"desc"},[t._v(t._s(t.$t("tool.phoneNumber")))]),s("span",[t._v(t._s(t.memberInfo.virtualMobile))])]),s("div",{staticClass:"entry-date"},[s("span",{staticClass:"desc"},[t._v(t._s(t.$t("tool.wiFiName")))]),s("span",[t._v(t._s(t.memberInfo.wifiName))])]),s("div",{staticClass:"entry-date"},[s("span",{staticClass:"desc"},[t._v(t._s(t.$t("tool.WiFiPassword")))]),s("span",[t._v(t._s(t.memberInfo.wifiPwd))])])]):t._e(),1!=t.memberInfo.auditing||t.memberInfo.virtualMobile?t._e():s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-name"},[s("span",{staticClass:"user-name-info"},[t._v(t._s(t.memberInfo.memberName))])]),s("p",{staticClass:"tips"},[t._v(t._s(t.$t("tool.tips")))]),s("p",{staticClass:"start-button",on:{click:t.scanCard}},[s("span",{staticClass:"start"},[t._v(t._s(t.$t("tool.nowBtn")))]),s("img",{staticClass:"start-wifi",attrs:{src:o("65b2")}})])])]):t.hasToken&&t.isGetmemberInfo?s("div",{staticClass:"user-container login-account-container"},[s("div",{staticClass:"user-info"},[s("p",{staticClass:"login-account"},[t._v(t._s(t.$t("tool.account"))+t._s(t.encryptionMoblie(t.memberInfo.mobile)))])])]):t._e(),s("div",{staticClass:"tools"},[s("div",{staticClass:"tool-list"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!0,"/order-list")}}},[s("i",{staticClass:"iconfont icontool_order iconfont_EA9A2B"}),s("span",[t._v(t._s(t.$t("tool.bookings")))])]),s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!0,"/favourite-list")}}},[s("i",{staticClass:"iconfont icontool_like iconfont_F24E5A"}),s("span",[t._v(t._s(t.$t("tool.myFavourite")))])]),s("div",{staticClass:"col",on:{click:t.openTranslation}},[s("i",{staticClass:"iconfont icontool_translation iconfont_2C8AE2"}),s("span",[t._v(t._s(t.$t("tool.translation")))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!0,"/wifi","wifi")}}},[s("i",{staticClass:"iconfont icontool_wifi iconfont_F24E5A"}),s("span",[t._v(t._s(t.$t("tool.mobileWiFi")))])]),s("div",{staticClass:"col",on:{click:t.openWiPhone}},[s("i",{staticClass:"iconfont icontool_call iconfont_2C8AE2"}),s("span",[t._v(t._s(t.$t("tool.callPhone")))])]),s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!1,"/","QR")}}},[s("i",{staticClass:"iconfont icontool_codes iconfont_02C471"}),s("span",[t._v(t._s(t.$t("tool.paymentCode")))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!0,"/questionnaire")}}},[s("i",{staticClass:"iconfont icontool_feeback iconfont_EA9A2B"}),s("span",[t._v(t._s(t.$t("tool.feedback")))])]),s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!0,"/aboutUs")}}},[s("i",{staticClass:"iconfont icontool_aboutus iconfont_F24E5A"}),s("span",[t._v(t._s(t.$t("tool.aboutUs")))])]),s("div",{staticClass:"col",on:{click:function(i){return t.toPage(!1,"/","transfer")}}},[s("i",{staticClass:"iconfont icontool_card iconfont_2C8AE2"}),s("span",[t._v(t._s(t.$t("tool.transfer")))])])])])]),t.hasToken?s("div",{staticClass:"clear-btn",on:{click:t.logout}},[t._v(t._s(t.$t("tool.Logout")))]):s("div",{staticClass:"clear-btn transparent"}),t.isZH?s("div",{staticClass:"terms-wrap"},[s("span",{staticClass:"terms",on:{click:t.openTerms}},[t._v("《服务条款》")]),t._v("和"),s("span",{staticClass:"terms",on:{click:t.openPrivacy}},[t._v("《隐私说明》")])]):s("div",{staticClass:"terms-wrap"},[s("span",{staticClass:"terms-en",on:{click:t.openTerms}},[t._v("Terms of Use")]),t._v(" & "),s("span",{staticClass:"terms-en",on:{click:t.openPrivacy}},[t._v("Privacy Statements")])]),s("p",{staticClass:"version"},[t._v(t._s(t.$t("tool.version"))+" V0.0.5")]),s("v-dialog",{attrs:{visible:t.isDialogVisible},on:{"update:visible":function(i){t.isDialogVisible=i}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"clear"===t.currentDialog,expression:"currentDialog === 'clear'"}],staticClass:"clear-dialog"},[s("h2",{staticClass:"title"},[t._v("- "+t._s(t.$t("tool.reminder"))+" -")]),s("p",[t._v(t._s(t.$t("tool.reminderTips1")))]),s("p",[t._v(t._s(t.$t("tool.reminderTips2")))]),s("div",{staticClass:"btn confirm",on:{click:t.clearInfo}},[t._v(t._s(t.$t("tool.confirmBtn")))]),s("div",{staticClass:"btn cancel",on:{click:t.hideDialog}},[t._v(t._s(t.$t("tool.cancelBtn")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"service"===t.currentDialog,expression:"currentDialog === 'service'"}],staticClass:"service-dialog"},[s("div",{staticClass:"introduction-icon"},[s("img",{staticClass:"icon",attrs:{src:o("d1bf"),alt:""}})]),s("div",{staticClass:"gap"}),s("p",{staticClass:"tips"},[t._v(t._s(t.$t("customDialog.service")))]),s("div",{staticClass:"confrim-btn",on:{click:t.hideDialog}},[t._v(t._s(t.$t("customDialog.know")))])])]),s("custom-dialog",{attrs:{visible:t.customDialogShow,category:t.customDialogCategory},on:{"update:visible":function(i){t.customDialogShow=i}}})],1)},n=[],a=(o("4917"),o("cebc")),e=o("2f62"),c=o("ac2d"),l=o("ed08"),r=o("18c7"),u={components:{"custom-dialog":r["a"]},data:function(){return{currentDialog:"service",isDialogVisible:!1,hasToken:"",showSelectLang:!1,isIOS:this.getAppType(),memberInfo:{},customDialogShow:!1,customDialogCategory:"QR",version:c["a"].version,isGetmemberInfo:!1}},mounted:function(){var t=this;setTimeout(function(){c["a"].noCallAppLoginGetInfo(function(i,o){t.isGetmemberInfo=!0,t.memberInfo=t.getMemberInfo(i),t.hasToken=o}),c["a"].refreshPage(function(){c["a"].noCallAppLoginGetInfo(function(i,o){t.isGetmemberInfo=!0,t.memberInfo=t.getMemberInfo(i),t.hasToken=o})})},200)},methods:Object(a["a"])({},Object(e["b"])(["setLocal"]),{showCustomDialog:function(){this.customDialogShow=!0},goLogin:function(){c["a"].callAppLogin()},selectLang:function(t){var i=this;this.$i18n.locale=t,this.setLocal(t),c["a"].switchLanguage({langCode:"zh-CN"===t?"zh":"en"},function(){i.setLocal(t),c["a"].gotoHomePage({isReloadUrlForMainPage:!0})})},encryptionMoblie:function(t){return t?t.substr(0,3)+"****"+t.slice(-4):""},closeModal:function(){this.showSelectLang=!1},openWiPhone:function(){1*this.memberInfo.auditing===1&&this.memberInfo.virtualMobile?c["a"].wiPhoneLogin():(this.showCustomDialog(),this.customDialogCategory="call")},logout:function(){var t=this;this.$modal({content:this.$t("tool.logoutContent"),cancelText:this.$t("tool.cancel"),confirmText:this.$t("tool.confirm"),confirm:function(i){t.clearInfo()}})},back:function(){c["a"].closeWebView()},openTerms:function(){c["a"].openNewWebView({url:"http://static.bestwehotel.com/opt/static/jjlx/shanghai/".concat(this.isZH?"cn":"en","/terms.html"),isFitWindow:!0})},openPrivacy:function(){c["a"].openNewWebView({url:"http://static.bestwehotel.com/opt/static/jjlx/shanghai/".concat(this.isZH?"cn":"en","/privacy.html"),isFitWindow:!0})},toPage:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",o=arguments.length>2?arguments[2]:void 0;if(1*this.memberInfo.auditing!==1||!this.memberInfo.virtualMobile||"wifi"!==o)return o?(this.showCustomDialog(),void(this.customDialogCategory=o)):void(this.hasToken||"/order-list"!==i&&"/favourite-list"!==i?t?c["a"].openNewWebView({url:Object(l["b"])(i),isFitWindow:t}):this.showDialog("service"):c["a"].callAppLogin(function(){}));c["a"].openNewWebView({url:Object(l["b"])(i),isFitWindow:t})},openTranslation:function(){c["a"].openNewWebView({url:this.$t("tool.transURL"),isFitWindow:!0})},clearInfo:function(){window.localStorage.clear(),c["a"].loginOut(),setTimeout(function(){c["a"].gotoHomePage()},500)},showDialog:function(t){this.currentDialog=t,this.isDialogVisible=!0},hideDialog:function(){this.isDialogVisible=!1},scanCard:function(){this.memberInfo.auditing,c["a"].openScanCard({})},getAppType:function(){var t=navigator.userAgent,i=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return!!i}})},f=u,m=(o("e600"),o("2877")),g=Object(m["a"])(f,s,n,!1,null,"f20cf9d4",null);i["default"]=g.exports},"7faf":function(t,i,o){t.exports=o.p+"img/trans_cn@3x.8fd265cd.png"},"86d2":function(t,i,o){},"961c":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA2CAYAAADQzyn5AAAABGdBTUEAALGPC/xhBQAABLRJREFUWAnFmU1oXFUUgH0zyZBqotb4Q5JBGERErC6aSSZhYk2TMLU0Y0sxltYfKBa70a50HxAXupMgbiqKaBXFUBTbaGMyFhLzK0JdtF2kpZRERReaoPmZZPzOI2+YuZ43mXnzxlyY3LnnzD3fOee++/di3fI/lObm5gSYF+vq6p5NpVJpQVZVmgt0r2VZZzOZzI6lpaVV6hdoZwKVBAPtwP5XAhUO9XMtLS0D8t2SP5UoQGNEdgFYnWkf+RsViRjobmBDGlScQB4Mmt6U247FYo9heBg7d2m2iHZgdnb2VV9T3dbW9vDa2tr3AO/RoMhOz8zMvOTrw0WkDwL9rgD0TDKZPClQccqXiFtbWyMbGxsXSXFYjJoF2GBtbe0RZw6LvuyHiwfp/vX19ZEC0HORSORoLlTAZUUcj8cbl5eXL2LnATGmlBFWqwNAl02d54gZ0/tWVlZGMKhCSe9YfX39UxpUnPAUMem9G8Mp0vuIGYlt1LJmgsFg9+Tk5F+aXmQlR9zR0bETqKxIKhSbl6qrq/cVggq4pIiJ9A6gw0Cj0tks6K6EQqE94+Pjv5k6s110xJ2dnbUYPl8Aeo1Iu4uBihNFRUykt25C95ie20Ys62ZVVdXjExMT1zW9JtsyYiKtAfolkbpBfw0EAt2lQMWRguC+vr4Qm/cg0G7Naxz6A3nP1NTUVU1fSOaaatJbjeHPgR50MfAn8i52mh9d9AXFasREGgR6pgB0iXm63ytUPPoPuL+/PzA3N/ch0Kc1l3HoHz5J0vuDpi9WlnfYA2ZxJjpN52MuBlaBHp6enk656IsW50UM9F3gx7XeANPIjwAd0vSlyrJgHqa3gZ50MbCB/HnG9KyLvmSxDY5Go2/R85RL7wzz9ARHlk9d9J7EAdL7OpG+5tabFL9Cet9303uVBziy2Gcgrwa89gsuLCyMNjU13YaBuIuR/eFw+Mb8/PxPLnpPYvtcjdELjY2Ncg6OKVYshiKJc1f53c+K3pPIBktPIh/CeANftb2WobYONTQ0XOJ3lz2RjE55azWRyQLyHrU6l+m7yhN+0I+5nJ3H4hBRZXp7e0/w9WNpKyWEU4NMv05FV5IoL2Knp2wSrNef0O5zZEYtm0SinPVaBQtkW7ZFAbM8rkUikWdI/3lpK0UOft+S9l2KbkuRa8ROTzn6cAqRW32PI8utgf/CA/dEqaeQLcEC2ZbDnoBJ+9/c9g4Qnbr5k41wOp0eaW9vb5LfF1OKitgxxH3pdm6GcqBvcWS5NY75f6AXgFxLampq9gFQ120ceoiL3DCRq68h8pzMbRT7nTGXS9soIPWJRuf/pU2cY8x/ZwHpkdRqzuJQlCE5l0gkZNdTS0ljbFrYlou5ODE2NjZP1cXnOh+tdLEGfCE3ElNZVsSOsW15+SJwVq1rjLlEvuA4k1sz5ocXFxc/kMuCI/clYsfY5gu2FO17HZlRZ1+w+QoWCFPt0c2pVm9A7Sa6AY7Kp3wHb8J3U8tbvjttmvGHTeXNbM4NXVlN5rlcXZ8kukXNEGOerkjEDoy9Og7kG9rZhQRn3iHVL1cULA4w5nuBfY0DO6g/4qBY+X8NCJi0jwI9xNfP2FqPA7dvLv8CMNXx655WL+YAAAAASUVORK5CYII="},a4df:function(t,i,o){t.exports=o.p+"img/trans_en@3x.a9aff589.png"},e600:function(t,i,o){"use strict";var s=o("86d2"),n=o.n(s);n.a}}]);