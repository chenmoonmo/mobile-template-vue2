import { deepClone } from "@/common-js/utils"
import flushKey from "@/store/flush-key"
import state from '@/store/state'

const STORE_KEY = 'phm_store'

let unloadFunc = null

export default class TokenUtils {
  constructor() {
  }

  static initStore(vueInstance) {
    if (localStorage.getItem(STORE_KEY)) {
      vueInstance.$store.replaceState(Object.assign({}, vueInstance.$store.state, JSON.parse(localStorage.getItem(STORE_KEY))))
    }
  }

  static removeStore(vueInstance) {
    if (localStorage.getItem(STORE_KEY)) {
      localStorage.removeItem(STORE_KEY)
      vueInstance.$store.replaceState({
        user: null, // 用户信息
        roles: [],   // 用户角色
        permissions: [], // 用户权限
        routerData: [],  // 用户路由信息
      })
    }
  }

  static setCacheWhenUnload(vueInstance) {
    //在页面刷新时将vuex里的信息保存到localStorage里
    if (!unloadFunc) {
      unloadFunc = () => {
        let stateClone = deepClone(vueInstance.$store.state)
        for (let key of flushKey) {
          delete stateClone[key]
        }
        localStorage.setItem(STORE_KEY, JSON.stringify(stateClone))
      }
    }
    window.addEventListener("beforeunload", unloadFunc)
  }

  static removeCacheWhenUnload() {
    window.removeEventListener("beforeunload", unloadFunc)
  }

}
