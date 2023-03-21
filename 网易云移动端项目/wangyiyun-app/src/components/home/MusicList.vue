<!-- 这是歌单轮播 -->
<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">推荐歌单</div>
      <div class="more">查看更多</div>
    </div>
    <!-- 歌单轮播 -->
    <div class="musicContent">
      <!-- 歌单轮播图 -->
      <van-swipe :loop="false" :width="150" class="my-swiper" :show-indicators="false">
        <van-swipe-item v-for="item in musicList" :key="item.id">
          <!--路由跳转 到歌单详情页，而每一个小格子点击后跳转到的歌单详情页都不一样，需要吧歌单的id传过去匹配对应的详情页-->
          <!--   query 传参类似于网络请求中的 get 请求，query 传过去的参数会拼接在地址栏中（?name=xx） -->
          <router-link :to="{path:'/itemmusic',query:{id:item.id}}">
            <!-- 歌单图片 -->
            <img :src="item.picUrl" alt />

            <span class="playCount">
              <!-- 播放量图标 -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play" />
              </svg>
              <!-- 播放量数字 -->
              {{changeCount(item.playCount)}}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList } from '@/request/api/home'

export default {

  // 此处复习vue2的写法
  data () {
    return {
      // 先定义一个歌单数组
      musicList: []
    }
  },
  methods: {
    async getGedan () {
      // 拿到数据赋值给res
      let res = await getMusicList()
      console.log(res);
      // 再把res.data.result里的值赋值给数组musicList
      this.musicList = res.data.result;
    },
    // 写一个函数把播放量改成以万为单位
    changeCount: function (num) {
      if (num >= 100000000) {
        // .toFixed(1)留一位小数点
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '亿'


      }
    }


  },
  // 模板已经渲染成html，挂载刀页面完成后的钩子函数可以进行发送ajax请求，获取数据的操作，进行初始化
  mounted () {
    this.getGedan()

  }


}
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>