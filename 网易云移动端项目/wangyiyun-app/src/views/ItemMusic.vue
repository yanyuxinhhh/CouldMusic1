<!--歌单详情页 -->
<template>
  <itemMusicTop :playList="state.playList"></itemMusicTop>
  <itemMusicList :itemList="state.itemList" :subscribedCount="state.playList.subscribedCount"></itemMusicList>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, gettemList } from '@/request/api/item'
import itemMusicTop from '@/components/item/itemMusicTop.vue'
import itemMusicList from '@/components/item/itemMusicList.vue'
export default {
  setup () {
    // 定义一个动态的对象来进行接收
    const state = reactive({
      // itemMusic是父组件，itemMusicTop是子组件，需要吧父组件中playList传递给子组件
      playList: {},//代表歌单详情页的数据
      itemList: []//代表歌单列表的歌曲
    })
    // 当再次刷新时，拿不到backgroundurl1(因为层级太深了在creator中)，因为数据丢失了，
    // 因为在渲染itemMusicTop.vue时,itemMussic在传递参数，刷新时，数据已经传递过去了
    // 但state.playList = res.data.playlist的操作慢一点，已经被渲染了但是这个赋值还没获取到

    onMounted(async () => {
      let id = useRoute().query.id;
      console.log(id);
      // 获取歌单详情页
      let res = await getMusicItemList(id);
      console.log(res)
      //   获取歌单的歌曲
      state.playList = res.data.playlist
      let result = await gettemList(id);
      console.log(result)
      state.itemList = result.data.songs
      //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));

    })
    return { state }
  },
  components: {
    itemMusicTop,
    itemMusicList
  }
}
</script>