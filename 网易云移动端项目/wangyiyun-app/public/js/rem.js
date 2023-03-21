// rem.js用来实现响应式布局


// 定义函数remSize()来实现适配
function remSize(){
  // 1、获取浏览器宽度，如果大于750就按照750计算，如果小于320就按320计算
  // 确定浏览器窗口的尺寸对于ie5/6/7/8用document.documentElement.clientWidth，其他用window.innerWidth
 var deviceWidth = document.documentElement.clientWidth || window.innerWidth
 if(deviceWidth>=750){
  deviceWidth=750

 }
 if(deviceWidth<=320){
  deviceWidth=320

 }
  // 2、定义1rem的大小
  // 750-->1rem=100px,375px-->1rem=50px
  document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
  // 设置字体大小
  document.querySelector('body').style.fontSize=0.3+'rem'
}
// 一打开窗口就启用
remSize()

// window.onresize调整窗口大小事件,改变窗口大小也启用
window.onresize=function(){
  remSize()
}
