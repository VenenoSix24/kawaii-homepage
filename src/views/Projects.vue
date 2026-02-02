<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- 头部区域 -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 left-10 w-32 h-32 bg-primary-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-kawaii-pink/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-kawaii-purple">作品集</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
           {{ pageDescription }}
        </p>
      </div>
    </section>

    <section class="pb-24">
      <div class="container mx-auto px-4">
        
        <!-- 加载状态 -->
        <div v-if="loading" class="flex flex-col items-center justify-center py-20">
          <div class="relative w-16 h-16">
            <div class="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p class="mt-6 text-gray-500 font-medium">正在同步 GitHub 仓库...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="text-center py-20 bg-white rounded-3xl shadow-sm border border-red-100 max-w-2xl mx-auto dark:bg-gray-800 dark:border-red-900/30" data-aos="zoom-in">
          <ExclamationTriangleIcon class="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2 dark:text-white">加载失败</h3>
          <p class="text-gray-500 mb-6">{{ error }}</p>
          <button @click="fetchProjects" class="px-6 py-2 bg-red-50 text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors dark:bg-red-900/20 dark:text-red-400">
            重试
          </button>
        </div>
        
        <!-- 项目列表 -->
        <div v-else-if="allProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="(project, index) in allProjects" :key="project.name" 
            class="group bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 dark:bg-gray-800"
            data-aos="fade-up" :data-aos-delay="(index % 3) * 100">
            <div class="bg-white rounded-[20px] p-7 h-full flex flex-col border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <!-- 头部：图标与名称 -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                   <div class="w-10 h-10 rounded-xl flex items-center justify-center" 
                    :class="project.isPinned ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20' : 'bg-gray-50 text-gray-600 dark:bg-gray-700/50 dark:text-gray-400'">
                     <BookmarkIcon v-if="project.isPinned" class="w-5 h-5" />
                     <CommandLineIcon v-else class="w-5 h-5" />
                   </div>
                   <h3 class="text-lg font-bold text-gray-900 line-clamp-1 dark:text-white" :title="project.name">{{ project.name }}</h3>
                </div>
                
                <div class="flex items-center gap-2">
                  <span v-if="project.stars > 0" class="flex items-center px-2 py-1 rounded-lg bg-yellow-50 text-yellow-600 text-xs font-bold dark:bg-yellow-900/20 dark:text-yellow-500">
                    <StarIcon class="w-3 h-3 mr-1" />
                    {{ project.stars }}
                  </span>
                </div>
              </div>

              <!-- 描述 -->
              <p class="text-gray-600 text-sm leading-relaxed mb-6 h-[4.5rem] line-clamp-3 dark:text-gray-400">
                {{ project.description || '暂无描述' }}
              </p>
              
              <!-- 底部信息 -->
              <div class="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between dark:border-gray-700/50">
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <template v-if="project.language">
                      <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: project.language.color }"></span>
                      <span>{{ project.language.name }}</span>
                  </template>
                </div>

                <div class="flex items-center gap-3">
                   <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="p-2 rounded-lg text-gray-400 hover:bg-primary-50 hover:text-primary-600 transition-colors dark:hover:bg-primary-900/20">
                     <GlobeAltIcon class="w-5 h-5" />
                   </a>
                   <a :href="project.githubUrl" target="_blank" class="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors dark:hover:bg-gray-700 dark:hover:text-white">
                     <i class="fab fa-github text-lg"></i>
                   </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-20">
           <div class="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-gray-800">
             <inbox-icon class="w-16 h-16 text-gray-300" />
           </div>
           <h3 class="text-xl font-bold text-gray-400">暂无项目</h3>
           <p class="text-gray-400 mt-2">GitHub 上似乎没有公开的项目。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { StarIcon, BookmarkIcon, CommandLineIcon, GlobeAltIcon, ExclamationTriangleIcon, InboxIcon } from '@heroicons/vue/24/outline';
import siteConfig from '../config/site.js';

// --- 配置区 ---
const { mode, customProjects } = siteConfig.projectsPage;
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
        : '这里自动同步展示了我在 GitHub 上固定的项目，以及其他精选作品。';
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
  
  loading.value = true;
  error.value = null;

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
    try {
      const data = await apiCall(pinnedQuery);
      return data.user.pinnedItems.nodes.map(repo => ({ ...repo, isPinned: true }));
    } catch (e) {
      console.warn("获取 Pinned 项目失败，可能用户未固定项目。", e);
      return [];
    }
}

async function fetchSingleRepo(repoFullName) {
    if (!repoFullName) return null;
    const [owner, name] = repoFullName.split('/');
    if (!owner || !name) return null;
    try {
        const data = await apiCall(repoQuery(owner, name));
        return data.repository;
    } catch (e) {
        console.warn(`获取项目 ${repoFullName} 失败`, e);
        return null;
    }
}

onMounted(fetchProjects);
</script>