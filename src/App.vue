<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 text-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:text-gray-100 transition-colors duration-300" :class="{ 'kawaii-theme': isKawaiiPage }">
    <Navbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute();
    
    // 检测是否是"总之就是非常可爱"页面
    const isKawaiiPage = computed(() => {
      return route.path === '/kawaii';
    });
    
    return {
      isKawaiiPage
    };
  }
}
</script>

<style>
@import './assets/css/main.css';

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>