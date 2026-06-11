export default {
  token: (state) => state.user.token,
  hasUserInfo: (state) => Object.keys(state.user.userInfo).length > 0,
  userInfo: (state) => state.user.userInfo
}
