import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

const writeList = ['/login']

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

router.beforeEach(async (to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token) {
    // 当存在token的时候判断是存在用户信息
    if (!store.getters.hasUserInfo) {
      await store.dispatch('user/getUserInfo')
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (writeList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
