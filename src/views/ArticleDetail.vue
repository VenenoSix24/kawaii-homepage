<template>
  <div class="bg-white min-h-screen dark:bg-gray-900 transition-colors duration-300">
    <!-- 阅读进度条 -->
    <div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-kawaii-purple z-[60] transition-all duration-100" 
         :style="{ width: readingProgress + '%' }"></div>
         
    <div v-if="article" class="relative pt-32 pb-20">
      
      <!-- 文章头部背景 (可选) -->
      <div class="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50 to-transparent -z-10 dark:from-primary-900/10"></div>

      <div class="container mx-auto px-4 max-w-4xl">
        <!-- 导航面包屑 -->
        <div class="flex items-center gap-2 text-sm text-gray-500 mb-8 dark:text-gray-400" data-aos="fade-down">
           <router-link to="/articles" class="hover:text-primary-500 transition-colors">文章列表</router-link>
           <ChevronRightIcon class="w-3 h-3" />
           <span class="text-primary-500 font-medium">{{ article.category }}</span>
        </div>

        <!-- 标题区 -->
        <div class="text-center mb-12" data-aos="fade-up">
           <h1 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight dark:text-white">{{ article.title }}</h1>
           
           <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div class="flex items-center">
                 <CalendarIcon class="w-4 h-4 mr-2" />
                 {{ formatArticleDate(article.date) }}
              </div>
              <div class="flex items-center" v-if="article.author">
                 <UserCircleIcon class="w-4 h-4 mr-2" />
                 {{ article.author }}
              </div>
              <div class="flex items-center">
                 <TagIcon class="w-4 h-4 mr-2" />
                 <div class="flex gap-2">
                    <span v-for="tag in article.tags" :key="tag" class="hover:text-primary-500 transition-colors cursor-pointer">#{{ tag }}</span>
                 </div>
              </div>
           </div>
        </div>

        <!-- 文章内容容器 -->
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12 dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-delay="100">
          <div class="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary-600 prose-img:rounded-xl prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:text-gray-100" 
               v-html="renderedContent"></div>
        </div>

        <!-- 底部导航 -->
        <div class="border-t border-gray-200 pt-8 dark:border-gray-700">
          <div class="flex flex-col md:flex-row justify-between gap-4">
            <button v-if="prevArticle" @click="navigateToArticle(prevArticle.id || prevArticle.slug)"
              class="group flex items-center text-left p-4 rounded-xl hover:bg-gray-50 transition-colors dark:hover:bg-gray-800 w-full md:w-1/2">
              <ChevronLeftIcon class="w-6 h-6 text-gray-400 mr-4 group-hover:text-primary-500 transition-colors" />
              <div>
                 <span class="block text-xs text-gray-400 uppercase tracking-widest mb-1">上一篇</span>
                 <span class="block font-bold text-gray-700 group-hover:text-primary-600 transition-colors dark:text-gray-300 dark:group-hover:text-white line-clamp-1">{{ prevArticle.title }}</span>
              </div>
            </button>
            <div v-else class="hidden md:block w-1/2"></div> <!-- 占位 -->

            <button v-if="nextArticle" @click="navigateToArticle(nextArticle.id || nextArticle.slug)"
              class="group flex items-center justify-end text-right p-4 rounded-xl hover:bg-gray-50 transition-colors dark:hover:bg-gray-800 w-full md:w-1/2">
              <div>
                 <span class="block text-xs text-gray-400 uppercase tracking-widest mb-1">下一篇</span>
                 <span class="block font-bold text-gray-700 group-hover:text-primary-600 transition-colors dark:text-gray-300 dark:group-hover:text-white line-clamp-1">{{ nextArticle.title }}</span>
              </div>
              <ChevronRightIcon class="w-6 h-6 text-gray-400 ml-4 group-hover:text-primary-500 transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- 加载中状态 -->
    <div v-else class="min-h-screen flex flex-col items-center justify-center">
      <div class="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
      <p class="mt-4 text-gray-500 animate-pulse">正在加载文章...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  ChevronRightIcon, 
  ChevronLeftIcon, 
  CalendarIcon, 
  UserCircleIcon, 
  TagIcon 
} from '@heroicons/vue/24/outline';
import { getArticleList, getArticleBySlug, formatDate } from '../utils/markdown';

const route = useRoute();
const router = useRouter();
const article = ref(null);
const renderedContent = ref('');
const allArticlesList = ref([]); 
const currentIndex = ref(-1);
const readingProgress = ref(0);

const loadArticleData = async () => {
  article.value = null; 
  const slug = route.params.id;
  const foundArticle = await getArticleBySlug(slug);

  if (foundArticle) {
    article.value = foundArticle;
    renderedContent.value = foundArticle.renderedContent;
    currentIndex.value = allArticlesList.value.findIndex(a => a.slug === slug);
    // 重置进度条
    window.scrollTo(0, 0);
  } else {
    router.push('/articles');
  }
};

const prevArticle = computed(() => {
  if (currentIndex.value > 0) {
    return allArticlesList.value[currentIndex.value - 1];
  }
  return null;
});

const nextArticle = computed(() => {
  if (currentIndex.value > -1 && currentIndex.value < allArticlesList.value.length - 1) {
    return allArticlesList.value[currentIndex.value + 1];
  }
  return null;
});

const navigateToArticle = (slug) => {
  router.push(`/article/${slug}`);
};

const formatArticleDate = (dateString) => {
  return formatDate(dateString);
};

// 滚动监听器更新阅读进度
const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  readingProgress.value = Math.min(100, Math.max(0, progress));
};

watch(() => route.params.id, loadArticleData);

onMounted(async () => {
  window.addEventListener('scroll', updateProgress);
  const { articleList: list } = await getArticleList();
  allArticlesList.value = list.value;
  await loadArticleData();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress);
});
</script>

<style>
/* 定制 Prism 代码高亮样式 (如果使用了 Prism，这里作为补充) */
.prose pre {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 移动端优化 */
@media (max-width: 640px) {
  .prose {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>