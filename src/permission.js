// 权限控制
import router from './router'
// import store from './store'
import TokenUtils from "@/commonjs/token-utils"

console.log(router)


const whiteList = ['/login', '/404']

router.router.beforeEach((to, from, next) => {
  // NProgress.start()
  if (TokenUtils.getToken()) {
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login`) // 否则全部重定向到登录页
    }
  }
})

router.router.afterEach(() => {
  // NProgress.done()
})
