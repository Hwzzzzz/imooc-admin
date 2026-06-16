import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as icons from '@element-plus/icons'
import './styles/index.scss'
import insatllSvgIcon from '@/icons'
import i18n from './i18n'

const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
installElementPlus(app)
insatllSvgIcon(app)
app.use(i18n)
app.use(store).use(router).mount('#app')
