import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.less'

// 自动修改rem
import smartRem from 'smart-rem'
// 此处为设计稿宽度 元素宽度为 标注宽度/100 + rem
smartRem(750)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
