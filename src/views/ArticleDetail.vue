<template>
  <div class="bg-gray-50 min-h-screen">
    <div v-if="article" class="container mx-auto px-4 py-12">
      <div class="max-w-5xl mx-auto">
        <!-- 文章头部 -->
        <div class="bg-white rounded-t-xl p-8 shadow-sm w-full" data-aos="fade-up">
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
            <span v-if="article.author" class="mx-3">•</span>
            <span v-if="article.author" class="flex items-center">
              <i class="far fa-user mr-2"></i>
              {{ article.author }}
            </span>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{{ article.title }}</h1>

          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tag in article.tags" :key="tag"
              class="px-2 py-1 bg-secondary-50 text-secondary-600 text-xs rounded">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- 文章内容 -->
        <div class="bg-white rounded-b-xl p-8 shadow-sm" data-aos="fade-up"
          data-aos-delay="100">
          <div class="prose prose-lg max-w-none" v-html="renderedContent"></div>
        </div>

        <!-- 导航按钮 -->
        <div class="mt-8 flex justify-between" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/articles" class="btn btn-outline">
            <i class="fas fa-arrow-left mr-2"></i>
            返回文章列表
          </router-link>

          <div class="flex space-x-4">
            <button v-if="prevArticle" @click="navigateToArticle(prevArticle.id || prevArticle.slug)"
              class="btn btn-outline">
              <i class="fas fa-chevron-left mr-2"></i>
              上一篇
            </button>
            <button v-if="nextArticle" @click="navigateToArticle(nextArticle.id || nextArticle.slug)"
              class="btn btn-outline">
              下一篇
              <i class="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载中状态 -->
    <div v-else class="container mx-auto px-4 py-24 text-center">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      <p class="mt-4 text-gray-600">加载文章中...</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getArticleList, getArticleBySlug, formatDate } from '../utils/markdown';

export default {
  name: 'ArticleDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const article = ref(null);
    const renderedContent = ref('');
    
    // 用于“上一篇/下一篇”导航
    const allArticlesList = ref([]); 
    const currentIndex = ref(-1);

    const loadArticleData = async () => {
      article.value = null; // 重置
      const slug = route.params.id;
      const foundArticle = await getArticleBySlug(slug);

      if (foundArticle) {
        article.value = foundArticle;
        renderedContent.value = foundArticle.renderedContent;
        
        // 更新当前文章在列表中的索引
        currentIndex.value = allArticlesList.value.findIndex(a => a.slug === slug);
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

    // 监听路由参数变化，重新加载文章
    watch(() => route.params.id, loadArticleData);

    onMounted(async () => {
      // 先加载完整的文章列表用于导航，但不显示
      const { articleList: list } = await getArticleList();
      allArticlesList.value = list.value;
      // 然后加载当前需要的文章详情
      await loadArticleData();
    });

    return {
      article,
      renderedContent,
      prevArticle,
      nextArticle,
      navigateToArticle,
      formatArticleDate
    };
  }
}
</script>

<style>
.prose {
  max-width: none !important;
  color: #374151;
  width: 100%;
}

.prose h1 {
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}

.prose h2 {
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose pre {
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  padding: 1em;
  overflow-x: auto;
}

.prose code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875em;
  color: #1f2937;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.prose table th {
  background-color: #f3f4f6;
  font-weight: 600;
  padding: 0.75em;
  text-align: left;
  border-bottom: 2px solid #e5e7eb;
}

.prose table td {
  padding: 0.75em;
  border-bottom: 1px solid #e5e7eb;
}

.prose table tr:nth-child(even) {
  background-color: #f9fafb;
}
</style>