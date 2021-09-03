import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../utils/i18n'

Vue.use(VueRouter)

export const routes = [
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router