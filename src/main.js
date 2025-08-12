import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main.css';
import AOS from 'aos';

// 初始化AOS动画库
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true
});

const app = createApp(App);
app.use(router);
app.mount('#app'); 