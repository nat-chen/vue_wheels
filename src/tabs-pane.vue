<template>
  <div class="tabs-pane" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false, //active 由内部组件维护
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true,
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', name => {
      this.active = name === this.name;
    })
  }
}

</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    padding : 1em;
    background: #eeeeee;
  }
}
</style>
