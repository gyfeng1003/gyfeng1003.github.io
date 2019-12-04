const path = require('path')

// const URL = 'http://10.237.209.68:3016'
const URL = 'http://10.237.203.107:23016'
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 9527,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: process.env.VUE_APP_BASE_API
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.less'),
        path.resolve(__dirname, 'src/styles/_mixins.less')
      ]
    }
  }
}
