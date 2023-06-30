import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App);
app.mount('#app');
/* 挂载全局对象 */
app.config.globalProperties.$axios = axios;
