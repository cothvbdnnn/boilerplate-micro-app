import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { globalModules } from '@bizfly/shared'
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const localModules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules: {
    ...globalModules,
    ...localModules
  },
  getters
})