import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toaset from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toaset)

Vue.use(plugin)

new Vue({
  el: '#app',
  created() {
    this.$toast('你的智商需要充值!', {
      // position: 'bottom',
      position: 'middle',
      closeButton: {
        text: '已充值',
        callback() {
          console.log('他说已经充值智商了')
        }
      },
      enableHtml: false,
      autoClose: false,
      autoCloseDelay: 3,
    })
  },
  methods: {
    showToast() {
      this.$toast('当前功能不稳定，如果遇到 bug 请关闭该功能。', {})
    }
  }
})
