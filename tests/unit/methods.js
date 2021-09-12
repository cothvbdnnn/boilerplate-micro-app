import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import bizflyStubs from './stubs'
import { routes } from '@/router/index'
import data from '@/store/modules/data'
import loading from './global-store/loading'
import user from './global-store/user'

export const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const mergeModules = {
  loading,
  user,
  data
}

export const createStore = (objectModules = {}) => {
  return new Vuex.Store({
    modules: {
      ...mergeModules,
      ...objectModules
    }
  })
}

export const createRouter = (arrayRoutes = []) => {
  return new VueRouter({
    routes: [
      ...routes,
      ...arrayRoutes
    ]
  })
}

export const createMock = ((mock = {}) => {
  return {
    $t: () => '',
    $notify: () => { },
    ...mock
  }
})

export const createDeep = (component, options = {}) => {
  return mount(component, {
    stubs: bizflyStubs,
    store: createStore(),
    router: createRouter(),
    localVue,
    mocks: createMock(),
    ...options
  })
}

export const createShallow = (component, options = {}) => {
  return shallowMount(component, {
    stubs: bizflyStubs,
    store: createStore(),
    router: createRouter(),
    localVue,
    mocks: createMock(),
    ...options
  })
}