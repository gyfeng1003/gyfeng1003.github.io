webpackJsonp([13],{623:function(t,n,s){function e(t){s(683)}var i=s(9)(s(656),s(708),e,"data-v-32d7636f",null);t.exports=i.exports},656:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s(53),i=s.n(e),a=s(37),r=s(135),o=s(89);n.default={mixins:[o.c],data:function(){return{switches:[{name:"我关注的"},{name:"我的点赞"}],currentIndex:0}},computed:i()({noResult:function(){return 0==this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0==this.currentIndex?"暂无收藏歌曲":"你还没有点赞过歌曲"}},s.i(a.a)(["favoriteList","playHistory"])),methods:i()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.listBox.style.bottom=n,this.$refs.listScroll&&this.$refs.listScroll.refresh()},random:function(){var t=0==this.currentIndex?this.favoriteList:this.playHistory;t.length&&(t=t.map(function(t){return new r.a(t)}),this.randomPlay({list:t}))},selectSong:function(t){this.insertSong(new r.a(t))},switchItem:function(t){this.currentIndex=t}},s.i(a.c)(["insertSong","randomPlay"]))}},665:function(t,n,s){n=t.exports=s(604)(!0),n.push([t.i,".user-wrap[data-v-32d7636f]{position:fixed;left:0;top:0;right:0;bottom:0;background:#f5f5f5}.user-wrap .title[data-v-32d7636f]{height:45px;line-height:45px;text-align:center}.user-wrap .icon-back[data-v-32d7636f]{position:absolute;top:0;left:6px;padding:10px;font-size:18px;color:#000}.user-wrap .switches-box[data-v-32d7636f]{margin:0 0 30px;background:#fff}.user-wrap .play-btn[data-v-32d7636f]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:135px;margin:0 auto;padding:7px 0;color:#999;border:1px solid #999;border-radius:100px;box-sizing:border-box}.user-wrap .play-btn .icon-play[data-v-32d7636f]{margin-right:6px;font-size:16px}.user-wrap .play-btn .text[data-v-32d7636f]{font-size:12px}.user-wrap .list-box[data-v-32d7636f]{position:absolute;left:0;top:110px;right:0;bottom:0}.user-wrap .list-box .list-scroll[data-v-32d7636f]{height:100%;overflow:hidden}.user-wrap .list-box .list-scroll .list-inner[data-v-32d7636f]{padding:20px 30px}.user-wrap .no-result-box[data-v-32d7636f]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["D:/download/bbMusic/src/components/user/collection-list.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,SAAU,AACV,kBAAoB,CACrB,AACD,mCACI,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACtB,AACD,uCACI,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,aAAc,AACd,eAAgB,AAChB,UAAY,CACf,AACD,0CACI,gBAAiB,AACjB,eAAiB,CACpB,AACD,sCACI,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,YAAa,AACb,cAAe,AACf,cAAe,AACf,WAAY,AACZ,sBAAuB,AACvB,oBAAqB,AACrB,qBAAuB,CAC1B,AACD,iDACM,iBAAkB,AAClB,cAAgB,CACrB,AACD,4CACM,cAAgB,CACrB,AACD,sCACI,kBAAmB,AACnB,OAAQ,AACR,UAAW,AACX,QAAS,AACT,QAAU,CACb,AACD,mDACM,YAAa,AACb,eAAiB,CACtB,AACD,+DACQ,iBAAmB,CAC1B,AACD,2CACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC/B",file:"collection-list.vue",sourcesContent:["\n.user-wrap[data-v-32d7636f] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #f5f5f5;\n}\n.user-wrap .title[data-v-32d7636f] {\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n}\n.user-wrap .icon-back[data-v-32d7636f] {\n    position: absolute;\n    top: 0;\n    left: 6px;\n    padding: 10px;\n    font-size: 18px;\n    color: #000;\n}\n.user-wrap .switches-box[data-v-32d7636f] {\n    margin: 0 0 30px;\n    background: #fff;\n}\n.user-wrap .play-btn[data-v-32d7636f] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 135px;\n    margin: 0 auto;\n    padding: 7px 0;\n    color: #999;\n    border: 1px solid #999;\n    border-radius: 100px;\n    box-sizing: border-box;\n}\n.user-wrap .play-btn .icon-play[data-v-32d7636f] {\n      margin-right: 6px;\n      font-size: 16px;\n}\n.user-wrap .play-btn .text[data-v-32d7636f] {\n      font-size: 12px;\n}\n.user-wrap .list-box[data-v-32d7636f] {\n    position: absolute;\n    left: 0;\n    top: 110px;\n    right: 0;\n    bottom: 0;\n}\n.user-wrap .list-box .list-scroll[data-v-32d7636f] {\n      height: 100%;\n      overflow: hidden;\n}\n.user-wrap .list-box .list-scroll .list-inner[data-v-32d7636f] {\n        padding: 20px 30px;\n}\n.user-wrap .no-result-box[data-v-32d7636f] {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n}\n"],sourceRoot:""}])},683:function(t,n,s){var e=s(665);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(605)("8ba480d6",e,!0,{})},708:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"user-wrap"},[s("i",{staticClass:"iconfont icon-back icon-fanhui",on:{click:function(n){return t.$router.back()}}}),t._v(" "),s("div",{staticClass:"switches-box"},[s("div",{staticClass:"title"},[t._v("我的收藏")])]),t._v(" "),s("div",{ref:"listBox",staticClass:"list-box"},[0==t.currentIndex?s("scroll",{ref:"listScroll",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[s("div",{staticClass:"list-inner"},[s("song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1==t.currentIndex?s("scroll",{ref:"listScroll",staticClass:"list-scroll",attrs:{data:t.playHistory}},[s("div",{staticClass:"list-inner"},[s("song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],staticClass:"no-result-box"},[s("no-result",{attrs:{title:t.noResultDesc}})],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=13.84870ddd934c0d6f66ff.js.map