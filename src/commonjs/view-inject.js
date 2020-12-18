import {
  Button
} from 'vant'

const inject = {
  install: function (Vue) {
    if (this.installed) {
      return
    }
    Vue.use(Button)
    this.installed = true
  }
}
export default inject
