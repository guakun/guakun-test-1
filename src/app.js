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
import Cascader from './cascader'

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
Vue.component('g-cascader', Cascader)

Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      source: [
        {
          name: '浙江',
          children: [
            { 
              name: '杭州',
              children: [
                {name: '萧山区'},
                {name: '古荡区'},
                {name: '西湖区'},
                {name: '滨江区'},
              ]
            },
            { 
              name: '宁波',
              children: [
                {name: '江东区'},
                {name: '江北区'},
                {name: '北仓区'},
              ]
            },
            {
              name: '温州',
              children: [
                {name: '市辖区'},
                {name: '瑞安区'},
                {name: '龙湾区'},
              ]
            },
          ]
        },
        {
          name: '山东',
          children: [
            {
              name: '济南',
              children: [
                {name: '历下区'},
                {name: '历城区'},
                {name: '高新区'},
                {name: '天桥区'},
              ]
            },
            {
              name: '青岛',
              children: [
                {name: '市南区'},
                {name: '黄岛区'},
                {name: '四方区'},
              ]
            },
          ]
        },
        {
          name: '北京',
          children: [
            {name: '五道口'},
            {name: '大兴'},
          ]
        }
      ]
    }
  },
  created() {
  },
  methods: {}
})
