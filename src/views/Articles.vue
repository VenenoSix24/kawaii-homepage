<template>
  <div>
    <section class="bg-gradient-to-tl from-secondary-100 via-pink-50 to-primary-100 py-16 dark:bg-gradient-to-tl dark:from-secondary-900/70 dark:via-gray-900 dark:to-primary-900/70">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl" data-aos="fade-up">文章</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">
          这里是我撰写的技术文章和心得分享。涵盖了日常、学习笔记等多个方面。
        </p>
      </div>
    </section>

    <section class="py-8 sticky top-[65px] bg-white/80 backdrop-blur-sm z-40 border-b dark:bg-gray-900/80 dark:border-gray-800">
      <div class="container mx-auto px-4">
        
        <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 capitalize"
            :class="activeCategory === category
              /* 1. 将主题色从 secondary (紫色) 更换为 primary (蓝色)，解决选中后样式问题 */
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'"
          >
            {{ category === 'all' ? '全部' : category }}
          </button>
        </div>

        <div class="max-w-md mx-auto relative">
          <input type="text" v-model="searchQuery"
            class="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="搜索文章标题或摘要...">
          <button class="absolute right-3 top-3 text-gray-400">
            <i class="fas fa-search"></i>
          </button>
        </div>

      </div>
    </section>

    <section class="pt-12 pb-16 md:pb-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div v-if="tags.length > 0" class="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-3" data-aos="fade-up">
            <span
                v-for="tag in tags"
                :key="tag"
                @click="selectTag(tag)"
                class="px-3 py-1 text-xs rounded-full cursor-pointer transition-all duration-300"
                :class="activeTag === tag
                    ? 'bg-primary-500 text-white scale-110 shadow-lg'
                    : 'bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900/50 dark:text-primary-300 dark:hover:bg-primary-800/50'"
            >
                # {{ tag }}
            </span>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-if="loading" class="text-center py-16">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            <p class="mt-4 text-gray-600 dark:text-gray-400">加载文章中...</p>
          </div>

          <div v-else-if="filteredArticles.length > 0">
            <div v-for="(article, index) in filteredArticles" :key="article.id || article.slug" class="card mb-8"
              data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="p-8">
                <div class="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span class="flex items-center">
                    <i class="far fa-calendar-alt mr-2"></i>
                    {{ formatArticleDate(article.date) }}
                  </span>
                  <span class="mx-3">•</span>
                  <span class="flex items-center">
                    <i class="far fa-folder mr-2"></i>
                    {{ article.category }}
                  </span>
                </div>

                <h2
                  class="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-primary-600 transition-colors dark:text-gray-100 dark:hover:text-primary-400">
                  <router-link :to="`/article/${article.id || article.slug}`">
                    {{ article.title }}
                  </router-link>
                </h2>

                <p class="text-gray-600 mb-6 dark:text-gray-300">{{ article.summary }}</p>

                <div class="flex justify-between items-center">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in article.tags" :key="tag"
                      class="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded dark:bg-primary-900/50 dark:text-primary-300">
                      {{ tag }}
                    </span>
                  </div>

                  <router-link :to="`/article/${article.id || article.slug}`"
                    class="btn btn-outline border-primary-500 text-primary-500 hover:bg-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-500 px-4 py-2">
                    阅读全文
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-16">
            <i class="fas fa-file-alt text-5xl text-gray-300 mb-4 dark:text-gray-600"></i>
            <p class="text-xl text-gray-500 dark:text-gray-400">
              没有找到相关文章
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { getArticleList, formatDate } from '../utils/markdown';

export default {
  name: 'Articles',
  setup() {
    const searchQuery = ref('');
    const articleList = ref([]);
    const loading = ref(true);

    // --- 新增的状态 ---
    const activeCategory = ref('all'); // 当前选中的分类
    const activeTag = ref(null);      // 当前选中的标签

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

    // --- 新增的计算属性 ---
    // 从所有文章中自动计算出不重复的分类列表
    const categories = computed(() => {
      const allCategories = articleList.value.map(article => article.category);
      // 使用 Set 去重并转换为数组，然后在前面加上“全部”选项
      return ['all', ...new Set(allCategories)].filter(Boolean);
    });

    // 从所有文章中自动计算出不重复的标签列表
    const tags = computed(() => {
      const allTags = articleList.value.flatMap(article => article.tags);
      return [...new Set(allTags)].filter(Boolean);
    });


    // --- 升级后的过滤逻辑 ---
    const filteredArticles = computed(() => {
      let articles = articleList.value;

      // 1. 按分类过滤
      if (activeCategory.value !== 'all') {
        articles = articles.filter(article => article.category === activeCategory.value);
      }

      // 2. 按标签过滤
      if (activeTag.value) {
        articles = articles.filter(article => article.tags && article.tags.includes(activeTag.value));
      }
      
      // 3. 按搜索框内容过滤
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        articles = articles.filter(article => {
          return article.title.toLowerCase().includes(query) ||
            (article.summary && article.summary.toLowerCase().includes(query));
        });
      }

      return articles;
    });
    
    // --- 新增的点击事件处理函数 ---
    const selectCategory = (category) => {
        activeCategory.value = category;
        activeTag.value = null; // 选择分类时清空已选标签
        searchQuery.value = ''; // 选择分类时清空搜索框
    };

    const selectTag = (tag) => {
        // 如果再次点击同一个标签，则取消选择
        if (activeTag.value === tag) {
            activeTag.value = null;
        } else {
            activeTag.value = tag;
            activeCategory.value = 'all'; // 选择标签时，分类重置为“全部”
            searchQuery.value = ''; // 选择标签时清空搜索框
        }
    };


    const formatArticleDate = (dateString) => {
      return formatDate(dateString);
    };

    onMounted(() => {
      fetchArticles();
    });

    return {
      searchQuery,
      articleList,
      filteredArticles,
      loading,
      formatArticleDate,
      categories,
      tags,
      activeCategory,
      activeTag,
      selectCategory,
      selectTag,
    };
  }
}
</script>