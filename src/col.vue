<template>
  <div class="col" 
    :class="colClass"
    :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>

let validator = (value) => {
  let keys = Object.keys(value);
  return keys.every(key => {
    return ['span', 'offset'].includes(key);
  })
}

export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    ipad: { type: Object, validator, }, 
    narrowPc: { type: Object, validator, }, 
    pc: { type: Object, validator, }, 
    widePc: { type: Object, validator, }
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses;
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),

      ];
    },
    colStyle() {
      return {
        marginLeft: this.gutter / 2 + 'px', 
        marginRight: this.gutter / 2 + 'px'
      }
    }
  },
  methods: {
    createClasses(classObject, endPointType = '') {
      if (!classObject) return [];
      let array = [];
      if (classObject.span) {
        array.push(`col-${endPointType}${classObject.span}`)
      }
      if (classObject.offset) {
        array.push(`offset-${endPointType}${classObject.offset}`)
      }
      return array;
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
  $class-prefix: offset-; //与上面变量名重复不影响
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
