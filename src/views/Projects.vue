<template>
  <div>
    <section class="bg-gradient-to-br from-primary-100 to-secondary-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl" data-aos="fade-up">作品集</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {{ pageDescription }}
        </p>
      </div>
    </section>

    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        
        <div v-if="loading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          <p class="mt-4 text-gray-600">正在同步项目...</p>
        </div>

        <div v-else-if="error" class="text-center py-16">
          <i class="fas fa-exclamation-triangle text-5xl text-red-400 mb-4"></i>
          <p class="text-xl text-gray-500">项目加载失败</p>
          <p class="text-gray-400 mt-2">{{ error }}</p>
        </div>
        
        <div v-else-if="allProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="(project, index) in allProjects" :key="project.name" class="card group relative" data-aos="fade-up" :data-aos-delay="(index % 3) * 100">
            <div class="p-6 flex flex-col h-full">
              <div class="flex justify-between items-start mb-4">
                <div class="flex-grow">
                  <h3 class="text-xl font-bold text-gray-800 pr-4">
                    <i :class="project.isPinned ? 'fa-solid fa-thumbtack' : 'fa-brands fa-github'" class="mr-2 text-primary-500" :title="project.isPinned ? 'GitHub Pinned Project' : 'GitHub Project'"></i>
                    {{ project.name }}
                  </h3>
                </div>
                <div class="flex-shrink-0 flex items-center gap-4">
                  <span v-if="project.stars > 0" class="flex items-center text-sm text-yellow-500">
                    <i class="fas fa-star mr-1"></i>
                    {{ project.stars }}
                  </span>
                  <a v-if="project.demoUrl" :href="project.demoUrl" @click.stop target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-500 transition-colors" title="Live Demo">
                    <i class="fas fa-globe"></i>
                  </a>
                </div>
              </div>

              <p class="text-gray-600 mb-6 h-24 overflow-hidden flex-grow">{{ project.description }}</p>
              
              <div class="flex-shrink-0 mt-auto flex items-center justify-between text-xs text-gray-400">
                <div class="flex items-center gap-2">
                  <template v-if="project.language">
                      <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: project.language.color }"></span>
                      <span>{{ project.language.name }}</span>
                  </template>
                </div>
                <span v-if="project.updatedAt">Updated {{ formatRelativeTime(project.updatedAt) }}</span>
              </div>
            </div>
            <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="absolute inset-0" aria-label="View project on GitHub"></a>
          </div>

        </div>

        <div v-else class="text-center py-16">
            <i class="fas fa-box-open text-5xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500">暂无项目</p>
         </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import siteConfig from '../config/site.js';

// --- 配置区 ---
const { mode, customProjects } = siteConfig.projectsPage;
// 修正点：将 site-config 修改为 siteConfig
const GITHUB_USERNAME = siteConfig.site.githubUsername;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// --- 状态定义 ---
const allProjects = ref([]);
const loading = ref(true);
const error = ref(null);

// --- 动态计算属性 ---
const pageDescription = computed(() => {
    return mode === 'custom'
        ? '这里是我精心挑选的代表性项目。'
        : '这里自动同步展示了我在 GitHub 上固定的项目，并补充了一些其他作品。';
});

// --- GraphQL 查询 ---
const pinnedQuery = `query { user(login: "${GITHUB_USERNAME}") { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { name, description, url, stargazerCount, updatedAt, primaryLanguage { name, color } } } } } }`;
const repoQuery = (owner, name) => `query { repository(owner: "${owner}", name: "${name}") { name, description, url, stargazerCount, updatedAt, primaryLanguage { name, color } } }`;

// --- 核心逻辑 ---
async function fetchProjects() {
  if (!GITHUB_TOKEN) {
    error.value = "错误：未在 .env.local 文件中配置 VITE_GITHUB_TOKEN。";
    loading.value = false;
    return;
  }
  
  try {
    let fetchedProjects = [];

    if (mode === 'custom') {
        const customReposData = await Promise.all(
            customProjects.map(p => fetchSingleRepo(p.repo))
        );
        fetchedProjects = customReposData.filter(Boolean);

    } else {
        const [pinnedReposData, customReposData] = await Promise.all([
            fetchPinnedRepos(),
            Promise.all(customProjects.map(p => fetchSingleRepo(p.repo)))
        ]);
        
        const all = [...pinnedReposData, ...customReposData.filter(Boolean)];
        const uniqueProjects = Array.from(new Map(all.map(p => [p.name, p])).values());
        fetchedProjects = uniqueProjects;
    }
    
    allProjects.value = fetchedProjects.map(proj => ({
      name: proj.name,
      description: proj.description,
      stars: proj.stargazerCount,
      language: proj.primaryLanguage,
      updatedAt: proj.updatedAt,
      githubUrl: proj.url,
      demoUrl: customProjects.find(p => p.repo && p.repo.endsWith(`/${proj.name}`))?.demoUrl,
      isPinned: proj.isPinned || false,
    }));

  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

async function apiCall(query) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${GITHUB_TOKEN}` },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) throw new Error(`GitHub API 请求失败: ${response.status}`);
    const data = await response.json();
    if (data.errors) throw new Error(`GraphQL 错误: ${data.errors.map(e => e.message).join(', ')}`);
    return data.data;
}

async function fetchPinnedRepos() {
    const data = await apiCall(pinnedQuery);
    return data.user.pinnedItems.nodes.map(repo => ({ ...repo, isPinned: true }));
}

async function fetchSingleRepo(repoFullName) {
    if (!repoFullName) return null;
    const [owner, name] = repoFullName.split('/');
    if (!owner || !name) return null;
    const data = await apiCall(repoQuery(owner, name));
    return data.repository;
}

// --- 辅助函数 ---
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    const diffHours = Math.round(diffMinutes / 60);
    const diffDays = Math.round(diffHours / 24);

    if (diffSeconds < 60) return `just now`;
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

onMounted(fetchProjects);
</script>