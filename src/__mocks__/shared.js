import axios from 'axios'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import en from '../lang/en.json'
import vi from '../lang/vi.json'

export const config = {
  service: {
  },
  otherServices: {
  }
}

export const request = axios.create();

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: "vi",
  fallbackLocale: "vi",
  messages: {
    en,
    vi
  },
})

export const globalFilters = {
  toThousandFilter: () => {},
  uppercaseFirst: () => {},
  now: () => {},
  formatDateTime: () => {}
}

export const BfTabs = {}
export const BfTabPane = {}