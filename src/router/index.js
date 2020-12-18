import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)



const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  linkActiveClass: '',   // <router-link> 默认的激活的 class
  linkExactActiveClass: '', // <router-link> 默认的精确激活的 class
  routes
})

export default router
