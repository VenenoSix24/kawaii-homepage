<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto py-12 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 左侧 - 简介 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">{{ siteConfig.site.title }}</h3>
          <p class="mb-4">{{ siteConfig.site.description }}</p>
          <div class="flex space-x-3">
            <a v-for="social in siteConfig.socialLinks" :key="social.name" :href="social.url" target="_blank"
              rel="noopener noreferrer"
              class="social-icon bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- 中间 - 导航链接 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">导航</h3>
          <ul class="space-y-2">
            <li v-for="item in siteConfig.navItems" :key="item.path">
              <router-link :to="item.path" class="hover:text-primary-300 transition-colors">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 右侧 - 联系方式 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">联系方式</h3>
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <i class="fa-solid fa-envelope text-white"></i>
              <a :href="'mailto:' + siteConfig.site.email" class="hover:text-primary-300 transition-colors">
                {{ siteConfig.site.email }}
              </a>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fa-brands fa-qq text-white"></i>
              <a :href="'tencent://message/?uin=' + siteConfig.site.qq" class="hover:text-primary-300 transition-colors">
                {{ siteConfig.site.qq }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteConfig.site.title }}. 保留所有权利。</p>
        
        <!-- ICP备案信息 -->
        <div v-if="siteConfig.site.icp" class="mt-3 flex justify-center items-center">
          <a :href="siteConfig.site.icp.link" target="_blank" rel="noopener noreferrer" 
             class="flex items-center hover:text-primary-300 transition-colors">
            <img v-if="siteConfig.site.icp.showIcon" src="/images/icp-badge.png" alt="ICP备案" 
                 class="h-5 mr-2" />
            <span>{{ siteConfig.site.icp.number }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import siteConfig from '../config/site';

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
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.3s ease;
}
</style>