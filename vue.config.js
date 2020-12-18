const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src/'))
      .set('views', resolve('./src/views/'))
      .set('store', resolve('./src/store/'))
      .set('components', resolve('./src/components/'))
      .set('assets', resolve('./src/assets/'))
  },
  devServer: {
    proxy: {//配置跨域
      '/api': {
        target: 'http://120.26.60.64/poseidon',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
      }
    }
  }
}