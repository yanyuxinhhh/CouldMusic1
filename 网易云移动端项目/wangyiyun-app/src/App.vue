<template>
  <router-view />
  <FooterMusic></FooterMusic>
</template>

<script>
import FooterMusic from '@/components/item/FooterMusic.vue'
export default {
  components: {
    FooterMusic
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  // 元素的总高度和宽度包含内边距和边框(padding 与 border) :
  box-sizing: border-box;
}
.icon {
  width: 0.4rem;
  height: 0.4rem;
}
a {
  color: black;
}
</style>
