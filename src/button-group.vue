<template>
  <div class="ui-button-group left-and-right">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`ui-button-group 的子元素应为  ui-button, 但实为 ${name}`);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.ui-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .ui-button {
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:nth-child(2) {
      padding-left: 0.5em;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}

</style>
