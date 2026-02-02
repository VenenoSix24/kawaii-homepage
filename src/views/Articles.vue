<template>
  <div class="min-h-screen">
    <!-- Hero 区域 (与其他页面一致) -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 -z-20"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-blob -z-10"></div>
      <div class="absolute bottom-10 right-10 w-72 h-72 bg-kawaii-pink/20 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white" data-aos="zoom-in">
           <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-500 to-kawaii-pink">
             知识宝库
           </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
          记录学习过程中的点滴灵感，分享技术探索的乐趣与心得。
        </p>
      </div>
    </section>

    <!-- 筛选与搜索栏 (非 sticky，嵌入内容) -->
    <section class="pb-8">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 dark:border-gray-700 p-4">
          
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <!-- 分类 Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                class="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0"
                :class="activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'"
              >
                {{ category === 'all' ? '全部' : category }}
              </button>
            </div>

            <!-- 搜索框 -->
            <div class="relative w-full md:w-72 group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input 
                type="text" 
                v-model="searchQuery"
                class="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-transparent text-gray-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 dark:bg-gray-900 dark:text-white placeholder:text-gray-400"
                placeholder="搜索文章..."
              >
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- 文章列表内容 -->
    <section class="py-12 pb-24">
      <div class="container mx-auto px-4">
        
        <!-- 标签栏 -->
        <div v-if="tags.length > 0" class="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto" data-aos="fade-up">
            <span class="text-sm text-gray-400 mr-2 dark:text-gray-500">热门标签:</span>
            <button
                v-for="tag in tags"
                :key="tag"
                @click="selectTag(tag)"
                class="px-3 py-1 text-xs rounded-lg transition-all duration-300 border"
                :class="activeTag === tag
                    ? 'bg-secondary-50 border-secondary-200 text-secondary-600 font-bold dark:bg-secondary-900/30 dark:border-secondary-800 dark:text-secondary-400'
                    : 'bg-white/50 border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:text-gray-500 dark:hover:text-gray-300'"
            >
                #{{ tag }}
            </button>
        </div>

        <div class="max-w-5xl mx-auto min-h-[400px]">
          <!-- 加载中 -->
          <div v-if="loading" class="flex flex-col items-center justify-center py-20">
            <div class="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
            <p class="mt-4 text-gray-500 font-medium tracking-wide">加载灵感中...</p>
          </div>

          <!-- 文章列表 (横版布局) -->
          <div v-else-if="filteredArticles.length > 0" class="space-y-6">
            <article v-for="(article, index) in filteredArticles" :key="article.id || article.slug" 
              class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-white/50 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up" :data-aos-delay="index * 30">
              
              <!-- 左侧：封面区 -->
              <div class="md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 relative overflow-hidden flex-shrink-0">
                 <!-- 封面图片 -->
                 <img 
                   :src="article.cover || '/src/assets/images/kawaii/scene1.avif'" 
                   :alt="article.title"
                   class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 
                 <!-- 装饰性渐变遮罩 -->
                 <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                 <!-- 分类标签 -->
                 <div class="absolute top-4 left-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-primary-600 shadow-sm dark:bg-gray-800 dark:text-primary-400">
                       {{ article.category }}
                    </span>
                 </div>
              </div>

              <!-- 右侧：内容区 -->
              <div class="flex-grow p-6 md:p-8 flex flex-col justify-between">
                 <div>
                    <!-- 元信息 -->
                    <div class="flex items-center gap-3 text-xs text-gray-400 mb-3 dark:text-gray-500">
                       <span class="flex items-center">
                          <CalendarIcon class="w-3.5 h-3.5 mr-1" />
                          {{ formatDateShort(article.date) }}
                       </span>
                       <span class="w-1 h-1 bg-gray-300 rounded-full dark:bg-gray-600"></span>
                       <span>约 5 分钟阅读</span>
                    </div>

                    <h2 class="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-primary-600 transition-colors dark:text-white">
                      <router-link :to="`/article/${article.id || article.slug}`" class="block">
                        {{ article.title }}
                      </router-link>
                    </h2>

                    <p class="text-gray-500 mb-4 line-clamp-2 text-sm leading-relaxed dark:text-gray-400">
                      {{ article.summary }}
                    </p>
                 </div>

                 <!-- 底部：标签 & 阅读按钮 -->
                 <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div class="flex flex-wrap gap-2">
                       <span v-for="tag in article.tags.slice(0, 3)" :key="tag" 
                         class="text-xs px-2 py-1 bg-gray-50 text-gray-400 rounded-md dark:bg-gray-700 dark:text-gray-400">
                         #{{ tag }}
                       </span>
                    </div>
                    <router-link :to="`/article/${article.id || article.slug}`"
                      class="flex items-center text-sm font-bold text-primary-500 hover:text-primary-700 group-hover:translate-x-1 transition-all">
                       阅读全文
                       <ArrowRightIcon class="w-4 h-4 ml-1" />
                    </router-link>
                 </div>
              </div>
            </article>
          </div>

          <!-- 空状态 -->
          <div v-else class="text-center py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 dark:border-gray-700 mx-auto max-w-2xl">
            <div class="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-gray-700">
               <DocumentMagnifyingGlassIcon class="w-10 h-10 text-primary-300 dark:text-gray-400" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3 dark:text-white">未发现相关内容</h3>
            <p class="text-gray-500 mb-8 max-w-xs mx-auto dark:text-gray-400">
              找遍了整个知识库，没有符合条件的内容。换个关键词试试？
            </p>
            <button @click="resetFilters" class="btn btn-primary shadow-lg shadow-primary-500/20">
              重置筛选条件
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { 
  MagnifyingGlassIcon, 
  CalendarIcon, 
  FolderIcon, 
  ArrowRightIcon, 
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline';
import { getArticleList, formatDate } from '../utils/markdown';

// --- 状态 ---
const searchQuery = ref('');
const articleList = ref([]);
const loading = ref(true);
const activeCategory = ref('all');
const activeTag = ref(null);
const isSticky = ref(false);

// --- 滚动逻辑 ---
const handleScroll = () => {
  // 当滚动超过一定距离时，改变 sticky 栏的状态（例如缩小 padding 或增加阴影）
  isSticky.value = window.scrollY > 150;
};

// --- 获取数据 ---
const fetchArticles = async () => {
  loading.value = true;
  try {
    const { articleList: list } = await getArticleList();
    articleList.value = list.value;
  } catch (error) {
    console.error('加载文章列表失败:', error);
  } finally {
    loading.value = false;
  }
};

// --- 计算属性 ---
const categories = computed(() => {
  const allCategories = articleList.value.map(article => article.category);
  return ['all', ...new Set(allCategories)].filter(Boolean);
});

const tags = computed(() => {
  const allTags = articleList.value.flatMap(article => article.tags);
  return [...new Set(allTags)].filter(Boolean);
});

const filteredArticles = computed(() => {
  let articles = articleList.value;

  if (activeCategory.value !== 'all') {
    articles = articles.filter(article => article.category === activeCategory.value);
  }

  if (activeTag.value) {
    articles = articles.filter(article => article.tags && article.tags.includes(activeTag.value));
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    articles = articles.filter(article => {
      return article.title.toLowerCase().includes(query) ||
        (article.summary && article.summary.toLowerCase().includes(query));
    });
  }

  return articles;
});

// --- 操作 ---
const selectCategory = (category) => {
    activeCategory.value = category;
    activeTag.value = null;
    searchQuery.value = '';
};

const selectTag = (tag) => {
    if (activeTag.value === tag) {
        activeTag.value = null;
    } else {
        activeTag.value = tag;
        activeCategory.value = 'all';
        searchQuery.value = '';
    }
};

const resetFilters = () => {
  activeCategory.value = 'all';
  activeTag.value = null;
  searchQuery.value = '';
};

// --- 格式化工具 ---
const formatDateShort = (dateString) => {
  return formatDate(dateString).split(' ')[0]; // 理想情况下返回 YYYY-MM-DD
};

const getDay = (dateString) => {
  const date = new Date(dateString);
  return date.getDate().toString().padStart(2, '0');
};

const getMonth = (dateString) => {
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return months[date.getMonth()];
};

onMounted(() => {
  fetchArticles();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>