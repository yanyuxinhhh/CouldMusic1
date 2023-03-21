<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" />
      <div>
        <p>{{playList[playListIndex].al.name }}</p>
        <span>横滑可以切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon liebiao" aria-hidden="true" @click=" play " v-if="isbtnShow">
        <use xlink:href="#icon-bofanganniu" />
      </svg>
      <svg class="icon liebiao" aria-hidden="true" @click=" play " v-else>
        <use xlink:href="#icon-weibiaoti--" />
      </svg>

      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu" />
      </svg>
    </div>
    <!-- ref引用 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup v-model:show="detailShow" position="bottom" :style="{ width:'100%',height: '100%' }">
      <MusicDetail></MusicDetail>
    </van-popup>>
  </div>>
</template>
<script >
import { mapMutations, mapState } from 'vuex'
import MusicDetail from '@/components/item/MusicDetail.vue'
export default {
  components: {
    MusicDetail
  },

  computed: {
    // 解构
    ...mapState(['playList', 'playListIndex', 'isbtnShow', 'detailShow'])

  },
  mounted () {
    console.log(this.$refs);
  },
  methods: {
    play () {
      // 如果播放器为暂停状态，点击就可以播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);

      }
      // 如在播放中，那么点击之后就暂停
      else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);

      }

    },
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow'])
  },
  watch: {
    // 注意当我们点进歌单，播放第一首歌，此时是不会自动播放的，因为只有监听到下标变化才会自动播放，而默认的下标就是0,所以此时下标没发生变化


    playListIndex: function () {
      //监听如果下标发生了改变，就自动播放音乐
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        //如果是暂停状态，改变图标
        this.updateIsbtnShow(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);

      }


    }



  }

}
</script>

<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>