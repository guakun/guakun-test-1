<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <Icon v-if="item.children" name="right" class="icon"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
 import Icon from './icon'
 
 export default {
  name: 'GuluCascaderItems',
  components: {Icon},
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
@import 'var';

.cascaderItem {
  display: flex; align-items: flex-start; justify-content: flex-start;
  .left {
    height: 100%; padding: .3em 0; 
    height: 110px; overflow: auto;
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
  .label {
    cursor: pointer; padding: 0.3em 1em;
    display: flex; align-items: center;
    .icon {
      margin-left: 1em; transform: scale(.5);
    }
  }
}
</style>
