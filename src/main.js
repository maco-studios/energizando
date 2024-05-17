import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(Vue3SmoothScroll)
app.mount('#app')
