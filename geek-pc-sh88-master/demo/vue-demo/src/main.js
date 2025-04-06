// 将App.vue作为根组件, 渲染index.html
import { createApp } from 'vue'
import App from './App.vue'
import './bootstrap.css'
// vue3是函数式编程，按需导入，
// 以App.vue作为根组件, 创建单页应用app实例
const app = createApp(App) //createApp是创建实例的函数

// 指定挂载的视图
app.mount('#app')
