webpackJsonp([20],{"1DGa":function(e,t,a){t=e.exports=a("YfG4")(!1),t.push([e.i,".module[data-v-1d08f27a]{border:1px solid #efebeb;padding:0 12px;background:#fcfcfc}.module .info[data-v-1d08f27a]{font-size:14px;color:#666}",""])},BdoZ:function(e,t,a){var n=a("1DGa");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("3bcd35c8",n,!0)},hmCk:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.examId?a("div",[a("section",{staticClass:"module"},[a("p",[e._v(e._s(e.examObj.title))]),e._v(" "),a("p",{staticClass:"info"},[a("label",[e._v("试卷共"+e._s(e.examObj.partNum)+"部分")]),e._v(" "),a("span",[e._v("考试时间："+e._s(e.examObj.examTime/60))]),e._v(" "),a("span",[e._v("试卷类型："+e._s(e.examObj.type))])])]),e._v(" "),a("section",{staticClass:"module",staticStyle:{"border-top":"0"}},[a("el-tabs",{attrs:{model:e.pLevel},on:{"tab-click":e.clickTab}},[a("el-tab-pane",{attrs:{label:"用户管理",name:"0"}},[e._v("\n            "+e._s(e.pLevel)+"\n        ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"配置管理",name:"1"}},[e._v("\n          "+e._s(e.pLevel)+"\n        ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"角色管理",name:"2"}},[e._v("\n          "+e._s(e.pLevel)+"\n        ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"定时任务补偿",name:"3"}},[e._v("\n          "+e._s(e.pLevel)+"\n        ")])],1)],1)]):e._e(),e._v(" "),e.examId?e._e():a("section",{staticClass:"font-gray"},[e._v("请前往 ‘ 测试试卷列表 ’ 查看试卷详情")])])},s=[],l={render:n,staticRenderFns:s};t.a=l},tsrd:function(e,t,a){"use strict";function n(e){a("BdoZ")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("z/eI"),l=a.n(s),o=a("hmCk"),i=a("J0+h"),d=n,c=i(l.a,o.a,d,"data-v-1d08f27a",null);t.default=c.exports},"z/eI":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),s=function(e){return e&&e.__esModule?e:{default:e}}(n),l=a("lQSI");t.default={name:"exam-detail",data:function(){return this.examId=this.$route.query.examId,{examObj:{},pLevel:"0"}},mounted:function(){var e=this,t=this;this.examId&&this.$http({url:"/exam/detail",method:"get",params:{examId:t.examId}}).then(function(t){e.examObj=t.data.detail}),this.$store.dispatch("GetParentType")},computed:(0,s.default)({},(0,l.mapGetters)(["pType"])),methods:{clickTab:function(e){this.pLevel=e.name,console.log(e.name)}}}}});