<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false, //active 由内部组件维护
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    }
  },
  created() {
    if (this.eventBus) {//解决 bug
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit('update:selected', this.name, this);
    }
  }
}
</script>


<style lang="scss" scoped>
$font-color: #4A90E2;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    color: $font-color;
    font-weight: bold;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}

</style>