<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      left = left - 20;
      if (this.$refs.line) {
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`
      }
    })
  }

}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$bottom-color: #4A90E2;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $bottom-color;
    transition: all 1s;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>