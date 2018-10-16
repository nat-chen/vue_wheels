<template>
  <div class="wrapper" :class="{error}">
    <input type="text" 
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('input-change', $event)" 
      @input="$emit('input', $event.target.value)"/>
    <template v-if="error">
      <icon icon="error"></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>

import Icon from './icon.vue'
export default {
  components: { Icon },
  name: 'GuluInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    inputChange: {
      type: Function,
    }
  }
}

</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D; 

.wrapper {
  margin-right: 20px;
  font-size: $font-size;
  display: inline-block;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #ccc;
      color: #333;
      cursor: not-allowed;
    }
    &[readonly] {
      color: #333;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    > svg {
      fill: $red;
    }
    > span {
      color: $red;
      font-weight: bold;
    }
  }
}


</style>