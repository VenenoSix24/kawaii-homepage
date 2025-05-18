<template>
  <div>
    <!-- 页面标题部分 -->
    <section class="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-up">作品集</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          这里展示了我的各类技术项目，包括Web应用、小程序、工具库等。每个项目都附有简介和GitHub链接。
        </p>
      </div>
    </section>
    
    <!-- 筛选导航部分 -->
    <section class="bg-white py-8 border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" :key="category.value"
            @click="activeCategory = category.value"
            class="px-4 py-2 rounded-full text-sm transition-colors"
            :class="activeCategory === category.value 
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- 项目列表部分 -->
    <section class="section bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in filteredProjects" :key="index"
            class="card" data-aos="fade-up" :data-aos-delay="(index % 3) * 100">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img v-if="project.image" :src="project.image" :alt="project.name" class="w-full h-full object-cover">
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                <i class="fas fa-code text-5xl text-primary-500"></i>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800">{{ project.name }}</h3>
                <span class="px-2 py-1 text-xs rounded-full" 
                  :class="getCategoryClass(project.category)">
                  {{ getCategoryLabel(project.category) }}
                </span>
              </div>
              <p class="text-gray-600 mb-6">{{ project.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {{ tech }}
                  </span>
                </div>
                <a :href="project.github" target="_blank" rel="noopener noreferrer"
                  class="text-primary-500 hover:text-primary-600">
                  <i class="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 没有结果时显示 -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
          <p class="text-xl text-gray-500">没有找到相关项目</p>
          <button @click="activeCategory = 'all'" class="mt-4 btn btn-outline">
            查看全部项目
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import siteConfig from '../config/site';

export default {
  name: 'Projects',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { label: '全部', value: 'all' },
        { label: 'Web应用', value: 'web' },
        { label: '小程序', value: 'miniprogram' },
        { label: '工具库', value: 'library' },
        { label: '其他', value: 'other' }
      ],
      projects: siteConfig.projects
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeCategory === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeCategory);
    }
  },
  methods: {
    getCategoryLabel(value) {
      const category = this.categories.find(cat => cat.value === value);
      return category ? category.label : '其他';
    },
    getCategoryClass(category) {
      switch (category) {
        case 'web': return 'bg-primary-100 text-primary-700';
        case 'miniprogram': return 'bg-green-100 text-green-700';
        case 'library': return 'bg-blue-100 text-blue-700';
        case 'other': return 'bg-gray-100 text-gray-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    }
  }
}
</script> 