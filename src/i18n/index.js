import { createI18n } from 'vue-i18n'
import mZhLocale from '../lang/zh'
import mEnLocale from '../lang/en'
import store from '@/store'

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

const getLanguage = () => {
  return store?.getters?.language || 'zn'
}

const locale = getLanguage()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
