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

router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token) {
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
