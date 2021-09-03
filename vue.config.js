module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compiler = require('vue-template-babel-compiler')
        return options
      })
  },
  configureWebpack: {
    externals: [
      "vue",
      "single-spa",
      "single-spa-vue",
      "vue-router",
      "vuex",
      "axios",
      "js-cookie",
      "vue-i18n",
      "dayjs",
      "ravenjs",
      "vue-raven",
      "crypto-js",
      /^@bizfly\/.+/,
      "bizfly-ui"
    ],
  },
};