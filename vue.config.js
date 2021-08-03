module.exports = {
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