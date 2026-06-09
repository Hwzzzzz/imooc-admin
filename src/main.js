import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as icons from '@element-plus/icons'
import './styles/index.scss'
import insatllSvgIcon from '@/icons'

const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
installElementPlus(app)
insatllSvgIcon(app)
app.use(store).use(router).mount('#app')
