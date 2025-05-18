<template>
  <div>
    <!-- Hero 部分 - 修改为铺满整个视口，内容位置调整 -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-start pt-24 md:pt-40">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <!-- 左侧文字部分 -->
          <div class="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              你好，我是 <span class="text-primary-600">VenenoSix24</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              欢迎来到我的个人网站，这里展示了我的项目、文章和兴趣爱好。
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/projects" class="btn btn-primary">
                查看作品集
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
              <router-link to="/contact" class="btn btn-outline">
                联系我
              </router-link>
              <router-link to="/kawaii" class="kawaii-btn">
                <span>总之就是非常可爱</span>
                <i class="fas fa-heart ml-2 animate-pulse"></i>
              </router-link>
            </div>
          </div>

          <!-- 右侧头像部分 -->
          <div class="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div class="relative">
              <div
                class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                <img src="../assets/images/avatar.jpeg" alt="VenenoSix24" class="w-full h-full object-cover" />
              </div>
              <!-- 装饰元素 -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-kawaii-pink rounded-full opacity-30 animate-pulse">
              </div>
              <div class="absolute -bottom-2 -left-6 w-16 h-16 bg-kawaii-blue rounded-full opacity-30 animate-pulse">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我部分 -->
    <section class="section bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <p class="text-lg text-gray-700 mb-6">
            我是一名热爱技术的开发者，喜欢探索新技术并分享知识。在这个网站上，你可以找到我的项目作品、技术文章以及我的兴趣爱好。
          </p>
          <p class="text-lg text-gray-700 mb-6">
            我对动漫《总之就是非常可爱》有着浓厚的兴趣，这部作品的可爱风格和温馨故事深深吸引了我。
          </p>
          <p class="text-lg text-gray-700">
            如果你有任何问题或合作意向，欢迎随时联系我！
          </p>
        </div>
      </div>
    </section>

    <!-- 精选项目部分 -->
    <section class="section bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">精选项目</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            这里展示了我的一些代表性项目，更多项目请访问我的GitHub或作品集页面。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" class="card" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-800">{{ project.name }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <a :href="project.github" target="_blank" rel="noopener noreferrer"
                class="text-primary-500 hover:text-primary-600 inline-flex items-center">
                <span>查看项目</span>
                <i class="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="text-center mt-12" data-aos="fade-up">
          <router-link to="/projects" class="btn btn-outline">
            查看全部项目
          </router-link>
        </div>
      </div>
    </section>

    <!-- 最新文章部分 -->
    <section class="section bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">最新文章</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="(article, index) in latestArticles" :key="index" class="card" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-800">{{ article.title }}</h3>
              <p class="text-gray-600 mb-4">{{ article.summary }}</p>
              <router-link :to="`/article/${article.id}`"
                class="text-primary-500 hover:text-primary-600 inline-flex items-center">
                <span>阅读全文</span>
                <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12" data-aos="fade-up">
          <router-link to="/articles" class="btn btn-outline">
            查看全部文章
          </router-link>
        </div>
      </div>
    </section>

    <!-- 联系方式部分 -->
    <section class="section bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">联系我</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            如果你有任何问题或合作意向，欢迎通过以下方式联系我。
          </p>
        </div>

        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 联系方式卡片 -->
          <div class="card p-8" data-aos="fade-up">
            <h3 class="text-xl font-bold mb-6 text-gray-800">联系方式</h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-4">
                  <i class="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-500">邮箱</p>
                  <a href="mailto:3405395460@qq.com" class="text-gray-800 hover:text-primary-500">
                    3405395460@qq.com
                  </a>
                </div>
              </li>
              <li class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-4">
                  <i class="fab fa-qq text-xl"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-500">QQ</p>
                  <a href="tencent://message/?uin=3405395460" class="text-gray-800 hover:text-primary-500">
                    3405395460
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <!-- 社交媒体卡片 -->
          <div class="card p-8" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-xl font-bold mb-6 text-gray-800">社交媒体</h3>
            <div class="grid grid-cols-3 gap-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-2">
                  <i :class="social.icon + ' text-xl'"></i>
                </div>
                <span class="text-sm text-gray-600">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import siteConfig from '../config/site';

export default {
  name: 'Home',
  setup() {
    return {
      featuredProjects: siteConfig.featuredProjects,
      latestArticles: siteConfig.latestArticles,
      socialLinks: siteConfig.socialLinks,
      siteConfig
    };
  }
}
</script>

<style scoped>
/* 暗色模式适配 */
:deep(.dark .card) {
  @apply bg-gray-800 hover:bg-gray-750 shadow-lg shadow-gray-900/10;
}

:deep(.dark .card h3) {
  @apply text-white;
}

:deep(.dark .card p) {
  @apply text-gray-300;
}

:deep(.dark .btn-outline) {
  @apply border-primary-400 text-primary-400 hover:bg-primary-500 hover:border-primary-500;
}

/* 总之就是非常可爱按钮样式 */
.kawaii-btn {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300;
  background: linear-gradient(to right, #ffb7c5, #d8aef2);
  color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(255, 183, 197, 0.5);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.kawaii-btn:hover {
  background: linear-gradient(to right, #ff9eb2, #c89ce0);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(255, 183, 197, 0.6);
}

.kawaii-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(255, 183, 197, 0.4);
}
</style>