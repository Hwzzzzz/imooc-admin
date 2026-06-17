import variables from '@/styles/variables.module.scss'

export default {
  token: (state) => state.user.token,
  hasUserInfo: (state) => Object.keys(state.user.userInfo).length > 0,
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}
