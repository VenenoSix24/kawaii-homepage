<template>
  <div>
    <section class="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl" data-aos="fade-up">作品集</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          这里自动同步展示了我在 GitHub 上固定的(Pinned)代表性项目。
        </p>
      </div>
    </section>

    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        
        <div v-if="loading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          <p class="mt-4 text-gray-600">正在从 GitHub 同步项目...</p>
        </div>

        <div v-else-if="error" class="text-center py-16">
          <i class="fas fa-exclamation-triangle text-5xl text-red-400 mb-4"></i>
          <p class="text-xl text-gray-500">项目同步失败</p>
          <p class="text-gray-400 mt-2">{{ error }}</p>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a v-for="(repo, index) in repos" :key="repo.id" :href="repo.url" target="_blank" rel="noopener noreferrer" class="card block" data-aos="fade-up" :data-aos-delay="(index % 3) * 100">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800 pr-4">
                  <i class="fas fa-book-bookmark mr-2 text-primary-500"></i>
                  {{ repo.name }}
                </h3>
                <span class="flex items-center text-sm text-yellow-500">
                  <i class="fas fa-star mr-1"></i>
                  {{ repo.stargazerCount }}
                </span>
              </div>
              <p class="text-gray-600 mb-6 h-24 overflow-hidden">{{ repo.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap items-center gap-2">
                  <template v-if="repo.primaryLanguage">
                    <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: repo.primaryLanguage.color }"></span>
                    <span class="text-sm text-gray-500">{{ repo.primaryLanguage.name }}</span>
                  </template>
                </div>
                <div class="text-xs text-gray-400">
                  Updated {{ formatRelativeTime(repo.updatedAt) }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import siteConfig from '../config/site.js';

const GITHUB_USERNAME = siteConfig.site.githubUsername;
// 从环境变量中安全地读取令牌
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const repos = ref([]);
const loading = ref(true);
const error = ref(null);

// 定义GraphQL查询语句
const query = `
query {
  user(login: "${GITHUB_USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
          updatedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
}
`;

// 获取GitHub数据
async function fetchPinnedRepos() {
  if (!GITHUB_TOKEN) {
    error.value = "错误：未在 .env.local 文件中配置 VITE_GITHUB_TOKEN。";
    loading.value = false;
    return;
  }
  
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API 请求失败: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
        throw new Error(`GraphQL 错误: ${data.errors.map(e => e.message).join(', ')}`);
    }

    repos.value = data.data.user.pinnedItems.nodes;
  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// 格式化相对时间
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    const diffHours = Math.round(diffMinutes / 60);
    const diffDays = Math.round(diffHours / 24);

    if (diffSeconds < 60) {
        return `just now`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hours ago`;
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        return `${Math.floor(diffDays / 7)} weeks ago`;
    } else if (diffDays < 365) {
        return `${Math.floor(diffDays / 30)} months ago`;
    } else {
        return `${Math.floor(diffDays / 365)} years ago`;
    }
}

onMounted(fetchPinnedRepos);
</script>