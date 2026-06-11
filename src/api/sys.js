import request from '@/utils/request'

const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

const getUserInfo = (data) => {
  return request({
    url: '/sys/profile'
  })
}

export { login, getUserInfo }
