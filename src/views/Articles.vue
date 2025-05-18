<template>
  <div>
    <!-- 页面标题部分 -->
    <section class="bg-gradient-to-r from-secondary-50 to-secondary-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-up">文章</h1>
        <div class="w-20 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          这里是我撰写的技术文章和心得分享。涵盖了前端开发、后端技术、学习笔记等多个方面。
        </p>
      </div>
    </section>

    <!-- 文章搜索部分 -->
    <section class="bg-white py-8 border-b">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto">
          <div class="relative">
            <input type="text" v-model="searchQuery"
              class="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              placeholder="搜索文章...">
            <button class="absolute right-3 top-3 text-gray-400">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 文章列表部分 -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- 文章列表 -->
        <div class="max-w-4xl mx-auto">
          <div v-if="loading" class="text-center py-16">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500">
            </div>
            <p class="mt-4 text-gray-600">加载文章中...</p>
          </div>

          <div v-else-if="filteredArticles.length > 0">
            <div v-for="(article, index) in filteredArticles" :key="article.id || article.slug" class="card mb-8"
              data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="p-8">
                <div class="flex items-center mb-4 text-sm text-gray-500">
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
                  class="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-secondary-600 transition-colors">
                  <router-link :to="`/article/${article.id || article.slug}`">
                    {{ article.title }}
                  </router-link>
                </h2>

                <p class="text-gray-600 mb-6">{{ article.summary }}</p>

                <div class="flex justify-between items-center">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in article.tags" :key="tag"
                      class="px-2 py-1 bg-secondary-50 text-secondary-600 text-xs rounded">
                      {{ tag }}
                    </span>
                  </div>

                  <router-link :to="`/article/${article.id || article.slug}`"
                    class="btn btn-outline border-secondary-500 text-secondary-500 hover:bg-secondary-500 px-4 py-2">
                    阅读全文
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- 没有文章时显示 -->
          <div v-else class="text-center py-16">
            <i class="fas fa-file-alt text-5xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500" v-if="searchQuery">
              没有找到与 "{{ searchQuery }}" 相关的文章
            </p>
            <p class="text-xl text-gray-500" v-else>
              暂时没有文章
            </p>
            <button @click="searchQuery = ''" v-if="searchQuery" class="mt-4 btn btn-outline">
              查看全部文章
            </button>
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
    const articlesCache = ref({});
    const loading = ref(true);

    const fetchArticles = async () => {
      loading.value = true;
      try {
        const { articleList: list, articlesCache: cache } = await getArticleList();
        articleList.value = list.value;
        articlesCache.value = cache.value;
      } catch (error) {
        console.error('加载文章失败:', error);
      } finally {
        loading.value = false;
      }
    };

    const filteredArticles = computed(() => {
      if (!searchQuery.value) {
        return articleList.value;
      }

      const query = searchQuery.value.toLowerCase();
      return articleList.value.filter(article => {
        return article.title.toLowerCase().includes(query) ||
          (article.summary && article.summary.toLowerCase().includes(query)) ||
          (article.category && article.category.toLowerCase().includes(query)) ||
          (article.tags && article.tags.some(tag => tag.toLowerCase().includes(query)));
      });
    });

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
      formatArticleDate
    };
  }
}
</script>