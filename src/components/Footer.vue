<template>
  <footer class="footer-glass">
    <div class="container mx-auto py-12 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">{{ siteConfig.site.title }}</h3>
          <p class="mb-4 text-gray-600">{{ siteConfig.site.description }}</p>
          <div class="flex space-x-3">
            <a v-for="social in siteConfig.socialLinks" :key="social.name" :href="social.url" target="_blank"
              rel="noopener noreferrer" class="social-icon">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">导航</h3>
          <ul class="space-y-2">
            <li v-for="item in siteConfig.navItems" :key="item.path">
              <router-link :to="item.path" class="text-gray-600 hover:text-primary-500 transition-colors">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">联系方式</h3>
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <i class="fa-solid fa-envelope text-gray-500"></i>
              <a :href="'mailto:' + siteConfig.site.email" class="text-gray-600 hover:text-primary-500 transition-colors">
                {{ siteConfig.site.email }}
              </a>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fa-brands fa-qq text-gray-500"></i>
              <a :href="'tencent://message/?uin=' + siteConfig.site.qq" class="text-gray-600 hover:text-primary-500 transition-colors">
                {{ siteConfig.site.qq }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteConfig.site.title }}. 保留所有权利。</p>
        <div v-if="siteConfig.site.icp" class="mt-3 flex justify-center items-center">
          <a :href="siteConfig.site.icp.link" target="_blank" rel="noopener noreferrer" 
             class="flex items-center hover:text-primary-500 transition-colors">
            <img v-if="siteConfig.site.icp.showIcon" src="/images/icp-badge.png" alt="ICP备案" class="h-5 mr-2" />
            <span>{{ siteConfig.site.icp.number }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// ... (script 部分保持不变) ...
import siteConfig from '../config/site.js';

export default {
  name: 'Footer',
  setup() {
    return {
      siteConfig
    };
  }
}
</script>

<style scoped>
.footer-glass {
  background-color: rgba(255, 255, 255, 0.7); /* 半透明白色背景 */
  backdrop-filter: blur(12px); /* 毛玻璃模糊效果 */
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.2); /* 顶部细线，增加层次感 */
}

.social-icon {
  @apply w-9 h-9 rounded-full flex items-center justify-center text-gray-600 bg-gray-100/50 hover:bg-gray-200/70 hover:text-primary-500 transition-all duration-300;
}
</style>