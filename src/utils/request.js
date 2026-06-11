import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeOut } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 6000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'helloqianduanxunlianying'
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
      if (isCheckTimeOut()) {
        store.dispatch('user/loginOut')
      }
    }
    return config // 必须返回配置
  },
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/loginOut')
    }
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { success, message } = response.data
    if (success) {
      return response.data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
