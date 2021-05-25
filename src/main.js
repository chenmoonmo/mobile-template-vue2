import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from '@/commonjs/filter' // 引入全局过滤器
import './assets/css/index.less'
import smartRem from 'smart-rem' // 自动修改rem
smartRem(750) // 此处为设计稿宽度 元素宽度为 标注宽度/100 + rem
Vue.use(filter)
Vue.use(store)
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  router: router.router,
  store: store.store,
  render: h => h(App)
}).$mount('#app')
