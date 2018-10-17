<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span class="close" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 8
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        callback: undefined,
      })
    },
    enableHtml: {
      type: Boolean,
      default: false, //默认不支持传 html 类型
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value);
      }
    }
  },
  mounted() {
    this.updateStyle();
    this.execAutoClose();
  },
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]: true}
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = 
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
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
    onClickClose() {
      this.close();
      if (typeof this.closeButton.callback === 'function') {
        this.closeButton.callback();
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: #fff;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  animation: fade-in 1s;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  > .line {
    border-right: 1px solid #fff; 
    height: 100%;
    margin: 0 10px;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    top: auto;
  }
}

</style>

