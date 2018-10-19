<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      visible: false,
    }
  },
  props: {
    position: {
      type: 'String',
      default: 'top',
      validator(vaule) {
        return ['top', 'bottom'].includes(value);
      }
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === 'top') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      } else if (this.position === 'bottom') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + height +  window.scrollY + 'px';
      }
     
    },
    eventHandler(event) {
      console.log(this.$refs.popover, event.target);
      if (this.$refs.popover && (
          this.$refs.contentWrapper.contains(event.target) || this.$refs.popover.contains(event.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener('click', this.eventHandler);
      })
    },
    close() {
      this.visible = false;
      document.removeEventListener('click', this.eventHandler);
    },
    onClick() {
      if (this.visible === true) {
        this.close();
      } else {
        this.open();
      }  
    }  
  }
}
</script>


<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  background: #fff;
  transform: translateY(-100%);
  padding: 0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;

  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: #fff;
    top: calc(100% - 1px); //px 不能省
  }

}
</style>
