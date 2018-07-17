const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })


  describe('props', () => {

    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('接受 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'xxxx'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('xxxx')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // trigger onchange event
        let event = new Event(eventName)
        const inputElement = vm.$el.querySelector('input')
        console.log(event)
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })

    // it(' input 触发 input 事件', () => {
    //   vm = new Constructor({}).$mount()
    //   const callback = sinon.fake()
    //   vm.$on('input', callback)
    //   // trigger onchange event
    //   let event = new Event('input')
    //   const inputElement = vm.$el.querySelector('input')
    //   console.log(event)
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it(' input 触发 focus 事件', () => {
    //   vm = new Constructor({}).$mount()
    //   const callback = sinon.fake()
    //   vm.$on('focus', callback)
    //   // trigger onchange event
    //   let event = new Event('focus')
    //   const inputElement = vm.$el.querySelector('input')
    //   console.log(event)
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it(' input 触发 blur 事件', () => {
    //   vm = new Constructor({}).$mount()
    //   const callback = sinon.fake()
    //   vm.$on('blur', callback)
    //   // trigger onchange event
    //   let event = new Event('blur')
    //   const inputElement = vm.$el.querySelector('input')
    //   console.log(event)
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })

  })
})