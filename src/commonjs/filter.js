import dayjs from 'dayjs'


const _filters = {
}

const filter = {
  install: function (Vue) {
    if (this.installed) {
      return
    }
    Object.keys(_filters).forEach(key => {
      Vue.filter(key, _filters[key])
    })
    this.installed = true
  }
}

export default filter
