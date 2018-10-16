<template>
  <transition name="slide">
    <div class="sider" v-if="visable">
      <slot></slot>
      <button @click="visable = false">关闭</button> 
    </div>  
  </transition>
</template>

<script>
export default {
  name: 'GuluSider',
  data() {
    return {
      visable: true,
    }
  },
}
</script>

<style lang="scss" scoped>

.slide-enter-active, .slide-leave-active {
  transition: all 2s;
}
.slide-enter, .slide-leave-to {
  margin-left: -70px;
}

</style>
