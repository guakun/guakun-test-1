import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: true,
      loading2: true
    }
  },
  created() {
    setTimeout(() => {
      let event = new Event('change')
      const inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    }, 3000)
  },
  methods: {
    inputChange(event) {
      console.log('event', event)
    }
  }

})
