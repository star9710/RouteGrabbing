import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')
/* 挂载全局对象 */
app.config.globalProperties.$axios = axios;
