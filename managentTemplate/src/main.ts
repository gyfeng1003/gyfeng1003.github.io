import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons/components'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
import ElementUI from 'element-ui'
// @ts-ignore
import SvgIcon from 'vue-svgicon'

import { AppModule } from '@/store/modules/app'
import '@/permission'

Vue.use(ElementUI, {
  size: AppModule.size // Set element-ui default size
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
