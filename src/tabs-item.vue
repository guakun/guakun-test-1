<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  props: {
    type: Boolean,
    default: false,
  }
}
</script>

<style lang="scss" scoped>
  .tabs-item {}
</style>
