import { Swipe, SwipeItem,Button,Popup} from 'vant';
// 将导入的组件放入数组中
// 把这些组件都进行循坏，每一个都执行app.ues()
let plugins=[
    Swipe,SwipeItem,Button,Popup]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}
