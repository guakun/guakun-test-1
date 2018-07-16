<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <g-icon class="icon" v-if="!loading && icon" :name="icon"/>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return (value === 'left' || value === 'right')
        }
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
  }
  .g-button {
    font-size: var(--font-size); height: var(--button-height); padding: 0 1em;
    border-radius: var(--border-radius); border: 1px solid var(--border-color); background: var(--button-bg);
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: var(--border-color-hover) }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .icon { order: 1; margin-right: .1em }
    > .content { order: 2; }
    &.icon-right {
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
      > .content { order: 1; }
    }
    .loading {
      animation: spin 2.7s infinite linear;
    }
  }
</style>