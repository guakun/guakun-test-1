<template>
<div class="cascader">
  <div class="trigger" @click="popoverVisible = !popoverVisible">
  </div>
  <div class="popover-wrapper" v-if="popoverVisible">
    <cascader-items :items="source" class="popover" :class="popoverClassName"></cascader-items>
  </div>
</div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
  name: 'GuluCascader',
  components: {CascaderItems},
  props: {
    source: {
      type: Array
    },
    popoverClassName: {
      type: String
    }
  },
  data() {
    return {
      popoverVisible: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";

.cascader {
  position: relative;
  .trigger {
    border: 1px solid black; 
    height: 32px; width: 100px;
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute; top: 100%; left: 0; background: white;
  }
}
</style>
