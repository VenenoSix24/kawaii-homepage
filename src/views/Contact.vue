<template>
  <div class="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 dark:bg-primary-900/20"></div>
       <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-kawaii-pink/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 dark:bg-pink-900/20"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- 页面标题 -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight dark:text-white">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-kawaii-purple">与我联系</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
          期待收到来自你的讯息，就像星空期待着与司的每一次相遇。
        </p>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- 卡片 1: 直接联系 -->
        <div class="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 dark:bg-gray-800/80 dark:border-gray-700" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute -top-6 left-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-primary-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 transform group-hover:-translate-y-2 transition-transform duration-300">
              <EnvelopeOpenIcon class="w-8 h-8" />
            </div>
          </div>
          
          <div class="pt-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 dark:text-white">写一封信给我</h2>
            <p class="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              无论是项目合作、技术交流，或只是单纯地想打个招呼，都欢迎随时与我联系。
            </p>
            
            <div class="space-y-4">
              <a :href="'mailto:' + siteConfig.site.email" 
                class="flex items-center p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100 transition-all duration-300 group/item dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30">
                <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform dark:bg-blue-800 dark:text-blue-300">
                   <EnvelopeIcon class="w-5 h-5" />
                </div>
                <div>
                   <span class="block text-xs text-gray-500 uppercase font-bold tracking-wider dark:text-gray-400">Email</span>
                   <span class="text-gray-900 font-medium dark:text-gray-100">{{ siteConfig.site.email }}</span>
                </div>
                <ArrowRightIcon class="w-5 h-5 text-gray-400 ml-auto group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" />
              </a>

              <a :href="'tencent://message/?uin=' + siteConfig.site.qq" 
                class="flex items-center p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 transition-all duration-300 group/item dark:bg-gray-700/30 dark:border-gray-600 dark:hover:bg-gray-700/50">
                <div class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform dark:bg-gray-600 dark:text-gray-300">
                   <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5" />
                </div>
                <div>
                   <span class="block text-xs text-gray-500 uppercase font-bold tracking-wider dark:text-gray-400">QQ Chat</span>
                   <span class="text-gray-900 font-medium dark:text-gray-100">{{ siteConfig.site.qq }}</span>
                </div>
                <ArrowRightIcon class="w-5 h-5 text-gray-400 ml-auto group-hover/item:text-gray-600 group-hover/item:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        <!-- 卡片 2: 社交星球 -->
        <div class="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 dark:bg-gray-800/80 dark:border-gray-700" data-aos="fade-up" data-aos-delay="200">
          <div class="absolute -top-6 left-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 transform group-hover:-translate-y-2 transition-transform duration-300">
              <SparklesIcon class="w-8 h-8" />
            </div>
          </div>
          
          <div class="pt-8 h-full flex flex-col">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 dark:text-white">来我的星球做客</h2>
            <p class="text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              在这些小小的“星球”上，可以发现我的最新动态和作品，欢迎光临。
            </p>
            
            <div class="mt-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a v-for="social in siteConfig.socialLinks" :key="social.name" :href="social.url" target="_blank"
                class="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/icon dark:bg-gray-700/50 dark:border-gray-600 dark:hover:bg-gray-700">
                <i :class="[social.icon, 'text-2xl text-gray-400 mb-2 group-hover/icon:text-primary-500 transition-colors duration-300']"></i>
                <span class="text-xs font-medium text-gray-600 dark:text-gray-300">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeOpenIcon, EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import siteConfig from '../config/site.js';
</script>

<style scoped>
/* 可以在这里添加特定的 scope 样式，虽然 Tailwind 已经覆盖了大部分 */
</style>