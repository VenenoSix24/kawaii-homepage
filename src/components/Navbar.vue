<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <div class="w-8 h-8 rounded-full overflow-hidden">
          <img :src="siteConfig.site.logo" :alt="siteConfig.site.title" class="w-full h-full object-cover" />
        </div>
        <span class="text-xl font-bold kawaii-gradient-text">{{ siteConfig.site.title }}</span>
      </router-link>
      
      <!-- 移动端菜单按钮 -->
      <button @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden p-2 rounded-full text-lg focus:outline-none text-gray-500 hover:bg-gray-100">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
      
      <!-- 桌面端导航链接 -->
      <div class="hidden md:flex items-center space-x-1">
        <router-link v-for="item in siteConfig.navItems" :key="item.path" :to="item.path" 
          class="nav-link transition-colors duration-300" 
          :class="[
            $route.path === item.path ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600',
            item.path === '/kawaii' && $route.path !== '/kawaii' ? 'kawaii-text' : '',
            item.path === '/kawaii' ? 'kawaii-nav-link' : ''
          ]">
          {{ item.name }}
        </router-link>
      </div>
    </nav>
    
    <!-- 移动端导航菜单 -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="container mx-auto px-4 py-2">
        <router-link v-for="item in siteConfig.navItems" :key="item.path" :to="item.path" 
          class="block py-3 border-b border-gray-100 transition-colors duration-300" 
          :class="[
            $route.path === item.path ? 'text-primary-500 font-medium' : 'text-gray-700',
            item.path === '/kawaii' && $route.path !== '/kawaii' ? 'kawaii-text' : '',
            item.path === '/kawaii' ? 'kawaii-nav-link' : ''
          ]"
          @click="isMenuOpen = false">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import siteConfig from '../config/site.js';

export default {
  name: 'Navbar',
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    
    // 检测是否是"总之就是非常可爱"页面
    const isKawaiiPage = computed(() => {
      return route.path === '/kawaii';
    });
    
    return {
      isMenuOpen,
      isKawaiiPage,
      siteConfig
    };
  },
  watch: {
    '$route'() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style>
.nav-link {
  @apply px-4 py-2 rounded-md;
}

/* 总之就是非常可爱文本样式 */
.kawaii-text {
  color: #ffb7c5 !important;
}

/* 渐变文本样式，用于kawaii页面的网站标题 */
.kawaii-gradient-text {
  background: linear-gradient(to right, #ffb7c5, #d8aef2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* 总之就是非常可爱导航链接特殊样式 */
.kawaii-nav-link {
  background: linear-gradient(to right, rgba(255, 183, 197, 0.1), rgba(216, 174, 242, 0.1));
  position: relative;
}

.kawaii-nav-link::after {
  content: '❤';
  position: absolute;
  top: -2px;
  right: -2px;
  font-size: 10px;
  color: #ffb7c5;
}

.kawaii-nav-link:hover {
  background: linear-gradient(to right, rgba(255, 183, 197, 0.2), rgba(216, 174, 242, 0.2));
  color: #ffb7c5 !important;
}

.nav-link:hover {
  color: #ffb7c5 !important;
}

.kawaii-nav-link.text-primary-600,
.kawaii-nav-link.text-primary-500 {
  background: linear-gradient(to right, rgba(255, 183, 197, 0.3), rgba(216, 174, 242, 0.3));
  color: #ff9eb2 !important;
}
</style> 