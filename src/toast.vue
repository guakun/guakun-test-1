<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluToast"
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$border-radius: 4px;
$box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
.toast {
  font-size: $font-size; line-height: 1.8; height: $toast-height; 
  position: fixed; top: 0; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; background: $toast-bg;
  box-shadow: $box-shadow; border-radius: $border-radius; color: #fff;
  padding: 0 16px;
}
</style>
