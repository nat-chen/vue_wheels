<template>
  <div>
    <ui-button icon-name="settings" icon-position="right">
        按钮
      </ui-button>
      <ui-button icon-name="settings" icon-position="left">
        按钮
      </ui-button>
      <ui-button icon-name="loading" icon-position="left">
        加载
      </ui-button>
      <ui-button disabled>
        禁用
      </ui-button>
  </div>
</template>

<script>
import Button from '../../../src/button';

export default {
  components: {
    'ui-button': Button,
  },
}

</script>