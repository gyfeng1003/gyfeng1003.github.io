webpackJsonp([3],{"/rjD":function(t,s,a){t.exports=a.p+"static/img/no_more.b806749.png"},"1XsR":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("n95b"),e={name:"check-chuang",data:function(){return{logo:'this.src="'+a("uenC")+'"',index:0,auditList:[],loading:!0,findByChuangGuanId:i.findByChuangGuanId,keywords:"",status:-1}},created:function(){this.findAuditList(this.keywords,this.status)},methods:{switchTab:function(t){switch(this.index=t,t){case 0:this.status=-1;break;case 1:this.status=0;break;case 2:this.status=1;break;case 3:this.status=2}this.findAuditList(this.keywords,this.status)},findAuditList:function(t,s){var a=this,i=this.$store.state.loginData.code;this.loading=!0,this.$http.get("/api/approval/approvalList",{params:{code:i,status:s,keywords:t}}).then(function(t){a.auditList=t.data||[],a.auditList.forEach(function(t,s){t.applyUser?t.applyUser.headPortrait=a.baseURL+"/attachFiles/view?fileId="+t.applyUser.headPortrait:t.applyUser={headPortrait:""}}),a.loading=!1},function(t){a.loading=!1})},search:function(){this.findAuditList(this.keywords,this.status)},audit:function(t,s){var a=this,i=this.keywords,e=this.status;this.$http.get("/api/approval/approval",{params:{id:t.id,status:s}},{showAlert:!0}).then(function(t){0==t.code&&a.findAuditList(i,e)})}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page"},[i("div",{staticClass:"body_bg"}),t._v(" "),i("header-top",{attrs:{headTitle:"闯关审核记录","go-back":!0}}),t._v(" "),i("div",{staticClass:"page-container"},[i("div",{staticClass:"white_bg"}),t._v(" "),i("div",{staticClass:"orderList-search"},[i("div",{staticClass:"order_search flex_panel"},[i("div",{staticClass:"search_content flex_panel"},[i("img",{staticClass:"icon",attrs:{src:a("wfyh"),alt:""}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"searchInput",attrs:{type:"text",name:"mobile",placeholder:"请输入昵称或手机号"},domProps:{value:t.keywords},on:{input:function(s){s.target.composing||(t.keywords=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"search_btn",on:{click:t.search}},[t._v("搜索")])])]),t._v(" "),i("div",{staticClass:"orderList-status flex_panel"},[i("div",{staticClass:"status_item",class:{active:0==t.index},attrs:{"data-order_type":"0"},on:{click:function(s){return t.switchTab(0)}}},[i("strong",{staticClass:"status-name"},[t._v("\n                    全 部\n                ")])]),t._v(" "),i("div",{staticClass:"status_item",class:{active:1==t.index},attrs:{"data-order_type":"1"},on:{click:function(s){return t.switchTab(1)}}},[i("strong",{staticClass:"status-name "},[t._v("\n                    待审核\n                ")])]),t._v(" "),i("div",{staticClass:"status_item",class:{active:2==t.index},attrs:{"data-order_type":"2"},on:{click:function(s){return t.switchTab(2)}}},[i("strong",{staticClass:"status-name "},[t._v("\n                    审核成功\n                ")])]),t._v(" "),i("div",{staticClass:"status_item",class:{active:3==t.index},attrs:{"data-order_type":"3"},on:{click:function(s){return t.switchTab(3)}}},[i("strong",{staticClass:"status-name "},[t._v("\n                    审核失败\n                ")])])]),t._v(" "),i("div",{staticClass:"orderList-list"},t._l(t.auditList,function(s,a){return i("div",{staticClass:"list-item"},[i("div",{staticClass:"goods-info flex_panel"},[i("img",{staticClass:"goods-img",attrs:{src:s.applyUser.headPortrait,onerror:t.logo,alt:""}}),t._v(" "),i("div",{staticClass:"goods-detail"},[i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"user_name"},[t._v("昵称："+t._s(s.applyUser.nickName))])]),t._v(" "),i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"mobile"},[t._v("联系方式："+t._s(s.applyUser.mobile))])]),t._v(" "),i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"checkpoint_level_name"},[t._v("闯关等级：第"+t._s(s.checkpoint)+"关  "+t._s(t.findByChuangGuanId(s.checkpoint)))])]),t._v(" "),i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"paytypeWx"},[t._v("微信号："+t._s(s.applyUser.wx||"- -"))])]),t._v(" "),i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"paytypeZfb"},[t._v("支付宝号："+t._s(s.applyUser.zfb||"- -"))])]),t._v(" "),i("div",{staticClass:"info flex_panel"},[i("span",{staticClass:"paytypeZfb"},[t._v("状态："+t._s(s.statusDesc||"- -"))])])])]),t._v(" "),i("div",{staticClass:"order-handle flex_panel"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==s.checkStatus,expression:"item.checkStatus==0"}],staticClass:"handle-btn",on:{click:function(a){return t.audit(s,1)}}},[t._v("通过")])])])}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.auditList.length&&!t.loading,expression:"auditList.length==0 && !loading"}],staticClass:"empty"},[i("img",{attrs:{src:a("/rjD"),alt:""}}),t._v(" "),i("p",{staticClass:"msg",staticStyle:{margin:"0 0 .4267rem",color:"#fff"}},[t._v("暂无相关数据")]),t._v(" "),i("div",{staticClass:"upgrade_btn",staticStyle:{width:"100%"}},[i("router-link",{attrs:{tag:"li",to:"/home"}},[i("a",{staticClass:"btn",staticStyle:{"font-size":".683rem"}},[t._v("去逛逛")])])],1)]),t._v(" "),i("div",{staticClass:"to-load"},[i("div",{staticClass:"load-tip"},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{display:"none"},attrs:{id:"loading_img",src:a("nMhD"),alt:""}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"end_line",staticStyle:{display:"none"},attrs:{id:"tip-text"}},[t._v("已加载全部内容")])])]),t._v(" "),i("div",{staticClass:"mask flex_panel",staticStyle:{display:"none"}}),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"remark_alert",staticStyle:{display:"none"}},[s("div",{staticClass:"alert_title"},[this._v("备注信息")]),this._v(" "),s("form",{staticClass:"alert_content flex_panel",attrs:{id:"remarkForm"}},[s("input",{staticClass:"main_input",attrs:{type:"text",name:"remark",placeholder:"请填写备注信息"}}),this._v(" "),s("input",{attrs:{type:"hidden",name:"type",value:""}}),this._v(" "),s("input",{attrs:{type:"hidden",name:"order_id",value:""}}),this._v(" "),s("img",{staticClass:"edit_img",attrs:{src:a("iig6"),alt:""}})]),this._v(" "),s("div",{staticClass:"upgrade_btn order_list_upgrade_btn",staticStyle:{width:"100%"}},[s("div",{staticClass:"alert_btn"},[this._v("确认提交")])])])}]};var l=a("VU/8")(e,n,!1,function(t){a("FtWN")},"data-v-023002e2",null);s.default=l.exports},FtWN:function(t,s){},iig6:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAB60lEQVRIS+2WPYvUUBSGnzcTF9HWzkoxWeO4iMviNrKFWFgJNnZqIfoDxJ/gn1B01w+2FcRKYRWxsrLQTUgGFndVbAa08GNFkyPJzmAYxtkxczs9VQj3nofz5JybqzS1PSq4hXEC8ABjwsjFbBQp66dJY7vpGU+DtpbVSWzFtmDOQsZs0NbLMmEW223gQvks46yy2LYqEksqeAJMNSYLYRhTLAeBvndiu2NwvpbvQwn8BuyUOBVEetQYNrAxje2u4FztddcKTpbAz8BuGReDthZdAOsae/m6PsztP6R158AhsI9ezpEDM3pbfTmXFQ7TiM98GGqtb84ZcJTGJLGZlnEf2HQCHKaxN4tvysrSVTsu8dyJ0nE0pq/tmDxeAD8mqnCUxnq3OwFup9EpsBPbDYNL9aEe7EZnwGzVriMu1xJu+LBQDvWfDo3GStPYzoiqvaswWKfF3PS0uqNOqMbALLZnwEKPtmY+89vBqrFo0qVJYmHLSIH3iMc7Nrmy76g+jXP2NgKWw4tHFB5kUVI+Dqi/phHwbwCDa/8DJ7E3dO+/p/QLsEvidBDpoXOf5eCntlc574D89zURrhUeD/Szugw7C/MpPOMwxlL1A+7ElhqEzgijE31V9soiWtwD2oDv4qo/wBRQABsyrv4CEyV/snQXq18AAAAASUVORK5CYII="}});