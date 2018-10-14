<template>
  <svg :class="{loading: icon === 'loading'}" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>
  
<script>

export default {
  props: {
    'icon': {
      type: String,
    }
  }
}
</script>

<style>

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>