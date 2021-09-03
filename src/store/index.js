import Vue from 'vue'
import Vuex from 'vuex'
import { globalModules } from '@bizfly/shared'
Vue.use(Vuex)

let localModules = {}
if(process.env.NODE_ENV !== 'test') {
  const modulesFiles = require.context('./modules', true, /\.js$/)
  // you do not need `import app from './modules/app'`
  // it will auto require all vuex module from modules file
  localModules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
  }, {})
}

export default new Vuex.Store({
  modules: {
    ...globalModules,
    ...localModules
  }
})