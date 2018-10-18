<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'GuluTabsBody',
  inject: ['eventBus'],
  create() {

  }
}
</script>

<style lang="scss" scoped>

</style>