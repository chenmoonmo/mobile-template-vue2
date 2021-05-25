import VueRouter from 'vue-router'


// 跳转到一个相同的路由，就会遇到以下错误。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

export default {
  install(Vue) {
    Vue.use(VueRouter)
    this.router = new VueRouter({
      mode: 'hash',
      // base: process.env.BASE_URL,
      linkActiveClass: '',   // <router-link> 默认的激活的 class
      linkExactActiveClass: '', // <router-link> 默认的精确激活的 class
      routes
    })
    setTimeout(() => {
      import('@/permission')
    });

  },
  router: null
}