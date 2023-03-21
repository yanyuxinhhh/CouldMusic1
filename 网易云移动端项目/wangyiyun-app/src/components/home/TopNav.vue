<!-- 顶部导航 -->
<template>
  <div class="topNav">
    <!-- 汉堡列表图标 -->
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao" />
      </svg>
    </div>

    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <!-- 搜索图标 -->
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo" />
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .topContent {
    width: 70%;
    height: 100%;
    display: flex;
    // justify-content: space-between;  /* 均匀排列每个元素,首个元素放置于起点，末尾元素放置于终点 */
    justify-content: space-between;
    font-size: 0.36rem;
  }
  .active {
    font-weight: 900;
  }
}
</style>