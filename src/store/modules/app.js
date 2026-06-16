import { getItem, setItem } from '@/utils/storage'
import { LANG } from '@/constant/index'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, key) {
      setItem(LANG, key)
      state.language = key
    }
  },
  actions: {}
}
