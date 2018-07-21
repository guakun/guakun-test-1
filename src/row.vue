<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px' }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String]
      },
    },
    created() {
      console.log('row created')
      // 没有儿子
      // console.log('created row\'s child:', this.$children)
    },
    mounted() {
      console.log('rol mounted')
      // 有儿子
      // console.log('mounted row\'s child:', this.$children)
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
  }

  var div = document.createElement('div') // create
  var childDiv = document.createElement('div')
  div.appendChild(childDiv)
  document.body.appendChild(div) // mounted
</script>

<style scoped lang="scss">
  .row {
    display: flex;
  }
</style>