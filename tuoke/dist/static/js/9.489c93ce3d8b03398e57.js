webpackJsonp([9],{"/jmO":function(t,e){},F58W:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),n=i("Xxa5"),o=i.n(n),r=i("exGp"),l=i.n(r),c=i("3lYc"),p=i.n(c),d=i("NYxO"),m={name:"set-mobile",data:function(){return{title:"",index:this.$route.query.index,info:{mobile:"",content:"",pwd1:"",oldPass:"",newPass:"",newPassConfirm:"",wx:"",zfb:"",qq:""}}},created:function(){var t=this;switch(this.$route.query.index){case 0:this.title="设置绑定手机号";break;case 1:this.title="设置备用手机号";break;case 2:this.title="修改登录密码";break;case 3:this.title="绑定支付宝";break;case 4:this.title="绑定微信";break;case 5:this.title="绑定QQ"}this.$http.get("/api/user/personalInfo",{params:{code:this.loginData.code}}).then(function(e){t.info=e.data})},methods:{confirm:function(){var t=this;p.a.checkError(this.info,{content:[{type:"required",msg:"手机不能为空!"},{type:"phone",msg:"手机号码格式不正确"}],pwd1:[{type:"required",msg:"密码不能为空!"},{type:function(t,e){return t[e].length<6},msg:"密码长度不能小于6位!"}]})||this.$http.get("/api/user/changeInfo",{params:{id:this.info.id,content:this.info.content,type:1,pwd:this.info.pwd1}}).then(function(e){t.$router.push("/home/userDetail")})},confirm1:function(){var t=this;p.a.checkError(this.info,{content:[{type:"required",msg:"手机不能为空!"},{type:"phone",msg:"手机号码格式不正确"}],pwd1:[{type:"required",msg:"密码不能为空!"},{type:function(t,e){return t[e].length<6},msg:"密码长度不能小于6位!"}]})||this.$http.get("/api/user/changeInfo",{params:{id:this.info.id,content:this.info.content,type:2,pwd:this.info.pwd1}}).then(function(e){t.$router.push("/home/userDetail")})},bindWepay:function(){var t=this;this.info.zfb&&this.info.zfb.trim()||this.info.wx||this.info.qq?this.$http.get("/api/user/changeInfo",{params:{id:this.info.id,content:this.info.zfb,type:4}}).then(function(e){t.$router.push("/home/userDetail")}):layer.open({content:"支付宝、微信、QQ必须要绑定一个",time:2e3})},bindWx:function(){var t=this;this.info.wx&&this.info.wx.trim()||this.info.zfb||this.info.qq?this.$http.get("/api/user/changeInfo",{params:{id:this.info.id,content:this.info.wx,type:3}}).then(function(e){t.$router.push("/home/userDetail")}):layer.open({content:"支付宝、微信、QQ必须要绑定一个",time:2e3})},bindQQ:function(){var t=this;this.info.qq&&this.info.qq.trim()||this.info.wx||this.info.zfb?this.$http.get("/api/user/changeInfo",{params:{id:this.info.id,content:this.info.qq,type:5}}).then(function(e){t.$router.push("/home/userDetail")}):layer.open({content:"支付宝、微信、QQ必须要绑定一个",time:2e3})},passModify:function(){var t=this;return l()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.a.checkError(t.info,{oldPass:[{type:"required",msg:"请输入旧密码"},{type:function(t,e){return t[e].length<6},msg:"密码长度不能小于6位"}],newPass:[{type:"required",msg:"请输入新密码"},{type:function(t,e){return t[e].length<6},msg:"密码长度不能小于6位"}],newPassConfirm:[{type:"required",msg:"请再次输入新密码"},{type:function(t,e){return t[e].length<6},msg:"密码长度不能小于6位"},{type:function(t,e){return t.newPass!=t.newPassConfirm},msg:"两次输入密码不一致"}]}))try{t.$http.get("/api/user/passwordChange",{params:{code:t.loginData.code,oldPass:t.info.oldPass,newPass:t.info.newPass,newPassConfirm:t.info.newPassConfirm}},{showAlert:!0}).then(function(e){t.$router.push("/home/userDetail")})}catch(t){console.log(t)}case 1:case"end":return e.stop()}},e,t)}))()}},computed:a()({},Object(d.b)({loginData:function(t){return t.loginData}}))},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"body_bg"}),t._v(" "),i("header-top",{attrs:{headTitle:t.title,"go-back":!0}}),t._v(" "),0==t.index?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page_title",staticStyle:{color:"#867AFB"}},[t._v("\n            当前绑定手机号：\n            "+t._s(t.info.mobile))]),t._v(" "),i("form",[i("ul",{staticClass:"setting-list"},[i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.content,expression:"info.content"}],staticClass:"main",attrs:{type:"mobile",name:"mobile",placeholder:"请输入手机号码"},domProps:{value:t.info.content},on:{input:function(e){e.target.composing||t.$set(t.info,"content",e.target.value)}}})]),t._v(" "),i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.pwd1,expression:"info.pwd1"}],staticClass:"main",attrs:{type:"password",name:"password",placeholder:"请输入登录密码"},domProps:{value:t.info.pwd1},on:{input:function(e){e.target.composing||t.$set(t.info,"pwd1",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .85rem"}},[i("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.confirm}},[t._v("确认修改")])])]):t._e(),t._v(" "),1==t.index?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page_title",staticStyle:{color:"#867AFB"}},[t._v("\n            当前备用手机号：\n            "+t._s(t.info.spareMobile))]),t._v(" "),i("form",{attrs:{action:"",id:"upload",method:"post"}},[i("ul",{staticClass:"setting-list"},[i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.content,expression:"info.content"}],staticClass:"main",attrs:{type:"mobile",name:"mobile",placeholder:"请输入手机号码"},domProps:{value:t.info.content},on:{input:function(e){e.target.composing||t.$set(t.info,"content",e.target.value)}}})]),t._v(" "),i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.pwd1,expression:"info.pwd1"}],staticClass:"main",attrs:{type:"password",name:"password",placeholder:"请输入登录密码"},domProps:{value:t.info.pwd1},on:{input:function(e){e.target.composing||t.$set(t.info,"pwd1",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .85rem"}},[i("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.confirm1}},[t._v("确认修改")])])]):t._e(),t._v(" "),2==t.index?i("div",{staticClass:"page-container"},[i("div",[i("ul",{staticClass:"setting-list"},[i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.oldPass,expression:"info.oldPass"}],staticClass:"main",attrs:{type:"password",name:"old_password",placeholder:"请输入旧密码"},domProps:{value:t.info.oldPass},on:{input:function(e){e.target.composing||t.$set(t.info,"oldPass",e.target.value)}}})]),t._v(" "),i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.newPass,expression:"info.newPass"}],staticClass:"main",attrs:{type:"password",name:"new_password",placeholder:"请输入新密码"},domProps:{value:t.info.newPass},on:{input:function(e){e.target.composing||t.$set(t.info,"newPass",e.target.value)}}})]),t._v(" "),i("li",{staticClass:"setting-item flex_panel"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.newPassConfirm,expression:"info.newPassConfirm"}],staticClass:"main",attrs:{type:"password",name:"confirm_password",placeholder:"请再次输入新密码"},domProps:{value:t.info.newPassConfirm},on:{input:function(e){e.target.composing||t.$set(t.info,"newPassConfirm",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .853rem 0"}},[i("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.passModify}},[t._v("确认修改")])]),t._v(" "),i("div",{staticClass:"des",staticStyle:{"text-align":"right",color:"#867AFB"}},[t._v("注：密码设置成功后可直接通过新密码登录")])]):t._e(),t._v(" "),3==t.index?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page_title",staticStyle:{color:"rgba(255, 255, 255, .4)"}},[t._v("\n            请绑定用户本人的绑定支付宝账号\n        ")]),t._v(" "),i("form",{staticClass:"bind_panel",attrs:{id:"zfb"}},[i("ul",{staticClass:"setting-list wx"},[i("li",{staticClass:"setting-item flex_panel"},[i("span",{staticClass:"name"},[t._v("支付宝账号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.zfb,expression:"info.zfb"}],staticClass:"main",attrs:{type:"text",name:"al_account",placeholder:"请输入支付宝账号"},domProps:{value:t.info.zfb},on:{input:function(e){e.target.composing||t.$set(t.info,"zfb",e.target.value)}}})])]),t._v(" "),i("input",{attrs:{type:"hidden",name:"type",value:"1",placeholder:""}})]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .85rem"}},[i("a",{staticClass:"btn",staticStyle:{"font-weight":"300"},attrs:{href:"javascript:;"},on:{click:t.bindWepay}},[t._v("立即绑定")])])]):t._e(),t._v(" "),4==t.index?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page_title",staticStyle:{color:"rgba(255, 255, 255, .4)"}},[t._v("\n            请绑定用户本人的绑定微信账号\n        ")]),t._v(" "),i("form",{staticClass:"bind_panel",attrs:{id:"wx"}},[i("ul",{staticClass:"setting-list wx"},[i("li",{staticClass:"setting-item flex_panel"},[i("span",{staticClass:"name"},[t._v("微信账号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.wx,expression:"info.wx"}],staticClass:"main",attrs:{type:"text",name:"al_account",placeholder:"请输入微信账号"},domProps:{value:t.info.wx},on:{input:function(e){e.target.composing||t.$set(t.info,"wx",e.target.value)}}})])]),t._v(" "),i("input",{attrs:{type:"hidden",name:"type",value:"2",placeholder:""}})]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .85rem"}},[i("a",{staticClass:"btn",staticStyle:{"font-weight":"300"},attrs:{href:"javascript:;"},on:{click:t.bindWx}},[t._v("立即绑定")])])]):t._e(),t._v(" "),5==t.index?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page_title",staticStyle:{color:"rgba(255, 255, 255, .4)"}},[t._v("\n            请绑定用户本人的绑定QQ\n        ")]),t._v(" "),i("form",{staticClass:"bind_panel",attrs:{id:"qq"}},[i("ul",{staticClass:"setting-list wx"},[i("li",{staticClass:"setting-item flex_panel"},[i("span",{staticClass:"name"},[t._v("QQ账号")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.qq,expression:"info.qq"}],staticClass:"main",attrs:{type:"text",name:"al_account",placeholder:"请输入QQ账号"},domProps:{value:t.info.qq},on:{input:function(e){e.target.composing||t.$set(t.info,"qq",e.target.value)}}})])]),t._v(" "),i("input",{attrs:{type:"hidden",name:"type",value:"2",placeholder:""}})]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{margin:"1.28rem .85rem"}},[i("a",{staticClass:"btn",staticStyle:{"font-weight":"300"},attrs:{href:"javascript:;"},on:{click:t.bindQQ}},[t._v("立即绑定")])])]):t._e()],1)},staticRenderFns:[]};var u=i("VU/8")(m,f,!1,function(t){i("/jmO")},"data-v-413e21e8",null);e.default=u.exports}});