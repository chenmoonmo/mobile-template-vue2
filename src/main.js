import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.less'
import './permission'
import viewInject from '@/commonjs/view-inject'
import smartRem from 'smart-rem' // 自动修改rem
import filter from '@/commonjs/filter' // 引入全局过滤器

smartRem(750) // 此处为设计稿宽度 元素宽度为 标注宽度/100 + rem
Vue.use(filter)
Vue.use(viewInject)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
