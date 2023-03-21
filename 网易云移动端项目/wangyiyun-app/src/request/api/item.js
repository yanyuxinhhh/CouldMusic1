// service封装了axios的实例，发送请求的
import service  from "..";
// 获取歌单详情页的数据
export function getMusicItemList(data){
  return service ({
    method:"GET",
    url:`/playlist/detail?id=${data}`
  })
}
// 获取歌单所有歌曲
export function gettemList(data){
  return service ({
    method:"GET",
    url:`/playlist/track/all?id=${data}&limit=20&offset=0`
  })
}