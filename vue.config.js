const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: '8088',
    proxy: {
      '^/': {
        target: 'http://toutiao.itheima.net',
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        logLevel: 'debug'
      }
    }
  }
})
