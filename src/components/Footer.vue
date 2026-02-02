<template>
  <footer class="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm pt-20 pb-10 overflow-hidden">
    <!-- 顶部渐变过渡 -->
    <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/80 dark:to-gray-900/80 -translate-y-full pointer-events-none"></div>
    
    <!-- 装饰性背景元素 -->
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-50 rounded-full blur-3xl dark:bg-primary-900/20"></div>
      <div class="absolute top-1/2 -right-24 w-64 h-64 bg-kawaii-pink/30 rounded-full blur-3xl dark:bg-pink-900/20"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- 品牌栏 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-kawaii-purple">
              {{ siteConfig.site.title }}
            </span>
          </div>
          <p class="text-gray-700 font-medium leading-relaxed dark:text-gray-300">
            {{ siteConfig.site.description }}
          </p>
          <div class="flex gap-3 pt-2">
            <a v-for="social in siteConfig.socialLinks" :key="social.name" :href="social.url" target="_blank"
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-primary-500 dark:hover:text-white">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- 导航链接 -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-6 relative inline-block dark:text-white">
            快速导航
            <span class="absolute -bottom-2 left-0 w-8 h-1 bg-kawaii-pink rounded-full"></span>
          </h3>
          <ul class="space-y-3">
            <li v-for="item in siteConfig.navItems" :key="item.path">
              <router-link :to="item.path" 
                class="flex items-center text-gray-700 font-medium hover:text-primary-600 transition-colors group dark:text-gray-400 dark:hover:text-primary-400">
                <ChevronRightIcon class="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary-400 transition-colors dark:text-gray-600" />
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-6 relative inline-block dark:text-white">
            联系方式
            <span class="absolute -bottom-2 left-0 w-8 h-1 bg-kawaii-blue rounded-full"></span>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100/50 flex items-center justify-center text-primary-600 mt-1 mr-3 dark:bg-gray-800 dark:text-primary-400">
                <EnvelopeIcon class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email</span>
                <a :href="'mailto:' + siteConfig.site.email" class="text-gray-800 hover:text-primary-600 font-medium transition-colors dark:text-gray-300">
                  {{ siteConfig.site.email }}
                </a>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 mt-1 mr-3 dark:bg-gray-800 dark:text-primary-400">
                <ChatBubbleLeftRightIcon class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">QQ</span>
                <a :href="'tencent://message/?uin=' + siteConfig.site.qq" class="text-gray-700 hover:text-primary-600 transition-colors dark:text-gray-300">
                  {{ siteConfig.site.qq }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权区 -->
      <div class="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-800">
        <p class="text-sm text-gray-500 mb-4 md:mb-0 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} {{ siteConfig.site.title }} · Made with <HeartIcon class="w-4 h-4 inline text-red-400 animate-pulse" /> by VenenoSix24
        </p>
        
        <div v-if="siteConfig.site.icp" class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <a :href="siteConfig.site.icp.link" target="_blank" class="hover:text-primary-600 transition-colors flex items-center">
             <ShieldCheckIcon class="w-4 h-4 mr-1.5" />
             {{ siteConfig.site.icp.number }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ChevronRightIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
import siteConfig from '../config/site.js';
</script>