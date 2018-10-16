<template>
  <div class="col" 
    :class="colClass"
    :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    }
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      return [`col-${this.span}`, this.offset && `offset-${this.offset}`];
    },
    colStyle() {
      return {
        marginLeft: this.gutter / 2 + 'px', 
        marginRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.col {
  height: 50px;
  background: #7CB8FF;
  width: 50%;
  border: 1px solid #3D8FEE;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
