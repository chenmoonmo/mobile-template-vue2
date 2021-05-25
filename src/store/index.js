import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'


export default {
  install(Vue) {
    Vue.use(Vuex)
    this.store = new Vuex.Store({
      state,
      mutations,
      actions,
      modules
    })
  },
  store: null
}
