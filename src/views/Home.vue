<template>
  <div class="relative overflow-hidden w-full">
    <!-- 动态弥散背景 -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- 主色 Blob -->
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <!-- 粉色 Blob -->
      <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-kawaii-pink/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <!-- 蓝色 Blob -->
      <div class="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-kawaii-blue/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Hero Section (沉浸式全屏显示) -->
    <section class="relative z-10 min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <!-- 文字区域 -->
          <div class="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <!-- 单层简洁徽章 (保留) -->
            <div class="inline-flex items-center justify-center px-4 py-2 mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-white/40 dark:border-gray-700/50 shadow-sm">
              <SparklesIcon class="w-4 h-4 text-primary-500 mr-2" />
              <span class="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-wide uppercase">Welcome to my space</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              你好，我是 <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-kawaii-purple">VenenoSix24</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              欢迎到访，这里展示了我的项目、文章和兴趣爱好。
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <router-link to="/projects" class="btn btn-primary group shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300">
                <span>查看作品集</span>
                <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </router-link>
              <router-link to="/contact" class="btn bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-600 hover:border-primary-200 hover:text-primary-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                联系我
              </router-link>
              <router-link to="/kawaii" class="kawaii-btn group relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span class="relative z-10 flex items-center">
                  总之非常可爱
                  <HeartIcon class="w-5 h-5 ml-2 text-white animate-pulse" />
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-kawaii-pink to-kawaii-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </router-link>
            </div>
          </div>

          <!-- 头像区域 (还原上一版视觉元素) -->
          <div class="md:w-1/2 flex justify-center relative" data-aos="fade-left">
            <div class="relative w-64 h-64 md:w-80 md:h-80">
              <!-- 背景旋转装饰圈 -->
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-200/40 via-kawaii-purple/40 to-kawaii-pink/40 rounded-full animate-spin-slow opacity-60 blur-md scale-105"></div>
              <div class="absolute inset-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full"></div>
              
              <!-- 头像图片容器 -->
              <div class="absolute inset-3 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 group">
                <img src="../assets/images/avatar.jpeg" alt="VenenoSix24" class="w-full h-full object-cover transition-all duration-700" />
              </div>
              
              <!-- 悬浮装饰元素 (回归) -->
              <div class="absolute -top-6 -right-6 w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float z-20 border border-white/50 dark:border-gray-700">
                <span class="text-3xl">🚀</span>
              </div>
              <div class="absolute -bottom-4 -left-8 w-auto px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg animate-float animation-delay-2000 z-20 border border-white/50 dark:border-gray-700">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm font-bold text-gray-700 dark:text-gray-200">Open for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我 (恢复非对称美学布局) -->
    <section class="relative z-10 py-32 overflow-hidden bg-white/20 dark:bg-gray-900/10 backdrop-blur-sm border-y border-white/10 dark:border-gray-800/10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <!-- 左侧：宣言式区域 -->
          <div class="lg:w-3/5" data-aos="fade-up">
             <div class="flex items-center gap-3 mb-8">
               <span class="text-primary-600 dark:text-primary-400 font-black tracking-widest uppercase text-xs">About My Philosophy</span>
               <div class="w-12 h-px bg-primary-600/30"></div>
             </div>
             <p class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-12 tracking-tight">
                致力于将 <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-kawaii-pink">技术细节</span> 转化为 <br/> 
                令人感动的 <span class="underline decoration-kawaii-purple/30 decoration-8 underline-offset-8">交互体验</span>。
             </p>
             <div class="max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                我坚信优秀的软件不应只是冷冰冰的逻辑库，它应该具备某种“性格”。通过将 <span class="text-primary-600">Kawaii</span> 美学与工程实践结合，让技术变得触手可及且富有温度。
             </div>
          </div>

          <!-- 右侧：数字化卡片表现项 -->
          <div class="lg:w-2/5 w-full" data-aos="fade-left">
             <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-[3rem] p-10 border border-white/50 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
                <!-- 内部背景装饰 -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-kawaii-purple/10 rounded-full blur-2xl group-hover:bg-kawaii-purple/20 transition-colors"></div>
                
                <div class="space-y-8 relative z-10">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                      <span class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">01. Engineering</span>
                      <h4 class="text-xl font-bold text-gray-900 dark:text-white">前端 / 全栈开发</h4>
                    </div>
                    <CodeBracketIcon class="w-8 h-8 text-primary-500/30" />
                  </div>
                  <div class="w-full h-px bg-gray-100 dark:bg-gray-700"></div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                      <span class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">02. Aesthetics</span>
                      <h4 class="text-xl font-bold text-gray-900 dark:text-white">UI / 交互设计</h4>
                    </div>
                    <PaintBrushIcon class="w-8 h-8 text-kawaii-pink/30" />
                  </div>
                  <div class="w-full h-px bg-gray-100 dark:bg-gray-700"></div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                      <span class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">03. Performance</span>
                      <h4 class="text-xl font-bold text-gray-900 dark:text-white">极致性能优化</h4>
                    </div>
                    <BoltIcon class="w-8 h-8 text-kawaii-blue/30" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 精选项目 (Bento Grid) -->
    <section class="section relative z-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
           <div>
             <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
             <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">精选作品</h2>
           </div>
           <router-link to="/projects" class="btn btn-outline text-sm mt-4 md:mt-0">
             查看全部
             <ArrowLongRightIcon class="w-5 h-5 ml-2" />
           </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <!-- 主要大项目 -->
          <div class="md:col-span-2 md:row-span-2 group relative rounded-[2rem] overflow-hidden shadow-xl" data-aos="fade-up">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
             <!-- 这里可以放置模型图 -->
             <div class="absolute inset-0 opacity-70 bg-[url('@/assets/images/kawaii/scene2.avif')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            
             <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
             
             <div class="absolute bottom-0 left-0 p-10 w-full">
               <div class="flex justify-between items-end">
                 <div>
                    <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-4 border border-white/10"> Featured </span>
                    <h3 class="text-3xl font-bold text-white mb-2">{{ featuredProjects[0]?.name || 'Project Name' }}</h3>
                    <p class="text-gray-300 line-clamp-2 max-w-lg">{{ featuredProjects[0]?.description || 'Project description goes here.' }}</p>
                 </div>
                 <a :href="featuredProjects[0]?.github" target="_blank" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors shadow-lg">
                    <ArrowTopRightOnSquareIcon class="w-6 h-6" />
                 </a>
               </div>
             </div>
          </div>

          <!-- 次要项目 1 -->
          <div class="md:col-span-1 md:row-span-1 group relative rounded-[2rem] overflow-hidden shadow-lg bg-white dark:bg-gray-800" data-aos="fade-up" data-aos-delay="100">
             <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 transition-colors"></div>
             <div class="relative p-8 h-full flex flex-col justify-between">
                <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 dark:bg-primary-900/30">
                   <FolderIcon class="w-5 h-5" />
                </div>
                <div>
                   <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{{ featuredProjects[1]?.name }}</h3>
                   <p class="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">{{ featuredProjects[1]?.description }}</p>
                </div>
                <a :href="featuredProjects[1]?.github" target="_blank" class="absolute top-8 right-8 text-gray-300 hover:text-gray-900 transition-colors dark:hover:text-white">
                   <i class="fab fa-github text-2xl"></i>
                </a>
             </div>
          </div>

          <!-- 次要项目 2 -->
          <div class="md:col-span-1 md:row-span-1 group relative rounded-[2rem] overflow-hidden shadow-lg bg-white dark:bg-gray-800" data-aos="fade-up" data-aos-delay="200">
             <div class="absolute inset-0 bg-gradient-to-br from-pink-50 to-white dark:from-gray-700 dark:to-gray-800 transition-colors"></div>
             <div class="relative p-8 h-full flex flex-col justify-between">
                <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4 dark:bg-pink-900/30">
                   <FolderIcon class="w-5 h-5" />
                </div>
                 <div>
                   <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">{{ featuredProjects[2]?.name }}</h3>
                   <p class="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">{{ featuredProjects[2]?.description }}</p>
                </div>
                 <a :href="featuredProjects[2]?.github" target="_blank" class="absolute top-8 right-8 text-gray-300 hover:text-gray-900 transition-colors dark:hover:text-white">
                   <i class="fab fa-github text-2xl"></i>
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新文章 (Magazine Style) -->
    <section class="section relative z-10">
      <div class="container mx-auto px-4">
         <div class="text-center mb-16" data-aos="fade-up">
           <span class="text-kawaii-purple font-bold tracking-wider uppercase text-sm mb-2 block">Blog</span>
           <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">最新发布</h2>
           <div class="w-24 h-1.5 bg-gradient-to-r from-kawaii-purple to-kawaii-pink mx-auto mt-6 rounded-full"></div>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div v-for="(article, index) in latestArticles.slice(0, 2)" :key="index" class="group cursor-pointer" @click="$router.push(`/article/${article.id}`)" data-aos="fade-up" :data-aos-delay="index * 100">
               <!-- 文章封面区域 -->
               <div class="h-64 rounded-2xl bg-gray-100 overflow-hidden relative mb-6">
                  <!-- 封面图片 -->
                  <img 
                    :src="article.cover || '/src/assets/images/kawaii/scene1.avif'" 
                    :alt="article.title"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <!-- 遮罩渐变 (确保标题在图上清晰，虽然这里标题在下方，但为了风格统一) -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <div class="absolute top-4 left-4">
                     <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                       {{ article.category || 'Article' }}
                     </span>
                  </div>
               </div>
               
               <div class="flex items-center gap-4 text-sm text-gray-500 mb-3 dark:text-gray-400">
                  <span class="flex items-center"><CalendarIcon class="w-4 h-4 mr-1"/> {{ article.date }}</span>
                  <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span class="group-hover:text-primary-500 transition-colors">Read More</span>
               </div>
               
               <h3 class="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors dark:text-white">
                 {{ article.title }}
               </h3>
               <p class="text-gray-600 line-clamp-2 dark:text-gray-400">
                 {{ article.summary }}
               </p>
            </div>
         </div>
         
         <div class="mt-16 text-center">
            <router-link to="/articles" class="btn btn-primary px-10">
               浏览知识库
            </router-link>
         </div>
      </div>
    </section>

    <!-- 联系我 (Pro Interactive) -->
    <section class="section relative z-10 overflow-hidden">
       <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50 -z-10"></div>
       <div class="container mx-auto px-4 text-center">
          <div class="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-[3rem] shadow-2xl p-12 md:p-16 border border-white/50 relative overflow-hidden group dark:border-gray-700" data-aos="zoom-in">
             <!-- 背景装饰气泡 -->
             <div class="absolute top-0 right-0 w-64 h-64 bg-kawaii-pink/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-kawaii-pink/30 transition-colors duration-500"></div>
             <div class="absolute bottom-0 left-0 w-64 h-64 bg-kawaii-blue/20 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-kawaii-blue/30 transition-colors duration-500"></div>
             
             <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10 dark:text-white">准备好开始了吗？</h2>
             <p class="text-xl text-gray-600 mb-10 relative z-10 dark:text-gray-300">
               无论是项目合作还是技术交流，我随时准备着与您开启新的对话。
             </p>
             
             <div class="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                <a :href="'mailto:' + siteConfig.site.email" class="btn btn-primary text-lg px-8 shadow-xl shadow-primary-500/20">
                   <EnvelopeIcon class="w-6 h-6 mr-2" />
                   发邮件给我
                </a>
                <a :href="siteConfig.socialLinks[0].url" target="_blank" class="btn bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-lg px-8 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                   <ChatBubbleLeftRightIcon class="w-6 h-6 mr-2" />
                   社交媒体
                </a>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRightIcon, 
  ArrowLongRightIcon, 
  HeartIcon, 
  CodeBracketIcon, 
  PaintBrushIcon, 
  BoltIcon,
  FolderIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline';
// 为 Kawaii 按钮导入实心 HeartIcon
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid';

import siteConfig from '../config/site';

const featuredProjects = siteConfig.featuredProjects;
const latestArticles = siteConfig.latestArticles;
const socialLinks = siteConfig.socialLinks;
</script>

<style scoped>
/* 动画延迟类 */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 慢速旋转 */
.animate-spin-slow {
  animation: spin 15s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 确保 AOS 动画兼容 */
.section {
  @apply py-20 md:py-32;
}

/* Kawaii 按钮优化 */
.kawaii-btn {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300;
  background: linear-gradient(135deg, #ffb7c5, #d8aef2);
  color: #fff;
  box-shadow: 0 4px 15px rgba(255, 183, 197, 0.4);
  border: 2px solid transparent;
}

.kawaii-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 183, 197, 0.6);
}
</style>