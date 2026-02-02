<template>
  <div class="min-h-screen transition-colors duration-300 relative overflow-x-hidden">
    <!-- 固定背景层 - 全页面粉紫渐变+星尘纹理 -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 dark:opacity-10"></div>
      
      <!-- 持续漂浮的装饰元素 -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-kawaii-pink/20 rounded-full blur-2xl animate-blob"></div>
      <div class="absolute top-1/3 right-20 w-40 h-40 bg-kawaii-purple/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/4 w-48 h-48 bg-kawaii-blue/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
    </div>
    <!-- 页面标题部分 -->
    <section class="relative pt-32 pb-24 overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-lg border border-pink-200/50 dark:border-pink-800/50">
           <HeartIcon class="w-5 h-5 text-kawaii-pink mr-2 animate-pulse" />
           <span class="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-wide uppercase">The Kawaii Collection</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm dark:text-white">
          {{ siteConfig.kawaii.animeInfo.title }}
        </h1>
        <div class="w-24 h-1.5 bg-gradient-to-r from-kawaii-pink to-kawaii-purple mx-auto mb-8 rounded-full"></div>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
          这里是我对《总之就是非常可爱》的感想和收藏，分享这部温馨治愈的作品带给我的快乐。
        </p>
      </div>
    </section>
    
    <!-- 作品介绍 -->
    <section class="relative z-10 py-24 -mt-10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-[3rem] shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700 relative z-20" data-aos="fade-up">
          <div class="flex flex-col md:flex-row">
            <!-- 海报区域 -->
            <div class="md:w-2/5 relative min-h-[400px]">
              <div class="absolute inset-0 bg-gray-200">
                <img :src="siteConfig.kawaii.poster" :alt="siteConfig.kawaii.animeInfo.title" class="w-full h-full object-cover" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                 <div class="flex items-center gap-2 mb-2">
                   <div class="flex">
                     <StarIcon v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" />
                   </div>
                   <span class="font-bold">9.8</span>
                 </div>
                 <p class="text-sm opacity-90">Bilibili 评分</p>
              </div>
            </div>
            
            <!-- 信息区域 -->
            <div class="md:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white dark:bg-gray-800">
              <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">关于作品</h2>
              <div class="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                <span class="flex items-center"><LanguageIcon class="w-4 h-4 mr-1"/> {{ siteConfig.kawaii.animeInfo.titleEn }}</span>
                <span class="flex items-center"><CalendarIcon class="w-4 h-4 mr-1"/> {{ siteConfig.kawaii.animeInfo.releaseDate }}</span>
                <span class="flex items-center"><FilmIcon class="w-4 h-4 mr-1"/> {{ siteConfig.kawaii.animeInfo.episodes }}</span>
              </div>
              
              <p class="text-gray-600 mb-8 leading-loose text-lg dark:text-gray-300">
                {{ siteConfig.kawaii.animeInfo.description }}
              </p>
              
              <div class="flex flex-wrap gap-3 mb-10">
                <span v-for="tag in ['恋爱喜剧', '日常', '治愈']" :key="tag" 
                  class="px-4 py-1.5 rounded-full text-sm font-bold bg-pink-50 text-pink-500 border border-pink-100 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800">
                  # {{ tag }}
                </span>
              </div>
              
              <div>
                <a href="https://www.bilibili.com/bangumi/media/md28229676" target="_blank" 
                   class="inline-flex items-center px-8 py-4 rounded-2xl bg-[#FB7299] hover:bg-[#ff85a7] text-white font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                  <PlayCircleIcon class="w-6 h-6 mr-2 group-hover:animate-pulse" />
                  在哔哩哔哩观看
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 角色介绍 -->
    <section class="py-24 md:py-32 relative z-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">主要角色</h2>
          <div class="w-20 h-1.5 bg-kawaii-pink mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div v-for="(character, index) in siteConfig.kawaii.characters" :key="index" 
            class="group relative" data-aos="fade-up" :data-aos-delay="index * 100">
            
            <!-- 卡片背景装饰 -->
            <div class="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[2rem] shadow-xl border border-white/50 dark:border-gray-700 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"></div>
            
            <div class="relative p-6 flex flex-col items-center">
              <!-- 头像 -->
              <div class="w-40 h-40 mb-6 relative">
                 <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-kawaii-pink to-kawaii-purple animate-spin-slow opacity-70 blur-md"></div>
                 <div class="absolute inset-1 rounded-full overflow-hidden border-4 border-white shadow-inner bg-gray-100">
                    <img v-if="character.image" :src="character.image" :alt="character.name" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    <div v-else class="w-full h-full flex items-center justify-center bg-gray-100">
                      <UserIcon class="w-16 h-16 text-gray-300" />
                    </div>
                 </div>
              </div>
              
              <h3 class="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{{ character.name }}</h3>
              <p class="text-gray-600 text-center leading-relaxed dark:text-gray-400">{{ character.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 精彩场景 & 语录 (双列布局) -->
    <section class="py-24 md:py-32 relative z-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-16">
          
          <!-- 左侧：精彩场景 -->
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 flex items-center dark:text-white">
              <span class="w-2 h-8 bg-kawaii-blue rounded-full mr-4"></span>
              精彩场景
            </h2>
            <div class="grid grid-cols-2 gap-4">
               <div v-for="(scene, index) in siteConfig.kawaii.scenes.slice(0, 4)" :key="index" 
                  class="rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 group" data-aos="zoom-in" :data-aos-delay="index * 100">
                  <img :src="scene" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
               </div>
            </div>
          </div>
          
          <!-- 右侧：经典语录 -->
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold mb-8 text-gray-900 flex items-center dark:text-white">
              <span class="w-2 h-8 bg-kawaii-purple rounded-full mr-4"></span>
              经典语录
            </h2>
            <div class="space-y-6">
              <div v-for="(quote, index) in quotes" :key="index" 
                class="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-l-4 shadow-sm hover:shadow-lg transition-all border border-white/50 dark:border-gray-700"
                :class="getBorderClass(index)"
                data-aos="fade-left" :data-aos-delay="index * 100">
                <i class="fas fa-quote-left absolute top-4 left-4 text-2xl text-gray-200 dark:text-gray-700"></i>
                <p class="text-lg text-gray-700 font-medium mb-3 relative z-10 pl-6 dark:text-gray-300">
                  “{{ quote.text }}”
                </p>
                <div class="flex justify-end items-center gap-2">
                   <div class="w-6 h-px bg-gray-300"></div>
                   <p class="text-sm font-bold text-gray-500 uppercase tracking-wide dark:text-gray-400">{{ quote.character }}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- 个人感想 -->
    <section class="py-24 md:py-32 relative overflow-hidden z-10">
       <div class="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-white/80 dark:from-transparent dark:via-gray-800/30 dark:to-gray-900/80"></div>
       <div class="container mx-auto px-4 relative z-10">
         <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
           <div class="inline-block p-1 bg-white rounded-full shadow-lg mb-8 dark:bg-gray-700">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-kawaii-pink to-kawaii-purple flex items-center justify-center text-white">
                 <PencilIcon class="w-8 h-8" />
              </div>
           </div>
           <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">我的感想</h2>
           <div class="bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 shadow-xl border border-white/50 dark:bg-gray-800/80 dark:border-gray-700">
              <div class="space-y-6 text-lg text-gray-700 leading-relaxed font-serif text-justify md:text-center dark:text-gray-300">
                <p>
                  《总之就是非常可爱》是一部充满温暖和治愈力量的作品。故事中司和星空之间纯真的爱情，以及他们日常生活中的小确幸，总能让我会心一笑。
                </p>
                <p>
                  这部作品最吸引我的地方在于它展现了爱情最美好的一面：相互理解、支持和陪伴。司和星空虽然是突然结婚，但他们一起经历的每一个平凡日常都充满了幸福感。
                </p>
                <p>
                  总之，这是一部能让人感到幸福和治愈的作品，非常推荐给喜欢轻松温馨恋爱故事的朋友们！
                </p>
              </div>
              <div class="mt-10 pt-8 border-t border-gray-100 flex justify-center dark:border-gray-700">
                 <img src="../assets/images/avatar.jpeg" alt="VenenoSix24" class="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4" />
                 <div class="text-left">
                    <p class="font-bold text-gray-900 dark:text-white">VenenoSix24</p>
                    <p class="text-xs text-gray-500 uppercase tracking-widest">Site Author</p>
                 </div>
              </div>
           </div>
         </div>
       </div>
    </section>
  </div>
</template>

<script setup>
import { HeartIcon, StarIcon, LanguageIcon, CalendarIcon, FilmIcon, PlayCircleIcon, UserIcon, PencilIcon } from '@heroicons/vue/24/solid';
import siteConfig from '../config/site';

const quotes = [
  { text: '总之就是非常可爱！', character: '由崎星空' },
  { text: '我想成为你的妻子。', character: '由崎司' },
  { text: '无论发生什么，我都会一直在你身边。', character: '由崎司' },
  { text: '我们已经是夫妻了，所以这些都是理所当然的。', character: '由崎司' }
];

const getBorderClass = (index) => {
  const classes = [
    'border-pink-400',
    'border-purple-400',
    'border-blue-400',
    'border-green-400'
  ];
  return classes[index % classes.length];
};
</script>

<style scoped>
/* 慢速旋转 */
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}
.aspect-w-16 > * {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}
</style> 