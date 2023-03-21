// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 封装一个引入vant组件的配置文件，然后对外模块导出提供调用
import getVant from './plugins'
const app=createApp(App)
getVant(app)
app.use(store)
app.use(router).mount('#app')
