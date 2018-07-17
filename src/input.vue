<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'GuluInput',
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-color-disabled: #aaa;
  $border-color-error: #F1453D;
  $color-error: #F1453D;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $input-color-disabled: #aaa;

  .wrapper {
    font-size: 12px; display: inline-flex; align-items: center;
    > :not(:last-child) {margin-right: .5em; }
    > input { height: $height; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
      &[disabled], &[readonly] { border-color: $border-color-disabled; color: $input-color-disabled; cursor: not-allowed; }
    }
    &.error {
      > input { border: 1px solid $border-color-error; }
    }
    .icon-error { fill: $color-error; }
    .errorMessage { color: $color-error; }
  }
</style>