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
import Tabs from './tabs'
import TabHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      selectedTab: 'sports'
    }
  },
  created() {
  },
  methods: {
    showToast() {
      this.$toast(`你的智商需要充值! ${parseInt(Math.random() * 100)}`, {
        position: 'bottom',
        position: 'bottom',
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
    }
  }
})
