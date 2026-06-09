import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

// 全局注册svg组件
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
