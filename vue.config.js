const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    // 1. 让默认 svg 规则忽略我们自己的 svg 目录（重要）
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons')) // 你的 svg 放这里
      .end()

    // 2. 用 svg-sprite-loader 处理我们的 svg
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 和组件里 #icon-xxx 对应
      })
      .end()
  }
})
