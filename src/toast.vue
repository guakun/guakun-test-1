<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <span class="close" v-if="closeButton" @click="onClickCLose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return { text: "关闭", callback: undefined };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickCLose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$border-radius: 4px;
$box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
.toast {
  font-size: $font-size; line-height: 1.8; min-height: $toast-height; position: fixed; top: 20px;
  left: 50%; transform: translateX(-50%); display: flex; align-items: center; background: $toast-bg;
  box-shadow: $box-shadow; border-radius: $border-radius; color: #fff; padding: 8px 16px;
  .close {
    padding-left: 16px; margin-left: 16px; cursor: pointer; flex-shrink: 0;
    &::before {
      content: ''; position: absolute; top: 0; height: 100%;
      border-left: 1px solid #666; margin-left: -16px;
    }
  }
}

</style>
