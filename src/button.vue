<template>
  <button class="ui-button" 
    @click="$emit('change-icon')"
    :class="{[`icon-${iconPosition}`]: true}">
    <ui-icon class="icon" v-if="iconName" :icon="iconName"></ui-icon>
    <div id="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from 'vue';
import Icon from './icon.vue';

  export default {
    name: 'GuluButton',
    components: {
      'ui-icon': Icon,
    },
    props: {
      'iconName': {
        type: String,
      },
      'iconPosition': {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
      }
    },
  }
}
</script>


<style lang="scss" scoped>
$font-size: 14px;
$button-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.ui-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  > #content {
    order: 2;
    margin-left: 0.5em;
    margin-right: 0;
  }

  > .icon {
    order: 1;
  }

  &.icon-right {
    > .content { 
      order: 1;
      margin-right: 0.5em;
      margin-left: 0;
    }
    > .icon {
      order: 2;
    }
  }

  .loading {
    animation: 1s linear infinite loading;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

</style>