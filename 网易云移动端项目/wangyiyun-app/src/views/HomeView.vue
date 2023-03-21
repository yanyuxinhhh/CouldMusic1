<template>
  <TopNav></TopNav>
  <swiperTop></swiperTop>
  <iconList></iconList>
  <MusicList></MusicList>
</template>

<script>
import { useAttrs } from 'vue';
import TopNav from '@/components/home/TopNav.vue'
import swiperTop from '@/components/home/swiperTop.vue'
import iconList from '@/components/home/iconList.vue';
import MusicList from '@/components/home/MusicList.vue';

export default {
  name: 'HomeView',
  components: {
    useAttrs,
    TopNav,
    swiperTop,
    iconList,
    MusicList
  }
}
</script>
