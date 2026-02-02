<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300"
       :class="isScrolled ? 'pt-3' : 'pt-6'">
    <nav 
      class="w-full max-w-5xl backdrop-blur-xl border shadow-lg rounded-full px-6 pointer-events-auto transition-all duration-300"
      :class="[
        isScrolled 
          ? 'py-2 bg-white/95 dark:bg-gray-900/95 shadow-gray-200/30 dark:shadow-gray-900/50 border-white/70 dark:border-gray-700' 
          : 'py-3 bg-white/80 dark:bg-gray-900/80 shadow-gray-200/20 dark:shadow-gray-900/30 border-white/50 dark:border-gray-800',
        isKawaiiPage ? 'ring-2 ring-kawaii-pink/30' : ''
      ]"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="relative w-10 h-10 rounded-full overflow-hidden shadow-inner ring-2 ring-white dark:ring-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <img :src="siteConfig.site.logo" :alt="siteConfig.site.title" class="w-full h-full object-cover" />
          </div>
          <span class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 group-hover:from-primary-600 group-hover:to-primary-400 transition-all duration-300"
            :class="{ 'from-kawaii-pink to-kawaii-purple': isKawaiiPage }">
            {{ siteConfig.site.title }}
          </span>
        </router-link>
        
        <!-- 桌面端导航 -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link 
            v-for="item in siteConfig.navItems" 
            :key="item.path" 
            :to="item.path" 
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group hover:scale-105"
            :class="[
              $route.path === item.path 
                ? (isKawaiiPage ? 'text-kawaii-pink bg-kawaii-pink/10' : 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400') 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
            ]">
            <span class="relative z-10">{{ item.name }}</span>
            <div v-if="$route.path === item.path && isKawaiiPage" class="absolute inset-0 bg-kawaii-pink/5 animate-pulse"></div>
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button 
          @click="toggleMenu" 
          class="md:hidden p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800"
        >
          <Bars3Icon v-if="!isMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- 移动端下拉菜单 (独立浮层) -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0 -translate-y-2"
        enter-to-class="transform scale-100 opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100 translate-y-0"
        leave-to-class="transform scale-95 opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 mt-4 px-2 md:hidden">
          <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/50 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden py-2">
            <router-link 
              v-for="item in siteConfig.navItems" 
              :key="item.path" 
              :to="item.path" 
              class="block px-6 py-3 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
              :class="{ 'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/30': $route.path === item.path }"
              @click="isMenuOpen = false"
            >
              <span>{{ item.name }}</span>
              <ChevronRightIcon v-if="$route.path === item.path" class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import siteConfig from '../config/site.js';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Kawaii 模式检测
const isKawaiiPage = computed(() => route.path === '/kawaii');

// 滚动检测
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初始化检测
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 路由变化自动关闭菜单
watch(route, () => {
  isMenuOpen.value = false;
});
</script>

<style scoped>
/* 导航栏毛玻璃增强 */
nav {
  /* 确保在 Safari 上的毛玻璃效果 */
  -webkit-backdrop-filter: blur(20px);
}
</style> 