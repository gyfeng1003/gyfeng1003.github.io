webpackJsonp([9],{621:function(e,t,n){function i(e){n(695)}var s=n(9)(n(654),n(720),i,"data-v-9eb959ce",null);e.exports=s.exports},639:function(e,t,n){"use strict";function i(){var e=o()({},c.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return n.i(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",e,c.c)}function s(e){var t=o()({},c.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:e});return n.i(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",t,c.c)}t.b=i,t.a=s;var r=n(90),o=n.n(r),a=n(218),c=n(68)},654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(53),s=n.n(i),r=n(639),o=n(68),a=n(37),c=n(220),u=n(89);t.default={mixins:[u.c],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:s()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.singerWrap.style.bottom=t,this.$refs.listview.refresh()},selectSinger:function(e){this.$router.push({path:"/singer/"+e.id}),this.setSinger(e)},reformData:function(e){var t={hot:{title:"热门",items:[]}};e.forEach(function(e,n){n<10&&t.hot.items.push(new c.a({id:e.Fsinger_mid,name:e.Fsinger_name}));var i=e.Findex;t[i]||(t[i]={title:i,items:[]}),t[i].items.push(new c.a({id:e.Fsinger_mid,name:e.Fsinger_name}))});var n=[],i=[];for(var s in t){var r=t[s];r.title.match(/[a-zA-Z]/)?i.push(r):"热门"==r.title&&n.push(r)}return i.sort(function(e,t){return e.title.charCodeAt(0)-t.title.charCodeAt(0)}),n.concat(i)},_getSingerList:function(){var e=this;n.i(r.b)().then(function(t){t.code==o.a&&(e.singers=e.reformData(t.data.list))})}},n.i(a.b)({setSinger:"SET_SINGER"}))}},677:function(e,t,n){t=e.exports=n(604)(!0),t.push([e.i,".singer-wrap[data-v-9eb959ce]{position:absolute;left:0;top:88px;right:0;bottom:0}","",{version:3,sources:["D:/download/bbMusic/src/components/singer/singer.vue"],names:[],mappings:"AACA,8BACE,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,QAAS,AACT,QAAU,CACX",file:"singer.vue",sourcesContent:["\n.singer-wrap[data-v-9eb959ce] {\n  position: absolute;\n  left: 0;\n  top: 88px;\n  right: 0;\n  bottom: 0;\n}\n"],sourceRoot:""}])},695:function(e,t,n){var i=n(677);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(605)("89e417cc",i,!0,{})},720:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"singerWrap",staticClass:"singer-wrap"},[n("listview",{ref:"listview",attrs:{list:e.singers},on:{select:e.selectSinger}}),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.9797b6a1145a3f7d0fab.js.map